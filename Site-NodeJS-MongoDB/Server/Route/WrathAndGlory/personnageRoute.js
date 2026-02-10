const express = require('express');
const User = require('../../Models/User');
const Personnage = require('../../Models/WrathAndGlory/Personnage');

const router = express.Router();

//récupération des personnages en fonction du User
router.get('/user/:idUser', async (req, res) => {
    try {
        const idUser = Number(req.params.idUser);

        const personnages = await Personnage.find({ 'Personnages_WrathAndGlory.IdUser': idUser })
            .sort({ 'Personnages_WrathAndGlory.Id': 1 });

        res.json(personnages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des personnages' });
    }
});

// recherche d'un personnage avec son Id unique
router.get('/:idPersonnage', async (req, res) => {
    try {
        const idPersonnage = Number(req.params.idPersonnage);
        const personnage = await Personnage.findOne({ 'Personnages_WrathAndGlory.Id': idPersonnage });

        if (!personnage) {
            return res.status(404).json({ message: 'Personnage non trouvé' });
        }

        res.json(personnage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du Personnage' });
    }
});

// création d'un personnage
router.post('/', async (req, res) => {
    let nextId;

    try {
        const data = req.body.Personnages_WrathAndGlory;

        if (!data.Nom || !data.IdUser) {
            return res.status(400).json({ message: 'Nom et IdUser sont requis' });
        }

        // recherche de l'ID pour incrémentation
        const lastPersonnage = await Personnage.findOne({})
            .sort({ 'Personnages_WrathAndGlory.Id': -1 })
            .select('Personnages_WrathAndGlory.Id')
            .lean();

        nextId = lastPersonnage && lastPersonnage.Personnages_WrathAndGlory ? lastPersonnage.Personnages_WrathAndGlory.Id + 1 : 1;

        const nouveauPersonnage = new Personnage({
            Personnages_WrathAndGlory: {
                /* INFOS PRINCIPALES */
                Id: nextId,
                Nom: data.Nom.trim(),
                IdUser: Number(data.IdUser),
                Tier: Number(data.Tier) || 1,
                Rang: Number(data.Rang) || 1,
                Espèce: data.Espèce,
                Faction: data.Faction,
                SousFaction: data.SousFaction,
                MotsClés: data.MotsClés,
                Historique: data.Historique,
                PXRestant: Number(data.PXRestant) || 0,
                PXTotal: Number(data.PXTotal) || 0,

                /* ATTRIBUTS */
                Force: Number(data.Force) || 0,
                BonusForce: Number(data.BonusForce) || 0,
                Endurance: Number(data.Endurance) || 0,
                BonusEndurance: Number(data.BonusEndurance) || 0,
                Agilité: Number(data.Agilité) || 0,
                BonusAgilité: Number(data.BonusAgilité) || 0,
                Initiative: Number(data.Initiative) || 0,
                BonusInitiative: Number(data.BonusInitiative) || 0,
                ForceMentale: Number(data.ForceMentale) || 0,
                BonusForceMentale: Number(data.BonusForceMentale) || 0,
                Intelligence: Number(data.Intelligence) || 0,
                BonusIntelligence: Number(data.BonusIntelligence) || 0,
                Sociabilité: Number(data.Sociabilité) || 0,
                BonusSociabilité: Number(data.BonusSociabilité) || 0,

                /* COMPÉTENCES */
                Athlétisme: Number(data.Athlétisme) || 0,
                CapacitéCombat: Number(data.CapacitéCombat) || 0,
                CapacitéTir: Number(data.CapacitéTir) || 0,
                Commandemant: Number(data.Commandemant) || 0,
                Connaissance: Number(data.Connaissance) || 0,
                Duperie: Number(data.Duperie) || 0,
                Furtivité: Number(data.Furtivité) || 0,
                Intimidation: Number(data.Intimidation) || 0,
                Investigation: Number(data.Investigation) || 0,
                MaîtrisePsychique: Number(data.MaîtrisePsychique) || 0,
                Medicae: Number(data.Medicae) || 0,
                Persuasion: Number(data.Persuasion) || 0,
                Pilotage: Number(data.Pilotage) || 0,
                Psychologie: Number(data.Psychologie) || 0,
                Ruse: Number(data.Ruse) || 0,
                Survie: Number(data.Survie) || 0,
                Technomaîtrise: Number(data.Technomaîtrise) || 0,
                Vigilance: Number(data.Vigilance) || 0,

                /* STATUTS ET LISTES */
                Bléssures: data.Bléssures,
                Stress: data.Stress,
                Aptitudes: data.Aptitudes,
                Talents: data.TalentsPossedees || [],

                PouvoirsPsychiques: (data.pouvoirPsychiquePossedees || []).map((p, index) => ({
                    Id: p.Id ? Number(p.Id) : (index + 1),
                    Nom: p.Nom,
                    SD: p.SD,
                    Activation: p.Activation,
                    Durée: p.Durée,
                    Portée: p.Portée,
                    CiblesMultiples: p.CiblesMultiples,
                    Effet: p.Effet
                })),

                Armes: (data.ArmePossedees || []).map(a => ({
                    Id: Number(a.Id),
                    Nom: a.Nom,              
                    Dégâts: a.Dégâts,        
                    DS: a.DésDégâtsSupplémentaires || a.DS || "", 
                    PA: a.PénétrationArmure || a.PA || "", 
                    Portée: a.Portée,        
                    Rafale: a.Rafale,        
                    Traits: a.Traits,        
                    Valeur: a.Valeur,        
                    Rareté: a.Rareté,        
                    MotsClés: a.MotsClés     
                })),

                Armures: (data.ArmurePossedees || []).map(ar => ({
                    Id: Number(ar.Id),
                    Nom: ar.Nom,
                    Ar: ar.Ar,
                    Traits: ar.Traits,
                    Valeur: ar.Valeur,
                    Rareté: ar.Rareté,
                    MotsClés: ar.MotsClés
                })),

                Equipement: data.Equipement,
                Richesse: Number(data.Richesse) || 0,
                BlessuresGraves1: data.BlessuresGraves1,
                BlessuresGraves2: data.BlessuresGraves2,
                BlessuresGraves3: data.BlessuresGraves3,
                BlessuresGraves4: data.BlessuresGraves4,
                BlessuresGraves5: data.BlessuresGraves5,
                BlessuresGraves6: data.BlessuresGraves6,
                BlessuresGuerre: data.BlessuresGuerre,
                Mutations: data.Mutations,
                corruption: data.corruptionData
            }
        });

        await nouveauPersonnage.save();
        res.status(201).json({ message: 'Personnage enregistré !', Personnage: nouveauPersonnage });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur enregistrement', details: error.message });
    }
});

// modification d'un personnage
router.patch('/:idPersonnage', async (req, res) => {
    try {
        const idPersonnage = Number(req.params.idPersonnage);
        const data = req.body;

        console.log('=== PATCH DEBUG ===');
        console.log('ID reçu:', idPersonnage);
        console.log('Données reçues:', JSON.stringify(data, null, 2));

        const updates = {};
        const p = "Personnages_WrathAndGlory";

        /* MAPPING DE TOUS LES CHAMPS POUR LE PATCH */
        // Infos principales
        if (data.Nom) updates[`${p}.Nom`] = data.Nom.trim();
        if (data.Tier !== undefined) updates[`${p}.Tier`] = Number(data.Tier);
        if (data.Rang !== undefined) updates[`${p}.Rang`] = Number(data.Rang);
        if (data.Espèce) updates[`${p}.Espèce`] = data.Espèce;
        if (data.Faction) updates[`${p}.Faction`] = data.Faction;
        if (data.SousFaction) updates[`${p}.SousFaction`] = data.SousFaction;
        if (data.Historique) updates[`${p}.Historique`] = data.Historique;
        if (data.MotsClés) updates[`${p}.MotsClés`] = data.MotsClés;
        if (data.PXRestant !== undefined) updates[`${p}.PXRestant`] = Number(data.PXRestant);
        if (data.PXTotal !== undefined) updates[`${p}.PXTotal`] = Number(data.PXTotal);

        // Attributs
        const attributs = ['Force', 'BonusForce', 'Endurance', 'BonusEndurance', 'Agilité', 'BonusAgilité', 'Initiative', 'BonusInitiative', 'ForceMentale', 'BonusForceMentale', 'Intelligence', 'BonusIntelligence', 'Sociabilité', 'BonusSociabilité'];
        attributs.forEach(attr => {
            if (data[attr] !== undefined) updates[`${p}.${attr}`] = Number(data[attr]);
        });

        // Compétences
        const competences = ['Athlétisme', 'CapacitéCombat', 'CapacitéTir', 'Commandemant', 'Connaissance', 'Duperie', 'Furtivité', 'Intimidation', 'Investigation', 'MaîtrisePsychique', 'Medicae', 'Persuasion', 'Pilotage', 'Psychologie', 'Ruse', 'Survie', 'Technomaîtrise', 'Vigilance'];
        competences.forEach(comp => {
            if (data[comp] !== undefined) updates[`${p}.${comp}`] = Number(data[comp]);
        });

        // Listes et Statuts
        if (data.Bléssures) updates[`${p}.Bléssures`] = data.Bléssures;
        if (data.Stress) updates[`${p}.Stress`] = data.Stress;
        if (data.TalentsPossedees) updates[`${p}.Talents`] = data.TalentsPossedees;
        if (data.Aptitudes) updates[`${p}.Aptitudes`] = data.Aptitudes;
        if (data.Equipement) updates[`${p}.Equipement`] = data.Equipement;
        if (data.Richesse !== undefined) updates[`${p}.Richesse`] = Number(data.Richesse);

        // CORRUPTION - avec validation
        if (data.corruptionData) {
            console.log('Corruption reçue:', data.corruptionData);
            // S'assurer que c'est bien un tableau de 5 lignes x 6 colonnes
            if (Array.isArray(data.corruptionData) && data.corruptionData.length === 5) {
                updates[`${p}.corruption`] = data.corruptionData;
            } else {
                console.warn('Format de corruption invalide, initialisation par défaut');
                updates[`${p}.corruption`] = Array(5).fill(null).map(() => Array(6).fill(false));
            }
        }

        // BLESSURES GRAVES
        if (data.BlessuresGraves1 !== undefined) updates[`${p}.BlessuresGraves1`] = data.BlessuresGraves1;
        if (data.BlessuresGraves2 !== undefined) updates[`${p}.BlessuresGraves2`] = data.BlessuresGraves2;
        if (data.BlessuresGraves3 !== undefined) updates[`${p}.BlessuresGraves3`] = data.BlessuresGraves3;
        if (data.BlessuresGraves4 !== undefined) updates[`${p}.BlessuresGraves4`] = data.BlessuresGraves4;
        if (data.BlessuresGraves5 !== undefined) updates[`${p}.BlessuresGraves5`] = data.BlessuresGraves5;
        if (data.BlessuresGraves6 !== undefined) updates[`${p}.BlessuresGraves6`] = data.BlessuresGraves6;

        // BLESSURES DE GUERRE
        if (data.BlessuresGuerre !== undefined) updates[`${p}.BlessuresGuerre`] = data.BlessuresGuerre;

        // MUTATIONS
        if (data.Mutations !== undefined) updates[`${p}.Mutations`] = data.Mutations;

        // Pouvoirs Psychiques
        if (data.pouvoirPsychiquePossedees) {
            updates[`${p}.PouvoirsPsychiques`] = data.pouvoirPsychiquePossedees.map((pouvoir, index) => ({
                Id: pouvoir.Id ? Number(pouvoir.Id) : (index + 1),
                Nom: pouvoir.Nom,
                SD: pouvoir.SD,
                Activation: pouvoir.Activation,
                Durée: pouvoir.Durée,
                Portée: pouvoir.Portée,
                CiblesMultiples: pouvoir.CiblesMultiples,
                Effet: pouvoir.Effet
            }));
        }

        // Armes
        if (data.ArmePossedees) {
            updates[`${p}.Armes`] = data.ArmePossedees.map(a => ({
                Id: Number(a.Id),
                Nom: a.Nom,
                Dégâts: a.Dégâts,
                DS: a.DésDégâtsSupplémentaires || a.DS || "",
                PA: a.PénétrationArmure || a.PA || "",
                Portée: a.Portée,
                Rafale: a.Rafale,
                Traits: a.Traits,
                Valeur: a.Valeur,
                Rareté: a.Rareté,
                MotsClés: a.MotsClés
            }));
        }

        // Armures
        if (data.ArmurePossedees) {
            updates[`${p}.Armures`] = data.ArmurePossedees.map(ar => ({
                Id: Number(ar.Id),
                Nom: ar.Nom,
                Ar: ar.Ar,
                Traits: ar.Traits,
                Valeur: ar.Valeur,
                Rareté: ar.Rareté,
                MotsClés: ar.MotsClés
            }));
        }

        console.log('Updates construits:', JSON.stringify(updates, null, 2));
        console.log('Recherche du personnage avec filtre:', { 'Personnages_WrathAndGlory.Id': idPersonnage });

        const PersonnageMisAJour = await Personnage.findOneAndUpdate(
            { 'Personnages_WrathAndGlory.Id': idPersonnage },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!PersonnageMisAJour) {
            console.log('❌ AUCUN PERSONNAGE TROUVÉ avec ID:', idPersonnage);
            return res.status(404).json({ message: 'Personnage non trouvé' });
        }

        console.log('✅ Personnage mis à jour:', PersonnageMisAJour.Personnages_WrathAndGlory.Id, PersonnageMisAJour.Personnages_WrathAndGlory.Nom);
        res.json({ message: 'Mis à jour !', Personnage: PersonnageMisAJour });

    } catch (error) {
        console.error('❌ ERREUR PATCH:', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour', details: error.message });
    }
});

// suppression d'un personnage
router.delete('/:idPersonnage', async (req, res) => {
    try {
        const idPersonnage = Number(req.params.idPersonnage);
        const supprimé = await Personnage.findOneAndDelete({ 'Personnages_WrathAndGlory.Id': idPersonnage });

        if (!supprimé) {
            return res.status(404).json({ message: 'Personnage non trouvé' });
        }

        res.json({ message: 'Personnage supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression' });
    }
});

module.exports = router;