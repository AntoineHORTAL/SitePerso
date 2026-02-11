import { useState, useEffect, useRef } from 'react'
import * as Lucide from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


import { ListePouvoirsPsychiquesMineurs } from '../../Listes/WrathAndGlory/PouvoirsPsychiquesMineurs'
import { ListePouvoirsPsychiquesUniversels } from '../../Listes/WrathAndGlory/PouvoirsPsychiquesUniversels'
import { ListeDomaineBiomancie } from '../../Listes/WrathAndGlory/DomaineBiomancie'
import { ListeDomaineDesRunesDeBataille } from '../../Listes/WrathAndGlory/DomaineDesRunesDeBataille'
import { ListeDomaineDivination } from '../../Listes/WrathAndGlory/DomaineDivination'
import { ListeDomaineMaleficarum } from '../../Listes/WrathAndGlory/DomaineMaleficarum'
import { ListeDomainePsychiqueUniversel } from '../../Listes/WrathAndGlory/DomainePsychiqueUniversel'
import { ListeDomainePyromancie } from '../../Listes/WrathAndGlory/DomainePyromancie'
import { ListeDomaineTelekinesie } from '../../Listes/WrathAndGlory/DomaineTelekinesie'
import { ListeDomaineTelepathie } from '../../Listes/WrathAndGlory/DomaineTelepathie'
import { ListePouvoirsFoi } from '../../Listes/WrathAndGlory/PouvoirsFoi'

import { ListeArmesImpériales } from '../../Listes/WrathAndGlory/ArmesImpériales'
import { ListeArmesAeldari } from '../../Listes/WrathAndGlory/ArmesAeldari'
import { ListeArmesOrk } from '../../Listes/WrathAndGlory/ArmesOrk'

import { ListeEquipementsImpériales } from '../../Listes/WrathAndGlory/EquipementsImpériales'
import { ListeEquipementsAeldari } from '../../Listes/WrathAndGlory/EquipementsAeldari'
import { ListeEquipementOrk } from '../../Listes/WrathAndGlory/EquipementsOrk'

import { ListeTalents } from '../../Listes/WrathAndGlory/Talents'

import CheckboxCrâne from '../../Composants/WrathAndGlory/CheckboxCrâne'

