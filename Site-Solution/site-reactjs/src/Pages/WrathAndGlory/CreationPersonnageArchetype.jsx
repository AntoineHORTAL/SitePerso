import { ListeArchetype } from '../../Listes/WrathAndGlory/Archetype'
import { useState } from 'react'
import * as Lucide from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function CreationPersonnageArchetype() {

    const MotsClés = [
        { id: 1, mot: "IMPERIUM" },
        { id: 2, mot: "ADEPTUS MINISTORUM" },
        { id: 3, mot: "ADEPTA SORORITAS" },
        { id: 4, mot: "[ORDRE]" },
        { id: 5, mot: "HUMAIN" },
        { id: 6, mot: "ASTRA MILITARUM" },
        { id: 8, mot: "MILITAIRE" },
        { id: 9, mot: "[RÉGIMENT]" },
        { id: 10, mot: "INFANTERIE" },
        { id: 11, mot: "OFFICIER" },
        { id: 12, mot: "SCHOLASTICA PSYKANA" },
        { id: 13, mot: "PSYKER" },
        { id: 14, mot: "COMMISSAR" },
        { id: 15, mot: "ADEPTUS MECHANICUS" },
        { id: 16, mot: "[MONDE FORGE]" },
        { id: 17, mot: "INQUISITION" },
        { id: 18, mot: "[INQUISITEUR]" },
        { id: 19, mot: "ROGUE TRADER" },
        { id: 20, mot: "[VAISSEAU]" },
        { id: 21, mot: "SCUM" },
        { id: 22, mot: "ADEPTUS ASTARTES" },
        { id: 23, mot: "[CHAPITRE]" },
        { id: 24, mot: "PRIMARIS" },
        { id: 25, mot: "ULTRAMARINES" },
        { id: 26, mot: "ABHUMAIN" },
        { id: 27, mot: "CHAOS" },
        { id: 28, mot: "HERETIC ASTARTES" },
        { id: 29, mot: "[MARQUE DU CHAOS]" },
        { id: 30, mot: "CULTISTE" },
        { id: 31, mot: "AELDARI" },
        { id: 32, mot: "ASURYANI" },
        { id: 33, mot: "[VAISSEAU-MONDE]" },
        { id: 34, mot: "ANHRATHE" },
        { id: 35, mot: "ORK" },
        { id: 36, mot: "[CLAN]" },
        { id: 37, mot: "DROUITE" },
        { id: 38, mot: "COMMANDANT" },
        { id: 39, mot: "HARLEQUIN" },
        { id: 40, mot: "[CONFRÉRIE]" }
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

    const [isHovered, setIsHovered] = useState(false);

    const ChevronLeftIcon = Lucide.ChevronLeft;

    const navigate = useNavigate();

    const [tierActif, setTierActif] = useState(null);
    const [selectedItemMC, setSelectedItemMC] = useState(null); // Stocke l'ID
    const [selectedItemF, setSelectedItemF] = useState(null);  // Stocke l'ID
    const [selectedItemSousFaction, setSelectedItemSousFaction] = useState(null);  // Stocke l'ID

    // États pour l'affichage des menus
    const [isOpenMC, setOpenMC] = useState(false);
    const [isOpenF, setOpenF] = useState(false);
    const [isOpenSousFaction, setOpenSousFaction] = useState(false);


    const [nomPersonnage, setNomPersonnage] = useState("");

    // Fonctions utilitaires
    const toggleDropdownMC = () => {
        setOpenMC(!isOpenMC);
        setOpenF(false);
        setOpenSousFaction(false); // Fermer les autres est une bonne pratique
    };

    const toggleDropdownF = () => {
        setOpenF(!isOpenF);
        setOpenMC(false);
        setOpenSousFaction(false);
    };

    const toggleDropdownSousFaction = () => {
        setOpenSousFaction(!isOpenSousFaction); // On inverse l'état
        setOpenMC(false); // On ferme les autres
        setOpenF(false);  // On ferme les autres
    };

    const handleItemClickMC = (id) => {
        setSelectedItemMC(selectedItemMC === id ? null : id);
        setOpenMC(false);
    }
    const handleItemClickF = (id) => {
        setSelectedItemF(selectedItemF === id ? null : id);
        setOpenF(false);
    }
    const handleItemClickSousFaction = (id) => {
        setSelectedItemSousFaction(selectedItemSousFaction === id ? null : id);
        setOpenSousFaction(false);
    }

    const archetypesFiltrés = ListeArchetype.filter(Arc => {
        const matchTier = tierActif ? Arc.Tier === tierActif : false;

        const motRecherche = selectedItemMC ? MotsClés.find(m => m.id === selectedItemMC)?.mot : null;
        const matchMC = motRecherche ? Arc.MotsClés?.includes(motRecherche) : true;

        const matchF = selectedItemF
            ? Number(Arc.Faction) === Number(selectedItemF)
            : true;

        const matchSousFaction = selectedItemSousFaction
            ? Number(Arc.SousFaction) === Number(selectedItemSousFaction)
            : true;

        return matchTier && matchMC && matchF && matchSousFaction;
    });




    const [selectedArcForModal, setSelectedArcForModal] = useState(null); 
    const [choices, setChoices] = useState({
        attributs: true,
        competences: true,
        talents: {} // Objet pour stocker l'ID du talent et un booléen { 'Talent Nom': true }
    });
    const calculerPrixTotal = (arc) => {
        // Si arc n'existe pas encore (chargement ou modal fermée), on retourne 0
        if (!arc) return 0;

        let total = arc.CoûtPX || 0;

        if (choices.attributs) total += (arc.CoûtAttributConseil || 0);
        if (choices.competences) total += (arc.CompétencesConseilCoût || 0);

        if (Array.isArray(arc.TallentConseil)) {
            arc.TallentConseil.forEach(t => {
                if (choices.talents && choices.talents[t.Nom]) {
                    total += (t.CoûtPX || 0);
                }
            });
        }

        return total;
    };

    const AcheterArchétype = async () => {
        const User = JSON.parse(localStorage.getItem('user'));
        const Arc = selectedArcForModal;

        if (!User || !User.Id) return window.alert("Erreur : Utilisateur non connecté.");
        if (!nomPersonnage || nomPersonnage.trim() === "") return window.alert("Veuillez nommer votre personnage.");

        const coutTotal = calculerPrixTotal(Arc);
        const pxInitial = (Arc.Tier * 100);
        const pxRestantFinal = pxInitial - coutTotal;

        if (pxRestantFinal < 0) return window.alert("Vous n'avez pas assez de PX pour cette configuration.");

        // 4. Talents sélectionnés
        const talentsFinaux = [];
        if (Array.isArray(Arc.TallentConseil)) {
            Arc.TallentConseil.forEach(t => {
                if (choices.talents[t.Nom]) talentsFinaux.push(t);
            });
        }

        // 5. Objet final pour l'API
        const nouveauPersonnageData = {
            Personnages_WrathAndGlory: {
                Nom: nomPersonnage,
                IdUser: User.Id,
                Tier: Arc.Tier,
                Rang: 1,
                Archétype: Arc.Nom,
                Espèce: ListeEspeces.find(e => e.Id === Arc.Espèces)?.Espèce || "",
                Faction: Faction.find(f => f.id === Arc.Faction)?.faction || "",
                SousFaction: SousFaction.find(s => s.id === Arc.SousFaction)?.sousfaction || "",
                MotsClés: Arc.MotsClés,
                PXRestant: pxRestantFinal,
                PXTotal: pxInitial,

                /* ATTRIBUTS */
                Force: 1 + (Arc.Attributs?.Force || 0) + (choices.attributs ? (Arc.ForceConseil || 0) : 0),
                Endurance: 1 + (Arc.Attributs?.Endurance || 0) + (choices.attributs ? (Arc.EndurenceConseil || 0) : 0),
                Agilité: 1 + (Arc.Attributs?.Agilité || 0) + (choices.attributs ? (Arc.AgiliteConseil || 0) : 0),
                Initiative: 1 + (Arc.Attributs?.Initiative || 0) + (choices.attributs ? (Arc.InitiativeConseil || 0) : 0),
                ForceMentale: 1 + (Arc.Attributs?.ForceMentale || 0) + (choices.attributs ? (Arc.ForceMentaleConseil || 0) : 0),
                Intelligence: 1 + (Arc.Attributs?.Intelligence || 0) + (choices.attributs ? (Arc.Intelligncve || 0) : 0),
                Sociabilité: 1 + (Arc.Attributs?.Sociabilité || 0) + (choices.attributs ? (Arc.SociabiliteConseil || 0) : 0),

                /* COMPÉTENCES (Fusion des prérequis + conseils si cochés) */
                Athlétisme: (Arc.Compétences?.Athlétisme || 0) + (choices.competences ? (Arc.CompetenceConseil?.Athlétisme || 0) : 0),
                CapacitéCombat: (Arc.Compétences?.CapacitéCombat || 0) + (choices.competences ? (Arc.CompetenceConseil?.CapacitéCombat || 0) : 0),
                CapacitéTir: (Arc.Compétences?.CapacitéTir || 0) + (choices.competences ? (Arc.CompetenceConseil?.CapacitéTir || 0) : 0),
                Commandemant: (Arc.Compétences?.Commandemant || 0) + (choices.competences ? (Arc.CompetenceConseil?.Commandemant || 0) : 0),
                Connaissance: (Arc.Compétences?.Connaissance || 0) + (choices.competences ? (Arc.CompetenceConseil?.Connaissance || 0) : 0),
                Duperie: (Arc.Compétences?.Duperie || 0) + (choices.competences ? (Arc.CompetenceConseil?.Duperie || 0) : 0),
                Furtivité: (Arc.Compétences?.Furtivité || 0) + (choices.competences ? (Arc.CompetenceConseil?.Furtivité || 0) : 0),
                Intimidation: (Arc.Compétences?.Intimidation || 0) + (choices.competences ? (Arc.CompetenceConseil?.Intimidation || 0) : 0),
                Investigation: (Arc.Compétences?.Investigation || 0) + (choices.competences ? (Arc.CompetenceConseil?.Investigation || 0) : 0),
                MaîtrisePsychique: (Arc.Compétences?.MaîtrisePsychique || 0) + (choices.competences ? (Arc.CompetenceConseil?.MaîtrisePsychique || 0) : 0),
                Medicae: (Arc.Compétences?.Medicae || 0) + (choices.competences ? (Arc.CompetenceConseil?.Medicae || 0) : 0),
                Persuasion: (Arc.Compétences?.Persuasion || 0) + (choices.competences ? (Arc.CompetenceConseil?.Persuasion || 0) : 0),
                Pilotage: (Arc.Compétences?.Pilotage || 0) + (choices.competences ? (Arc.CompetenceConseil?.Pilotage || 0) : 0),
                Psychologie: (Arc.Compétences?.Psychologie || 0) + (choices.competences ? (Arc.CompetenceConseil?.Psychologie || 0) : 0),
                Ruse: (Arc.Compétences?.Ruse || 0) + (choices.competences ? (Arc.CompetenceConseil?.Ruse || 0) : 0),
                Survie: (Arc.Compétences?.Survie || 0) + (choices.competences ? (Arc.CompetenceConseil?.Survie || 0) : 0),
                Technomaîtrise: (Arc.Compétences?.Technomaîtrise || 0) + (choices.competences ? (Arc.CompetenceConseil?.Technomaîtrise || 0) : 0),
                Vigilance: (Arc.Compétences?.Vigilance || 0) + (choices.competences ? (Arc.CompetenceConseil?.Vigilance || 0) : 0),

                /* ÉQUIPEMENT ET TALENTS */
                TalentsPossedees: talentsFinaux || [],
                Aptitudes: Arc.AptitudeArchetype || "",
                pouvoirPsychiquePossedees: Arc.PouvoirsPsychiques || [],
                ArmePossedees: Arc.Armes || [],
                ArmurePossedees: Arc.Armures || [],
                Equipement: Arc.Equipement || "",
                Richesse: Arc.Tier || "",
            }
        };

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await axios.post(`${API_URL}/API/API_Personnages_WrathAndGlory`, nouveauPersonnageData);

            console.log(nouveauPersonnageData);

            if (res.status === 201) {
                navigate('/WrathAndGlory_JouerPersonnage');
            }
        } catch (err) {
            console.error(err);
            window.alert("Erreur lors de la création.");
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
            <div className="Container-Archetype-Global">
                <h1 style={{ textAlign: 'center' }}>SELECTIONNER UN ARCHÉTYPES POUR VOTRE PERSONNAGE</h1>

                {/* Boutons de Tier */}
                <div className="Container-Bouton-Tier">
                    {[1, 2, 3, 4].map(t => (
                        <h2 key={t}
                            className={tierActif === t ? 'Active-Tier Bouton-Tier' : 'Bouton-Tier'}
                            onClick={() => setTierActif(tierActif === t ? null : t)}>
                            TIER {t}
                        </h2>
                    ))}
                </div>

                <div className="Container-Filtre">
                    {/* DDL Mots-Clés */}
                    <div className='dropdown'>
                        <div className='dropdown-header' onClick={toggleDropdownMC}>
                            {selectedItemMC ? MotsClés.find(item => item.id === selectedItemMC).mot : "Tous les Mots-Clés"}
                            <i className={`fa fa-chevron-right icon ${isOpenMC && "open"}`}></i>
                        </div>
                        {isOpenMC && (
                            <div className="dropdown-body open">
                                {MotsClés.map(item => (
                                    <div className="dropdown-item" onClick={() => handleItemClickMC(item.id)} key={item.id}>
                                        <span className={`dropdown-item-dot ${item.id === selectedItemMC && 'selected'}`}>• </span>
                                        {item.mot}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* DDL Factions */}
                    <div className='dropdown'>
                        <div className='dropdown-header' onClick={toggleDropdownF}>
                            {selectedItemF ? Faction.find(item => item.id === selectedItemF).faction : "Toutes les Factions"}
                            <i className={`fa fa-chevron-right icon ${isOpenF && "open"}`}></i>
                        </div>
                        {isOpenF && (
                            <div className="dropdown-body open">
                                {Faction.map(item => (
                                    <div className="dropdown-item" onClick={() => handleItemClickF(item.id)} key={item.id}>
                                        <span className={`dropdown-item-dot ${item.id === selectedItemF && 'selected'}`}>• </span>
                                        {item.faction}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* DDL SousFactions */}
                    <div className='dropdown'>
                        <div className='dropdown-header' onClick={toggleDropdownSousFaction}>
                            {selectedItemSousFaction ? SousFaction.find(item => item.id === selectedItemSousFaction).sousfaction : "Toutes les Sous-Factions"}
                            <i className={`fa fa-chevron-right icon ${isOpenSousFaction && "open"}`}></i>
                        </div>
                        {isOpenSousFaction && (
                            <div className="dropdown-body open">
                                {SousFaction.map(item => (
                                    <div className="dropdown-item" onClick={() => handleItemClickSousFaction(item.id)} key={item.id}>
                                        <span className={`dropdown-item-dot ${item.id === selectedItemSousFaction && 'selected'}`}>• </span>
                                        {item.sousfaction}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Affichage des résultats */}
                <div className="Container-Archetype">
                    {archetypesFiltrés.length > 0 ? (
                        archetypesFiltrés.map((Arc) => (
                            <div className="Archetype" key={Arc.Id}>
                                <h4>{Arc.Nom}</h4><br />

                                <label className="Label-CoutPX-Archetype">Coût PX :  {Arc.CoûtPX}</label>
                                <label className="Label-Faction-Archetype">Faction :  {Faction.find(f => f.id === Arc.Faction).faction}</label>
                                <label className="Label-SousFaction-Archetype">Sous-Faction :  {SousFaction.find(f => f.id === Arc.SousFaction).sousfaction}</label>

                                <label style={{ margin: 'auto', textAlign: 'center', display: 'block' }}>Espèce :  {ListeEspeces.find(e => e.Id === Arc.Espèces).Espèce}</label>
                                <label style={{ margin: 'auto', textAlign: 'center', display: 'block' }}>Tier :  {Arc.Tier}</label>
                                <p><strong>{Arc.DescriptionCourte}</strong></p><br />
                                <p>{Arc.DescriptionLongue}</p>
                                <div>
                                    <label>Mots-Clés : <strong style={{ color: 'darkred' }} >{Arc.MotsClés}</strong></label><br /><br />
                                    {Arc?.Attributs && Object.keys(Arc.Attributs).length > 0 && (
                                        <div>
                                            <h4>ATTRIBUTS</h4>
                                            <ul className="Liste-Attributs-Archétype">
                                                {Arc.Attributs?.Force && (
                                                    <li>
                                                        <label><strong>Force : </strong>{Arc.Attributs.Force}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.Endurance && (
                                                    <li>
                                                        <label><strong>Endurance : </strong>{Arc.Attributs.Endurance}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.Agilité && (
                                                    <li>
                                                        <label><strong>Agilité : </strong>{Arc.Attributs.Agilité}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.Initiative && (
                                                    <li>
                                                        <label><strong>Initiative : </strong>{Arc.Attributs.Initiative}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.ForceMentale && (
                                                    <li>
                                                        <label><strong>Force Mentale : </strong>{Arc.Attributs.ForceMentale}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.Intelligence && (
                                                    <li>
                                                        <label><strong>Intelligence : </strong>{Arc.Attributs.Intelligence}</label>
                                                    </li>
                                                )}
                                                {Arc.Attributs?.Sociabilité && (
                                                    <li>
                                                        <label><strong>Sociabilité : </strong>{Arc.Attributs.Sociabilité}</label>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                    <br /><br />
                                    {Arc?.Compétences && Object.keys(Arc.Compétences).length > 0 && (
                                        <div>
                                            <h4>COMPTÉNCES</h4>
                                            <ul className="Liste-Attributs-Archétype">
                                                {Arc.Compétences?.Athlétisme && (
                                                    <li>
                                                        <label><strong>Athlétisme : </strong>{Arc.Compétences.Athlétisme}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.CapacitéDeCombat && (
                                                    <li>
                                                        <label><strong>Capacité De Combat : </strong>{Arc.Compétences.CapacitéDeCombat}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.CapacitéDeTir && (
                                                    <li>
                                                        <label><strong>Capacité De Tir : </strong>{Arc.Compétences.CapacitéDeTir}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Commandement && (
                                                    <li>
                                                        <label><strong>Commandement : </strong>{Arc.Compétences.Commandement}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Connaissance && (
                                                    <li>
                                                        <label><strong>Connaissance : </strong>{Arc.Compétences.Connaissance}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Duperie && (
                                                    <li>
                                                        <label><strong>Duperie : </strong>{Arc.Compétences.Duperie}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Furtivité && (
                                                    <li>
                                                        <label><strong>Furtivité : </strong>{Arc.Compétences.Furtivité}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Intimidation && (
                                                    <li>
                                                        <label><strong>Intimidation : </strong>{Arc.Compétences.Intimidation}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Investigation && (
                                                    <li>
                                                        <label><strong>Investigation : </strong>{Arc.Compétences.Investigation}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.MaîtrisePsychique && (
                                                    <li>
                                                        <label><strong>MaîtrisePsychique : </strong>{Arc.Compétences.MaîtrisePsychique}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Medicae && (
                                                    <li>
                                                        <label><strong>Medicae : </strong>{Arc.Compétences.Medicae}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Persuasion && (
                                                    <li>
                                                        <label><strong>Persuasion : </strong>{Arc.Compétences.Persuasion}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Pilotage && (
                                                    <li>
                                                        <label><strong>Pilotage : </strong>{Arc.Compétences.Pilotage}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Psychologie && (
                                                    <li>
                                                        <label><strong>Psychologie : </strong>{Arc.Compétences.Psychologie}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Ruse && (
                                                    <li>
                                                        <label><strong>Ruse : </strong>{Arc.Compétences.Ruse}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Survie && (
                                                    <li>
                                                        <label><strong>Survie : </strong>{Arc.Compétences.Survie}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Technomaîtrise && (
                                                    <li>
                                                        <label><strong>Technomaîtrise : </strong>{Arc.Compétences.Technomaîtrise}</label>
                                                    </li>
                                                )}
                                                {Arc.Compétences?.Vigilance && (
                                                    <li>
                                                        <label><strong>Vigilance : </strong>{Arc.Compétences.Vigilance}</label>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                    <br /><br />
                                    <label><strong>Aptitude d'Archétype</strong>{Arc.AttributArchetype}</label><br /><br />
                                    <label>Équipement : {Arc.Equipement}</label><br /><br />
                                    {Arc?.Armes && Object.keys(Arc.Armes).length > 0 && (
                                        <div>
                                            <h3>ARMES</h3>
                                            <ul className="Liste-Armes-Archétype">
                                                {Arc.Armes &&
                                                    Arc.Armes.map((arme, index) => (
                                                        <li key={index}>
                                                            <label><strong>{arme.Nom}</strong></label><br />
                                                            <ul className="Liste-Armes-Archétype Sous-Liste-Attributs-Armes">
                                                                <li>
                                                                    <label><strong>Description : </strong>{arme.Description}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Type : </strong>{arme.Type}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Pénétration d'Armure : </strong>{arme.PénétrationArmure}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Dégâts : </strong>{arme.Dégâts}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Dés De Dégâts Supplémentaires : </strong>{arme.DésDégâtsSupplémentaires}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Portée : </strong>{arme.Portée}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Rafale : </strong>{arme.Rafale}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Traits : </strong>{arme.Traits}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Valeur : </strong>{arme.Valeur}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Rareté : </strong>{arme.Rareté}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>MotsClés : </strong>{arme.MotsClés}</label>
                                                                </li>
                                                            </ul><br /><br />
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}

                                    {Arc?.Armures && Object.keys(Arc.Armures).length > 0 && (
                                        <div>
                                            <h3>ARMURES</h3>
                                            <ul className="Liste-Armes-Archétype">
                                                {Arc.Armures &&
                                                    Arc.Armures.map((armure, index) => (
                                                        <li key={index}>
                                                            <label><strong>{armure.Nom}</strong></label>
                                                            <ul>
                                                                <li>
                                                                    <label><strong>Description : </strong>{armure.Description}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Armure : </strong>{armure.Ar}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Effet : </strong>{armure.Effet}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Traits : </strong>{armure.Traits}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Valeur : </strong>{armure.Valeur}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Rareté : </strong>{armure.Rareté}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>MotsClés : </strong>{armure.MotsClés}</label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    ))}
                                            </ul><br /><br />
                                        </div>
                                    )}

                                    {
                                        Arc.Influence && Arc.Influence.trim() !== "" && (
                                            <label>Influence : {Arc.Influence}<br /><br /></label>
                                        )
                                    }

                                    {Arc?.CoûtAttributConseil && Arc.CoûtAttributConseil > 0 && (
                                        <div>
                                            <h3 className="Titre-Attributs-Conseil">ATTRIBUTS CONSEILLÉS<span className="Span-Attributs-Conseil">Coût PX : {Arc.CoûtAttributConseil}</span></h3>
                                            <table>
                                                <tbody className="Tbody-Table-Attributs-Conseil">
                                                    <tr className="Tr-Table-Attributs-Conseil">
                                                        <td>
                                                            <label>Attribut</label>
                                                        </td>
                                                        <td>
                                                            <label>Force</label>
                                                        </td>
                                                        <td>
                                                            <label>Endurence</label>
                                                        </td>
                                                        <td>
                                                            <label>Agilité</label>
                                                        </td>
                                                        <td>
                                                            <label>Initiative</label>
                                                        </td>
                                                        <td>
                                                            <label>Force Mentale</label>
                                                        </td>
                                                        <td>
                                                            <label>Intelligence</label>
                                                        </td>
                                                        <td>
                                                            <label>Sociabilité</label>
                                                        </td>
                                                    </tr>
                                                    <tr className="Tr-Table-Attributs-Conseil">
                                                        <td>
                                                            <label>Score</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.ForceConseil}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.EndurenceConseil}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.AgiliteConseil}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.InitiativeConseil}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.ForceMentaleConseil}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.Intelligncve}</label>
                                                        </td>
                                                        <td>
                                                            <label>{Arc.SociabiliteConseil}</label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {Arc?.CompétencesConseilCoût && Arc.CompétencesConseilCoût > 0 && (
                                        <div>
                                            <h3 className="Titre-Attributs-Conseil">COMPTENCES CONSEILLÉES<span className="Span-Compétences-Conseil">Coût PX : {Arc.CompétencesConseilCoût}</span></h3>
                                            <ul className="Liste-Attributs-Archétype">
                                                {Arc.CompetenceConseil?.Athlétisme && (
                                                    <li>
                                                        <label><strong>Athlétisme : </strong>{Arc.CompetenceConseil.Athlétisme}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.CapacitéDeCombat && (
                                                    <li>
                                                        <label><strong>Capacité De Combat : </strong>{Arc.CompetenceConseil.CapacitéDeCombat}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.CapacitéDeTir && (
                                                    <li>
                                                        <label><strong>Capacité De Tir : </strong>{Arc.CompetenceConseil.CapacitéDeTir}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Commandement && (
                                                    <li>
                                                        <label><strong>Commandement : </strong>{Arc.CompetenceConseil.Commandement}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Connaissance && (
                                                    <li>
                                                        <label><strong>Connaissance : </strong>{Arc.CompetenceConseil.Connaissance}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Duperie && (
                                                    <li>
                                                        <label><strong>Duperie : </strong>{Arc.CompetenceConseil.Duperie}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Furtivité && (
                                                    <li>
                                                        <label><strong>Furtivité : </strong>{Arc.CompetenceConseil.Furtivité}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Intimidation && (
                                                    <li>
                                                        <label><strong>Intimidation : </strong>{Arc.CompetenceConseil.Intimidation}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Investigation && (
                                                    <li>
                                                        <label><strong>Investigation : </strong>{Arc.CompetenceConseil.Investigation}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.MaîtrisePsychique && (
                                                    <li>
                                                        <label><strong>MaîtrisePsychique : </strong>{Arc.CompetenceConseil.MaîtrisePsychique}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Medicae && (
                                                    <li>
                                                        <label><strong>Medicae : </strong>{Arc.CompetenceConseil.Medicae}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Persuasion && (
                                                    <li>
                                                        <label><strong>Persuasion : </strong>{Arc.CompetenceConseil.Persuasion}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Pilotage && (
                                                    <li>
                                                        <label><strong>Pilotage : </strong>{Arc.CompetenceConseil.Pilotage}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Psychologie && (
                                                    <li>
                                                        <label><strong>Psychologie : </strong>{Arc.CompetenceConseil.Psychologie}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Ruse && (
                                                    <li>
                                                        <label><strong>Ruse : </strong>{Arc.CompetenceConseil.Ruse}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Survie && (
                                                    <li>
                                                        <label><strong>Survie : </strong>{Arc.CompetenceConseil.Survie}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Technomaîtrise && (
                                                    <li>
                                                        <label><strong>Technomaîtrise : </strong>{Arc.CompetenceConseil.Technomaîtrise}</label>
                                                    </li>
                                                )}
                                                {Arc.CompetenceConseil?.Vigilance && (
                                                    <li>
                                                        <label><strong>Vigilance : </strong>{Arc.CompetenceConseil.Vigilance}</label>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {Arc?.TallentConseil && Object.keys(Arc.TallentConseil).length > 0 && (
                                        <div>
                                            <h3 style={{ textAlign: 'center' }}>TALENTS CONSEILLÉS</h3>
                                            <ul className="Liste-Armes-Archétype">
                                                {Arc?.TallentConseil && (
                                                    Arc?.TallentConseil.map((talent, index) => (
                                                        <li key={index}>
                                                            <label><strong>{talent.Nom}</strong></label>
                                                            <ul>
                                                                {talent.CoûtPX && ( 
                                                                    <li>
                                                                        <label><strong>Coût en PX : </strong>{talent.CoûtPX}</label>
                                                                    </li>
                                                                )}
                                                                <li>
                                                                    <label><strong>Prérequis : </strong>{talent.Prerequis}</label>
                                                                </li>
                                                                <li>
                                                                    <label><strong>Effet : </strong>{talent.Effet}</label>
                                                                </li>
                                                            </ul>
                                                            <br /><br />
                                                        </li>
                                                    )))}
                                            </ul>
                                        </div>
                                    )}

                                    <button onClick={() => {
                                        setSelectedArcForModal(Arc);
                                        // Initialiser les talents par défaut à true
                                        const initTalents = {};
                                        if (Array.isArray(Arc.TallentConseil)) {
                                            Arc.TallentConseil.forEach(t => initTalents[t.Nom] = true);
                                        }
                                        setChoices({ attributs: true, competences: true, talents: initTalents });
                                    }}>
                                        Sélectionner cet Archétype
                                    </button>



                                    {selectedArcForModal && (
                                        <div className="Grand-Container-Select-Pouvoir-Psychique" style={{ display: 'flex' }}>
                                            <div className="Container-Select-Pouvoir-Psychique" onClick={() => setSelectedArcForModal(null)}>
                                                <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()} style={{ minWidth: '500px' }}>

                                                    {/* Bouton Fermer */}
                                                    <div className="IconeChevron-Left-Bouton-Retour"
                                                        onClick={() => setSelectedArcForModal(null)}
                                                        style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}>
                                                        <Lucide.X size={40} color="hsl(0 0% 60%)" />
                                                    </div>

                                                    <h2 style={{ textAlign: 'center', color: 'var(--main-color)' }}>{selectedArcForModal.Nom}</h2>

                                                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                                        <label>Entrez le nom de votre nouveau personnage : </label>
                                                        <input type='text' className="Input-Personage" style={{ border: "2px solid hsl(0 0% 60%)", padding: '1rem', borderRadius: '10px' }} onChange={(e) => setNomPersonnage(e.target.value)} placeholder="Nom de votre Personnage" />
                                                        <br /><br />


                                                        {/* Option Attributs */}
                                                        {selectedArcForModal.CoûtAttributConseil > 0 && (
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="Div-Checkbox-Confirmation">
                                                                <input type="checkbox" id="checkAttr" checked={choices.attributs}
                                                                    onChange={(e) => setChoices({ ...choices, attributs: e.target.checked  })}
                                                                    className="Checkbox-Confirmation"
                                                                />
                                                                <label htmlFor="checkAttr">Prendre les Attributs conseillés (+{selectedArcForModal.CoûtAttributConseil} PX)</label>
                                                            </div>
                                                        )}

                                                        {/* Option Compétences */}
                                                        {selectedArcForModal.CompétencesConseilCoût > 0 && (
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="Div-Checkbox-Confirmation">
                                                                <input type="checkbox" id="checkComp" checked={choices.competences}
                                                                    onChange={(e) => setChoices({ ...choices, competences: e.target.checked })}
                                                                    className="Checkbox-Confirmation"
                                                                />
                                                                <label htmlFor="checkComp">Prendre les Compétences conseillées (+{selectedArcForModal.CompétencesConseilCoût} PX)</label>
                                                            </div>
                                                        )}

                                                        {/* Section Talents conseillés */}
                                                        {Array.isArray(selectedArcForModal.TallentConseil) && selectedArcForModal.TallentConseil.length > 0 && (
                                                            <div style={{ borderTop: '1px solid #333', paddingTop: '1rem' }}>
                                                                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Talents conseillés :</label>
                                                                {selectedArcForModal.TallentConseil.map((t, i) => (
                                                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '20px', marginBottom: '8px' }} className="Div-Checkbox-Confirmation">
                                                                        <input type="checkbox" id={`t-${i}`} checked={choices.talents[t.Nom] || false}
                                                                            onChange={(e) => setChoices({
                                                                                ...choices,
                                                                                talents: { ...choices.talents, [t.Nom]: e.target.checked }
                                                                            })}
                                                                            className="Checkbox-Confirmation"
                                                                        />
                                                                        <label htmlFor={`t-${i}`}>{t.Nom} (+{t.CoûtPX || 0} PX)</label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Footer avec Total et Bouton Achat */}
                                                    <div style={{ padding: '2rem', borderTop: '1px solid var(--main-color)', textAlign: 'center' }}>
                                                        <h3 style={{ marginBottom: '1rem' }}>Coût Total : {calculerPrixTotal(Arc)} PX</h3>

                                                        <button className="Bouton-Achat-Pouvoir-Psychique" style={{ width: '100%' }} onClick={() => AcheterArchétype()}>
                                                            Confirmer la sélection
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Aucun archétype ne correspond à ces critères.</h2>
                    )}
                </div>
            </div>
        </>
    );
}

export default CreationPersonnageArchetype;