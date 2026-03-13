import { useDroppable } from "@dnd-kit/core";
import { useState, useEffect } from 'react'

function ZoneDrop({ itemsDrop, version, removeItemDrop, className, droppableId, selectedRole, updateItemCount }) {

    const { setNodeRef, isOver } = useDroppable({ id: droppableId});

    const [coutTotal, setCoutTotal] = useState(0);

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

    const MoyenneGoldTop = 5200;
    const MoyenneGoldJungle = 4800;
    const MoyenneGoldMiddle = 5300;
    const MoyenneGoldBottom = 5500;
    const MoyenneGoldSupport = 3600;

    const [moyenneGoldRoleActif, setMoyenneGoldRoleActif] = useState(0);

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
        const getStats = (statKey) =>
            itemsDrop.reduce((acc, item) => {
                const count = item.count || 1;
                const fromApi = item.stats?.[statKey] || 0;
                if (fromApi) return acc + fromApi * count;

                const parsed = parseItemStats(item);
                return acc + (parsed[statKey] || 0) * count;
            }, 0);

        setCoutTotal(itemsDrop.reduce((acc, item) => acc + (item.gold?.total || 0) * (item.count || 1), 0));

        setPointsVie(getStats("FlatHPPoolMod"));
        setArmure(getStats("FlatArmorMod"));
        setResistanceMagique(getStats("FlatSpellBlockMod"));
        setTenacite(getStats("Tenacity"));
        setDegatsAttaque(getStats("FlatPhysicalDamageMod"));
        setVitesseAttaque(getStats("PercentAttackSpeedMod"));
        setChancesCoupCritique(getStats("FlatCritChanceMod"));
        setDegatsCoupCritique(getStats("FlatCritDamageMod"));
        setLetalitePenetrationArmureFlat(getStats("FlatArmorPenetrationMod"));
        setLetalitePenetrationArmurePourcentage(getStats("PercentArmorPenetrationMod"));
        setPuissance(getStats("FlatMagicDamageMod"));
        setPenetrationMagiqueFlat(getStats("FlatMagicPenetrationMod"));
        setPenetrationMagiquePourcentage(getStats("PercentMagicPenetrationMod"));
        setAccelerationCompetence(getStats("PercentCooldownMod"));
        setMana(getStats("FlatMPPoolMod"));
        setVitesseDeplacement(getStats("FlatMovementSpeedMod"));
        setOmnivampirisme(getStats("OmniVamp"));
        setVolDeVie(getStats("PercentLifeStealMod"));
        setEfficaciteSoinsBoucliers(getStats("PercentHealingMod"));
        setRegenerationVie(getStats("FlatHPRegenMod"));
        setRegenerationMana(getStats("FlatMPRegenMod"));
    }, [itemsDrop]);

    useEffect(() => {
        if (selectedRole === "/public/Images/LOL/Top_icon.png") {
            setMoyenneGoldRoleActif(MoyenneGoldTop);
        }
        else if (selectedRole === "/public/Images/LOL/Jungle_icon.png") {
            setMoyenneGoldRoleActif(MoyenneGoldJungle);
        }
        else if (selectedRole === "/public/Images/LOL/Middle_icon.png") {
            setMoyenneGoldRoleActif(MoyenneGoldMiddle);
        }
        else if (selectedRole === "/public/Images/LOL/Bottom_icon.png") {
            setMoyenneGoldRoleActif(MoyenneGoldBottom);
        }
        else if (selectedRole === "/public/Images/LOL/Support_icon.png") {
            setMoyenneGoldRoleActif(MoyenneGoldSupport);
        }
    }, [selectedRole]);

    const handleClick = (e, item) => {
        if (e.button === 0) {
            updateItemCount(item.uniqueId, +1);
        }
        else if (e.button === 2) {
            updateItemCount(item.uniqueId, -1);
        }
    };

    return (
        <div ref={setNodeRef} className={className}>
            <div className="Item-Container">
                {itemsDrop.map((item) => (
                    <div key={item.uniqueId} className="Item" onMouseDown={(e) => handleClick(e, item)} onContextMenu={(e) => e.preventDefault()}>
                        <div onClick={() => removeItemDrop(item.uniqueId)} className="Bouton-Remove-Item-Drop">x</div>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
                        <label>{item.gold?.total}</label>
                        <label className="label-Item-Count-Drop-Zone" style={{ display: (item.count > 1) ? "block" : "none" }}>{item.count}</label>
                    </div>
                ))}
            </div>
            <div className="Stats-Build-Container">
                <label style={{ display: coutTotal ? "block" : "none" }}>Coût total : {coutTotal}</label>
                <label style={{ display: ((moyenneGoldRoleActif != 0) && coutTotal) ? "block" : "none" }}>Moyenne des golds : {moyenneGoldRoleActif}</label>
                <div className="Stat-Container">
                    <div className="Stat-Family">
                        <label style={{ display: (pointsVie || mana || armure || resistanceMagique || tenacite) ? "block" : "none" }} className="Titre-Stat-Family">Durabilité (Défense)</label>
                        <label style={{ display: pointsVie ? "block" : "none" }} >Points de Vie (PV) : {pointsVie} </label>
                        <label style={{ display: mana ? "block" : "none" }} >Mana : {mana}</label>
                        <label style={{ display: armure ? "block" : "none" }} >Armure : {armure}</label>
                        <label style={{ display: resistanceMagique ? "block" : "none" }} >Résistance Magique (RM) : {resistanceMagique}</label>
                        <label style={{ display: tenacite ? "block" : "none" }} >Ténacité : {tenacite}</label>
                    </div>
                    <div className="Stat-Family">
                        <label style={{ display: (degatsAttaque || vitesseAttaque || chancesCoupCritique || degatsCoupCritique || letalitePenetrationArmureFlat || letalitePenetrationArmurePourcentage) ? "block" : "none" }} className="Titre-Stat-Family">Dégâts Physiques (AD)</label>
                        <label style={{ display: degatsAttaque ? "block" : "none" }} >Dégâts d'Attaque (AD) : {degatsAttaque}</label>
                        <label style={{ display: vitesseAttaque ? "block" : "none" }} >Vitesse d'Attaque (AS) : +{Math.round(vitesseAttaque*100)}%</label>
                        <label style={{ display: chancesCoupCritique ? "block" : "none" }} >Chances de Coup Critique : +{Math.round(chancesCoupCritique*100)}%</label>
                        <label style={{ display: degatsCoupCritique ? "block" : "none" }} >Dégâts de Coup Critique : +{Math.round(degatsCoupCritique*100)}%</label>
                        <label style={{ display: letalitePenetrationArmureFlat ? "block" : "none" }} >Létalité / Pénétration d'Armure Flat : {letalitePenetrationArmureFlat}</label>
                        <label style={{ display: letalitePenetrationArmurePourcentage ? "block" : "none" }} >Létalité / Pénétration d'Armure Pourcentage : {letalitePenetrationArmurePourcentage}%</label>
                    </div>
                    <div className="Stat-Family">
                        <label style={{ display: (puissance || penetrationMagiqueFlat || penetrationMagiquePourcentage || accelerationCompetence) ? "block" : "none" }} className="Titre-Stat-Family">Puissance Magique (AP)</label>
                        <label style={{ display: puissance ? "block" : "none" }} >Puissance (AP) : {puissance}</label>
                        <label style={{ display: penetrationMagiqueFlat ? "block" : "none" }} >Pénétration Magique Flat : {penetrationMagiqueFlat}</label>
                        <label style={{ display: penetrationMagiquePourcentage ? "block" : "none" }} >Pénétration Magique Pourcentage : {penetrationMagiquePourcentage}%</label>
                        <label style={{ display: accelerationCompetence ? "block" : "none" }} >Accélération de Compétence (AH) : {accelerationCompetence}</label>
                    </div>
                    <div className="Stat-Family">
                        <label style={{ display: (vitesseDeplacement || omnivampirisme || volDeVie || efficaciteSoinsBoucliers || regenerationVie || regenerationMana) ? "block" : "none" }} className="Titre-Stat-Family">Utilitaire et Mobilité</label>
                        <label style={{ display: vitesseDeplacement ? "block" : "none" }} >Vitesse de Déplacement (MS) : {vitesseDeplacement}</label>
                        <label style={{ display: omnivampirisme ? "block" : "none" }} >Omnivampirisme : +{Math.round(omnivampirisme*100)}%</label>
                        <label style={{ display: volDeVie ? "block" : "none" }} >Vol de Vie : +{Math.round(volDeVie*100)}%</label>
                        <label style={{ display: efficaciteSoinsBoucliers ? "block" : "none" }} >Efficacité des Soins et Boucliers : {efficaciteSoinsBoucliers}%</label>
                        <label style={{ display: regenerationVie ? "block" : "none" }} >Régénération de Vie (PV) : +{Math.round(regenerationVie*100)}%</label>
                        <label style={{ display: regenerationMana ? "block" : "none" }} >Régénération de Mana : +{Math.round(regenerationMana*100)}%</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZoneDrop;