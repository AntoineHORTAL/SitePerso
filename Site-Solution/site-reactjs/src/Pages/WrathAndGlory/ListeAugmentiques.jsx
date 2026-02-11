import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'
import { ListeAugmentiquesRenforcement } from '../../Listes/WrathAndGlory/AugmentiquesRenforcement'
import { ListeAugmentiquesImpériales } from '../../Listes/WrathAndGlory/AugmentiquesImpériales'
import { ListeAugmentiquesAeldari } from '../../Listes/WrathAndGlory/AugmentiquesAeldari'
import { ListeAugmentiquesOrk } from '../../Listes/WrathAndGlory/AugmentiquesOrk'
import { ListeOptionMécadendrite } from '../../Listes/WrathAndGlory/OptionMecadendrite'

function ListeAugmentiques() {

    const [isHovered, setIsHovered] = useState(false);

    const ChevronLeftIcon = Lucide.ChevronLeft;

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
            <div className="Container-Augmentiques-Global">
                <h2 style={{ textAlign: "center" }}>AUGMENTIQUES</h2>
                <span>IL y a 3 types d'Augmentiques : </span>
                <ul>
                    <li>
                        <span>les Augmentiques de Reconstitution</span>
                    </li>
                    <li>
                        <span>les Augmentiques de Renforcement</span>
                    </li>
                    <li>
                        <span>les Implants Augmentiques</span>
                    </li>
                </ul><br/>
                <h3>ACQUISITION D'AUGMENTIQUE</h3>
                <p>
                    S'obtiennent comme n'importe quel équipement via un Test d'Influence (basé sur la Valeur et la Rareté).<br />
                    En cas d'échec pour un modèle de "Renforcement", vous pouvez utiliser le même Test pour tenter d'acquérir un modèle de "Reconstruction" (moins cher).<br />
                </p><br />
                <h3>L'INSTALLATION D'AUGMENTIQUE</h3>
                <p>
                    Nécessite un Test de Technomaîtrise.<br />
                    Difficulté (SD) : égale à la Valeur de l'Augmentique.<br />
                    Échec : Provoque une Blessure Grave, sauf si un Test de Medicae immédiat réussit (même SD).<br />
                    Coût : Parfois inclus, sinon coûte 1 Richesse ou un service rendu.<br />
                </p><br />
                <h3>RETRAIT - DÉPOSE D'AUGMENTIQUE</h3>
                <p>
                    S'effectue avec un Test de Technomaîtrise<br />
                    La difficulté est réduite : la moitié du SD d'installation.<br />
                </p><br />
                <h3>TEMPS D'UNE OPÉRATION D'AUGMENTIQUE - BONUS</h3>
                <p>
                    Durée : Chaque opération prend un nombre d'Heures égal au SD du Test.<br />
                    Talent Augmentique : Posséder ce talent garantit une installation réussie.<br />
                    Modificateurs de difficulté :
                </p>
                <ul>
                    <li>
                        <span>Matériel de qualité inférieure : +1 SD</span>
                    </li>
                    <li>
                        <span>Chirurgie de campagne : +2 SD</span>
                    </li>
                </ul><br />
                <h2>AUGMENTIQUES DE RECONSTITUTION</h2>
                <p>
                    Les membres et organes perduent lors de vos aventures peuvent être remplacé.<br />
                    Les détails de chaque reconstitution spécifique doivent être décidés entre vous et votre MJ.<br />
                    Tous les Augmentiques de Reconstitution, sont nettement visible de tous. A moins de payer double pour une Reconstitution discrète.<br /><br />
                    Un Augmentique installé avec succès restaure la partie manquante et supprime l'ensemble des pénalités et contraintes associées à cette blessure.
                </p><br /><br />
                <h2 style={{ textAlign: 'center' }}>AUGMENTIQUES DE RENFORCEMENT</h2>
                <div className="Container-Augmentique">
                    {
                        ListeAugmentiquesRenforcement.map((Aug) => (
                            <div key={Aug.Id} className="Augmentique">
                                <h4>{Aug.Nom}</h4>
                                <span>{Aug.Description}</span><br />
                                {Aug.Remarque && Aug.Remarque.trim() !== "" && (
                                    <span><strong>Remarque :</strong> {Aug.Remarque}<br /></span>
                                )}
                                <span><strong>Effet :</strong> {Aug.Effet}</span><br />
                                <span><strong>Valeur :</strong> {Aug.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Aug.Rareté}</span><br />
                            </div>
                        ))
                    }
                </div>
                <h2 style={{ textAlign: 'center' }}>IMPLANTS AUGMENTIQUES</h2>
                <h3 style={{ textAlign: 'center' }}>AUGMENTIQUES IMPÉRIALES</h3>
                <div className="Container-Augmentique">
                    {
                        ListeAugmentiquesImpériales.map((Aug) => (
                            <div key={Aug.Id} className="Augmentique">
                                <h4>{Aug.Nom}</h4>
                                <span>{Aug.Description}</span><br />
                                {Aug.Remarque && Aug.Remarque.trim() !== "" && (
                                    <span><strong>Remarque :</strong> {Aug.Remarque}<br /></span>
                                )}
                                <span><strong>Effet :</strong> {Aug.Effet}</span><br />
                                <span><strong>Valeur :</strong> {Aug.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Aug.Rareté}</span><br /><br />
                                <h3 style={{ textAlign: 'center' }}>OPTION DE MÉCADENDRITE</h3>
                                {Aug.Nom === "Mécadendrite" && Aug.Remarque && Aug.Remarque.trim() !== "" && (
                                    ListeOptionMécadendrite.map((Opt) => (
                                        <p className="Option-Mécadendrite">
                                            <strong>{Opt.Nom}</strong><br />
                                            {Opt.Description}
                                        </p>
                                    ))
                                )}
                            </div>
                        ))
                    }
                </div>
                <h3 style={{ textAlign: 'center' }}>AUGMENTIQUES AELDARI</h3>
                <div className="Container-Augmentique">
                    {
                        ListeAugmentiquesAeldari.map((Aug) => (
                            <div key={Aug.Id} className="Augmentique">
                                <h4>{Aug.Nom}</h4>
                                <span>{Aug.Description}</span><br />
                                {Aug.Remarque && Aug.Remarque.trim() !== "" && (
                                    <span><strong>Remarque :</strong> {Aug.Remarque}<br /></span>
                                )}
                                <span><strong>Effet :</strong> {Aug.Effet}</span><br />
                                <span><strong>Valeur :</strong> {Aug.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Aug.Rareté}</span><br />
                            </div>
                        ))
                    }
                </div>
                <h3 style={{ textAlign: 'center' }}>AUGMENTIQUES ORK</h3>
                <div className="Container-Augmentique">
                    {
                        ListeAugmentiquesOrk.map((Aug) => (
                            <div key={Aug.Id} className="Augmentique">
                                <h4>{Aug.Nom}</h4>
                                <span>{Aug.Description}</span><br />
                                {Aug.Remarque && Aug.Remarque.trim() !== "" && (
                                    <span><strong>Remarque :</strong> {Aug.Remarque}<br /></span>
                                )}
                                <span><strong>Effet :</strong> {Aug.Effet}</span><br />
                                <span><strong>Valeur :</strong> {Aug.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Aug.Rareté}</span><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ListeAugmentiques;