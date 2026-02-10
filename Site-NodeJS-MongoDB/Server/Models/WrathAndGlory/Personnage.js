const mongoose = require('mongoose');

const armeSchema = new mongoose.Schema({
    Id: { type: Number, default: 0 },
    Nom: { type: String, default: "" },
    Dégâts: { type: String, default: "" },
    DS: { type: String, default: "" },
    PA: { type: String, default: "" },
    Portée: { type: String, default: "" },
    Rafale: { type: String, default: "" },
    Traits: { type: String, default: "" },
    Valeur: { type: String, default: "" },
    Rareté: { type: String, default: "" },
    MotsClés: { type: String, default: "" }
});

const talentSchema = new mongoose.Schema({
    Id: { type: Number, default: 0 },
    Nom: { type: String, default: "" },
    CoûtPX: { type: Number, default: 0 },
    Prérequis: { type: String, default: "" },
    Effet: { type: String, default: "" }
});

const pouvoirsPsychiquesSchema = new mongoose.Schema({
    Id: { type: Number, default: 0 },
    Nom: { type: String, default: "" },
    SD: { type: String, default: "" },
    Activation: { type: String, default: "" },
    Durée: { type: String, default: "" },
    Portée: { type: String, default: "" },
    CiblesMultiples: { type: String, default: "" },
    Effet: { type: String, default: "" }
});

const armureSchema = new mongoose.Schema({
    Id: { type: Number, default: 0 },
    Nom: { type: String, default: "" },
    Ar: { type: String, default: "" },
    Traits: { type: String, default: "" },
    Valeur: { type: String, default: "" },
    Rareté: { type: String, default: "" },
    MotsClés: { type: String, default: "" }
});

const personnageSchema = new mongoose.Schema({
    Personnages_WrathAndGlory: {
        /* INFOS PRINCIPALES */
        Id: { type: Number, required: true, unique: true }, 
        IdUser: { type: Number, required: true },       
        Nom: { type: String, required: true },       
        Tier: { type: Number, default: 1 },
        Rang: { type: Number, default: 1 },
        Espèce: { type: String, default: "" },
        Faction: { type: String, default: "" },
        SousFaction: { type: String, default: "" },
        MotsClés: { type: String, default: "" },
        Historique: { type: String, default: "" },
        PXRestant: { type: Number, default: 0 },
        PXTotal: { type: Number, default: 0 },

        /* ATTRIBUTS */
        Force: { type: Number, default: 0 },
        BonusForce: { type: Number, default: 0 },
        Endurance: { type: Number, default: 0 },
        BonusEndurance: { type: Number, default: 0 },
        Agilité: { type: Number, default: 0 },
        BonusAgilité: { type: Number, default: 0 },
        Initiative: { type: Number, default: 0 },
        BonusInitiative: { type: Number, default: 0 },
        ForceMentale: { type: Number, default: 0 },
        BonusForceMentale: { type: Number, default: 0 },
        Intelligence: { type: Number, default: 0 },
        BonusIntelligence: { type: Number, default: 0 },
        Sociabilité: { type: Number, default: 0 },
        BonusSociabilité: { type: Number, default: 0 },

        /* COMPÉTENCES */
        Athlétisme: { type: Number, default: 0 },
        CapacitéCombat: { type: Number, default: 0 },
        CapacitéTir: { type: Number, default: 0 },
        Commandemant: { type: Number, default: 0 },
        Connaissance: { type: Number, default: 0 },
        Duperie: { type: Number, default: 0 },
        Furtivité: { type: Number, default: 0 },
        Intimidation: { type: Number, default: 0 },
        Investigation: { type: Number, default: 0 },
        MaîtrisePsychique: { type: Number, default: 0 },
        Medicae: { type: Number, default: 0 },
        Persuasion: { type: Number, default: 0 },
        Pilotage: { type: Number, default: 0 },
        Psychologie: { type: Number, default: 0 },
        Ruse: { type: Number, default: 0 },
        Survie: { type: Number, default: 0 },
        Technomaîtrise: { type: Number, default: 0 },
        Vigilance: { type: Number, default: 0 },

        Bléssures: { type: String, default: "" },
        Stress: { type: String, default: "" },
        Aptitudes: { type: String, default: "" },
        Equipement: { type: String, default: "" },
        Richesse: { type: Number, default: 0 },

        Talents: { type: [talentSchema], default: [] },
        PouvoirsPsychiques: { type: [pouvoirsPsychiquesSchema], default: [] },
        Armes: { type: [armeSchema], default: [] },
        Armures: { type: [armureSchema], default: [] },

        BlessuresGraves1: { type: String, default: "" },
        BlessuresGraves2: { type: String, default: "" },
        BlessuresGraves3: { type: String, default: "" },
        BlessuresGraves4: { type: String, default: "" },
        BlessuresGraves5: { type: String, default: "" },
        BlessuresGraves6: { type: String, default: "" },
        BlessuresGuerre: { type: String, default: "" },
        Mutations: { type: String, default: "" },
        corruption: {
            type: [[Boolean]],
            default: [
                [false, false, false, false, false, false],
                [false, false, false, false, false, false],
                [false, false, false, false, false, false],
                [false, false, false, false, false, false],
                [false, false, false, false, false, false]
            ]
        }
    }
}, {
    collection: 'Personnages_WrathAndGlory'
});

module.exports = mongoose.model('Personnages_WrathAndGlory', personnageSchema);