function CreationPersonnageAvancee() {
    //#region Bouton Retour et Icon
    const [isHovered, setIsHovered] = useState(false);

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const CroixIcon = Lucide.X;
    //#endregion

    //#region Listes
    const MaxAttributsEspece = [
        {
            Espece: "Humain",
            MaxForce: "8",
            MaxEndurance: "8",
            MaxAgilité: "8",
            MaxInitiative: "8",
            MaxForceMentale: "8",
            MaxIntelligence: "8",
            MaxSociabilité: "8",
            MaxVitesse: "8"
        },
        {
            Espece: "Ork",
            MaxForce: "12",
            MaxEndurance: "12",
            MaxAgilité: "7",
            MaxInitiative: "7",
            MaxForceMentale: "8",
            MaxIntelligence: "7",
            MaxSociabilité: "7",
            MaxVitesse: "7"
        },
        {
            Espece: "Aeldari",
            MaxForce: "7",
            MaxEndurance: "7",
            MaxAgilité: "12",
            MaxInitiative: "12",
            MaxForceMentale: "12",
            MaxIntelligence: "10",
            MaxSociabilité: "6",
            MaxVitesse: "10"
        },
        {
            Espece: "Adeptus Astartes",
            MaxForce: "10",
            MaxEndurance: "10",
            MaxAgilité: "9",
            MaxInitiative: "9",
            MaxForceMentale: "10",
            MaxIntelligence: "10",
            MaxSociabilité: "8",
            MaxVitesse: "9"
        },
        {
            Espece: "Astartes Primaris",
            MaxForce: "12",
            MaxEndurance: "12",
            MaxAgilité: "9",
            MaxInitiative: "9",
            MaxForceMentale: "10",
            MaxIntelligence: "10",
            MaxSociabilité: "8",
            MaxVitesse: "9"
        }
    ];
    const ListeEspeces = [
        {
            Id: 1,
            Espèce: "Humain",
            CoutPX: 0,
            Vitesse: 6,
            MaxStats: {
                force: 8,
                endurance: 8,
                agilite: 8,
                initiative: 8,
                forceMentale: 8,
                intelligence: 8,
                sociabilite: 8
            },
            Attributs: {
                force: 1,
                endurance: 1,
                agilite: 3,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 0,
                CapacitéDeCombat: 0,
                CapacitéDeTir: 0,
                Furtivité: 0,
                Vigilance: 0,
                Survie: 0,
                Ruse: 0,
                Duperie: 0,
            },
            AptitudeEspèce: ""
        },
        {
            Id: 2,
            Espèce: "Aeldari",
            CoutPX: 10,
            Vitesse: 8,
            MaxAttributs: {
                force: 7,
                endurance: 7,
                agilite: 12,
                initiative: 12,
                forceMentale: 10,
                intelligence: 6,
                sociabilite: 10
            },
            Attributs: {
                force: 1,
                endurance: 1,
                agilite: 3,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 0,
                CapacitéDeCombat: 0,
                CapacitéDeTir: 0,
                Furtivité: 0,
                Vigilance: 0,
                Survie: 0,
                Ruse: 0,
                Duperie: 0,
            },
            AptitudeEspèce: "Émotions intenses: +1 SD à tous les Tests de Résolution. Si vous échouez à un Test basé sur la Force Mentale dans une scène impliquant des émotions, les MJ gagne +1 Ruine.\nPsycho-sensible: vous pouvez choisir d'obtenir le Mot-Clé PSYKER."
        },
        {
            Id: 3,
            Espèce: "Ork",
            CoutPX: 20,
            Vitesse: 6,
            MaxAttributs: {
                force: 12,
                endurance: 12,
                agilite: 7,
                initiative: 7,
                forceMentale: 8,
                intelligence: 7,
                sociabilite: 7
            },
            Attributs: {
                force: 3,
                endurance: 3,
                agilite: 1,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 0,
                CapacitéDeCombat: 0,
                CapacitéDeTir: 0,
                Furtivité: 0,
                Vigilance: 0,
                Survie: 0,
                Ruse: 0,
                Duperie: 0,
            },
            AptitudeEspèce: "Tellement Ork: +1 dé bonus aux Tests d'Intimidation.\nPlus c'est grand, mieux c'est: vous calculez l'Influence en utilisant la Force au lieu de la Sociabilité."
        },
        {
            Id: 4,
            Espèce: "Adeptus Astartes",
            CoutPX: 160,
            Vitesse: 7,
            MaxAttributs: {
                force: 10,
                endurance: 10,
                agilite: 9,
                initiative: 9,
                forceMentale: 10,
                intelligence: 10,
                sociabilite: 8
            },
            Attributs: {
                force: 4,
                endurance: 5,
                agilite: 4,
                initiative: 4,
                forceMentale: 3,
                intelligence: 3,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 3,
                CapacitéDeCombat: 3,
                CapacitéDeTir: 3,
                Furtivité: 3,
                Vigilance: 2,
                Survie: 0,
                Ruse: 0,
                Duperie: 0,
            },
            AptitudeEspèce: "Défenseur de l'humanité: ajoutez +Rang Icônes à toute attaque réussie contre une Horde.\nHonore le Chapitre: vous êtes soumis aux ordres de votre Maître de Chapitre et devez honorer les croyances et les traditions de votre Chapitre\nVotre Résolution augmente de +1.\nImplants de Space Marine: vous êtes immunisé contre la Condition Saignement. Vous gagnez +1 dé bonus à tout Test lié à l'un des 19 implants si le MJ le juge approprié."
        },
        {
            Id: 5,
            Espèce: "Primaris Astartes",
            CoutPX: 198,
            Vitesse: 7,
            MaxAttributs: {
                force: 12,
                endurance: 12,
                agilite: 9,
                initiative: 9,
                forceMentale: 10,
                intelligence: 10,
                sociabilite: 8
            },
            Attributs: {
                force: 5,
                endurance: 5,
                agilite: 4,
                initiative: 4,
                forceMentale: 3,
                intelligence: 3,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 3,
                CapacitéDeCombat: 3,
                CapacitéDeTir: 4,
                Furtivité: 2,
                Vigilance: 3,
                Survie: 0,
                Ruse: 1,
                Duperie: 2,
            },
            AptitudeEspèce: "Défenseur de l'humanité: ajoutez +Rang Icônes à toute attaque réussie contre une Horde.\nHonore le Chapitre (Primaris): vous êtes soumis aux ordres de votre Maître de Chapitre et deverz honorer les croyances et les traditions de votre Chapitre.\nVotre Résolution augmente de +1.\nEn tant que Primaris, vous ignorez toutes les impuretés du génogerme de votre Chapitre et gagnez également +3 Blessures.\nVotre Résolution augmente de +1.\nImplants de Space Marine: vous êtes immunisé contre la Condition Saignement. Vous gagnez +1 dé bonus à tout Test lié à l'un des 19 implants si le MJ le juge approprié."
        },
        {
            Id: 6,
            Espèce: "Ogryn",
            CoutPX: 76,
            Vitesse: 6,
            MaxAttributs: {
                force: 12,
                endurance: 12,
                agilite: 7,
                initiative: 4,
                forceMentale: 8,
                intelligence: 1,
                sociabilite: 4
            },
            Attributs: {
                force: 5,
                endurance: 5,
                agilite: 1,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 0,
                CapacitéDeCombat: 0,
                CapacitéDeTir: 0,
                Furtivité: 0,
                Vigilance: 0,
                Survie: 2,
                Ruse: 0,
                Duperie: 0,
            },
            AptitudeEspèce: "Avalanche de muscle: Lorsque vous chargez, vous obtenez 1 dé bonus de Rang supplémentaire à votre Test de Capacité De Combat.\nClaustrophobe: Chaque fois que vous entrez dans unn espace clos, vous devez effectuer unn Test de Peur (SD 2 par défaut). De plus, chaque fois que vous obtenez une complication dans un espace clos, le MJ peut dépenser 1 points de Ruine pour vous forcer à répéter le Test de Peur.\nSimmple loyauté: Chaque fois qu'un allié possédant le Mot-Clé IMPERIUM effectue un Test de COmmancement ciblant un Ogryn, il obtient un nombre de dé bonus égal au Rang de l'Ogryn."
        },
        {
            Id: 7,
            Espèce: "Ratling",
            CoutPX: 30,
            Vitesse: 5,
            MaxAttributs: {
                force: 6,
                endurance: 6,
                agilite: 10,
                initiative: 10,
                forceMentale: 8,
                intelligence: 8,
                sociabilite: 10
            },
            Attributs: {
                force: 1,
                endurance: 1,
                agilite: 2,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 2
            },
            Compétences: {
                Athlétisme: 0,
                CapacitéDeCombat: 0,
                CapacitéDeTir: 1,
                Furtivité: 2,
                Vigilance: 2,
                Ruse: 1,
                Duperie: 2,
                Survie: 0,
            },
            AptitudeEspèce: "Gourmand: + dé bonus de Rangg doublé à tous les Test effectué pour préparer de la nourriture.\nLa nourriture préparée peut être utilisée pendant un regroupement pour récupérer + Choc de Rang."
        },
        {
            Id: 8,
            Espèce: "Kroot",
            CoutPX: 22,
            Vitesse: 7,
            MaxAttributs: {
                force: 12,
                endurance: 12,
                agilite: 12,
                initiative: 12,
                forceMentale: 10,
                intelligence: 6,
                sociabilite: 6
            },
            Attributs: {
                force: 1,
                endurance: 1,
                agilite: 1,
                initiative: 1,
                forceMentale: 1,
                intelligence: 1,
                sociabilite: 1
            },
            Compétences: {
                Athlétisme: 1,
                CapacitéDeCombat: 2,
                CapacitéDeTir: 0,
                Vigilance: 1,
                Ruse: 0,
                Furtivité: 2,
                Duperie: 0,
                Survie: 2,
            },
            AptitudeEspèce: "Mutations Kroot: Vous possédez un onmbre de mutations Kroot égal à votre niveau et pouvez obtenir des mutations Kroot supplémentaire dans le cadre de l'Ascension."
        }
    ];
    const Faction = [
        { id: 1, faction: "Imperium" },
        { id: 2, faction: "Chaos" },
        { id: 3, faction: "Aeldari" },
        { id: 4, faction: "Ork" },
        { id: 5, faction: "T'au" }
    ];
    const SousFaction = [
        { id: 1, faction: "Imperium", sousfaction: "Adepta Sororitas" },
        { id: 2, faction: "Imperium", sousfaction: "Astra Militarum" },
        { id: 3, faction: "Imperium", sousfaction: "Adeptus Ministorum" },
        { id: 4, faction: "Imperium", sousfaction: "Inquisition" },
        { id: 5, faction: "Imperium", sousfaction: "Adeptus Mechanicus" },
        { id: 6, faction: "Imperium", sousfaction: "Les Dynasties Rogue Trader" },
        { id: 7, faction: "Imperium", sousfaction: "Adeptus Astra Telepathica" },
        { id: 8, faction: "Imperium", sousfaction: "Adeptus Astartes" },
        { id: 9, faction: "Imperium", sousfaction: "Racailles" },
        { id: 10, faction: "Chaos", sousfaction: "Chaos" },
        { id: 11, faction: "Aeldari", sousfaction: "Aeldari" },
        { id: 12, faction: "Ork", sousfaction: "Ork" },
        { id: 13, faction: "T'au", sousfaction: "T'au" }
    ];
    const CoutAtributs = [
        {
            id: 1,
            ScoreAttribut: 1,
            CoutTotalPX: 0,
            CoutProgressifPX: 0
        },
        {
            id: 2,
            ScoreAttribut: 2,
            CoutTotalPX: 4,
            CoutProgressifPX: 4
        },
        {
            id: 3,
            ScoreAttribut: 3,
            CoutTotalPX: 10,
            CoutProgressifPX: 6
        },
        {
            id: 4,
            ScoreAttribut: 4,
            CoutTotalPX: 20,
            CoutProgressifPX: 10
        },
        {
            id: 5,
            ScoreAttribut: 5,
            CoutTotalPX: 35,
            CoutProgressifPX: 15
        },
        {
            id: 6,
            ScoreAttribut: 6,
            CoutTotalPX: 55,
            CoutProgressifPX: 20
        },
        {
            id: 7,
            ScoreAttribut: 7,
            CoutTotalPX: 80,
            CoutProgressifPX: 25
        },
        {
            id: 8,
            ScoreAttribut: 8,
            CoutTotalPX: 110,
            CoutProgressifPX: 30
        },
        {
            id: 9,
            ScoreAttribut: 9,
            CoutTotalPX: 145,
            CoutProgressifPX: 35
        },
        {
            id: 10,
            ScoreAttribut: 10,
            CoutTotalPX: 185,
            CoutProgressifPX: 40
        },
        {
            id: 11,
            ScoreAttribut: 11,
            CoutTotalPX: 230,
            CoutProgressifPX: 45
        },
        {
            id: 12,
            ScoreAttribut: 12,
            CoutTotalPX: 280,
            CoutProgressifPX: 50
        }
    ]
    const CoutCompetences = [
        {
            id: 1,
            ScoreCompetence: 1,
            CoutTotalPX: 2,
            CoutProgressifPX: 2
        },
        {
            id: 2,
            ScoreCompetence: 2,
            CoutTotalPX: 6,
            CoutProgressifPX: 4
        },
        {
            id: 3,
            ScoreCompetence: 3,
            CoutTotalPX: 12,
            CoutProgressifPX: 6
        },
        {
            id: 4,
            ScoreCompetence: 4,
            CoutTotalPX: 20,
            CoutProgressifPX: 8
        },
        {
            id: 5,
            ScoreCompetence: 5,
            CoutTotalPX: 30,
            CoutProgressifPX: 10
        },
        {
            id: 6,
            ScoreCompetence: 6,
            CoutTotalPX: 42,
            CoutProgressifPX: 12
        },
        {
            id: 7,
            ScoreCompetence: 7,
            CoutTotalPX: 56,
            CoutProgressifPX: 14
        },
        {
            id: 8,
            ScoreCompetence: 8,
            CoutTotalPX: 72,
            CoutProgressifPX: 16
        }
    ];
    const ListeArmureImpériales = ListeEquipementsImpériales.filter(armure => armure.Ar != ("" && "-"));
    const ListeArmureAeldari = ListeEquipementsAeldari.filter(armure => armure.Ar != ("" && "-"));
    const ListeArmureOrk = ListeEquipementOrk.filter(armure => armure.Ar != ("" && "-"));
    //#endregion

    //#region Toutes les Const
    const navigate = useNavigate();


    /*PRINCIPALES*/
    const [nom, setNom] = useState('');
    const [tier, setTier] = useState(1);
    const [pxDebut, setPXDebut] = useState(100);
    const [pxRestant, setPXRestant] = useState(100);
    const [richesse, setRichesse] = useState(0);
    const [especeSelectionnée, setEspeceSelectionnée] = useState(null);
    const [factionSelectionnée, setFactionSelectionnée] = useState(null);
    const [sousFactionSelectionnée, setSousFactionSelectionnée] = useState(null);
    const [défense, setDéfense] = useState(0);
    const [résistaceBase, setRésistanceBase] = useState(0);
    const [résistanceArmure, setRésistanceArmure] = useState(0);
    const [historique, setHistorique] = useState('');
    const [motsCles, setMotsCles] = useState('');
    const [aptitudes, setAptitudes] = useState('');
    const [equipement, setEquipement] = useState('');
    const [blessureGrave1, setBlessureGrave1] = useState('');
    const [blessureGrave2, setBlessureGrave2] = useState('');
    const [blessureGrave3, setBlessureGrave3] = useState('');
    const [blessureGrave4, setBlessureGrave4] = useState('');
    const [blessureGrave5, setBlessureGrave5] = useState('');
    const [blessureGrave6, setBlessureGrave6] = useState('');
    const [blessuresGuerre, setBlessuresGuerre] = useState('');
    const [mutations, setMutations] = useState('');
    const [blessures, setBlessures] = useState('');
    const [stress, setStress] = useState('');
    const [rang, setRang] = useState(0);


    /*ATTRIBUTS*/
    const [force, setForce] = useState(1);
    const [endurance, setEdurance] = useState(1);
    const [agilité, setAgilité] = useState(1);
    const [initiative, setInitiative] = useState(1);
    const [forceMentale, setForceMentale] = useState(1);
    const [intelligence, setIntelligence] = useState(1);
    const [sociabilité, setSociabilité] = useState(1);

    /*BONUS ATTRIBUTS*/
    const [bonusForce, setBonusForce] = useState(null);
    const [bonusEndurance, setBonusEndurance] = useState(null);
    const [bonusAgilité, setBonusAgilité] = useState(null);
    const [bonusInitiative, setBonusInitiative] = useState(null);
    const [bonusForceMentale, setBonusForceMentale] = useState(null);
    const [bonusIntelligence, setBonusIntelligence] = useState(null);
    const [bonusSociabilité, setBonusSociabilité] = useState(null);

    /*COMPETENCES*/
    const [athlétisme, setAthlétisme] = useState(0);
    const [capacitéDeCombat, setCapacitéDeCombat] = useState(0);
    const [capacitéDeTir, setCapacitéDeTir] = useState(0);
    const [commandement, setCommandement] = useState(0);
    const [connaissance, setConnaissance] = useState(0);
    const [duperie, setDuperie] = useState(0);
    const [furtivité, setFurtivité] = useState(0);
    const [intimidation, setIntimidation] = useState(0);
    const [investigation, setInvestigation] = useState(0);
    const [maîtrisePsychique, setMaîtrisePsychique] = useState(0);
    const [medicae, setMedicae] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [pilotage, setPilotage] = useState(0);
    const [psychologie, setPsychologie] = useState(0);
    const [ruse, setRuse] = useState(0);
    const [survie, setSurvie] = useState(0);
    const [technomaîtrise, setTechnomaîtrise] = useState(0);
    const [vigilance, setVigilance] = useState(0);


    const [selectedListePouvoirPsychique, setSelectedListePouvoirPsychique] = useState(null);
    const [selectedListeArme, setSelectedListeArme] = useState(null);
    const [selectedListeArmure, setSelectedListeArmure] = useState(null);
    const [selectedListeTalents, setSelectedListeTalents] = useState(null);

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemFaction, setSelectedItemFaction] = useState(null);
    const [selectedItemSousFaction, setSelectedItemSousFaction] = useState(null);
    const [selectedItemPouvoirsPsychiques, setSelectedItemPouvoirsPsychiques] = useState(null);
    const [selectedItemArme, setSelectedItemArme] = useState(null);
    const [selectedItemArmure, setSelectedItemArmure] = useState(null);
    const [selectedItemTalents, setSelectedItemTalents] = useState(null);

    const [isOpen, setOpen] = useState(false);
    const [isOpenFaction, setOpenFaction] = useState(false);
    const [isOpenSousFaction, setOpenSousFaction] = useState(false);
    const [isOpenPouvoirsPsychiques, setOpenPouvoirsPsychiques] = useState(false);
    const [isOpenArme, setOpenArme] = useState(false);
    const [isOpenArmure, setOpenArmure] = useState(false);
    const [isOpenTalents, setOpenTalents] = useState(false);

    const [pouvoirPsychiquePossedees, setPouvoirPsychiquePossedees] = useState([]);
    const [ArmePossedees, setArmePossedees] = useState([]);
    const [ArmurePossedees, setArmurePossedees] = useState([]);
    const [TalentsPossedees, setTalentsPossedees] = useState([]);


    const [message, setMessage] = useState('');
    const [erreur, setErreur] = useState('');
    const [loading, setLoading] = useState(false);
    //#endregion

    //#region Toggle DDL
    const toggleDropdown = () => { setOpen(!isOpen); };
    const handleItemClick = (id) => {
        const ancienneEspece = ListeEspeces.find(esp => esp.Id === selectedItem);
        const nouvelleEspece = ListeEspeces.find(esp => esp.Id === id);

        let calculPX = pxRestant;

        if (ancienneEspece) {
            calculPX += ancienneEspece.CoutPX;
        }

        if (id !== selectedItem) {
            setSelectedItem(id);
            if (nouvelleEspece) {
                calculPX -= nouvelleEspece.CoutPX;
            }
        } else {
            setSelectedItem(null);
        }

        if (calculPX < 0) {
            window.alert("Vous n'avez pas assez de points !");
            return;
        }

        switch (nouvelleEspece.Id) {
            /*aeldari*/
            case 2:
                setSelectedItemFaction(3);
                setSelectedItemSousFaction(11);
                break;
            /*ork*/
            case 3:
                setSelectedItemFaction(4);
                setSelectedItemSousFaction(12);
                break;
            /*t'au*/
            case 8:
                setSelectedItemFaction(5);
                setSelectedItemSousFaction(13);
                break;
        }

        setPXRestant(calculPX);
        setOpen(false);
    }

    const toggleDropdownFaction = () => { setOpenFaction(!isOpenFaction); };
    const handleItemClickFaction = (id) => {
        setSelectedItemFaction(selectedItemFaction === id ? null : id);
        const NouvelleFonction = id;
        setOpenFaction(false);

        switch (NouvelleFonction) {
            case 2:
                setSelectedItemSousFaction(10);
                break;
            /*aeldari*/
            case 3:
                setSelectedItemSousFaction(11);
                break;
            /*ork*/
            case 4:
                setSelectedItemSousFaction(12);
                break;
            /*t'au*/
            case 5:
                setSelectedItemSousFaction(13);
                break;
        }
    }

    const toggleDropdownSousFaction = () => { setOpenSousFaction(!isOpenSousFaction); };
    const handleItemClickSousFaction = (id) => {
        setSelectedItemSousFaction(selectedItemSousFaction === id ? null : id);
        setOpenSousFaction(false);
    }
    
    const toggleDropdownPouvoirsPsychiques = () => { setOpenPouvoirsPsychiques(!isOpenPouvoirsPsychiques); };
    const handleItemClickPouvoirsPsychiques = (Id) => {
        setSelectedItemPouvoirsPsychiques(selectedItemPouvoirsPsychiques === Id ? null : Id);
        setOpenPouvoirsPsychiques(false);
    }
    
    const toggleDropdownArme = () => { setOpenArme(!isOpenArme); };
    const handleItemClickArme = (Id) => {
        setSelectedItemArme(selectedItemArme === Id ? null : Id);
        setOpenArme(false);
    }
    
    const toggleDropdownArmure = () => { setOpenArmure(!isOpenArmure); };
    const handleItemClickArmure = (Id) => {
        setSelectedItemArmure(selectedItemArmure === Id ? null : Id);
        setOpenArmure(false);
    }
    
    const toggleDropdownTalents = () => { setOpenTalents(!isOpenTalents); };
    const handleItemClickTalents = (Id) => {
        setSelectedItemTalents(selectedItemTalents === Id ? null : Id);
        setOpenTalents(false);
    }
    //#endregion

    //#region ToggleDivSelect
    const DivSelectPouvoirPsychique = useRef(null);
    const AfficheDivSelectPouvoirPsychique = () => {
        if (DivSelectPouvoirPsychique.current) {
            DivSelectPouvoirPsychique.current.style.display = 'block';
        }
    };    
    const AnnulerDivSelectPouvoirPsychique = () => {
        if (DivSelectPouvoirPsychique.current) {
            DivSelectPouvoirPsychique.current.style.display = 'none';
            setSelectedItemPouvoirsPsychiques(null);
        }
    }

    const DivSelectArme = useRef(null);
    const AfficheDivSelectArme = () => {
        if (DivSelectArme.current) {
            DivSelectArme.current.style.display = 'block';
        }
    };    
    const AnnulerDivSelectArme = () => {
        if (DivSelectArme.current) {
            DivSelectArme.current.style.display = 'none';
            setSelectedItemArme(null);
        }
    }

    const DivSelectArmure = useRef(null);
    const AfficheDivSelectArmure = () => {
        if (DivSelectArmure.current) {
            DivSelectArmure.current.style.display = 'block';
        }
    };    
    const AnnulerDivSelectArmure = () => {
        if (DivSelectArmure.current) {
            DivSelectArmure.current.style.display = 'none';
            setSelectedItemArmure(null);
        }
    }

    const DivSelectTalents = useRef(null);
    const AfficheDivSelectTalents = () => {
        if (DivSelectTalents.current) {
            DivSelectTalents.current.style.display = 'block';
        }
    };    
    const AnnulerDivSelectTalents = () => {
        if (DivSelectTalents.current) {
            DivSelectTalents.current.style.display = 'none';
            setSelectedItemTalents(null);
        }
    }
    //#endregion 

    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;

        let valide = false;
        let valeurTier = 1;

        while (!valide) {
            const choix = window.prompt("Entrez le Tier de votre personnage (1 à 4) :", "1");

            if (choix === null) {
                valide = true;
                break;
            }

            const num = parseInt(choix, 10);

            if (!isNaN(num) && num >= 1 && num <= 4) {
                valeurTier = num;
                valide = true;
            } else {
                window.alert("Saisie invalide. Veuillez entrer un nombre entre 1 et 4.");
            }
        }

        setTier(valeurTier);
        setPXRestant(valeurTier * 100);

        hasRun.current = true;
    }, []);

    const handleAttributeChange = (valeurActuelle, nouvelleValeur, setterAttribut) => {
        const coutAncien = CoutAtributs.find(c => c.ScoreAttribut === valeurActuelle)?.CoutTotalPX || 0;
        const coutNouveau = CoutAtributs.find(c => c.ScoreAttribut === nouvelleValeur)?.CoutTotalPX || 0;

        const difference = coutAncien - coutNouveau;
        const nouveauSoldePX = pxRestant + difference;

        if (nouveauSoldePX < 0) {
            window.alert("Pas assez de points pour augmenter cet Attribut !");
            return; 
        }

        setterAttribut(nouvelleValeur);
        setPXRestant(nouveauSoldePX);
    };

    const handleCompetenceChange = (valeurActuelle, nouvelleValeur, setterCompetence) => {
        const coutAncien = CoutCompetences.find(c => c.ScoreCompetence === valeurActuelle)?.CoutTotalPX || 0;
        const coutNouveau = CoutCompetences.find(c => c.ScoreCompetence === nouvelleValeur)?.CoutTotalPX || 0;

        const difference = coutAncien - coutNouveau;
        const nouveauSoldePX = pxRestant + difference;

        if (nouveauSoldePX < 0) {
            window.alert("Pas assez de points pour augmenter cet Compétence !");
            return; 
        }

        setterCompetence(nouvelleValeur);
        setPXRestant(nouveauSoldePX);
    };

    //#region BuySell
    const buyPouvoirPsychique = (pouvoir) => {
        const cout = parseInt(pouvoir.CoutPX) || 0;

        if (pxRestant >= cout) {
            if (!pouvoirPsychiquePossedees.find(c => c.Nom === pouvoir.Nom)) {
                if (cout > 0) {
                    setPXRestant(prev => prev - cout);
                }
                setPouvoirPsychiquePossedees(prev => [...prev, pouvoir]);
                console.log(`Pouvoir ${pouvoir.Nom} achetée !`);
                AnnulerDivSelectPouvoirPsychique();
            } else {
                alert("Vous possédez déjà ce Pouvoir.");
            }
        } else {
            alert("Points d'Expérience (PX) insuffisants !");
        }
    };
    const sellPouvoirPsychique = (pouvoir) => {
        const confirmation = window.confirm(
            `Êtes-vous sûr de vouloir vendre "${pouvoir.Nom}" ? \nVous récupérerez ${pouvoir.CoutPX} PX.`
        );

        if (confirmation) {
            setPXRestant(prev => prev + parseInt(pouvoir.CoutPX));

            setPouvoirPsychiquePossedees(prev =>
                prev.filter(c => c.Nom !== pouvoir.Nom)
            );

            if (selectedItemPouvoirsPsychiques === pouvoir.Nom) {
                setSelectedItemPouvoirsPsychiques(null);
            }
        }
    };

    const buyArme = (arme) => {
        const cout = parseInt(arme.CoutPX) || 0;

        if (pxRestant >= cout) {
            if (!ArmePossedees.find(c => c.Nom === arme.Nom)) {
                if (cout > 0) {
                    setPXRestant(prev => prev - cout);
                }
                setArmePossedees(prev => [...prev, arme]);
                console.log(`Arme ${arme.Nom} achetée !`);
                AnnulerDivSelectArme();
            } else {
                alert("Vous possédez déjà ce Arme.");
            }
        } else {
            alert("Points d'Expérience (PX) insuffisants !");
        }
    };
    const sellArme = (arme) => {
        const confirmation = window.confirm(
            `Êtes-vous sûr de vouloir vendre "${arme.Nom}" ? \nElle à une Valeur de ${arme.Valeur}.`
        );

        if (confirmation) {
            setArmePossedees(prev =>
                prev.filter(c => c.Nom !== arme.Nom)
            );

            if (selectedItemArme === arme.Nom) {
                setSelectedItemArme(null);
            }
        }
    };

    const buyArmure = (armure) => {
        const cout = parseInt(armure.CoutPX) || 0;

        if (pxRestant >= cout) {
            if (!ArmurePossedees.find(c => c.Nom === armure.Nom)) {
                if (cout > 0) {
                    setPXRestant(prev => prev - cout);
                }
                setArmurePossedees(prev => [...prev, armure]);
                console.log(`Armure ${armure.Nom} achetée !`);
                AnnulerDivSelectArmure();
            } else {
                alert("Vous possédez déjà ce Armure.");
            }
        } else {
            alert("Points d'Expérience (PX) insuffisants !");
        }
    };
    const sellArmure = (armure) => {
        const confirmation = window.confirm(
            `Êtes-vous sûr de vouloir vendre "${armure.Nom}" ? \nElle à une Valeur de  ${armure.Valeur}.`
        );

        if (confirmation) {
            setArmurePossedees(prev =>
                prev.filter(c => c.Nom !== armure.Nom)
            );

            if (selectedItemArmure === armure.Nom) {
                setSelectedItemArmure(null);
            }
        }
    };

    const buyTalents = (Talents) => {
        const cout = parseInt(Talents.CoûtPX) || 0;

        if (pxRestant >= cout) {
            if (!TalentsPossedees.find(c => c.Nom === Talents.Nom)) {
                if (cout > 0) {
                    setPXRestant(prev => prev - cout);
                }
                setTalentsPossedees(prev => [...prev, Talents]);
                console.log(`Talents ${Talents.Nom} achetée !`);
                AnnulerDivSelectTalents();
            } else {
                alert("Vous possédez déjà ce Talents.");
            }
        } else {
            alert("Points d'Expérience (PX) insuffisants !");
        }
    };
    const sellTalents = (Talents) => {
        const confirmation = window.confirm(
            `Êtes-vous sûr de vouloir vendre "${Talents.Nom}" ? \nElle à une Valeur de  ${Talents.CoûtPX} PX.`
        );

        if (confirmation) {
            setPXRestant(prev => prev + parseInt(Talents.CoûtPX));

            setTalentsPossedees(prev =>
                prev.filter(c => c.Nom !== Talents.Nom)
            );

            if (selectedItemTalents === Talents.Nom) {
                setSelectedItemTalents(null);
            }
        }
    };
    //#endregion

    const [corruptionData, setCorruptionData] = useState(
        Array(5).fill(null).map(() => Array(6).fill(false))
    );

    const toggleCrane = (rowIndex, craneIndex) => {
        if (craneIndex === 5) return; // Le bonus est automatique

        const newData = [...corruptionData];
        const row = [...newData[rowIndex]];

        row[craneIndex] = !row[craneIndex];

        // Logique : si les 5 premiers sont cochés, le 6ème (bonus) s'allume
        row[5] = row.slice(0, 5).every(c => c === true);

        newData[rowIndex] = row;
        setCorruptionData(newData);
    };


    const CreationPersonnage = async () => {
        // On récupère l'utilisateur pour l'ID
        const User = JSON.parse(localStorage.getItem('user'));

        console.log("Nom : " + nom);

        if (!User || !User.Id) {
            window.alert("Erreur : Utilisateur non connecté.");
            return;
        }

        if (!nom || nom.trim() === "") {
            window.alert("Veuillez donner un nom à votre personnage.");
            return;
        }

        // Préparation de l'objet complet selon ton schéma Mongoose
        const nouveauPersonnageData = {
            Personnages_WrathAndGlory: {
                /* INFOS GÉNÉRALES */
                Nom: nom,
                IdUser: User.Id,
                Tier: tier,
                Rang: rang || 1,
                Espèce: ListeEspeces.find(e => Number(e.Id) === Number(selectedItem))?.Espèce || "",
                Faction: Faction.find(e => Number(e.id) === Number(selectedItemFaction))?.faction || "",
                SousFaction: SousFaction.find(e => Number(e.id) === Number(selectedItemSousFaction))?.sousfaction || "",
                MotsClés: motsCles || "",
                Historique: historique || "",
                PXRestant: pxRestant,
                PXTotal: tier * 100,

                /* ATTRIBUTS */
                Force: force || 1, BonusForce: bonusForce || 0,
                Endurance: endurance || 1, BonusEndurance: bonusEndurance || 0,
                Agilité: agilité || 1, BonusAgilité: bonusAgilité || 0,
                Initiative: initiative || 1, BonusInitiative: bonusInitiative || 0,
                ForceMentale: forceMentale || 1, BonusForceMentale: bonusForceMentale || 0,
                Intelligence: intelligence || 1, BonusIntelligence: bonusIntelligence || 0,
                Sociabilité: sociabilité || 1, BonusSociabilité: bonusSociabilité || 0,

                /* COMPÉTENCES */
                Athlétisme: athlétisme || 0,
                CapacitéCombat: capacitéDeCombat || 0,
                CapacitéTir: capacitéDeTir || 0,
                Commandemant: commandement || 0,
                Connaissance: connaissance || 0,
                Duperie: duperie || 0,
                Furtivité: furtivité || 0,
                Intimidation: intimidation || 0,
                Investigation: investigation || 0,
                MaîtrisePsychique: maîtrisePsychique || 0,
                Medicae: medicae || 0,
                Persuasion: persuasion || 0,
                Pilotage: pilotage || 0,
                Psychologie: psychologie || 0,
                Ruse: ruse || 0,
                Survie: survie || 0,
                Technomaîtrise: technomaîtrise || 0,
                Vigilance: vigilance || 0,

                /* LISTES ET ÉQUIPEMENT */
                TalentsPossedees: TalentsPossedees || [],
                Aptitudes: aptitudes || "",
                PouvoirsPsychiques: pouvoirPsychiquePossedees || [],
                Armes: ArmePossedees || [],
                Armures: ArmurePossedees || [],
                Equipement: equipement || "",
                Richesse: richesse || "",

                /* SANTÉ ET DIVERS */
                Bléssures: blessures || "",
                Stress: stress || "",
                corruption: corruptionData,
                BlessuresGuerre: blessuresGuerre || "",
                Mutations: mutations || "",
                BlessuresGraves1: blessureGrave1 || "",
                BlessuresGraves2: blessureGrave2 || "",
                BlessuresGraves3: blessureGrave3 || "",
                BlessuresGraves4: blessureGrave4 || "",
                BlessuresGraves5: blessureGrave5 || "",
                BlessuresGraves6: blessureGrave6 || ""
            }
        };

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await axios.post(`${API_URL}/API/API_Personnages_WrathAndGlory`, nouveauPersonnageData);

            if (res.status === 201) {
                window.alert("Personnage " + nom + " créé avec succès !");
                localStorage.setItem('personnage_wrathandglory', JSON.stringify(nouveauPersonnageData));
                navigate('/WrathAndGlory_JouerPersonnage');
            }
        } catch (err) {
            console.error("Erreur API :", err.response?.data || err.message);
            window.alert("Erreur lors de l'enregistrement : " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <>
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/WrathAndGlory_ListePersonnages" className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </Link>
            </div>
            <div className="Container-Creation-Avancee-Global">
                <h1>CRÉATION DE PERSONNAGE AVANCÉE</h1>
                <div className="Container-PX-Restant">
                    <label>Il vous reste {pxRestant} PX</label>
                </div>

                <div>
                    <div className="Container-Bloc-1-1">
                        <div className="Input">
                            <label>Nom : </label>
                            <input className="Input-Personage" type="text" style={{ width: '400px' }} value={nom} onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className="Input">
                            <label>Tier : </label>
                            <input className="Input-Personage" type="number" min='1' max='4' value={tier ?? 1} onChange={(e) => setTier(e.target.value)} disabled />
                        </div>
                        <div className="Input" style={{ position: "relative" }}>
                            <label>Espèce : </label>
                            {/*DDL Espèce*/}
                            <div className='dropdown' style={{ position: "absolute", left: '8rem', top: '-0.5rem', zIndex: '9999' }}>
                                <div className='dropdown-header' onClick={toggleDropdown} style={{ height: '1rem' }}>
                                    {selectedItem ? ListeEspeces.find(item => item.Id === selectedItem || item.nom === especeSelectionnée).Espèce : "Toutes les Espèces"}
                                    <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                                </div>
                                {isOpen && (
                                    <div className="dropdown-body open">
                                        {ListeEspeces.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClick(item.Id)} key={item.Id + "_Espèce"}>
                                                <span className={`dropdown-item-dot ${(item.Id === selectedItem || item.nom === especeSelectionnée) && 'selected'}`}>• </span>
                                                {item.Espèce}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Input">
                            <label>Rang : </label>
                            <input className="Input-Personage" type="number" value={rang} onChange={(e) => setRang(e.target.value)} disabled />
                        </div>
                        <div className="Input" style={{ position: "relative" }}>
                            <label>Faction : </label>
                            {/*DDL Faction*/}
                            <div className='dropdown' style={{ position: "absolute", left: '9rem', top: '-0.5rem', zIndex: '9990' }}>
                                <div className='dropdown-header' onClick={toggleDropdownFaction} style={{ height: '1rem' }}>
                                    {selectedItemFaction ? Faction.find(item => item.id === selectedItemFaction || item.faction === factionSelectionnée).faction : "Toutes les Factions"}
                                    <i className={`fa fa-chevron-right icon ${isOpenFaction && "open"}`}></i>
                                </div>
                                {isOpenFaction && (
                                    <div className="dropdown-body open">
                                        {Faction.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickFaction(item.id)} key={item.id + "_Faction"}>
                                                <span className={`dropdown-item-dot ${(item.id === selectedItemFaction || item.faction === factionSelectionnée) && 'selected'}`}>• </span>
                                                {item.faction}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Input" style={{ position: "relative" }}>
                            <label>Sous-Faction : </label>
                            {/*DDL Sous-Faction*/}
                            <div className='dropdown DropDown-Sous-Faction'>
                                <div className='dropdown-header' onClick={toggleDropdownSousFaction} style={{ height: '1rem' }}>
                                    {selectedItemSousFaction ? SousFaction.find(item => item.id === selectedItemSousFaction || item.sousfaction === sousFactionSelectionnée).sousfaction : "Toutes les Sous-Factions"}
                                    <i className={`fa fa-chevron-right icon ${isOpenSousFaction && "open"}`}></i>
                                </div>
                                {isOpenSousFaction && (
                                    <div className="dropdown-body open">
                                        {SousFaction.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickSousFaction(item.id)} key={item.id + "_Faction"}>
                                                <span className={`dropdown-item-dot ${(item.id === selectedItemSousFaction || item.sousfaction === sousFactionSelectionnée) && 'selected'}`}>• </span>
                                                {item.sousfaction}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Input">
                            <label>Mots-Clés : </label>
                            <input className="Input-Personage" type="text" style={{ width: '400px' }} value={motsCles} onChange={(e) => setMotsCles(e.target.value)} />
                        </div>
                        <div className="Input" style={{ flexDirection: 'column', display: 'flex' }}>
                            <label>Historique : </label>
                            <textarea style={{ height: '11rem', resize: 'none' }} value={historique} onChange={(e) => setHistorique(e.target.value)}></textarea>
                        </div>
                        <h3 className="Titre-Attributs" style={{ textAlign: 'center', marginLeft: '15rem' }}>ATTRIBUTS</h3>
                        <table style={{ width: '75%', marginLeft: '8rem' }}>
                            <thead>
                                <tr>
                                    <td style={{ width: '15%' }}>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>F</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>E</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>A</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>I</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>FM</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>Int</label>
                                    </td>
                                    <td style={{ width: '12%', textAlign: 'center' }}>
                                        <label>Soc</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Score</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={force}
                                            onChange={(e) => {
                                                const f = parseInt(e.target.value, 10);
                                                setForce(f);
                                                if (!isNaN(f)) {
                                                    handleAttributeChange(force, f, setForce);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxForce ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={endurance}
                                            onChange={(e) => {
                                                const en = parseInt(e.target.value, 10);
                                                setEdurance(en);
                                                if (!isNaN(en)) {
                                                    handleAttributeChange(endurance, en, setEndurance);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxEndurance ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={agilité}
                                            onChange={(e) => {
                                                const a = parseInt(e.target.value, 10);
                                                setAgilité(a);
                                                if (!isNaN(a)) {
                                                    handleAttributeChange(agilité, a, setAgilité);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxAgilité ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={initiative}
                                            onChange={(e) => {
                                                const i = parseInt(e.target.value, 10);
                                                setInitiative(i);
                                                if (!isNaN(i)) {
                                                    handleAttributeChange(initiative, i, setInitiative);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxInitiative ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={forceMentale}
                                            onChange={(e) => {
                                                const fm = parseInt(e.target.value, 10);
                                                setForceMentale(fm);
                                                if (!isNaN(fm)) {
                                                    handleAttributeChange(forceMentale, fm, setForceMentale);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxForceMentale ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={intelligence}
                                            onChange={(e) => {
                                                const int = parseInt(e.target.value, 10);
                                                setIntelligence(int);
                                                if (!isNaN(int)) {
                                                    handleAttributeChange(intelligence, int, setIntelligence);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxIntelligence ?? 8}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={sociabilité}
                                            onChange={(e) => {
                                                const soc = parseInt(e.target.value, 10);
                                                setSociabilité(soc);
                                                if (!isNaN(soc)) {
                                                    handleAttributeChange(sociabilité, soc, setSociabilité);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="1"
                                            max={especeSelectionnée?.MaxSociabilité ?? 8}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Bonus</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusForce}
                                            onChange={(e) => {
                                                const bf = parseInt(e.target.value, 10);
                                                setBonusForce(bf);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusEndurance}
                                            onChange={(e) => {
                                                const be = parseInt(e.target.value, 10);
                                                setBonusEndurance(be);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusAgilité}
                                            onChange={(e) => {
                                                const ba = parseInt(e.target.value, 10);
                                                setBonusAgilité(ba);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusInitiative}
                                            onChange={(e) => {
                                                const bi = parseInt(e.target.value, 10);
                                                setBonusInitiative(bi);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusForceMentale}
                                            onChange={(e) => {
                                                const bfm = parseInt(e.target.value, 10);
                                                setBonusForceMentale(bfm);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusIntelligence}
                                            onChange={(e) => {
                                                const bint = parseInt(e.target.value, 10);
                                                setBonusIntelligence(bint);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={bonusSociabilité}
                                            onChange={(e) => {
                                                const bsoc = parseInt(e.target.value, 10);
                                                setBonusSociabilité(bsoc);
                                            }}
                                            className="Input-Personage"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>TOTAL</label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                force + bonusForce
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                endurance + bonusEndurance
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                agilité + bonusAgilité
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                initiative + bonusInitiative
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                forceMentale + bonusForceMentale
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + bonusIntelligence
                                            }
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                sociabilité + bonusSociabilité
                                            }
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ width: '50%' }}>
                        <h3 style={{ textAlign: 'center' }}>COMPÉTENCES</h3>
                        <table style={{ width: '75%', margin: 'auto', height: '60vh' }}>
                            <thead>
                                <tr>
                                    <td colSpan='2'>
                                    </td>
                                    <td>
                                        <label>Score</label>
                                    </td>
                                    <td>
                                        <label>TOTAL</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Athlétisme</label>
                                    </td>
                                    <td>
                                        <label>F</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={athlétisme}
                                            onChange={(e) => {
                                                const ath = parseInt(e.target.value, 10);
                                                setAthlétisme(ath);
                                                if (!isNaN(ath)) {
                                                    handleCompetenceChange(athlétisme, ath, setAthlétisme);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                force + athlétisme
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Capacité De Combat</label>
                                    </td>
                                    <td>
                                        <label>I</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={capacitéDeCombat}
                                            onChange={(e) => {
                                                const cdc = parseInt(e.target.value, 10);
                                                setCapacitéDeCombat(cdc);
                                                if (!isNaN(cdc)) {
                                                    handleCompetenceChange(capacitéDeCombat, cdc, setCapacitéDeCombat);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                initiative + capacitéDeCombat
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Capacité De Tir</label>
                                    </td>
                                    <td>
                                        <label>A</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={capacitéDeTir}
                                            onChange={(e) => {
                                                const cdt = parseInt(e.target.value, 10);
                                                setCapacitéDeTir(cdt);
                                                if (!isNaN(cdt)) {
                                                    handleCompetenceChange(capacitéDeTir, cdt, setCapacitéDeTir);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                agilité + capacitéDeTir
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Commandemant</label>
                                    </td>
                                    <td>
                                        <label>FM</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={commandement}
                                            onChange={(e) => {
                                                const comm = parseInt(e.target.value, 10);
                                                setCommandement(comm);
                                                if (!isNaN(comm)) {
                                                    handleCompetenceChange(commandement, comm, setCommandement);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                forceMentale + commandement
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Connaissance</label>
                                    </td>
                                    <td>
                                        <label>Int</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={connaissance}
                                            onChange={(e) => {
                                                const conn = parseInt(e.target.value, 10);
                                                setConnaissance(conn);
                                                if (!isNaN(conn)) {
                                                    handleCompetenceChange(connaissance, conn, setConnaissance);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + connaissance
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Duperie</label>
                                    </td>
                                    <td>
                                        <label>Soc</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={duperie}
                                            onChange={(e) => {
                                                const dup = parseInt(e.target.value, 10);
                                                setDuperie(dup);
                                                if (!isNaN(dup)) {
                                                    handleCompetenceChange(duperie, dup, setDuperie);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                sociabilité + duperie
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Furtivité</label>
                                    </td>
                                    <td>
                                        <label>A</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={furtivité}
                                            onChange={(e) => {
                                                const fur = parseInt(e.target.value, 10);
                                                setFurtivité(fur);
                                                if (!isNaN(fur)) {
                                                    handleCompetenceChange(furtivité, fur, setFurtivité);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                agilité + furtivité
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Intimidation</label>
                                    </td>
                                    <td>
                                        <label>FM</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={intimidation}
                                            onChange={(e) => {
                                                const intim = parseInt(e.target.value, 10);
                                                setIntimidation(intim);
                                                if (!isNaN(intim)) {
                                                    handleCompetenceChange(intimidation, intim, setIntimidation);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                forceMentale + intimidation
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Investigation</label>
                                    </td>
                                    <td>
                                        <label>Int</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={investigation}
                                            onChange={(e) => {
                                                const ivest = parseInt(e.target.value, 10);
                                                setInvestigation(invest);
                                                if (!isNaN(invest)) {
                                                    handleCompetenceChange(investigation, invest, setInvestigation);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + investigation
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Maîtrise Psychique</label>
                                    </td>
                                    <td>
                                        <label>FM</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={maîtrisePsychique}
                                            onChange={(e) => {
                                                const maipsy = parseInt(e.target.value, 10);
                                                setMaîtrisePsychique(maipsy);
                                                if (!isNaN(maipsy)) {
                                                    handleCompetenceChange(maîtrisePsychique, maipsy, setMaîtrisePsychique);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                forceMentale + maîtrisePsychique
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Medicae</label>
                                    </td>
                                    <td>
                                        <label>Int</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={medicae}
                                            onChange={(e) => {
                                                const medi = parseInt(e.target.value, 10);
                                                setMedicae(medi);
                                                if (!isNaN(medi)) {
                                                    handleCompetenceChange(medicae, medi, setMedicae);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + medicae
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Persuasion</label>
                                    </td>
                                    <td>
                                        <label>Soc</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={persuasion}
                                            onChange={(e) => {
                                                const pers = parseInt(e.target.value, 10);
                                                setPersuasion(pers);
                                                if (!isNaN(pers)) {
                                                    handleCompetenceChange(persuasion, pers, setPersuasion);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                sociabilité + persuasion
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Pilotage</label>
                                    </td>
                                    <td>
                                        <label>A</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={pilotage}
                                            onChange={(e) => {
                                                const pil = parseInt(e.target.value, 10);
                                                setPilotage(pil);
                                                if (!isNaN(pil)) {
                                                    handleCompetenceChange(pilotage, pil, setPilotage);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                agilité + pilotage
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Psychologie</label>
                                    </td>
                                    <td>
                                        <label>Soc</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={psychologie}
                                            onChange={(e) => {
                                                const psy = parseInt(e.target.value, 10);
                                                setPsychologie(psy);
                                                if (!isNaN(psy)) {
                                                    handleCompetenceChange(psychologie, psy, setPsychologie);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                sociabilité + psychologie
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Ruse</label>
                                    </td>
                                    <td>
                                        <label>Soc</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={ruse}
                                            onChange={(e) => {
                                                const rus = parseInt(e.target.value, 10);
                                                setRuse(rus);
                                                if (!isNaN(rus)) {
                                                    handleCompetenceChange(ruse, rus, setRuse);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                sociabilité + ruse
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Survie</label>
                                    </td>
                                    <td>
                                        <label>FM</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={survie}
                                            onChange={(e) => {
                                                const sur = parseInt(e.target.value, 10);
                                                setSurvie(sur);
                                                if (!isNaN(sur)) {
                                                    handleCompetenceChange(survie, sur, setSurvie);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                forceMentale + survie
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Technomaîtrise</label>
                                    </td>
                                    <td>
                                        <label>Int</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={technomaîtrise}
                                            onChange={(e) => {
                                                const tecmai = parseInt(e.target.value, 10);
                                                setTechnomaîtrise(tecmai);
                                                if (!isNaN(tecmai)) {
                                                    handleCompetenceChange(technomaîtrise, tecmai, setTechnomaîtrise);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + technomaîtrise
                                            }
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Vigilance</label>
                                    </td>
                                    <td>
                                        <label>Int</label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={vigilance}
                                            onChange={(e) => {
                                                const vig = parseInt(e.target.value, 10);
                                                setVigilance(vig);
                                                if (!isNaN(vig)) {
                                                    handleCompetenceChange(vigilance, vig, setVigilance);
                                                }
                                            }}
                                            className="Input-Personage"
                                            min="0"
                                            max="8"
                                        />
                                    </td>
                                    <td>
                                        <label>
                                            {
                                                intelligence + vigilance
                                            }
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h3 style={{ textAlign: 'center' }}>SURVIE</h3>
                <table style={{ width: '90%', margin: 'auto'}}>
                    <thead>
                        <tr>
                            <td style={{ width: '12.5%' }}>
                                <h4 style={{ textAlign: 'center' }}>Défense</h4>
                            </td>
                            <td colSpan='3' style={{ width: '37.5%' }}>
                                <h4 style={{ textAlign: 'center' }}>Résistance</h4>
                            </td>
                            <td colSpan='2' style={{ width: '25%' }}>
                                <h4 style={{ textAlign: 'center' }}>Bléssures</h4>
                            </td>
                            <td colSpan='2' style={{ width: '25%' }}>
                                <h4 style={{ textAlign: 'center' }}>Stress</h4>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan='2' style={{ position: 'relative' }}>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                    {
                                        initiative - 1
                                    }
                                </label>
                                <label style={{ position: 'absolute', right: '10px', bottom: '10px', fontSize: '1rem' }}>= Initiative - 1</label>
                            </td>
                            <td>
                                <label style={{ textAlign: 'center', margin: 'auto', display: 'block' }}>Base</label>
                            </td>
                            <td>
                                <label style={{ textAlign: 'center', margin: 'auto', display: 'block' }}>Armure</label>
                            </td>
                            <td>
                                <label style={{ textAlign: 'center', margin: 'auto', display: 'block' }}>Total</label>
                            </td>
                            <td rowSpan='2' style={{ width: '12.5%' }}>
                                <textarea style={{ height: '11rem', resize: 'none', border: 'none' }} value={blessures} onChange={(e) => setBlessures(e.target.value)}></textarea>
                                </td>
                            <td rowSpan='2' style={{ position: 'relative' }}>
                                <label style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>MAX</label>
                                <label style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1rem' }}>= E + (2x Tier)</label>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                    {
                                        endurance + (2 * tier)
                                    }
                                </label>
                            </td>
                            <td rowSpan='2'>
                                <textarea style={{ height: '11rem', resize: 'none', border: 'none' }} value={stress} onChange={(e) => setStress(e.target.value)}></textarea>
                            </td>
                            <td style={{ position: 'relative', width: '15%' }}>
                                <label style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>MAX</label>
                                <label style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1rem' }}>= FM + Tier</label>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                    {
                                        forceMentale + tier
                                    }
                                </label>
                            </td>
                        </tr>
                        <tr style={{ height: '6rem' }}>
                            <td style={{ position: 'relative' }}>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                    {
                                        endurance + 1
                                    }
                                </label>
                                <label style={{ position: 'absolute', right: '10px', bottom: '10px', fontSize: '1rem' }}>= Endurance + 1</label>
                            </td>
                            <td>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                {
                                    Math.max(0, ...ArmurePossedees.map(a => Number(a.Ar) || 0))
                                }
                                </label>
                            </td>
                            <td>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
                                    {
                                        (endurance + 1 ) + (Math.max(0, ...ArmurePossedees.map(a => Number(a.Ar) || 0)))
                                    }
                                </label>
                            </td>
                            <td style={{ position: 'relative' }}>
                                <label style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>Détermination</label>
                                <label style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1rem' }}>= E</label>
                                <label style={{ margin: 'auto', display: 'block', textAlign: 'center' }}> { endurance } </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
                    <div style={{ width: '40%', margin: 'auto' }}>
                        <h3 style={{ textAlign: 'center' }}>TALENTS</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: '2px solid hsl(0 0% 60%)', borderRadius: '20px', backgroundColor: 'black', padding: '2rem'  }}>
                            <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeTalents(ListeTalents); AfficheDivSelectTalents() }}><label>Talents</label></div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                                {
                                    TalentsPossedees.map(Talents => (
                                        <label style={{ position: 'relative' }}>
                                            {Talents.Nom}
                                            <div style={{ width: "20px", height: '20px', position: 'absolute', top: '0px', left: '0px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => sellTalents(Talents)}>
                                                <CroixIcon
                                                    size={20}
                                                    color="red"
                                                />
                                            </div>
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%', margin: 'auto' }}>
                        <h3 style={{ textAlign: 'center' }}>APTITUDES</h3>
                        <textarea style={{ resize: 'none', width: '100%', height: '20rem' }} value={aptitudes} onChange={(e) => setAptitudes(e.target.value)}></textarea>
                    </div>
                </div>

                <h3 style={{ textAlign: 'center' }}>POUVOIRS PSYCHIQUES</h3>
                <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', borderRadius: '20px', minHeight: '20vh', width: '80vw', margin: 'auto', padding: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: '1rem' }}>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListePouvoirsPsychiquesMineurs); AfficheDivSelectPouvoirPsychique() }}><label>Pouvoirs Psychiques Mineurs</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListePouvoirsPsychiquesUniversels); AfficheDivSelectPouvoirPsychique() }}><label>Pouvoirs Psychiques Universels</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomainePsychiqueUniversel); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Psychique Universel</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineBiomancie); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Biomancie</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineDivination); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Divination</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomainePyromancie); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Pyromancie</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineTelekinesie); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Telekinesie</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineTelepathie); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Telepathie</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineMaleficarum); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Maleficarum</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListeDomaineDesRunesDeBataille); AfficheDivSelectPouvoirPsychique() }}><label>Domaine Des Runes De Bataille</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListePouvoirPsychique(ListePouvoirsFoi); AfficheDivSelectPouvoirPsychique() }}><label>Pouvoirs de Foi</label></div>
                    </div>
                    <div style={{ margin: '1.5rem' }}>
                        <table style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}>
                            <thead>
                                <tr>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Pouvoir</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>SD</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Activation</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Durée</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Portée</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Cible</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Effet</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pouvoirPsychiquePossedees.map(pouvPsy => (

                                        <tr style={{ position: 'relative' }}>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.Nom}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.SD}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.Activation}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.Durée}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.Portée}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.CiblesMultiples}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{pouvPsy.Effet}</label>
                                            </td>
                                            <div style={{ width: "30px", height: '30px', position: 'absolute', top: '0px', left: '0px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => sellPouvoirPsychique(pouvPsy)}>
                                                <CroixIcon
                                                    size={30}
                                                    color="red"
                                                />
                                            </div>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>

                        
                    </div>
                </div>

                <h3 style={{ textAlign: 'center' }}>ARMES</h3>
                <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', borderRadius: '20px', minHeight: '20vh', width: '80vw', margin: 'auto', padding: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: '1rem' }}>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArme(ListeArmesImpériales); AfficheDivSelectArme() }}><label>Armes Impériales</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArme(ListeArmesAeldari); AfficheDivSelectArme() }}><label>Armes Aeldari</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArme(ListeArmesOrk); AfficheDivSelectArme() }}><label>Armes Ork</label></div>
                    </div>
                    <div style={{ margin: '1.5rem' }}>
                        <table style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}>
                            <thead>
                                <tr>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Arme</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Dégâts</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>DS</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>PA</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Portée</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Rafale</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Traits</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Valeur</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Rareté</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Mots-Clés</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ArmePossedees.map(arme => (

                                        <tr style={{ position: 'relative' }}>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Nom}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Dégâts}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.DésDégâtsSupplémentaires}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.PénétrationArmure}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Portée}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Rafale}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Traits}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Valeur}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.Rareté}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{arme.MotsClés}</label>
                                            </td>
                                            <div style={{ width: "30px", height: '30px', position: 'absolute', top: '0px', left: '0px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => sellArme(arme)}>
                                                <CroixIcon
                                                    size={30}
                                                    color="red"
                                                />
                                            </div>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>

                        
                    </div>
                </div>

                <h3 style={{ textAlign: 'center' }}>ARMURES</h3>
                <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', borderRadius: '20px', minHeight: '20vh', width: '80vw', margin: 'auto', padding: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: '1rem' }}>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArmure(ListeArmureImpériales); AfficheDivSelectArmure() }}><label>Armures Impériales</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArmure(ListeArmureAeldari); AfficheDivSelectArmure() }}><label>Armures Aeldari</label></div>
                        <div className="Bouton-Pouvoirs-Psychiques" onClick={() => { setSelectedListeArmure(ListeArmureOrk); AfficheDivSelectArmure() }}><label>Armure Ork</label></div>
                    </div>
                    <div style={{ margin: '1.5rem' }}>
                        <table style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}>
                            <thead>
                                <tr>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Armure</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Ar</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Traits</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Valeur</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Rareté</label>
                                    </td>
                                    <td style={{ borderBottom: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                        <label>Mots-Clés</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ArmurePossedees.map(Armure => (

                                        <tr style={{ position: 'relative' }}>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.Nom}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.Ar}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.Traits}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.Valeur}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderRight: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.Rareté}</label>
                                            </td>
                                            <td style={{ borderTop: '2px solid hsl(0 0% 60%)', borderLeft: '2px solid hsl(0 0% 60%)' }}>
                                                <label>{Armure.MotsClés}</label>
                                            </td>
                                            <div style={{ width: "30px", height: '30px', position: 'absolute', top: '0px', left: '0px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => sellArmure(Armure)}>
                                                <CroixIcon
                                                    size={30}
                                                    color="red"
                                                />
                                            </div>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>

                        
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', border: '2px solid hsl( 0 0% 60%)', backgroundColor: 'black', height: '20vh', borderRadius: '20px', width: '80vw', margin: 'auto', marginTop: '5rem'}}>
                    <div style={{ width: '90%', position: 'relative' }} >
                        <label style={{ position: 'absolute', top: '10px', left: '10px' }}>Équipement</label>
                        <textarea style={{ width: '98%', height: '74%', marginTop: 'auto', marginBottom: '0px', display: 'block', padding: '1rem', paddingTop: '3rem', resize: 'none', border: 'none', borderRadius: '20px' }} value={equipement} onChange={(e) => setEquipement(e.target.value)}></textarea>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid hsl(0 0% 60%)', width: '10%' }}>
                        <div style={{ height: '50%', position: 'relative' }}>
                            <label style={{ position: 'absolute', top: '10px', left: '10px' }}>Influece</label>
                            <label style={{ textAlign: 'center', display: 'block', height: '100%', alignContent: 'center' }}>{sociabilité - 1}</label>
                            <label style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1rem' }}>= Soc - 1</label>
                        </div>
                        <div style={{ borderTop: '2px solid hsl(0 0% 60%)', height: '50%', position: 'relative' }}>
                            <label style={{ position: 'absolute', top: '10px', left: '10px' }}>Richesse</label>
                            <input type="number" className="Input-Personage" style={{ margin: 'auto', width: '95%', display: 'block', height: '90%', textAlign: 'center' }} value={richesse} onChange={(e) => setRichesse(e.target.value)} />
                            <label style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1rem' }}>Initialement = Tier</label>
                        </div>
                    </div>
                </div>


                <h3 style={{ textAlign: 'center' }}>BLESSURES & CORRUPTION</h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%', alignItems: 'stretch' }}>
                    <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', width: '25%', borderRadius: '20px' }}>
                        <h4 style={{ textAlign: 'center' }}>Blessures Graves</h4>
                        <label style={{ marginLeft: '1rem' }}>Maximum <span style={{ fontSize: '1rem' }}>= Tier + 1</span></label>
                        <ul style={{ listStyleType: 'decimal', paddingLeft: '2rem', marginLeft: '2rem' }}>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave1} onChange={(e) => setBlessureGrave1(e.target.value)} /></li>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave2} onChange={(e) => setBlessureGrave2(e.target.value)} /></li>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave3} onChange={(e) => setBlessureGrave3(e.target.value)} disabled={tier < 2} placeholder={tier < 2 ? "Bloqué (Tier 2 requis)" : ""} /></li>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave4} onChange={(e) => setBlessureGrave4(e.target.value)} disabled={tier < 3} placeholder={tier < 2 ? "Bloqué (Tier 3 requis)" : ""} /></li>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave5} onChange={(e) => setBlessureGrave5(e.target.value)} disabled={tier < 4} placeholder={tier < 2 ? "Bloqué (Tier 4 requis)" : ""} /></li>
                            <li><input type='text' className="Input-Personage" style={{ width: '90%', borderBottom: '2px solid hsl(0 0% 60%)' }} value={blessureGrave6} onChange={(e) => setBlessureGrave6(e.target.value)} disabled={tier < 5} placeholder={tier < 2 ? "Bloqué (Tier 5 requis)" : ""} /></li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', width: '25%', borderRadius: '20px' }}>
                        <h4 style={{ textAlign: 'center' }}>Blessures de Guerre</h4>
                        <textarea style={{ width: '94%', height: '65%', display: 'block', padding: '1rem', resize: 'none', border: 'none', borderRadius: '20px' }} value={blessuresGuerre} onChange={(e) => setBlessuresGuerre(e.target.value)}></textarea>
                    </div>
                    <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', width: '25%', borderRadius: '20px' }}>
                        <h4 style={{ textAlign: 'center' }}>Mutations</h4>
                        <textarea style={{ width: '94%', height: '65%', display: 'block', padding: '1rem', resize: 'none', border: 'none', borderRadius: '20px' }} value={mutations} onChange={(e) => setMutations(e.target.value)}></textarea>
                    </div>
                    <div style={{ backgroundColor: 'black', border: '2px solid hsl(0 0% 60%)', width: '25%', borderRadius: '20px' }}>
                        <table style={{ borderCollapse: 'collapse', backgroundColor: 'black', color: 'hsl(0 0% 60%)', border: 'none', width: '90%', height: '100%', margin: 'auto' }}>
                            <thead style={{ border: 'none' } }>
                                <tr>
                                    <th style={{ textAlign: 'center', padding: '5px', textTransform: 'uppercase' }}>Corruption</th>
                                    <th style={{ padding: '5px', textTransform: 'uppercase' }}>Level</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: 'none' } }>
                                {corruptionData.map((row, rowIndex) => (
                                    <tr key={rowIndex} style={{ border: 'none' } }>
                                        <td style={{ display: 'flex', gap: '5px', padding: '10px', border: 'none' }}>
                                            {row.slice(0, 5).map((isFilled, idx) => (
                                                <CheckboxCrâne
                                                    key={idx}
                                                    isChecked={isFilled}
                                                    onChange={() => toggleCrane(rowIndex, idx)}
                                                />
                                            ))}
                                        </td>

                                        <td style={{ textAlign: 'center', padding: '5px', border: 'none' }}>
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                border: '1px solid hsl(0 0% 60%)',
                                                margin: 'auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: row[5] ? 'hsl(0 0% 60%)' : 'transparent',
                                                color: row[5] ? 'black' : 'hsl(0 0% 60%)',
                                                fontWeight: 'bold',
                                                borderRadius: '4px'
                                            }}>
                                                {rowIndex + 1}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <button className="Bouton-Enregistrer-Personnage-Avancée" onClick={() => CreationPersonnage() }>
                    Terminer la Créationn du Personnage
                </button>


                <div className="Grand-Container-Select-Pouvoir-Psychique" id="Div-Select-Pouvoir-Psychique" ref={DivSelectPouvoirPsychique}>
                    <div className="Container-Select-Pouvoir-Psychique" onClick={AnnulerDivSelectPouvoirPsychique}>
                        <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()}>
                            <div className="IconeChevron-Left-Bouton-Retour" onClick={AnnulerDivSelectPouvoirPsychique} style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}>
                                <CroixIcon
                                    size={40}
                                    color={isHovered ? "black" : "hsl(0 0% 60%)"}
                                />
                            </div>
                            {/*DDL Pouvoirs Psychiques*/}
                            <div className='dropdown DDL-Pouvoir-Psychique'>
                                <div className='dropdown-header' onClick={toggleDropdownPouvoirsPsychiques} style={{ height: '1rem' }}>
                                    {selectedItemPouvoirsPsychiques ? selectedListePouvoirPsychique.find(item => item.Id === selectedItemPouvoirsPsychiques).Nom : "Touts les Pouvoirs Psychiques"}
                                    <i className={`fa fa-chevron-right icon ${isOpenPouvoirsPsychiques && "open"}`}></i>
                                </div>
                                {isOpenPouvoirsPsychiques && (
                                    <div className="dropdown-body open">
                                        {selectedListePouvoirPsychique.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickPouvoirsPsychiques(item.Id)} key={item.Id + "_Espèce"}>
                                                <span className={`dropdown-item-dot ${item.Id === selectedItemPouvoirsPsychiques && 'selected'}`}>• </span>
                                                {item.Nom}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button onClick={() => buyPouvoirPsychique(selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques))} className="Bouton-Achat-Pouvoir-Psychique">Acheter le Pouvoir Psychique</button>

                            <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label>Coût en PX : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.CoutPX || ""}</label>
                                <label>SD : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.SD || ""}</label>
                                <label>Activation : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Activation || ""}</label>
                                <label>Durée : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Durée || ""}</label>
                                <label>Portée : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Portée || ""}</label>
                                <label>Cibles multiples : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.CiblesMultiples || ""}</label>
                                <label>Mots-Clés : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.MotsCles || ""}</label>
                                <label>Prérequis : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Prerequis || ""}</label>
                                <label>Effet : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Effet || ""}</label>
                                <label>Surpuissance : {selectedListePouvoirPsychique?.find(pp => pp.Id === selectedItemPouvoirsPsychiques)?.Surpuissance || ""}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Grand-Container-Select-Pouvoir-Psychique" id="Div-Select-Arme" ref={DivSelectArme}>
                    <div className="Container-Select-Pouvoir-Psychique" onClick={AnnulerDivSelectArme}>
                        <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()}>
                            <div className="IconeChevron-Left-Bouton-Retour" onClick={AnnulerDivSelectArme} style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}>
                                <CroixIcon
                                    size={40}
                                    color={isHovered ? "black" : "hsl(0 0% 60%)"}
                                />
                            </div>
                            {/*DDL Armes*/}
                            <div className='dropdown DDL-Pouvoir-Psychique'>
                                <div className='dropdown-header' onClick={toggleDropdownArme} style={{ height: '1rem' }}>
                                    {selectedItemArme ? selectedListeArme.find(item => item.Id === selectedItemArme).Nom : "Toutes les Armes"}
                                    <i className={`fa fa-chevron-right icon ${isOpenArme && "open"}`}></i>
                                </div>
                                {isOpenArme && (
                                    <div className="dropdown-body open">
                                        {selectedListeArme.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickArme(item.Id)} key={item.Id + "_Espèce"}>
                                                <span className={`dropdown-item-dot ${item.Id === selectedItemArme && 'selected'}`}>• </span>
                                                {item.Nom}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button onClick={() => buyArme(selectedListeArme?.find(pp => pp.Id === selectedItemArme))} className="Bouton-Achat-Pouvoir-Psychique">Acheter l'Arme</button>

                            <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label>Dégâts : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Dégâts || ""}</label>
                                <label>Pénétration d'Armure : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.PénétrationArmure || ""}</label>
                                <label>Portée : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Portée || ""}</label>
                                <label>Rafale : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Rafale || ""}</label>
                                <label>Traits : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Traits || ""}</label>
                                <label>Valeur : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Valeur || ""}</label>
                                <label>Rareté : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.Rareté || ""}</label>
                                <label>Mots-Clés : {selectedListeArme?.find(pp => pp.Id === selectedItemArme)?.MotsClés || ""}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Grand-Container-Select-Pouvoir-Psychique" id="Div-Select-Armure" ref={DivSelectArmure}>
                    <div className="Container-Select-Pouvoir-Psychique" onClick={AnnulerDivSelectArmure}>
                        <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()}>
                            <div className="IconeChevron-Left-Bouton-Retour" onClick={AnnulerDivSelectArmure} style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}>
                                <CroixIcon
                                    size={40}
                                    color={isHovered ? "black" : "hsl(0 0% 60%)"}
                                />
                            </div>
                            {/*DDL Armures*/}
                            <div className='dropdown DDL-Pouvoir-Psychique'>
                                <div className='dropdown-header' onClick={toggleDropdownArmure} style={{ height: '1rem' }}>
                                    {selectedItemArmure ? selectedListeArmure.find(item => item.Id === selectedItemArmure).Nom : "Toutes les Armures"}
                                    <i className={`fa fa-chevron-right icon ${isOpenArmure && "open"}`}></i>
                                </div>
                                {isOpenArmure && (
                                    <div className="dropdown-body open">
                                        {selectedListeArmure.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickArmure(item.Id)} key={item.Id + "_Espèce"}>
                                                <span className={`dropdown-item-dot ${item.Id === selectedItemArmure && 'selected'}`}>• </span>
                                                {item.Nom}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button onClick={() => buyArmure(selectedListeArmure?.find(pp => pp.Id === selectedItemArmure))} className="Bouton-Achat-Pouvoir-Psychique">Acheter l'Armure</button>

                            <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label>Ar : {selectedListeArmure?.find(pp => pp.Id === selectedItemArmure)?.Ar || ""}</label>
                                <label>Traits : {selectedListeArmure?.find(pp => pp.Id === selectedItemArmure)?.Traits || ""}</label>
                                <label>Valeur : {selectedListeArmure?.find(pp => pp.Id === selectedItemArmure)?.Valeur || ""}</label>
                                <label>Rareté : {selectedListeArmure?.find(pp => pp.Id === selectedItemArmure)?.Rareté || ""}</label>
                                <label>Mots-Clés : {selectedListeArmure?.find(pp => pp.Id === selectedItemArmure)?.MotsClés || ""}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Grand-Container-Select-Pouvoir-Psychique" id="Div-Select-Talents" ref={DivSelectTalents}>
                    <div className="Container-Select-Pouvoir-Psychique" onClick={AnnulerDivSelectTalents}>
                        <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()}>
                            <div className="IconeChevron-Left-Bouton-Retour" onClick={AnnulerDivSelectTalents} style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}>
                                <CroixIcon
                                    size={40}
                                    color={isHovered ? "black" : "hsl(0 0% 60%)"}
                                />
                            </div>
                            {/*DDL Talentss*/}
                            <div className='dropdown DDL-Pouvoir-Psychique'>
                                <div className='dropdown-header' onClick={toggleDropdownTalents} style={{ height: '1rem' }}>
                                    {selectedItemTalents ? selectedListeTalents.find(item => item.Id === selectedItemTalents).Nom : "Toutes les Talentss"}
                                    <i className={`fa fa-chevron-right icon ${isOpenTalents && "open"}`}></i>
                                </div>
                                {isOpenTalents && (
                                    <div className="dropdown-body open">
                                        {selectedListeTalents.map(item => (
                                            <div className="dropdown-item" onClick={() => handleItemClickTalents(item.Id)} key={item.Id + "_Espèce"}>
                                                <span className={`dropdown-item-dot ${item.Id === selectedItemTalents && 'selected'}`}>• </span>
                                                {item.Nom}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button onClick={() => buyTalents(selectedListeTalents?.find(pp => pp.Id === selectedItemTalents))} className="Bouton-Achat-Pouvoir-Psychique">Acheter l'Talents</button>

                            <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label>Coût en PX : {selectedListeTalents?.find(pp => pp.Id === selectedItemTalents)?.CoûtPX || ""}</label>
                                <label>Prérequis : {selectedListeTalents?.find(pp => pp.Id === selectedItemTalents)?.Prérequis || ""}</label>
                                <label>Effet : {selectedListeTalents?.find(pp => pp.Id === selectedItemTalents)?.Effet || ""}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreationPersonnageAvancee;