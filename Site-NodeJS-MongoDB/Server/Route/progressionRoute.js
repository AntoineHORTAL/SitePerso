const express = require('express');
const Progression = require('../Models/Progression');
const router = express.Router();

// GET - Récupérer la progression d'un profil
router.get('/:idProfil', async (req, res) => {
    try {
        const IdProfil = Number(req.params.idProfil);

        const progression = await Progression.findOne({ 'Progression.IdProfil': IdProfil });

        if (!progression) {
            return res.status(404).json({ message: 'Progression non trouvée pour cet utilisateur' });
        }

        res.json(progression);
    } catch (error) {
        console.error('Erreur récupération progression :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// POST - Créer une nouvelle progression
router.post('/', async (req, res) => {
    try {

        const { IdProfil } = req.body.Progression;

        if (!IdProfil) {
            return res.status(400).json({ message: 'IdProfil est requis' });
        }

        // Vérifier si une progression existe déjà
        const existing = await Progression.findOne({
            'Progression.IdProfil': Number(IdProfil)
        });

        if (existing) {
            return res.status(400).json({
                message: 'Une progression existe déjà pour ce profil'
            });
        }

        const lastProgression = await Progression.findOne({})
            .sort({ 'Progression.Id': -1 })
            .select('Progression.Id')
            .lean();

        nextId = lastProgression && lastProgression.Progression ? lastProgression.Progression.Id + 1 : 1;

        // Création avec valeurs par défaut
        const nouvelleProgression = new Progression({
            Progression: {
                Id: nextId,
                IdProfil: Number(IdProfil),
                Alien: {
                    "K'tharr": { Niveau: 1, Progression: 0 },
                    "Causticon": { Niveau: 1, Progression: 0 },
                    "Genitrix": { Niveau: 1, Progression: 0 },
                    "Necrosia": { Niveau: 1, Progression: 0 },
                    "Phylactère": { Niveau: 1, Progression: 0 },
                    "Skarr-Lyk": { Niveau: 1, Progression: 0 },
                    "Vaz-Thun": { Niveau: 1, Progression: 0 }
                },
                Operateur: {
                    "Droniste": { Niveau: 1, Progression: 0 },
                    "Eclaireur_canin": { Niveau: 1, Progression: 0 },
                    "Eclaireur_cyber-sensoriel": { Niveau: 1, Progression: 0 },
                    "Capitaine_Spatial": { Niveau: 1, Progression: 0 },
                    "Capitaine_Des_Forces_Speciales": { Niveau: 1, Progression: 0 },
                    "Artificier": { Niveau: 1, Progression: 0 },
                    "Berserker": { Niveau: 1, Progression: 0 },
                    "Commando_Furtif": { Niveau: 1, Progression: 0 },
                    "Medecin_De_Campagne": { Niveau: 1, Progression: 0 },
                    "Nano_Medecin": { Niveau: 1, Progression: 0 },
                    "Technicien_De_Lespace": { Niveau: 1, Progression: 0 },
                    "Sentinelle_De_Defense": { Niveau: 1, Progression: 0 },
                    "Sentinelle_De_Controle_Dacces": { Niveau: 1, Progression: 0 },
                    "Sentinelle_De_Surveillance": { Niveau: 1, Progression: 0 },
                    "Le_Saboteur": { Niveau: 1, Progression: 0 },
                    "Le_Spectre": { Niveau: 1, Progression: 0 }
                }
            }
        });

        await nouvelleProgression.save();


        res.status(201).json({
            message: 'Progression créée avec succès !',
            progression: nouvelleProgression
        });

    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la création',
            details: error.message
        });
    }
});

// PATCH - Mettre à jour une progression spécifique (ex: niveau ou progression d'un opérateur)
router.patch('/Profil/:idProfil', async (req, res) => {
    try {
        const IdProfil = Number(req.params.IdProfil);
        const updates = req.body;

        const updated = await Progression.findOneAndUpdate(
            { 'Progression.IdProfil': IdProfil },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Progression non trouvée' });
        }

        res.json({
            message: 'Progression mise à jour avec succès',
            progression: updated
        });
    } catch (error) {
        console.error('Erreur mise à jour progression :', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour' });
    }
});

// DELETE - Supprimer une progression par son IdProfil
router.delete('/:idProfil', async (req, res) => {
    try {
        const idProfil = Number(req.params.idProfil);

        const progressionSupprime = await Progression.findOneAndDelete({
            'Progression.IdProfil': idProfil
        });

        if (!progressionSupprime) {
            return res.status(404).json({ message: 'Progression non trouvé' });
        }

        res.json({ message: 'Progression supprimé avec succès' });
    } catch (error) {
        console.error('Erreur suppression progression :', error);
        res.status(500).json({
            message: 'Erreur lors de la suppression',
            details: error.message
        });
    }
});


module.exports = router;