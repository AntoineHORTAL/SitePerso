import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'

import { ListeDomaineBiomancie } from '../../Listes/WrathAndGlory/DomaineBiomancie'
import { ListeDomaineDesRunesDeBataille } from '../../Listes/WrathAndGlory/DomaineDesRunesDeBataille'
import { ListeDomaineDivination } from '../../Listes/WrathAndGlory/DomaineDivination'
import { ListeDomaineMaleficarum } from '../../Listes/WrathAndGlory/DomaineMaleficarum'
import { ListeDomainePsychiqueUniversel } from '../../Listes/WrathAndGlory/DomainePsychiqueUniversel'
import { ListeDomainePyromancie } from '../../Listes/WrathAndGlory/DomainePyromancie'
import { ListeDomaineTelekinesie } from '../../Listes/WrathAndGlory/DomaineTelekinesie'
import { ListeDomaineTelepathie } from '../../Listes/WrathAndGlory/DomaineTelepathie'
import { ListePouvoirsPsychiquesMineurs } from '../../Listes/WrathAndGlory/PouvoirsPsychiquesMineurs'
import { ListePouvoirsPsychiquesUniversels } from '../../Listes/WrathAndGlory/PouvoirsPsychiquesUniversels'
import { ListePouvoirsFoi } from '../../Listes/WrathAndGlory/PouvoirsFoi'

