const mongoose = require('mongoose');

const ProgressionSchema = new mongoose.Schema({
    Progression: {
        Id: { type: Number, required: true, unique: true },
        IdProfil: { type: Number, required: true, unique: true },
        Operateur: {
            "K'tharr": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Causticon": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Genitrix": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Necrosia": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Phylactère": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Skarr-Lyk": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Vaz-Thun": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            }
        },
        Alien: {
            "Droniste": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Eclaireur_canin": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Eclaireur_cyber-sensoriel": {
                Niveau: { type: Number, default: 1 },
               Progression: { type: Number, default: 0 },
            },
            "Capitaine_Spatial": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Capitaine_Des_Forces_Speciales": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Artificier": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Berserker": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Commando_Furtif": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Medecin_De_Campagne": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Nano_Medecin": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Technicien_De_Lespace": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Sentinelle_De_Defense": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Sentinelle_De_Controle_Dacces": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Sentinelle_De_Surveillance": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Le_Saboteur": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            },
            "Le_Spectre": {
                Niveau: { type: Number, default: 1 },
                Progression: { type: Number, default: 0 },
            }
        }
    }
}, {
    collection: 'Progression'
});

module.exports = mongoose.model('Progression', ProgressionSchema);