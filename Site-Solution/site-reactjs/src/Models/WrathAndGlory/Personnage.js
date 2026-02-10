const mongoose = require('mongoose');

const ArmeSchema = new mongoose.Schema({
    Id: Number,
    Nom: String,
    Dégâts: String,
    DS: String,
    PA: String,
    Portée: String,
    Rafale: String,
    Traits: String,
    Valeur: String,
    Rareté: String,
    MotsClés: String
});

const talentSchema = new mongoose.Schema({
    Id: Number,
    Nom: String,
    CoûtPX: Number,
    Prérequis: String,
    Effet: String,
});

const PouvoirsPsychiquesSchema = new mongoose.Schema({
    Id: Number,
    Nom: String,
    SD: String,
    Activation: String,
    Durée: String,
    Portée: String,
    CiblesMultiples: String,
    Effet: String
});

const ArmureSchema = new mongoose.Schema({
    Id: Number,
    Nom: String,
    Ar: String,
    Traits: String,
    Valeur: String,
    Rareté: String,
    MotsClés: String
});

const Personnage_WrathAndGlory_Schema = new mongoose.Schema({
    /*INFOS PRINCIPALES*/
    Id: Number,
    IdUser: Number,
    Nom: String,
    Tier: Number,
    Rang: Number,
    Espèce: String,
    Faction: String,
    SousFaction: String,
    MotsClés: String,
    Historique: String,
    PXRestant: Number,
    PXTotal: Number,

    /*ATTRIBUTS*/
    Force: Number,
    BonusForce: Number,
    Endurance: Number,
    BonusEndurance: Number,
    Agilité: Number,
    BonusAgilité: Number,
    Initiative: Number,
    BonusInitiative: Number,
    ForceMentale: Number,
    BonusForceMentale: Number,
    Intelligence: Number,
    BonusIntelligence: Number,
    Sociabilité: Number,
    BonusSociabilité: Number,

    /*COMPÉTENCES*/
    Athlétisme: Number,
    CapacitéCombat: Number,
    CapacitéTir: Number,
    Commandemant: Number,
    Connaissance: Number,
    Duperie: Number,
    Furtivité: Number,
    Intimidation: Number,
    Investigation: Number,
    MaîtrisePsychique: Number,
    Medicae: Number,
    Persuasion: Number,
    Pilotage: Number,
    Psychologie: Number,
    Ruse: Number,
    Survie: Number,
    Technomaîtrise: Number,
    Vigilance: Number,

    Bléssures: String,
    Stress: String,
    Talents: {
        type: [talentSchema],
        default: []
    },
    Aptitudes: String,
    PouvoirsPsychiques: {
        type: [PouvoirsPsychiquesSchema],
        default: []
    },
    Armes: {
        type: [ArmeSchema],
        default: []
    },
    Armures: {
        type: [ArmureSchema],
        default: []
    },
    Equipement: String,
    Richesse: Number,
    BlessuresGraves1: String,
    BlessuresGraves2: String,
    BlessuresGraves3: String,
    BlessuresGraves4: String,
    BlessuresGraves5: String,
    BlessuresGraves6: String,
    BlessuresGuerre: String,
    Mutations: String,
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
});

module.exports = mongoose.model('Personnage_WrathAndGlory', Personnage_WrathAndGlory_Schema);