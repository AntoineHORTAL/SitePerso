const express = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');

const router = express.Router();


//Récupère tous les Users de la base de données
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur récupération' });
    }
});


// POST - Inscription (créer un user)
router.post('/', async (req, res) => {
    try {
        const { Identifiant, MotDePasse } = req.body.User;

        // Récupérer le prochain Id
        const lastUser = await User.findOne({})
            .sort({ 'User.Id': -1 })
            .select('User.Id')
            .lean();

        const nextId = lastUser ? lastUser.User.Id + 1 : 1;

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(MotDePasse, 10);

        // Créer et sauvegarder
        const nouvelUser = new User({
            User: {
                Id: nextId,
                Identifiant,
                MotDePasse: hashedPassword
            }
        });

        await nouvelUser.save();

        res.status(201).json({
            message: 'User enregistré avec succès !',
            user: {
                Id: nextId
            }
        });
    }
    catch (error) {
        console.error('Erreur lors de l\'inscription :', error);

        // Pour t'aider à déboguer, on renvoie plus d'infos
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Cet identifiant existe déjà.' });
        }

        res.status(500).json({
            message: 'Erreur lors de l\'enregistrement',
            details: error.message
        });
    }
});


// POST - Login
router.post('/login', async (req, res) => {
    try {
        const { Identifiant, MotDePasse } = req.body.User;

        const user = await User.findOne({ 'User.Identifiant': Identifiant });
        if (!user) {
            return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
        }

        const isMatch = await bcrypt.compare(MotDePasse, user.User.MotDePasse);
        if (!isMatch) {
            return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
        }

        // Renvoie les données avec les mêmes majuscules que dans la base
        res.json({
            message: 'Connexion réussie !',
            user: {
                Id: user.User.Id,                  
                Identifiant: user.User.Identifiant 
            }
        });

    } catch (error) {
        console.error('Erreur login :', error);
        res.status(500).json({ message: 'Erreur serveur lors de la connexion' });
    }
});

module.exports = router;