function ListePouvoirPsychiques() {

    const [isHovered, setIsHovered] = useState(false);

    const ChevronLeftIcon = Lucide.ChevronLeft;


    const [displayListeDomaineBiomancie, setDisplayListeDomaineBiomancie] = useState(false);
    const [displayListeDomaineDesRunesDeBataille, setDisplayListeDomaineDesRunesDeBataille] = useState(false);
    const [displayListeDomaineDivination, setDisplayListeDomaineDivination] = useState(false);
    const [displayListeDomaineMaleficarum, setDisplayListeDomaineMaleficarum] = useState(false);
    const [displayListeDomainePsychiqueUniversel, setDisplayListeDomainePsychiqueUniversel] = useState(false);
    const [displayListeDomainePyromancie, setDisplayListeDomainePyromancie] = useState(false);
    const [displayListeDomaineTelekinesie, setDisplayListeDomaineTelekinesie] = useState(false);
    const [displayListeDomaineTelepathie, setDisplayListeDomaineTelepathie] = useState(false);
    const [displayListePouvoirsPsychiquesMineurs, setDisplayListePouvoirsPsychiquesMineurs] = useState(false);
    const [displayListePouvoirsPsychiquesUniversels, setDisplayListePouvoirsPsychiquesUniversels] = useState(false);
    const [displayListePouvoirsFoi, setDisplayListePouvoirsFoi] = useState(false);

    const toggleDisplayDivListeDomaineBiomancie = () => {
        console.log("slkdjdhfjksdhgfkjhgsdjkdfghs");
        setDisplayListeDomaineBiomancie(!displayListeDomaineBiomancie);
    }

    const toggleDisplayDiListeDomaineDesRunesDeBataille = () => {
        setDisplayListeDomaineDesRunesDeBataille(!displayListeDomaineDesRunesDeBataille);
    }

    const toggleDisplayDivListeDomaineDivination = () => {
        setDisplayListeDomaineDivination(!displayListeDomaineDivination);
    }

    const toggleDisplayDivListeDomaineMaleficarum = () => {
        setDisplayListeDomaineMaleficarum(!displayListeDomaineMaleficarum);
    }

    const toggleDisplayDivListeDomainePsychiqueUniversel = () => {
        setDisplayListeDomainePsychiqueUniversel(!displayListeDomainePsychiqueUniversel);
    }

    const toggleDisplayDivListeDomainePyromancie = (div) => {
        setDisplayListeDomainePyromancie(!displayListeDomainePyromancie);
    }

    const toggleDisplayDivListeDomaineTelekinesie = () => {
        setDisplayListeDomaineTelekinesie(!displayListeDomaineTelekinesie);
    }

    const toggleDisplayDivListeDomaineTelepathie = () => {
        setDisplayListeDomaineTelepathie(!displayListeDomaineTelepathie);
    }

    const toggleDisplayDivListePouvoirsPsychiquesMineurs = () => {
        setDisplayListePouvoirsPsychiquesMineurs(!displayListePouvoirsPsychiquesMineurs);
    }

    const toggleDisplayDivListePouvoirsPsychiquesUniversels = () => {
        setDisplayListePouvoirsPsychiquesUniversels(!displayListePouvoirsPsychiquesUniversels);
    }

    const toggleDisplayDivListePouvoirsFoi = () => {
        setDisplayListePouvoirsFoi(!displayListePouvoirsFoi);
    }

    return (
        <>
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/WrathAndGlory" className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </Link>
            </div>
            <div className="Container-Global-Pouvoirs-Psychiques">
                <h1 style={{ textAlign: 'center' }}>POUVOIRS PSYCHIQUES</h1>
                <h2 style={{ textAlign: 'center' }}>DOMAINES PSYCHIQUES</h2>
                <table className="Table-Liste-Domaine-Psychique">
                    <thead>
                        <tr>
                            <td>
                                <label>Domaine</label>
                            </td>
                            <td>
                                <label>Description</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => toggleDisplayDivListeDomaineBiomancie() }>
                            <td>
                                <label>Biomancie</label>
                            </td>
                            <td>
                                <label>Manipuler une forme biologique</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomaineDivination() }>
                            <td>
                                <label>Divination</label>
                            </td>
                            <td>
                                <label>Prédire ou lire le futur</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomainePyromancie() }>
                            <td>
                                <label>Pyromancie</label>
                            </td>
                            <td>
                                <label>Manipuler ou produire du feu</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomaineTelekinesie() }>
                            <td>
                                <label>Télékinésie</label>
                            </td>
                            <td>
                                <label>Exercer une force cinétique par la pensée</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomaineTelepathie() }>
                            <td>
                                <label>Télépathie</label>
                            </td>
                            <td>
                                <label>Manipuler l'esprit</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomaineMaleficarum() }>
                            <td>
                                <label>Maleficarum</label>
                            </td>
                            <td>
                                <label>Déchaîner les pouvoirs impies du Chaos</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDiListeDomaineDesRunesDeBataille() }>
                            <td>
                                <label>Runes de Bataille</label>
                            </td>
                            <td>
                                <label>Renforcer des alliés ou affaiblir des ennemis</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListeDomainePsychiqueUniversel() }>
                            <td>
                                <label>Pouvoirs Psychiques Universel</label>
                            </td>
                            <td>
                                <label>Phénomènes psychiques moins puissants qui n'appartiennent à aucun Domaine</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListePouvoirsFoi() }>
                            <td>
                                <label>Pouvoirs de Foi</label>
                            </td>
                            <td>
                                <label></label>
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <td>
                                <label>Espèce</label>
                            </td>
                            <td>
                                <label>Domaine connus</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>Aeldari</label>
                            </td>
                            <td>
                                <label>Vous pouvez apprendre les Pouvoirs Psychiques du Domaine de la Divination, du Domaine des Runes de Bataille et d'un autre Domaine de votre choix</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Toutes les autres Espèces</label>
                            </td>
                            <td>
                                <label>Vous pouvez apprendre les Pouvoirs Psychiques d'un seul Domaine de votre choix</label>
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <td colSpan='2'>
                                <label>Listes Pouvoirs Psychiques</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => toggleDisplayDivListePouvoirsPsychiquesUniversels() }>
                            <td colSpan='2'>
                                <label>Pouvoirs Psychiques Universels</label>
                            </td>
                        </tr>
                        <tr onClick={() => toggleDisplayDivListePouvoirsPsychiquesMineurs() }>
                            <td colSpan='2'>
                                <label>Pouvoirs Psychiques Mineurs</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="DivListeDomaineBiomancie" style={{ display: displayListeDomaineBiomancie ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE BIOMANCIE</h3>
                    {
                        ListeDomaineBiomancie.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineBiomancie"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomaineDesRunesDeBataille" style={{ display: displayListeDomaineDesRunesDeBataille ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE DES RUNES DE BATAILLE</h3>
                    {
                        ListeDomaineDesRunesDeBataille.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineDesRunesDeBataille"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomaineDivination" style={{ display: displayListeDomaineDivination ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE DIVINATION</h3>
                    {
                        ListeDomaineDivination.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineDivination"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomaineMaleficarum" style={{ display: displayListeDomaineMaleficarum ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE MALEFICARUM</h3>
                    {
                        ListeDomaineMaleficarum.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineMaleficarum"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomainePsychiqueUniversel" style={{ display: displayListeDomainePsychiqueUniversel ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE PSYCHIQUE UNIVERSEL</h3>
                    {
                        ListeDomainePsychiqueUniversel.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomainePsychiqueUniversel"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomainePyromancie" style={{ display: displayListeDomainePyromancie ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE PYROMANCIE</h3>
                    {
                        ListeDomainePyromancie.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomainePyromancie"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomaineTelekinesie" style={{ display: displayListeDomaineTelekinesie ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE TÉLÉKINÉSIE</h3>
                    {
                        ListeDomaineTelekinesie.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineTelekinesie"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListeDomaineTelepathie" style={{ display: displayListeDomaineTelepathie ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>DOMAINE TÉLÉPATHIE</h3>
                    {
                        ListeDomaineTelepathie.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListeDomaineTelepathie"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListePouvoirsPsychiquesMineurs" style={{ display: displayListePouvoirsPsychiquesMineurs ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>POUVOIRS PSYCHIQUES MINEURS</h3>
                    {
                        ListePouvoirsPsychiquesMineurs.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListePouvoirsPsychiquesMineurs"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListePouvoirsPsychiquesUniversels" style={{ display: displayListePouvoirsPsychiquesUniversels ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>POUVOIRS PSYCHIQUES UNIVERSELS</h3>
                    {
                        ListePouvoirsPsychiquesUniversels.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListePouvoirsPsychiquesUniversels"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
                <div id="DivListePouvoirsFoi" style={{ display: displayListePouvoirsFoi ? 'block' : 'none' }} className="Div-Liste-Pouvoirs-Psychiques">
                    <h3>POUVOIRS PSYCHIQUES UNIVERSELS</h3>
                    {
                        ListePouvoirsFoi.map(pouvoir => (
                            <div key={pouvoir.Id + "_ListePouvoirsFoi"} className="Pouvoirs-Psychiques">
                                <label style={{ textDecoration: 'underline', fontSize: '2rem' }}><strong>{pouvoir.Nom}</strong></label>
                                <label style={{ display: pouvoir.CoutPX ? 'block' : 'none' }}>Coût PX : {pouvoir.CoutPX}</label>
                                <label style={{ display: pouvoir.SD ? 'block' : 'none' }}>SD : {pouvoir.SD}</label>
                                <label style={{ display: pouvoir.Activation ? 'block' : 'none' }}>Activation : {pouvoir.Activation}</label>
                                <label style={{ display: pouvoir.Durée ? 'block' : 'none' }}>Durée : {pouvoir.Durée}</label>
                                <label style={{ display: pouvoir.Portée ? 'block' : 'none' }}>Portée : {pouvoir.Portée}</label>
                                <label style={{ display: pouvoir.CiblesMultiples ? 'block' : 'none' }}>Cibles Multiples : {pouvoir.CiblesMultiples}</label>
                                <label style={{ display: pouvoir.MotsCles ? 'block' : 'none' }}>Mots-Clés : {pouvoir.MotsCles}</label>
                                <label style={{ display: pouvoir.Prerequis ? 'block' : 'none' }}>Prérequis : {pouvoir.Prerequis}</label>
                                <label style={{ display: pouvoir.Effet ? 'block' : 'none' }}>Effet : {pouvoir.Effet}</label>
                                <label style={{ display: pouvoir.Surpuissance ? 'block' : 'none' }}>Surpuissance : {pouvoir.Surpuissance}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ListePouvoirPsychiques;