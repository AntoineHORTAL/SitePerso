function DivStatsChamp({ niveau, champ, version }) {

    const fmt = (val) => parseFloat(val.toFixed(3)).toString();

    return (
        <td className="Td-Container-Stats-Champ">
            {/*{*/}
            {/*    niveau === 1 ? (*/}
            {/*        <div className="DivStatsChamp">*/}
            {/*            <label><u>Points de Vie (PV) :</u> {champ.hp}</label>*/}
            {/*            <label><u>Régénération de Vie (PV)  :</u> {champ.hpregen}</label>*/}
            {/*            <label><u>Mana  :</u> {champ.mp}</label>*/}
            {/*            <label><u>Régénération de Mana :</u> {champ.mpregen}</label>*/}
            {/*            <label><u>Armure :</u> {champ.armor}</label>*/}
            {/*            <label><u>Résistance Magique (RM) :</u> {champ.spellblock}</label>*/}
            {/*            <label><u>Dégâts d'Attaque (AD) :</u> {champ.attackdamage}</label>*/}
            {/*            <label><u>Vitesse d'Attaque (AS) :</u> {champ.attackspeed}</label>*/}
            {/*            <label><u>Portée d'attaque :</u> {champ.attackrange}</label>*/}
            {/*            <label><u>Chances de Coup Critique :</u> {champ.crit}</label>*/}
            {/*        </div>*/}
            {/*    ) :*/}
            {/*        (*/}
                        <div className="DivStatsChamp">
                                <label><u>Points de Vie (PV) :</u> {fmt(champ.hp + (champ.hpperlevel * (niveau - 1)))}</label>
                                <label><u>Régénération de Vie (PV)  :</u> {fmt(champ.hpregen + (champ.hpregenperlevel * (niveau - 1)))}</label>
                                <label><u>Mana  :</u> {fmt(champ.mp + (champ.mpperlevel * (niveau - 1)))}</label>
                                <label><u>Régénération de Mana :</u> {fmt(champ.mpregen + (champ.mpregenperlevel * (niveau - 1)))}</label>
                                <label><u>Armure :</u> {fmt(champ.armor + (champ.armorperlevel * (niveau - 1)))}</label>
                                <label><u>Résistance Magique (RM) :</u> {fmt(champ.spellblock + (champ.spellblockperlevel * (niveau - 1)))}</label>
                                <label><u>Dégâts d'Attaque (AD) :</u> {fmt(champ.attackdamage + (champ.attackdamageperlevel * (niveau - 1)))}</label>
                                <label><u>Vitesse d'Attaque (AS) :</u> {fmt(champ.attackspeed + (champ.attackspeedperlevel * (niveau - 1)))}</label>
                                <label><u>Chances de Coup Critique :</u> {fmt(champ.crit + (champ.critperlevel * (niveau - 1)))}</label>
                        </div>
            {/*        )*/}
            {/*}*/}
        </td>
    );
}

export default DivStatsChamp;