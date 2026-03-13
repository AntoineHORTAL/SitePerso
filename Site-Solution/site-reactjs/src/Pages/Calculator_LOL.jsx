import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import ZoneDrop from '../Composants/CalcultaorLOL/ZoneDrop';
import ItemDraggable from '../Composants/CalcultaorLOL/ItemDraggable';
import DivStatsChamp from '../Composants/CalcultaorLOL/DivStatsChamp';

import TopIcon from '../../public/Images/LOL/Top_icon.png';
import SupportIcon from '../../public/Images/LOL/Support_icon.png';
import MiddleIcon from '../../public/Images/LOL/Middle_icon.png';
import JungleIcon from '../../public/Images/LOL/Jungle_icon.png';
import BottomIcon from '../../public/Images/LOL/Bottom_icon.png';

import ExportToImage from '../Composants/CalcultaorLOL/ExportToImage';


function Calculator_LOL() {
    const [isHovered, setIsHovered] = useState(false);

    const [version, setVersion] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [listeChampions, setListeChampions] = useState();
    const [loadingChampions, setLoadingChampions] = useState(true);
    const [errorChampions, setErrorChampions] = useState(null);

    const [listeItems, setListeItems] = useState();
    const [loadingItems, setLoadingItems] = useState(true);
    const [errorItems, setErrorItems] = useState(null);

    const [listeRunes, setListeRunes] = useState();
    const [loadingRunes, setLoadingRunes] = useState(true);
    const [errorRunes, setErrorRunes] = useState(null);

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const RefreshCcwIcon = Lucide.RefreshCcw;

    const [selectedItem, setSelectedItem] = useState(null);

    const [itemsDropLaningPhase1, setItemsDropLaningPhase1] = useState([]);
    const [itemsDropLaningPhase2, setItemsDropLaningPhase2] = useState([]);
    const [itemsDropPostLaningPhase, setItemsDropPostLaningPhase] = useState([]);

    const [itemsDropStarter, setItemsDropStarter] = useState([]);
    const [itemsDropFirstBack, setItemsDropFirstBack] = useState([]);
    const [itemsDropCoreItem, setItemsDropCoreItem] = useState([]);
    const [itemsDropCoreBuildSuite, setItemsDropCoreBuildSuite] = useState([]);
    const [itemsDropSituationnels, setItemsDropSituationnels] = useState([]);
    const [itemsDropConsommables, setItemsDropConsommables] = useState([]);

    const [hp, setHp] = useState(0);
    const [hpPerLevel, setHpLevel] = useState(0);
    const [hpRegen, setHpRegen] = useState(0);
    const [hpRegenPerLevel, setHpRegenPerLevel] = useState(0);
    const [mp, setMp] = useState(0);
    const [mpPerLevel, setMpPerLevel] = useState(0);
    const [mpRegen, setMpRegen] = useState(0);
    const [mpRegenPerLevel, setMpRegenPerLevel] = useState(0);
    const [partype, setPartype] = useState("");
    const [armor, setArmor] = useState(0);
    const [armorPerLevel, setArmorPerLevel] = useState(0);
    const [spellblock, setSpellblock] = useState(0);
    const [spellblockPerLevel, setSpellblockPerLevel] = useState(0);
    const [attackDamage, setAttackDamage] = useState(0);
    const [attackDamagePerLevel, setAttackDamagePerLevel] = useState(0);
    const [attackSpeed, setAttackSpeed] = useState(0);
    const [attackSpeedPerLevel, setAttackSpeedPerLevel] = useState(0);
    const [crit, setCrit] = useState(0);
    const [critPerLevel, setCritPerLevel] = useState(0);

    const [nomChampion, setNomChampion] = useState("");
    const [imageChampion, setImageChampion] = useState("");

    const [isRoleSelected, setIsRoleSelected] = useState(false);
    const [isRuneSelected, setIsRuneSelected] = useState(false);
    const [isChampionSelected, setIsChampionSelected] = useState(false);

    const [attackRangeChamp, setAttackRangeChamp] = useState(0);
    const [moveSpeedChamp, setMoveSpeedChamp] = useState(0);
    const [ressourceChamp, setRessourceChamp] = useState("");

    const [selectedChampionStats, setSelectedChampionStats] = useState({});
    const [selectedRole, setSelectedRole] = useState("");
    const [isBuildFinish, setIsBuildFinish] = useState(false);

    const [checkedItems, setCheckedItems] = useState({});
    const [levelSelected, setLevelSelected] = useState(0);

    const [pointsVie, setPointsVie] = useState(0);
    const [mana, setMana] = useState(0);
    const [armure, setArmure] = useState(0);
    const [resistanceMagique, setResistanceMagique] = useState(0);
    const [tenacite, setTenacite] = useState(0);
    const [degatsAttaque, setDegatsAttaque] = useState(0);
    const [vitesseAttaque, setVitesseAttaque] = useState(0);
    const [chancesCoupCritique, setChancesCoupCritique] = useState(0);
    const [degatsCoupCritique, setDegatsCoupCritique] = useState(0);
    const [letalitePenetrationArmureFlat, setLetalitePenetrationArmureFlat] = useState(0);
    const [letalitePenetrationArmurePourcentage, setLetalitePenetrationArmurePourcentage] = useState(0);
    const [puissance, setPuissance] = useState(0);
    const [penetrationMagiqueFlat, setPenetrationMagiqueFlat] = useState(0);
    const [penetrationMagiquePourcentage, setPenetrationMagiquePourcentage] = useState(0);
    const [accelerationCompetence, setAccelerationCompetence] = useState(0);
    const [vitesseDeplacement, setVitesseDeplacement] = useState(0);
    const [omnivampirisme, setOmnivampirisme] = useState(0);
    const [volDeVie, setVolDeVie] = useState(0);
    const [efficaciteSoinsBoucliers, setEfficaciteSoinsBoucliers] = useState(0);
    const [regenerationVie, setRegenerationVie] = useState(0);
    const [regenerationMana, setRegenerationMana] = useState(0);


    const n = levelSelected > 0 ? levelSelected - 1 : 0;
    const pointsVieChamp = selectedChampionStats.hp + (selectedChampionStats.hpperlevel * n) || 0;
    const regenVieChamp = selectedChampionStats.hpregen + (selectedChampionStats.hpregenperlevel * n) || 0;
    const manaChamp = selectedChampionStats.mp + (selectedChampionStats.mpperlevel * n) || 0;
    const regenManaChamp = selectedChampionStats.mpregen + (selectedChampionStats.mpregenperlevel * n) || 0;
    const armureChamp = selectedChampionStats.armor + (selectedChampionStats.armorperlevel * n) || 0;
    const rmChamp = selectedChampionStats.spellblock + (selectedChampionStats.spellblockperlevel * n) || 0;
    const adChamp = selectedChampionStats.attackdamage + (selectedChampionStats.attackdamageperlevel * n) || 0;
    const asChamp = selectedChampionStats.attackspeed + (selectedChampionStats.attackspeedperlevel * n / 100) || 0;
    const critChamp = selectedChampionStats.crit + (selectedChampionStats.critperlevel * n) || 0;
    const msChamp = selectedChampionStats.movespeed || 0;

    const checkedItemsList = [...itemsDropLaningPhase1,...itemsDropLaningPhase2, ...itemsDropPostLaningPhase]
        .filter((item) => checkedItems[item.uniqueId] === true);

    const [filtreChampion, setFiltreChampion] = useState("");
    const [filtreItem, setFiltreItem] = useState("");

    const [selectedRunePrincipale, setSelectedRunePrincipale] = useState(null);
    const [selectedRunes, setSelectedRunes] = useState([]);
    const [hoveredRune, setHoveredRune] = useState(null);
    const [selectedRuneSecondaire, setSelectedRuneSecondaire] = useState(null);
    const [selectedRunesSecondaires, setSelectedRunesSecondaires] = useState([]);
    const [selectedRunesTertiaires, setSelectedRunesTertiaires] = useState([]);

    const [showExport, setShowExport] = useState(false);

    const filtres = [
        { id: "ad", label: "Dégâts d'attaque", icon: "/Images/LOL/icons-stats/ad.png" },
        { id: "ap", label: "Puissance", icon: "/Images/LOL/icons-stats/puissance.png" },
        { id: "as", label: "Vitesse d'Attaque", icon: "/Images/LOL/icons-stats/as.png" },
        { id: "hp", label: "PV et régénération", icon: "/Images/LOL/icons-stats/hp.png" },
        { id: "mana", label: "Mana et régénération", icon: "/Images/LOL/icons-stats/mana.png" },
        { id: "armor", label: "Armure", icon: "/Images/LOL/icons-stats/amure.png" },
        { id: "mr", label: "Résistance magique", icon: "/Images/LOL/icons-stats/rm.png" },
        { id: "crit", label: "Coup critique", icon: "/Images/LOL/icons-stats/crit.png" },
        { id: "ms", label: "Déplacements", icon: "/Images/LOL/icons-stats/moove-speed.png" },
        { id: "lethality", label: "Létalité", icon: "/Images/LOL/icons-stats/letalite.png" },
        { id: "pen", label: "Pénétration magique", icon: "/Images/LOL/icons-stats/pene-magique.png" },
        { id: "ah", label: "Accélération compétence", icon: "/Images/LOL/icons-stats/ah.png" },
        { id: "vamp", label: "Vol de vie / Vampirisme", icon: "/Images/LOL/icons-stats/vamp.png" },
    ];

    const [filtresActifs, setFiltresActifs] = useState([]);

    const [showDiv, setShowDiv] = useState(true);

    const [avancee, setAvancee] = useState(false);

    const toggleFiltre = (filtre) => {
        setFiltresActifs((prev) =>
            prev.includes(filtre) ? prev.filter(f => f !== filtre) : [...prev, filtre]
        );
    };

    const getItemStat = (statKey) =>
        checkedItemsList.reduce((acc, item) => {
            const fromApi = item.stats?.[statKey] || 0;
            if (fromApi) return acc + fromApi;
            const parsed = parseItemStats(item);
            return acc + (parsed[statKey] || 0);
        }, 0);

    const handleDragEnd = (event) => {
        const { over, active } = event;
        const item = active.data.current.item;
        const id = active.data.current.id;

        if (over?.id === "DropZone-Laning-Phase1") {
            setItemsDropLaningPhase1((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "DropZone-Laning-Phase2") {
            setItemsDropLaningPhase2((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "DropZone-Post-Laning-Phase") {
            setItemsDropPostLaningPhase((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-Starter") {
            setItemsDropStarter((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-First-Back") {
            setItemsDropFirstBack((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-Core-Item") {
            setItemsDropCoreItem((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-Core-Build-Suite") {
            setItemsDropCoreBuildSuite((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-Items-Situationnels") {
            setItemsDropSituationnels((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        } else if (over?.id === "Drop-Zone-Consommables") {
            setItemsDropConsommables((prev) => [...prev, { ...item, id, uniqueId: Date.now(), count: 1 }]);
        }
    };

    /*Récupère la version*/
    useEffect(() => {
        fetch("https://ddragon.leagueoflegends.com/api/versions.json")
            .then((res) => {
                if (!res.ok) throw new Error("Erreur réseau Version");
                return res.json();
            })
            .then((data) => {
                setVersion(data?.[0]);
                setLoading(false);
                console.log(data?.[0]);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    /*Récupère tous les champions*/
    useEffect(() => {
        if (!version) return;
        fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/fr_FR/champion.json`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur réseau Liste Champion");
                return res.json();
            })
            .then((data) => {
                setListeChampions(data);
                setLoadingChampions(false);
            })
            .catch((err) => {
                setErrorChampions(err.message);
                setLoadingChampions(false);
            });
    }, [version]);

    /*Récupère tous les items*/
    useEffect(() => {
        if (!version) return;
        fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/fr_FR/item.json`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur réseau Liste Items");
                return res.json();
            })
            .then((data) => {
                setListeItems(data);
                setLoadingItems(false);
                console.log(data);
            })
            .catch((err) => {
                setErrorItems(err.message);
                setLoadingItems(false);
            });
    }, [version]);

    /*Récupère tous les runes*/
    useEffect(() => {
        if (!version) return;
        fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/fr_FR/runesReforged.json`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur réseau Liste Runes");
                return res.json();
            })
            .then((data) => {
                setListeRunes(data);
                setLoadingRunes(false);
                console.log(data);
            })
            .catch((err) => {
                setErrorRunes(err.message);
                setLoadingRunes(false);
            });
    }, [version]);

    const SeeItemDetails = (item, id) => {
        var labelNom = document.getElementById("Nom-Item-Detail");
        var labelPrixBase = document.getElementById("Prix-Base-Item-Detail");
        var labelPrixTotal = document.getElementById("Prix-Total-Item-Detail");

        labelNom.textContent = item.name;
        labelPrixBase.textContent = `Prix de base : ${item.gold?.base}`;
        labelPrixTotal.textContent = `Prix total : ${item.gold?.total}`;

        var divDetail = document.querySelector(".Container-Detail-Item");
        divDetail.style.display = "flex";

        setSelectedItemId(id);
        setSelectedItem(item);
    }

    const HideItemDetails = () => {
        var divDetail = document.querySelector(".Container-Detail-Item");
        divDetail.style.display = "none";
    }

    const removeItemDrop = (uniqueId) => {
        setItemsDropLaningPhase1((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropLaningPhase2((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropPostLaningPhase((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropStarter((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropFirstBack((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropCoreItem((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropCoreBuildSuite((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropSituationnels((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
        setItemsDropConsommables((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
    };

    const SelectChampion = (champ) => {
        setHp(champ.stats.hp);
        setHpLevel(champ.stats.hpperlevel);
        setHpRegen(champ.stats.hpregen);
        setHpRegenPerLevel(champ.stats.hpregenperlevel);
        setMp(champ.stats.mp);
        setMpPerLevel(champ.stats.mpperlevel);
        setMpRegen(champ.stats.mpregen);
        setMpRegenPerLevel(champ.stats.mpregenperlevel);
        setPartype(champ.partype);
        setArmor(champ.stats.armor);
        setArmorPerLevel(champ.stats.armorperlevel);
        setSpellblock(champ.stats.spellblock);
        setSpellblockPerLevel(champ.stats.spellblockperlevel);
        setAttackDamage(champ.stats.attackdamage);
        setAttackDamagePerLevel(champ.stats.attackdamageperlevel);
        setAttackSpeed(champ.stats.attackspeed);
        setAttackSpeedPerLevel(champ.stats.attackspeedperlevel);
        setCrit(champ.stats.crit);
        setCritPerLevel(champ.stats.critperlevel);

        setNomChampion(champ.name);
        setImageChampion(champ.image?.full);

        setMoveSpeedChamp(champ.stats.movespeed);
        setAttackRangeChamp(champ.stats.attackrange);
        setRessourceChamp(champ.partype);
        setSelectedChampionStats(champ.stats);

        var divChampionSelected = document.querySelector(".Champion-Selected");
        divChampionSelected.style.display = "flex";

        var divChampionPickContainer = document.querySelector(".Champion-Pick-Container");
        divChampionPickContainer.style.display = "none";

        var labelTitreChoixChampion = document.querySelector(".Titre-Choix-Champion");
        labelTitreChoixChampion.style.display = "none";

        var labelTitreChoixRole = document.querySelector(".Titre-Choix-Role");
        labelTitreChoixRole.style.display = "block";

        var inputChoixChampion = document.querySelector(".Input-Choix-Champion");
        inputChoixChampion.style.display = "none";
        inputChoixChampion.value = "";
        setFiltreChampion("");

        window.scrollTo({ top: 0, behavior: "instant" });

        setIsChampionSelected(true);
        setCheckedItems({});
        setLevelSelected(0);
        setItemsDropLaningPhase1([]);
        setItemsDropLaningPhase2([]);
        setItemsDropPostLaningPhase([]);
    };

    const ChangeChampion = () => {
        var divChampionSelected = document.querySelector(".Champion-Selected");
        divChampionSelected.style.display = "none";

        var divChampionPickContainer = document.querySelector(".Champion-Pick-Container");
        divChampionPickContainer.style.display = "flex";

        var labelTitreChoixChampion = document.querySelector(".Titre-Choix-Champion");
        labelTitreChoixChampion.style.display = "block";

        var inputChoixChampion = document.querySelector(".Input-Choix-Champion");
        inputChoixChampion.style.display = "block";

        var divAllRunesSelected = document.querySelector(".All-Runes-Selected");
        divAllRunesSelected.style.display = "none";

        var divBoutonAfficheExportImage = document.querySelector(".Bouton-Affiche-Export-Image");
        divBoutonAfficheExportImage.style.display = "none";

        var divBoutonExportBuildJSON = document.querySelector(".Bouton-Export-Build-JSON");
        divBoutonExportBuildJSON.style.display = "none";

        var divSwitchClassicAvancee = document.querySelector(".Switch-Classic-Avancee");
        divSwitchClassicAvancee.style.display = "none";

        var divContainerStatsFinales = document.querySelector(".Container-Stats-Finales");
        divContainerStatsFinales.style.display = "none";

        window.scrollTo({ top: 0, behavior: "instant" });

        setIsChampionSelected(false);
        setIsRoleSelected(false);

        setSelectedRunePrincipale(null);
        setSelectedRunes([]);
        setSelectedRuneSecondaire(null);
        setSelectedRunesSecondaires([]);
        setSelectedRunesTertiaires([]);
    }

    const SelectRole = (Role) => {
        var divRoleSelected = document.querySelector(".Role-Selected");
        divRoleSelected.style.display = "flex";

        var divRoleChoiceContainer = document.querySelector(".Role-Choice-Container");
        divRoleChoiceContainer.style.display = "none";

        var labelTitreChoixRole = document.querySelector(".Titre-Choix-Role");
        labelTitreChoixRole.style.display = "none";

        var imageRole = divRoleSelected.querySelector("img");
        imageRole.src = Role;

        var labelTitreChoixRune = document.querySelector(".Titre-Choix-Rune");
        labelTitreChoixRune.style.display = "block";

        var diRunePrincipalePickContainer = document.querySelector(".Rune-Principale-Pick-Container");
        if (diRunePrincipalePickContainer) {
            diRunePrincipalePickContainer.style.display = "flex";
        }

        var divRunePrincipalePickContainer = document.querySelector(".Rune-Principale-1-Pick-Container");
        divRunePrincipalePickContainer.style.display = "flex";

        var divRuneSlotsSecondaires = document.querySelector(".Rune-Slots-Secondaires");
        if (divRuneSlotsSecondaires) {
            divRuneSlotsSecondaires.style.display = "flex";
        }

        var divBoutonTerminerBuildRune = document.querySelector(".Bouton-Terminer-Build-Rune");
        divBoutonTerminerBuildRune.style.display = "block";

        setSelectedRole(Role.toString());

        setIsRoleSelected(true);
    }

    const ChangeRole = () => {

        var divRoleSelected = document.querySelector(".Role-Selected");
        divRoleSelected.style.display = "none";

        var divRoleChoiceContainer = document.querySelector(".Role-Choice-Container");
        divRoleChoiceContainer.style.display = "flex";

        var divChampionSelected = document.querySelector(".Champion-Selected");
        divChampionSelected.style.marginTop = "0vh";

        var labelTitreChoixRole = document.querySelector(".Titre-Choix-Role");
        labelTitreChoixRole.style.display = "block";

        var labelTitreChoixRune = document.querySelector(".Titre-Choix-Rune");
        labelTitreChoixRune.style.display = "none";

        var divRunePrincipalePickContainer = document.querySelector(".Rune-Principale-Pick-Container");
        divRunePrincipalePickContainer.style.display = "none";

        var divRuneSlotsSecondaires = document.querySelector(".Rune-Slots-Secondaires");
        divRuneSlotsSecondaires.style.display = "none";

        var divBoutonTerminerBuildRune = document.querySelector(".Bouton-Terminer-Build-Rune");
        divBoutonTerminerBuildRune.style.display = "none";

        var divContainerGlobalBuild = document.querySelector(".Container-Global-Build");
        divContainerGlobalBuild.style.display = "none";

        var divAllRunesSelected = document.querySelector(".All-Runes-Selected");
        divAllRunesSelected.style.display = "none";

        var divBoutonAfficheExportImage = document.querySelector(".Bouton-Affiche-Export-Image");
        divBoutonAfficheExportImage.style.display = "none";

        var divBoutonExportBuildJSON = document.querySelector(".Bouton-Export-Build-JSON");
        divBoutonExportBuildJSON.style.display = "none";

        var divSwitchClassicAvancee = document.querySelector(".Switch-Classic-Avancee");
        divSwitchClassicAvancee.style.display = "none";

        var divContainerStatsFinales = document.querySelector(".Container-Stats-Finales");
        divContainerStatsFinales.style.display = "none";

        setIsRoleSelected(false);

        setSelectedRunePrincipale(null);
        setSelectedRunes([]);
        setSelectedRuneSecondaire(null);
        setSelectedRunesSecondaires([]);
        setSelectedRunesTertiaires([]);
    }

    const FinishBuild = () => {
        var divContainerStatsFinales = document.querySelector(".Container-Stats-Finales");
        divContainerStatsFinales.style.display = "flex";

        var divContainerGlobalBuild = document.querySelector(".Container-Global-Build");
        divContainerGlobalBuild.style.display = "none";

        var boutonStatistiquesAvancees = document.querySelector(".Bouton-Statistiques-Avancees");
        boutonStatistiquesAvancees.style.display = "block";

        var divContainerBoutonRetourJDR = document.querySelector(".Container-Bouton-Retour-JDR");
        divContainerBoutonRetourJDR.style.display = "none";

        var divContainerBoutonRetourCreationBuild = document.querySelector(".Container-Bouton-Retour-Creation-Build");
        divContainerBoutonRetourCreationBuild.style.display = "block";

        var divBoutonAfficheExportImage = document.querySelector(".Bouton-Affiche-Export-Image");
        divBoutonAfficheExportImage.style.display = "block";

        var divBoutonExportBuildJSON = document.querySelector(".Bouton-Export-Build-JSON");
        divBoutonExportBuildJSON.style.display = "block";

        var divSwitchClassicAvancee = document.querySelector(".Switch-Classic-Avancee");
        divSwitchClassicAvancee.style.display = "none";


        window.scrollTo({ top: 0, behavior: "instant" });
    }

    const StatistiquesAvancees = () => {
        var divContainerStatsFinales = document.querySelector(".Container-Stats-Finales");
        var DivStatistiquesAvancees = document.querySelector(".Div-Statistiques-Avancees");
        var boutonStatistiquesAvancees = document.querySelector(".Bouton-Statistiques-Avancees");

        divContainerStatsFinales.style.display = "none";
        DivStatistiquesAvancees.style.display = "flex";
        boutonStatistiquesAvancees.style.display = "none";
    }

    const toggleItem = (uniqueId) => {
        setCheckedItems((prev) => ({
            ...prev,
            [uniqueId]: !prev[uniqueId]
        }));
    };

    const VisualiserStatistiquesAvancees = () => {
        var divVisualiserStatistiquesAvancees = document.querySelector(".Visualiser-Statistiques-Avancees");
        var divStatistiquesAvancees = document.querySelector(".Div-Statistiques-Avancees");
        var boutonVisualiserStatistiquesAvancees = document.querySelector(".Bouton-Visualiser-Statistiques-Avancees");

        divVisualiserStatistiquesAvancees.style.display = "flex";
        divStatistiquesAvancees.style.display = "none";
        boutonVisualiserStatistiquesAvancees.style.display = "none";
    };

    const fmt = (val) => parseFloat(val.toFixed(3)).toString();

    const parseItemStats = (item) => {
        const stats = { ...(item.stats || {}) };

        if (!item.description) return stats;

        const parser = new DOMParser();
        const doc = parser.parseFromString(item.description, "text/html");
        const text = doc.body.innerText;

        // PV
        if (!stats.FlatHPPoolMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*PV(?!\s*\/)/i);
            if (match) stats.FlatHPPoolMod = parseFloat(match[1].replace(',', '.'));
        }

        // Mana
        if (!stats.FlatMPPoolMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*mana/i);
            if (match) stats.FlatMPPoolMod = parseFloat(match[1].replace(',', '.'));
        }

        // Armure
        if (!stats.FlatArmorMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*armure/i);
            if (match) stats.FlatArmorMod = parseFloat(match[1].replace(',', '.'));
        }

        // Résistance Magique
        if (!stats.FlatSpellBlockMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*r[eé]sistance magique/i);
            if (match) stats.FlatSpellBlockMod = parseFloat(match[1].replace(',', '.'));
        }

        // Dégâts d'Attaque
        if (!stats.FlatPhysicalDamageMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*d[eé]g[aâ]ts d.attaque/i);
            if (match) stats.FlatPhysicalDamageMod = parseFloat(match[1].replace(',', '.'));
        }

        // Puissance
        if (!stats.FlatMagicDamageMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*puissance/i);
            if (match) stats.FlatMagicDamageMod = parseFloat(match[1].replace(',', '.'));
        }

        // Vitesse de Déplacement
        if (!stats.FlatMovementSpeedMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*vitesse de d[eé]placement/i);
            if (match) stats.FlatMovementSpeedMod = parseFloat(match[1].replace(',', '.'));
        }

        // Létalité
        if (!stats.FlatArmorPenetrationMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*l[eé]talit[eé]/i);
            if (match) stats.FlatArmorPenetrationMod = parseFloat(match[1].replace(',', '.'));
        }

        // Pénétration Magique Flat
        if (!stats.FlatMagicPenetrationMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*p[eé]n[eé]tration magique/i);
            if (match) stats.FlatMagicPenetrationMod = parseFloat(match[1].replace(',', '.'));
        }

        // Accélération de Compétence
        if (!stats.PercentCooldownMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)\s*acc[eé]l[eé]ration de comp[eé]tence/i);
            if (match) stats.PercentCooldownMod = parseFloat(match[1].replace(',', '.'));
        }

        // Ténacité
        if (!stats.Tenacity) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*t[eé]nacit[eé]/i);
            if (match) stats.Tenacity = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Vitesse d'Attaque
        if (!stats.PercentAttackSpeedMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*vitesse d.attaque/i);
            if (match) stats.PercentAttackSpeedMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Chances de Coup Critique
        if (!stats.FlatCritChanceMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*coup critique/i);
            if (match) stats.FlatCritChanceMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Pénétration d'Armure %
        if (!stats.PercentArmorPenetrationMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*p[eé]n[eé]tration d.armure/i);
            if (match) stats.PercentArmorPenetrationMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Pénétration Magique %
        if (!stats.PercentMagicPenetrationMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*p[eé]n[eé]tration magique/i);
            if (match) stats.PercentMagicPenetrationMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Vol de Vie
        if (!stats.PercentLifeStealMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*vol de vie/i);
            if (match) stats.PercentLifeStealMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Omnivampirisme
        if (!stats.OmniVamp) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*omnivamp/i);
            if (match) stats.OmniVamp = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Efficacité des Soins et Boucliers
        if (!stats.PercentHealingMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*(?:soins|boucliers)/i);
            if (match) stats.PercentHealingMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Régénération de Vie
        if (!stats.FlatHPRegenMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*r[eé]g[eé]n[eé]ration.*(?:vie|pv)/i);
            if (match) stats.FlatHPRegenMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        // Régénération de Mana
        if (!stats.FlatMPRegenMod) {
            const match = text.match(/\+(\d+(?:[.,]\d+)?)%.*r[eé]g[eé]n[eé]ration.*mana/i);
            if (match) stats.FlatMPRegenMod = parseFloat(match[1].replace(',', '.')) / 100;
        }

        return stats;
    };

    useEffect(() => {
        const n = levelSelected - 1;
        const checkedItemsList = [...itemsDropLaningPhase1,...itemsDropLaningPhase2, ...itemsDropPostLaningPhase]
            .filter((item) => checkedItems[item.uniqueId] === true);

        const getItemStat = (statKey) =>
            checkedItemsList.reduce((acc, item) => {
                const fromApi = item.stats?.[statKey] || 0;
                if (fromApi) return acc + fromApi;
                const parsed = parseItemStats(item);
                return acc + (parsed[statKey] || 0);
            }, 0);

        // Stats Champion + Items
        setPointsVie(selectedChampionStats.hp + (selectedChampionStats.hpperlevel * n) + getItemStat("FlatHPPoolMod"));
        setMana(selectedChampionStats.mp + (selectedChampionStats.mpperlevel * n) + getItemStat("FlatMPPoolMod"));
        setArmure(selectedChampionStats.armor + (selectedChampionStats.armorperlevel * n) + getItemStat("FlatArmorMod"));
        setResistanceMagique(selectedChampionStats.spellblock + (selectedChampionStats.spellblockperlevel * n) + getItemStat("FlatSpellBlockMod"));
        setDegatsAttaque(selectedChampionStats.attackdamage + (selectedChampionStats.attackdamageperlevel * n) + getItemStat("FlatPhysicalDamageMod"));
        setVitesseAttaque(selectedChampionStats.attackspeed + (selectedChampionStats.attackspeedperlevel * n / 100) + getItemStat("PercentAttackSpeedMod"));
        setChancesCoupCritique(selectedChampionStats.crit + (selectedChampionStats.critperlevel * n) + getItemStat("FlatCritChanceMod"));
        setPuissance(getItemStat("FlatMagicDamageMod"));
        setLetalitePenetrationArmureFlat(getItemStat("FlatArmorPenetrationMod"));
        setLetalitePenetrationArmurePourcentage(getItemStat("PercentArmorPenetrationMod"));
        setPenetrationMagiqueFlat(getItemStat("FlatMagicPenetrationMod"));
        setPenetrationMagiquePourcentage(getItemStat("PercentMagicPenetrationMod"));
        setAccelerationCompetence(getItemStat("PercentCooldownMod"));
        setVitesseDeplacement(selectedChampionStats.movespeed + getItemStat("FlatMovementSpeedMod"));
        setOmnivampirisme(getItemStat("OmniVamp"));
        setVolDeVie(getItemStat("PercentLifeStealMod"));
        setEfficaciteSoinsBoucliers(getItemStat("PercentHealingMod"));
        setRegenerationVie(selectedChampionStats.hpregen + (selectedChampionStats.hpregenperlevel * n) + getItemStat("FlatHPRegenMod"));
        setRegenerationMana(selectedChampionStats.mpregen + (selectedChampionStats.mpregenperlevel * n) + getItemStat("FlatMPRegenMod"));
        setTenacite(getItemStat("Tenacity"));

    }, [levelSelected, checkedItems]);

    const RetourCreationBuild = () => {
        var divContainerStatsFinales = document.querySelector(".Container-Stats-Finales");
        divContainerStatsFinales.style.display = "none";

        var divContainerGlobalBuild = document.querySelector(".Container-Global-Build");
        divContainerGlobalBuild.style.display = "flex";

        var boutonStatistiquesAvancees = document.querySelector(".Bouton-Statistiques-Avancees");
        boutonStatistiquesAvancees.style.display = "none";

        var divContainerBoutonRetourJDR = document.querySelector(".Container-Bouton-Retour-JDR");
        divContainerBoutonRetourJDR.style.display = "block";

        var divContainerBoutonRetourCreationBuild = document.querySelector(".Container-Bouton-Retour-Creation-Build");
        divContainerBoutonRetourCreationBuild.style.display = "none";

        var divBoutonAfficheExportImage = document.querySelector(".Bouton-Affiche-Export-Image");
        divBoutonAfficheExportImage.style.display = "none";

        var divBoutonExportBuildJSON = document.querySelector(".Bouton-Export-Build-JSON");
        divBoutonExportBuildJSON.style.display = "none";

        var divSwitchClassicAvancee = document.querySelector(".Switch-Classic-Avancee");
        divSwitchClassicAvancee.style.display = "flex";


        window.scrollTo({ top: 0, behavior: "instant" });
    }

    const updateItemCount = (uniqueId, delta) => {
        const update = (prev) => prev.map((item) =>
            item.uniqueId === uniqueId
                ? { ...item, count: Math.max(1, (item.count || 1) + delta) }
                : item
        );
        setItemsDropLaningPhase1(update);
        setItemsDropLaningPhase2(update);
        setItemsDropPostLaningPhase(update);
        setItemsDropStarter(update);
        setItemsDropFirstBack(update);
        setItemsDropCoreItem(update);
        setItemsDropCoreBuildSuite(update);
        setItemsDropSituationnels(update);
        setItemsDropConsommables(update);
    };

    const RunesTertiaire = [
        {
            id: 301,
            name: "Force Adaptative",
            shortDesc: "+ 9 force adaptative",
            img: "/Images/LOL/icons-stats/fa.png"
        },
        {
            id: 302,
            name: "Vitesse d'Attaque",
            shortDesc: "+ 10% vitesse d'attaque",
            img: "/Images/LOL/icons-stats/as.png"
        },
        {
            id: 303,
            name: "Accélération de Compétences",
            shortDesc: "+ 8 accélération de compétences",
            img: "/Images/LOL/icons-stats/ah.png"
        },
        {
            id: 304,
            name: "Force Adaptative",
            shortDesc: "+ 9 force adaptative",
            img: "/Images/LOL/icons-stats/fa.png"
        },
        {
            id: 305,
            name: "Vitesse de déplacement",
            shortDesc: "+ 2.5% vitesse de déplacement",
            img: "/Images/LOL/icons-stats/moove-speed.png"
        },
        {
            id: 306,
            name: "HP par Niveau",
            shortDesc: "+ 10 - 180 (selon niveau)",
            img: "/Images/LOL/icons-stats/pv-scale.png"
        },
        {
            id: 307,
            name: "PV",
            shortDesc: "+ 65 PV",
            img: "/Images/LOL/icons-stats/hp.png"
        },
        {
            id: 308,
            name: "Ténacité et Résistance aux Ralentissements",
            shortDesc: "+ 15% ténacité et résistance aux ralentissements",
            img: "/Images/LOL/icons-stats/tenacite.png"
        },
        {
            id: 309,
            name: "HP par Niveau",
            shortDesc: "+ 10 - 180 (selon niveau)",
            img: "/Images/LOL/icons-stats/pv-scale.png"
        }
    ]

    const lignesTertiaires = [
        RunesTertiaire.slice(0, 3),
        RunesTertiaire.slice(3, 6),
        RunesTertiaire.slice(6, 9),
    ];

    const FinishBuildRune = () => {
        var labelTitreChoixRune = document.querySelector(".Titre-Choix-Rune");
        labelTitreChoixRune.style.display = "none";

        var divRunePrincipale1PickContainer = document.querySelector(".Rune-Principale-1-Pick-Container");
        divRunePrincipale1PickContainer.style.display = "none";

        var divBoutonTerminerBuildRune = document.querySelector(".Bouton-Terminer-Build-Rune");
        divBoutonTerminerBuildRune.style.display = "none";

        var divContainerGlobalBuild = document.querySelector(".Container-Global-Build");
        divContainerGlobalBuild.style.display = "flex";

        var divRunePrincipalePickContainer = document.querySelector(".Rune-Principale-Pick-Container");
        divRunePrincipalePickContainer.style.display = "none";

        var divAllRunesSelected = document.querySelector(".All-Runes-Selected");
        divAllRunesSelected.style.display = "flex";

        var divChampionSelected = document.querySelector(".Champion-Selected");
        divChampionSelected.style.marginTop = "20vh";

        var divSwitchClassicAvancee = document.querySelector(".Switch-Classic-Avancee");
        divSwitchClassicAvancee.style.display = "flex";
    };

    const getItemById = (id) => listeItems?.data?.[id];

    const renderItemTree = (itemId, depth = 0) => {
        const item = getItemById(itemId);
        if (!item) return null;
        return (
            <div key={itemId} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`}
                    title={item.name}
                    style={{ width: "64px", height: "64px", cursor: "pointer" }}
                    onClick={() => SeeItemDetails(item, itemId)}  // ← itemId déjà disponible
                />
                {item.from && depth < 2 && (
                    <div style={{ display: "flex", flexDirection: "row", gap: "2.5rem" }}>
                        {item.from.map(id => renderItemTree(id, depth + 1))}
                    </div>
                )}
            </div>
        );
    };

    const transformationsManquantes = {
        // Larme de la Déesse → Arme de la Déesse / Séraphin
        "3070": ["3040"],   // Larme → Arme de la Déesse (AP)
        "3003": ["3040"],   // Larme (mana) → Séraphin -- à vérifier

        // En réalité :
        // 3070 = Larme de la Déesse → 3040 = Séraphin
        // 3003 = Arme de la Déesse (déjà transformée)

        // Méjai → Soulstealer
        "3802": ["3041"],   // Lost Chapter → Méjai's Soulstealer (précurseur)

        // Items de support (quête)
        "3858": ["3859"],   // Relic Shield → Targon's Buckler
        "3859": ["3860"],   // Targon's Buckler → Bulwark of the Mountain
        "3862": ["3863"],   // Spectral Sickle → Harrowing Crescent
        "3863": ["3864"],   // Harrowing Crescent → Black Mist Scythe
        "3866": ["3867"],   // Shepherd's Starforged → ...
        "3870": ["3871"],   // Dream Maker → Zaz'Zak's Realmspike
        "3876": ["3877"],   // Solstice Sleigh → Bloodsong
        "3854": ["3855"],   // Steel Shoulderguards → Runesteel Spaulders
        "3855": ["3856"],   // Runesteel Spaulders → Pauldrons of Whiterock
        "3850": ["3851"],   // Spellthief's Edge → Frostfang
        "3851": ["3853"],   // Frostfang → Shard of True Ice
    };

    // Au moment où listeItems est chargé, construire la map des transformations
    const [transformationMap, setTransformationMap] = useState({});
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        if (!listeItems?.data) return;
        const map = {};
        Object.entries(listeItems.data).forEach(([id, item]) => {
            // Un item "inStore: false" avec un "from" = c'est une transformation
            if (item.inStore === false && item.from?.length > 0) {
                item.from.forEach(fromId => {
                    if (!map[fromId]) map[fromId] = [];
                    map[fromId].push(id);
                });
            }
        });
        setTransformationMap(map);
    }, [listeItems]);

    const intoIds = useMemo(() => {
        return [
            ...(selectedItem?.into || []),
            ...(selectedItemId ? (transformationMap[selectedItemId] || []) : [])
        ];
    }, [selectedItem, selectedItemId, transformationMap]);

    const ExporterBuildJSON = () => {
        const role = selectedRole.replace("/public/Images/LOL/", "").replace("_icon.png", "");

        const build = {
            title: `Build ${SelectChampion.name} pour ${role}`,
            associatedMaps: [11],
            associatedChampions: [],
            blocks: [
                {
                    type: "Laning Phase 1",
                    items: itemsDropLaningPhase1.map(item => ({
                        id: item.id,
                        count: item.count || 1
                    }))
                },
                {
                    type: "Post Laning Phase",
                    items: itemsDropPostLaningPhase.map(item => ({
                        id: item.id,
                        count: item.count || 1
                    }))
                }
            ]
        };

        console.log(build);

        const json = JSON.stringify(build, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `build-${nomChampion}.json`;
        link.click();
    };

    return (
        <>
            {/*BOUTONS RETOUR*/}
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/Accueil" className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </Link>
            </div>

            <div
                className="Container-Bouton-Retour-Creation-Build"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={RetourCreationBuild}
            >
                <div className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </div>
            </div>

            {/*CHOIX DU CHAMPION*/}
            <label className="Titre-Choix-Champion">CHOISISSEZ LE CHAMPION</label>

            <input type="text" className="Input-Choix-Champion" onChange={(e) => setFiltreChampion(e.target.value)} placeholder="Rechercher un champion ... " />

            <div className="Champion-Pick-Container">
                {listeChampions?.data && Object.entries(listeChampions.data)
                    .filter(([id, champ]) => champ.name.toLowerCase().includes(filtreChampion.toLowerCase()))
                    .map(([id, champ]) => (
                    <div key={id} className="Champion-Choice" onClick={() => SelectChampion(champ) }>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image?.full}`} />
                    </div>
                ))}
            </div>

            <div className="Champion-Selected">
                <label className="Nom-Champion">{nomChampion}</label>
                <div className="Champion-Selected-Image">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imageChampion}`} />
                    <RefreshCcwIcon
                        size={15}
                        onClick={ChangeChampion}
                        className="Icon"
                    />
                </div>
            </div>

            {/*CHOIX DU ROLE*/}
            <label className="Titre-Choix-Role">CHOISISSEZ LE RÔLE</label>

            <div className="Role-Choice-Container" style={{ display: (isChampionSelected) ? "flex" : "none" }}>
                <div className="Role" onClick={() => SelectRole(TopIcon)}>
                    <img src={TopIcon} />
                </div>
                <div className="Role" onClick={() => SelectRole(JungleIcon)}>
                    <img src={JungleIcon} />
                </div>
                <div className="Role" onClick={() => SelectRole(MiddleIcon)}>
                    <img src={MiddleIcon} />
                </div>
                <div className="Role" onClick={() => SelectRole(BottomIcon)}>
                    <img src={BottomIcon} />
                </div>
                <div className="Role" onClick={() => SelectRole(SupportIcon)}>
                    <img src={SupportIcon} />
                </div>
            </div>

            <div className="Role-Selected" style={{ display: (isChampionSelected && isRoleSelected) ? "flex" : "none" }}>
                <div className="Role-Selected-Image">
                    <img />
                    <RefreshCcwIcon
                        size={15}
                        onClick={ChangeRole}
                        className="Icon"
                    />
                </div>
            </div>


            {/*CHOIX DES RUNES*/}
            <label className="Titre-Choix-Rune">CHOISISSEZ VOS RUNES</label>

            <div className="Rune-Principale-Pick-Container">
                {listeRunes && Object.entries(listeRunes)
                    .map(([id, rune]) => (
                        <div
                            key={id}
                            className={selectedRunePrincipale?.id === rune.id ? "Rune-Choice--actif" : "Rune-Choice"}
                            onClick={() => setSelectedRunePrincipale(rune)}
                        >
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} />
                        </div>
                    ))}
            </div>

            <div className="Rune-Principale-1-Pick-Container">
                {selectedRunePrincipale && (
                    <>
                        <div className="Rune-Slot">
                            {selectedRunePrincipale.slots[0].runes.map((rune) => (
                                <div
                                    key={rune.id}
                                    className={selectedRunes.some(r => r.id === rune.id) ? "Rune-1--actif" : "Rune-1"}
                                    onMouseEnter={() => setHoveredRune(rune.id)}
                                    onMouseLeave={() => setHoveredRune(null)}
                                    onClick={() => {
                                        setSelectedRunes(prev => {
                                            const filtered = prev.filter(r =>
                                                !selectedRunePrincipale.slots[0].runes.some(sr => sr.id === r.id)
                                            );
                                            return [...filtered, rune];
                                        });
                                    }}
                                >
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} />
                                    {hoveredRune === rune.id && (
                                        <div className="Nom-Rune-Hover">
                                            <h4>{rune.name}</h4>
                                            <p>{rune.shortDesc.replace(/<[^>]*>/g, '')}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="Rune-Slots-Secondaires">
                            {selectedRunePrincipale.slots.slice(1).map((slot, slotIndex) => (
                                <div key={slotIndex} className="Rune-Slot">
                                    {slot.runes.map((rune) => (
                                        <div
                                            key={rune.id}
                                            className={selectedRunes.some(r => r.id === rune.id) ? "Rune-2--actif" : "Rune-2"}
                                            onMouseEnter={() => setHoveredRune(rune.id)}
                                            onMouseLeave={() => setHoveredRune(null)}
                                            onClick={() => {
                                                setSelectedRunes(prev => {
                                                    const filtered = prev.filter(r =>
                                                        !slot.runes.some(sr => sr.id === r.id)
                                                    );
                                                    return [...filtered, rune];
                                                });
                                            }}
                                        >
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} />
                                            {hoveredRune === rune.id && (
                                                <div className="Nom-Rune-Hover">
                                                    <h4>{rune.name}</h4>
                                                    <p>{rune.shortDesc.replace(/<[^>]*>/g, '')}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="Rune-Pages-Secondaires">

                            {/* Choix de la page secondaire */}
                            <div className="Rune-Pages-Secondaires-Choix">
                                {listeRunes
                                    .filter(page => page.id !== selectedRunePrincipale.id)
                                    .map(page => (
                                        <div
                                            key={page.id}
                                            className={selectedRuneSecondaire?.id === page.id ? "Rune-Choice--actif" : "Rune-Choice"}
                                            onClick={() => { setSelectedRuneSecondaire(page); setSelectedRunesSecondaires([]); }}
                                        >
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${page.icon}`} />
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Slots de la page secondaire - 2 runes max, 1 par ligne */}
                            {selectedRuneSecondaire && (
                                <div className="Rune-Slots-Secondaires">
                                    {selectedRuneSecondaire.slots.slice(1).map((slot, slotIndex) => (
                                        <div key={slotIndex} className="Rune-Slot">
                                            {slot.runes.map((rune) => {
                                                const isSelected = selectedRunesSecondaires.some(r => r.id === rune.id);
                                                const slotAlreadyTaken = selectedRunesSecondaires.some(r =>
                                                    slot.runes.some(sr => sr.id === r.id)
                                                );
                                                const maxReached = selectedRunesSecondaires.length >= 2 && !isSelected;

                                                return (
                                                    <div
                                                        key={rune.id}
                                                        className={isSelected ? "Rune-2--actif" : "Rune-2"}
                                                        onMouseEnter={() => setHoveredRune(rune.id)}
                                                        onMouseLeave={() => setHoveredRune(null)}
                                                        onClick={() => {
                                                            if (maxReached || slotAlreadyTaken) return;
                                                            setSelectedRunesSecondaires(prev => {
                                                                if (isSelected) return prev.filter(r => r.id !== rune.id);
                                                                return [...prev, rune];
                                                            });
                                                        }}
                                                    >
                                                        <img
                                                            src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                                                            style={{ filter: (maxReached || slotAlreadyTaken) && !isSelected ? "grayscale(100%)" : "none" }}
                                                        />
                                                        {hoveredRune === rune.id && (
                                                            <div className="Nom-Rune-Hover">
                                                                <h4>{rune.name}</h4>
                                                                <p>{rune.shortDesc.replace(/<[^>]*>/g, '')}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="Runes-Tertiaires">
                            {lignesTertiaires.map((ligne, ligneIndex) => (
                                <div key={ligneIndex} className="Rune-Tertiaire-Ligne">
                                    {ligne.map((rune) => {
                                        const isSelected = selectedRunesTertiaires.some(r => r.id === rune.id);
                                        const ligneDejaSelectionnee = ligne.some(r =>
                                            selectedRunesTertiaires.some(sr => sr.id === r.id)
                                        ) && !isSelected;

                                        return (
                                            <div
                                                key={rune.id}
                                                onMouseEnter={() => setHoveredRune(rune.id)}
                                                onMouseLeave={() => setHoveredRune(null)}
                                                className={
                                                    isSelected ? "Rune-Tertiaire--actif" :
                                                        ligneDejaSelectionnee ? "Rune-Tertiaire Rune-Tertiaire--disabled" :
                                                            "Rune-Tertiaire"
                                                }
                                                onClick={() => {
                                                    if (ligneDejaSelectionnee) return;
                                                    setSelectedRunesTertiaires(prev =>
                                                        isSelected
                                                            ? prev.filter(r => r.id !== rune.id)
                                                            : [...prev.filter(r => !ligne.some(lr => lr.id === r.id)), rune]
                                                    );
                                                }}
                                            >
                                                <img src={rune.img} />
                                                {hoveredRune === rune.id && (
                                                    <div className="Nom-Rune-Hover">
                                                        <h4>{rune.name}</h4>
                                                        <p>{rune.shortDesc}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="All-Runes-Selected">
                {selectedRunePrincipale && (
                    <img className="Rune-Selected-Principale"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/${selectedRunePrincipale.icon}`}
                        title={selectedRunePrincipale.name}
                    />
                )}
                {selectedRunes.map((rune) => (
                    <img className="RuneS-Selected"
                        key={rune.id}
                        src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                        title={rune.name}
                    />
                ))}
                {selectedRuneSecondaire && (
                    <img className="Rune-Selected-Secondaire"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/${selectedRuneSecondaire.icon}`}
                        title={selectedRuneSecondaire.name}
                    />
                )}
                {selectedRunesSecondaires.map((rune) => (
                    <img className="RuneS-Selected-SecondaireS"
                        key={rune.id}
                        src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                        title={rune.name}
                    />
                ))}
                {selectedRunesTertiaires.map((rune) => (
                    <img className="RuneS-Selected-TertiaireS"
                        key={rune.id}
                        src={rune.img}
                        title={rune.name}
                    />
                ))}
            </div>

            <div className="Bouton-Terminer-Build-Rune" onClick={FinishBuildRune}> TERMINER LE BUILD DES RUNES </div>
            
            {/*CRÉATION DU BUIOLD*/}
            <div className="Switch-Classic-Avancee">
                <label>Avancée</label>
                <div className={`switch ${showDiv ? "switch--on" : ""}`} onClick={() => { setShowDiv(prev => !prev); setAvancee(prev => !prev); }}>
                    <div className="switch-thumb" />
                </div>
                <label>Classic</label>
            </div>

            <div className="Container-Global-Build" style={{ display: (isChampionSelected && isRoleSelected && isRuneSelected) ? "block" : "none" }}>
                <DndContext
                    onDragEnd={handleDragEnd}
                    accessibility={{
                        announcements: {
                            onDragStart: () => "",
                            onDragOver: () => "",
                            onDragEnd: () => "",
                            onDragCancel: () => "",
                        }
                    }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
                        {/* Gauche - liste des items */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "5rem", width: "50%" }}>
                            <input type="text" className="Input-Filtre-Items" onChange={(e) => setFiltreItem(e.target.value)} placeholder="Rechercher un item ... " />
                            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                                <div className="Container-Filtre-Items--Items">
                                    <div className="Filtres-Items-Container">
                                        {filtres.map((filtre) => (
                                            <div
                                                key={filtre.id}
                                                className={`Filtre-Item ${filtresActifs.includes(filtre.id) ? "Filtre-Item--actif" : ""}`}
                                                onClick={() => toggleFiltre(filtre.id)}
                                                title={filtre.label}
                                            >
                                                <img src={filtre.icon} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="Item-Container">
                                        {listeItems?.data && Object.entries(listeItems.data).filter(([id, item]) =>
                                            item.maps?.["11"] === true &&
                                            item.gold?.purchasable === true &&
                                            item.inStore !== false &&
                                            (filtresActifs.length === 0 || filtresActifs.some(f => {
                                                if (f === "ad") return item.stats?.FlatPhysicalDamageMod;
                                                if (f === "ap") return item.stats?.FlatMagicDamageMod;
                                                if (f === "hp") return item.stats?.FlatHPPoolMod || item.stats?.FlatHPRegenMod;
                                                if (f === "mana") return item.stats?.FlatMPPoolMod || item.stats?.FlatMPRegenMod;
                                                if (f === "armor") return item.stats?.FlatArmorMod;
                                                if (f === "mr") return item.stats?.FlatSpellBlockMod;
                                                if (f === "crit") return item.stats?.FlatCritChanceMod;
                                                if (f === "ms") return item.stats?.FlatMovementSpeedMod;
                                                if (f === "lethality") return item.stats?.FlatArmorPenetrationMod;
                                                if (f === "pen") return item.stats?.FlatMagicPenetrationMod;
                                                if (f === "ah") return item.stats?.PercentCooldownMod;
                                                if (f === "vamp") {
                                                    const parsed = parseItemStats(item);
                                                    return parsed?.PercentLifeStealMod || parsed?.OmniVamp;
                                                }
                                                return false;
                                            })) &&
                                            item.name.toLowerCase().includes(filtreItem.toLowerCase())
                                        )
                                            .sort(([, a], [, b]) => (a.gold?.total || 0) - (b.gold?.total || 0))
                                            .map(([id, item]) => (
                                                <ItemDraggable key={id} id={id} item={item} version={version} SeeItemDetails={(item) => SeeItemDetails(item, id)} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Droite - zone de drop */}
                        <div className="Bloc-Drop-Zone" style={{ display: showDiv ? "flex" : "none" }}>
                            <label>Laning Phase (&lt; 14 min)</label>
                            <ZoneDrop itemsDrop={itemsDropLaningPhase1} version={version} removeItemDrop={removeItemDrop} className="DropZone-Laning-Phase1" droppableId="DropZone-Laning-Phase1" selectedRole={selectedRole} updateItemCount={updateItemCount} />
                            <ZoneDrop itemsDrop={itemsDropLaningPhase2} version={version} removeItemDrop={removeItemDrop} className="DropZone-Laning-Phase2" droppableId="DropZone-Laning-Phase2" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>Post Laning Phase (&gt; 14 min)</label>
                            <ZoneDrop itemsDrop={itemsDropPostLaningPhase} version={version} removeItemDrop={removeItemDrop} className="DropZone-Post-Laning-Phase" droppableId="DropZone-Post-Laning-Phase" />

                            <div className="Bouton-Build-Finish" onClick={FinishBuild}>BUILD TERMINÉ</div>
                        </div>

                        <div className="Bloc-Drop-Zone-Avancee" style={{ display: showDiv ? "none" : "block" }}>
                            <label>Starter</label>
                            <ZoneDrop itemsDrop={itemsDropStarter} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-Starter" droppableId="Drop-Zone-Starter" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>First Back</label>
                            <ZoneDrop itemsDrop={itemsDropFirstBack} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-First-Back" droppableId="Drop-Zone-First-Back" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>Core Item (2 items + bottes)</label>
                            <ZoneDrop itemsDrop={itemsDropCoreItem} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-Core-Item" droppableId="Drop-Zone-Core-Item" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>Core Build Suite (3 items)</label>
                            <ZoneDrop itemsDrop={itemsDropCoreBuildSuite} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-Core-Build-Suite" droppableId="Drop-Zone-Core-Build-Suite" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>Items Situationnels</label>
                            <ZoneDrop itemsDrop={itemsDropSituationnels} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-Items-Situationnels" droppableId="Drop-Zone-Items-Situationnels" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <label>Consommables</label>
                            <ZoneDrop itemsDrop={itemsDropConsommables} version={version} removeItemDrop={removeItemDrop} className="Drop-Zone-Consommables" droppableId="Drop-Zone-Consommables" selectedRole={selectedRole} updateItemCount={updateItemCount} />

                            <div className="Bouton-Build-Finish" onClick={FinishBuild}>BUILD TERMINÉ</div>
                        </div>
                    </div>
                </DndContext>

                <div className="Container-Detail-Item">
                    <div className="Detail-Item">
                        <div className="Bouton-Close-Detail" onClick={() => HideItemDetails()}>x</div>
                        <label id="Nom-Item-Detail"></label><br />
                        <label id="Prix-Base-Item-Detail"></label><br />
                        <label id="Prix-Total-Item-Detail"></label>

                        <div dangerouslySetInnerHTML={{ __html: selectedItem?.description }} />

                        {intoIds.length > 0 && (
                            <div style={{ marginTop: "1rem" }}>
                                <label>Entre dans :</label>
                                <div style={{ display: "flex", flexDirection: "row", gap: "2.5rem", flexWrap: "wrap" }}>
                                    {intoIds
                                        .map(id => getItemById(id))
                                        .filter(item => item != null)  // ← juste vérifier que l'item existe
                                        .map(item => (
                                            <img
                                                key={item.image?.full}
                                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`}
                                                title={item.name}
                                                style={{ width: "64px", height: "64px", cursor: "pointer" }}
                                                onClick={() => {
                                                    const foundId = Object.entries(listeItems.data).find(([id, i]) => i.name === item.name)?.[0];
                                                    SeeItemDetails(item, foundId);
                                                }}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {/* Arbre de craft - composants nécessaires */}
                        {selectedItem?.from && (
                            <div style={{ marginTop: "1rem" }}>
                                <label>Composants :</label>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    {renderItemTree(
                                        Object.entries(listeItems.data).find(([id, i]) => i.name === selectedItem.name)?.[0]
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>

            {/*STATISTIQUES FINALES*/}
            <div onClick={StatistiquesAvancees} style={{ display: isBuildFinish ? "block" : "none" }} className="Bouton-Statistiques-Avancees">STATISTIQUES AVANCÉES</div>
            <div className="Container-Stats-Finales" style={{ display: isBuildFinish ? "flex" : "none" }}>
                <div className="Container-Stats-Table-Stats">
                    <div style={{ display: "flex", flexDirection: "row", gap: "2rem", marginTop: "5vh", marginBottom: "5vh" }}>
                        <label style={{ margin: "auto" }} >Vitesse de déplacement : {moveSpeedChamp}</label>
                        <label style={{ margin: "auto" }} >Portée d'attaque : {attackRangeChamp}</label>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <label>Niveau</label>
                                </td>
                                <td>
                                    <label>Stats Champion</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>1</label>
                                </td>
                                <DivStatsChamp niveau={1} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>2</label>
                                </td>
                                <DivStatsChamp niveau={2} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>3</label>
                                </td>
                                <DivStatsChamp niveau={3} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>4</label>
                                </td>
                                <DivStatsChamp niveau={4} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>5</label>
                                </td>
                                <DivStatsChamp niveau={5} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>6</label>
                                </td>
                                <DivStatsChamp niveau={6} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>7</label>
                                </td>
                                <DivStatsChamp niveau={7} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>8</label>
                                </td>
                                <DivStatsChamp niveau={8} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>9</label>
                                </td>
                                <DivStatsChamp niveau={9} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>10</label>
                                </td>
                                <DivStatsChamp niveau={10} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>11</label>
                                </td>
                                <DivStatsChamp niveau={11} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>12</label>
                                </td>
                                <DivStatsChamp niveau={12} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>13</label>
                                </td>
                                <DivStatsChamp niveau={13} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>14</label>
                                </td>
                                <DivStatsChamp niveau={14} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>15</label>
                                </td>
                                <DivStatsChamp niveau={15} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>16</label>
                                </td>
                                <DivStatsChamp niveau={16} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>17</label>
                                </td>
                                <DivStatsChamp niveau={17} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr>
                                <td>
                                    <label>18</label>
                                </td>
                                <DivStatsChamp niveau={18} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr style={{ display: (selectedRole === "/public/Images/LOL/Top_icon.png") ? "table-row" : "none" }}>
                                <td>
                                    <label>19</label>
                                </td>
                                <DivStatsChamp niveau={19} champ={selectedChampionStats} version={version} />

                            </tr>
                            <tr style={{ display: (selectedRole === "/public/Images/LOL/Top_icon.png") ? "table-row" : "none" }}>
                                <td>
                                    <label>20</label>
                                </td>
                                <DivStatsChamp niveau={20} champ={selectedChampionStats} version={version} />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Container-Item-Build-Finish">
                    {avancee ? (
                        (itemsDropStarter.length > 0 || itemsDropFirstBack.length > 0 || itemsDropCoreItem.length > 0 || itemsDropCoreBuildSuite.length > 0 || itemsDropSituationnels.length > 0 || itemsDropConsommables.length > 0) &&
                        <div className="Liste-Item-Build-Finish">
                            {[...itemsDropStarter, ...itemsDropFirstBack, ...itemsDropCoreItem, ...itemsDropCoreBuildSuite, ...itemsDropSituationnels, ...itemsDropConsommables].map((item) => (
                                <div key={item.uniqueId} className="Item-Build-Finish">
                                    <div className="Item-Build-Finish-Info-Principales">
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
                                        <label>{item.gold.total}g</label>
                                        <label>{item.name}</label>
                                    </div>
                                    <div className="Item-Build-Finish-Description">
                                        <label dangerouslySetInnerHTML={{ __html: item.description }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        (itemsDropLaningPhase1.length > 0 || itemsDropPostLaningPhase.length > 0) &&
                        <div className="Liste-Item-Build-Finish">
                            {[...itemsDropLaningPhase1, ...itemsDropPostLaningPhase].map((item) => (
                                <div key={item.uniqueId} className="Item-Build-Finish">
                                    <div className="Item-Build-Finish-Info-Principales">
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
                                        <label>{item.gold.total}g</label>
                                        <label>{item.name}</label>
                                    </div>
                                    <div className="Item-Build-Finish-Description">
                                        <label dangerouslySetInnerHTML={{ __html: item.description }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="Div-Statistiques-Avancees">
                <select defaultValue="0" onChange={(e) => setLevelSelected(e.target.value)}>
                    <option value="0">Sélectionner le niveau</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option style={{ display: (selectedRole === "/public/Images/LOL/Top_icon.png") ? "block" : "none" }} value="19">19</option>
                    <option style={{ display: (selectedRole === "/public/Images/LOL/Top_icon.png") ? "block" : "none" }} value="20">20</option>
                </select>

                <div className="Liste-Items-Checkable-Build-Finish">
                    {(avancee
                        ? [...itemsDropStarter, ...itemsDropFirstBack, ...itemsDropCoreItem, ...itemsDropCoreBuildSuite, ...itemsDropSituationnels, ...itemsDropConsommables]
                        : [...itemsDropLaningPhase1, ...itemsDropLaningPhase2, ...itemsDropPostLaningPhase]
                    ).map((item) => (
                        <label
                            key={item.uniqueId}
                            className={`Item-Select ${checkedItems[item.uniqueId] ? "Item-Select--checked" : ""}`}
                        >
                            <input
                                type="checkbox"
                                checked={!!checkedItems[item.uniqueId]}
                                onChange={() => toggleItem(item.uniqueId)}
                                style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                            />
                            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
                        </label>
                    ))}
                </div>
            </div>

            <div style={{ display: (levelSelected != 0 && Object.values(checkedItems).some(v => v === true)) ? "block" : "none" }} className="Bouton-Visualiser-Statistiques-Avancees" onClick={VisualiserStatistiquesAvancees}>
                VISUALISER
            </div>

            <div className="Visualiser-Statistiques-Avancees">
                <label style={{ textAlign: "center" }}>NIVEAU {levelSelected}</label>
                <div className="Items-Checked-Resume">
                    {[...itemsDropLaningPhase1, ...itemsDropPostLaningPhase]
                        .filter((item) => checkedItems[item.uniqueId] === true)
                        .map((item) => (
                            <img
                                key={item.uniqueId}
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`}
                                title={item.name}
                            />
                        ))
                    }
                </div>
                <table className="Table-Stats-Avancees">
                    <thead>
                        <tr>
                            <td>Statistique</td>
                            <td>Champion</td>
                            <td>Items</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { label: "Points de Vie (PV)", champ: pointsVieChamp, item: getItemStat("FlatHPPoolMod") },
                            { label: "Régénération de Vie", champ: regenVieChamp, item: getItemStat("FlatHPRegenMod") },
                            { label: "Mana", champ: manaChamp, item: getItemStat("FlatMPPoolMod") },
                            { label: "Régénération de Mana", champ: regenManaChamp, item: getItemStat("FlatMPRegenMod") },
                            { label: "Armure", champ: armureChamp, item: getItemStat("FlatArmorMod") },
                            { label: "Résistance Magique (RM)", champ: rmChamp, item: getItemStat("FlatSpellBlockMod") },
                            { label: "Dégâts d'Attaque (AD)", champ: adChamp, item: getItemStat("FlatPhysicalDamageMod") },
                            { label: "Vitesse d'Attaque (AS)", champ: asChamp, item: getItemStat("PercentAttackSpeedMod"), percent: true },
                            { label: "Chances de Coup Critique", champ: critChamp, item: getItemStat("FlatCritChanceMod"), percent: true },
                            { label: "Puissance (AP)", champ: 0, item: getItemStat("FlatMagicDamageMod") },
                            { label: "Létalité (Flat)", champ: 0, item: getItemStat("FlatArmorPenetrationMod") },
                            { label: "Pénétration Armure %", champ: 0, item: getItemStat("PercentArmorPenetrationMod"), percent: true },
                            { label: "Pénétration Magique Flat", champ: 0, item: getItemStat("FlatMagicPenetrationMod") },
                            { label: "Pénétration Magique %", champ: 0, item: getItemStat("PercentMagicPenetrationMod"), percent: true },
                            { label: "Accélération Compétence (AH)", champ: 0, item: getItemStat("PercentCooldownMod") },
                            { label: "Vitesse Déplacement (MS)", champ: msChamp, item: getItemStat("FlatMovementSpeedMod") },
                            { label: "Omnivampirisme", champ: 0, item: getItemStat("OmniVamp"), percent: true },
                            { label: "Vol de Vie", champ: 0, item: getItemStat("PercentLifeStealMod"), percent: true },
                            { label: "Efficacité Soins/Boucliers", champ: 0, item: getItemStat("PercentHealingMod"), percent: true },
                            { label: "Ténacité", champ: 0, item: getItemStat("Tenacity"), percent: true },
                        ].map(({ label, champ, item, percent }) => (
                            <tr key={label}>
                                <td>{label}</td>
                                <td>{fmt(champ)}{percent ? "%" : ""}</td>
                                <td>+{fmt(item)}{percent ? "%" : ""}</td>
                                <td>{fmt(champ + item)}{percent ? "%" : ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {showExport && (
                <div className="Modal-Export-Overlay" onClick={() => setShowExport(false)}>
                    <div className="Modal-Export-Content" onClick={(e) => e.stopPropagation()}>
                        <div className="Bouton-Close-Affichage-Export-Image" onClick={() => setShowExport(false)}>x</div>
                        <ExportToImage
                            ListeItems={[...itemsDropLaningPhase1, ...itemsDropLaningPhase2, ...itemsDropPostLaningPhase] || []}
                            ListeRunes={[...selectedRunes, ...selectedRunesSecondaires, ...selectedRunesTertiaires]}
                            ChampionSelected={{ name: nomChampion, image: { full: imageChampion } }}
                            RoleSelected={selectedRole}
                            version={version}
                            Avancee={avancee}
                            ListeItemsAvancee={{
                                starter: itemsDropStarter,
                                firstBack: itemsDropFirstBack,
                                coreItem: itemsDropCoreItem,
                                coreBuildSuite: itemsDropCoreBuildSuite,
                                situationnels: itemsDropSituationnels,
                                consommables: itemsDropConsommables
                            }}
                        />
                    </div>
                </div>
            )}

            <div className="Bouton-Affiche-Export-Image" onClick={() => setShowExport(true)}>EXPORTER LE BUILD EN IMAGE</div>
            <div className="Bouton-Export-Build-JSON" onClick={ExporterBuildJSON}>EXPORTER LE BUILD EN JSON</div>
        </>
    );
}

export default Calculator_LOL