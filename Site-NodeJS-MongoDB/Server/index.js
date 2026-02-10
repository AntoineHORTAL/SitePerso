require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./Route/userRoute');
const profilRoutes = require('./Route/profilRoute');
const progressionRoutes = require('./Route/progressionRoute');
const personnageRoute_WrathAdngGlory = require('./Route/WrathAndGlory/personnageRoute');

mongoose.set('strictQuery', true);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

// Connexion à MongoDB
mongoose.connect(URI)
    .then(() => console.log('✅ Connecté à MongoDB via Mongoose !'))
    .catch(err => {
        console.error('❌ Erreur connexion Mongoose :', err);
        process.exit(1);
    });

// Routes
app.get('/', (req, res) => res.send('API opérationnelle.'));

app.use('/API/API_User', userRoutes);     
app.use('/API/API_Profil', profilRoutes);
app.use('/API/API_Progression', progressionRoutes);
app.use('/API/API_Personnages_WrathAndGlory', personnageRoute_WrathAdngGlory);


app.listen(PORT, () => {
    const mode = process.env.NODE_ENV === 'production' ? 'Production' : 'Local';
    const host = process.env.NODE_ENV === 'production'
        ? 'https://site-perso-jdr.onrender.com'
        : `http://localhost:${PORT}`;

    console.log(`🚀 [${mode}] Serveur lancé sur ${host}`);
});