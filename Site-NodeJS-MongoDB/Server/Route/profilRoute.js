const express = require('express');
const User = require('../Models/User');
const Profil = require('../Models/Profil');

const router = express.Router();

//Récupère tous les Profils d'un User de la base de données
router.get('/user/:idUser', async (req, res) => {
    try {
        const idUser = Number(req.params.idUser);  // Convertir en nombre

        const profils = await Profil.find({ 'Profil.IdUser': idUser })
            .sort({ 'Profil.Id': 1 });  // Optionnel : trie par Id du profil croissant

        res.json(profils);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des profils de l\'utilisateur' });
    }
});

//Récupère un Profil via son Id
router.get('/:idProfil', async (req, res) => {
    try {
        const idProfil = Number(req.params.idProfil);

        const profil = await Profil.findOne({ 'Profil.Id': idProfil });

        if (!profil) {
            return res.status(404).json({ message: 'Profil non trouvé' });
        }

        res.json(profil);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du profil' });
    }
});

// Créer un nouveau Profil
router.post('/', async (req, res) => {
    let nextId; // ✅ Déclarer en dehors du try

    try {
        const { NomProfil, IdUser } = req.body.Profil;

        // Validation
        if (!NomProfil || !IdUser) {
            return res.status(400).json({
                message: 'NomProfil et IdUser sont requis'
            });
        }

        // Récupérer le prochain Id
        const lastProfil = await Profil.findOne({})
            .sort({ 'Profil.Id': -1 })
            .select('Profil.Id')
            .lean();

        nextId = lastProfil && lastProfil.Profil ? lastProfil.Profil.Id + 1 : 1;

        // Créer et sauvegarder
        const nouveauProfil = new Profil({
            Profil: {
                Id: nextId,
                NomProfil: NomProfil.trim(),
                IdUser: Number(IdUser)
            }
        });

        await nouveauProfil.save();

        res.status(201).json({
            message: 'Profil enregistré avec succès !',
            profil: {
                idProfil: nextId,
                nomProfil: NomProfil.trim()
            }
        });

    } catch (error) {

        res.status(500).json({
            message: 'Erreur lors de l\'enregistrement',
            details: error.message,
            profil: nextId ? { Id: nextId } : null
        });
    }
});

// Supprimer un profil par son Id personnalisé (Profil.Id)
router.delete('/:idProfil', async (req, res) => {
    try {
        const idProfil = Number(req.params.idProfil);

        const profilSupprime = await Profil.findOneAndDelete({
            'Profil.Id': idProfil
        });

        if (!profilSupprime) {
            return res.status(404).json({ message: 'Profil non trouvé' });
        }

        res.json({ message: 'Profil supprimé avec succès' });
    } catch (error) {
        console.error('Erreur suppression profil :', error);
        res.status(500).json({
            message: 'Erreur lors de la suppression',
            details: error.message
        });
    }
});

//modification du nom d'un profil
router.patch('/:idProfil', async (req, res) => {
    try {
        const idProfil = Number(req.params.idProfil);
        const { NomProfil } = req.body;

        if (!NomProfil || NomProfil.trim() === '') {
            return res.status(400).json({ message: 'Le nom du profil est requis' });
        }

        const profilMisAJour = await Profil.findOneAndUpdate(
            { 'Profil.Id': idProfil },
            { $set: { 'Profil.NomProfil': NomProfil.trim() } },
            { new: true, runValidators: true }
        );

        if (!profilMisAJour) {
            return res.status(404).json({ message: 'Profil non trouvé' });
        }

        res.json({
            message: 'Nom du profil mis à jour avec succès !',
            profil: profilMisAJour
        });
    } catch (error) {
        console.error('Erreur modification profil :', error);
        res.status(500).json({
            message: 'Erreur lors de la modification',
            details: error.message
        });
    }
});


module.exports = router;