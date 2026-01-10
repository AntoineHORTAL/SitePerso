const mongoose = require('mongoose');

const ProgressionSchema = new mongoose.Schema({    
    Progression: {
        Id: Int32Array,
        IdProfil: Int32Array,
        Operateur: {
            "K'tharr": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Causticon": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Genitrix": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Necrosia": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Phylactère": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Skarr-Lyk": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Vaz-Thun": {
                Niveau: Int32Array,
                Progression: Int32Array,
            }
        },
        Alien: {
            "Droniste": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Eclaireur_canin": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Eclaireur_cyber-sensoriel": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Capitaine_Spatial": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Capitaine_Des_Forces_Speciales": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Artificier": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Berserker": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Commando_Furtif": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Medecin_De_Campagne": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Nano_Medecin": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Technicien_De_Lespace": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Sentinelle_De_Defense": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Sentinelle_De_Controle_Dacces": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Sentinelle_De_Surveillance": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Le_Saboteur": {
                Niveau: Int32Array,
                Progression: Int32Array,
            },
            "Le_Spectre": {
                Niveau: Int32Array,
                Progression: Int32Array,
            }
        }
    }
});

module.exports = mongoose.model('Progression', ProgressionSchema);