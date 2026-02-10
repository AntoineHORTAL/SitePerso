import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'
import { ListeEquipementsImpériales } from '../../Listes/WrathAndGlory/EquipementsImpériales'
import { ListeEquipementsAeldari } from '../../Listes/WrathAndGlory/EquipementsAeldari'
import { ListeEquipementOrk } from '../../Listes/WrathAndGlory/EquipementsOrk'

function ListeEquipements() {

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
            <div className="Container-Equipement-Global">
                <h1 style={{ textAlign: "center", fontSize: '3rem', color: 'hsl(0 0% 60%)' }}>ÉQUIPEMENTS</h1>
                <h2 style={{ textAlign: "center" }}>ARMURES</h2>
                <h3>ACCUMULER LES ARMURES</h3>
                <p>
                    Il est possible de porter plusieurs armures sauf que seul l'Ar la plus élevé sera appliqué à votre Résistance.<br />
                    Cependant vous avez les Traits de chaque Armure que vous portez, même si vous n'ajoutez pas son Ar.<br />
                    Toutefois les Armures avec le Trait Bouclier ne sont pas concernez par cette restriction.
                </p>
                <h3>INVULNRABLE</h3>
                <p>
                    Toute valeur d'Armure avec un astérisque (*) est Invulnérable.<br />
                    Si vous poretez une armure Invulnérable, les PA n'affecte pas votre Résistance.
                </p>
                <h3>TRAITS D'ARMES</h3>
                <p>
                    <strong>BOUCLIER</strong><br />
                    Maniés comme une arme défensive, les boucliers sont portés au bras au lieu d'être enfilés et peuvent être utilisés pour détourner les attaques.<br />
                    Une armure avec ce Trait ajoute son Ar à votre Défense et à votre Résistance, à condition que le MJ accepte que vous puissiez manœuvrer le bouclier pour bloquer l'attaque.<br /><br />
                    <strong>CHAMP DE FORCE</strong><br />
                    Les Champs de force personnels sont de véritables merveilles archéotechnologiques qui enveloppent leur utilisateur dans une barrière énergétique protectrice.<br />
                    Une armure avec ce Trait permet de faire un jet de Détermination contre les attaques qui infligent des Blessures mortelles.<br /><br />
                    <strong>ENCOMBRANTE</strong><br />
                    Les grandes armures peuvent restreindre considérablement les mouvements.<br />
                    Vous ne pouvez pas Courir ou Sprinter avec une armure Encombrante.<br /><br />
                    <strong>ÉNERGÉTIQUE (X)</strong><br />
                    Cette armure est conçue pour augmenter la puissance du porteur grâce aux miracles de la mécanisation.<br />
                    Lorsque vous portez une armure avec ce Trait, vous gagnez un bonus de Force égal au score. De plus, vous n'êtes pas jeté À terre lorsque vous obtenez une Complication en tirant avec une arme
                        possédant le Trait Lourd et qui n'a pas été fixée.<br /><br />
                    <strong>MASSIVE (X)</strong><br />
                    Les armures lourdes et restrictives possèdent le Trait Massive.<br />
                    Ce Trait réduit la Vitesse du porteur d'un nombre de mètres égal à son score.<br /><br />
                    <strong>ON Y VA !</strong><br />
                    Le pouvoir psychique latent d'un Ork renforce son armure et lui permet de se battre avec plus de vigueur lorsqu'il est blessé.<br />
                    Un Ork portant une armure avec ce Trait ignore les Traits Massive et Encombrante lorsqu'il est Blessé.
                </p>
                <h2>LISTE DES ARMURES ET AUTRES ÉQUIPEMENTS</h2>
                <h3 style={{ textAlign: "center" }}>IMPÉRIAUX</h3>
                <div className="Container-Equipement">
                    {
                        ListeEquipementsImpériales.map((Equ) => (
                            <div key={Equ.Id} className="Equipement">
                                <h4>{Equ.Nom}</h4>
                                <span>{Equ.Description}</span><br />
                                {Equ.Ar && Equ.Ar.trim() !== "" && (
                                    <span><strong>Valeur d'Armure (Ar) :</strong> {Equ.Ar}<br /></span>
                                )}
                                {Equ.Effet && Equ.Effet.trim() !== "" && (
                                    <span><strong>Effet :</strong> {Equ.Effet}<br /></span>
                                )}
                                {Equ.Trait && Equ.Trait.trim() !== "" && (
                                    <span><strong>Trait :</strong> {Equ.Trait}<br /></span>
                                )}
                                <span><strong>Valeur :</strong> {Equ.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Equ.Rareté}</span><br />
                                <span><strong>Mots-Clé :</strong> {Equ.MotsClés}</span><br />
                            </div>
                        ))
                    }
                </div>
                <h3 style={{ textAlign: "center" }}>AELDARI</h3>
                <div className="Container-Equipement">
                    {
                        ListeEquipementsAeldari.map((Equ) => (
                            <div key={Equ.Id} className="Equipement">
                                <h4>{Equ.Nom}</h4>
                                <span>{Equ.Description}</span><br />
                                {Equ.Ar && Equ.Ar.trim() !== "" && (
                                    <span><strong>Valeur d'Armure (Ar) :</strong> {Equ.Ar}<br /></span>
                                )}
                                {Equ.Effet && Equ.Effet.trim() !== "" && (
                                    <span><strong>Effet :</strong> {Equ.Effet}<br /></span>
                                )}
                                {Equ.Trait && Equ.Trait.trim() !== "" && (
                                    <span><strong>Trait :</strong> {Equ.Trait}<br /></span>
                                )}
                                <span><strong>Valeur :</strong> {Equ.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Equ.Rareté}</span><br />
                                <span><strong>Mots-Clé :</strong> {Equ.MotsClés}</span><br />
                            </div>
                        ))
                    }
                </div>
                <h3 style={{ textAlign: "center" }}>ORK</h3>
                <div className="Container-Equipement">
                    {
                        ListeEquipementOrk.map((Equ) => (
                            <div key={Equ.Id} className="Equipement">
                                <h4>{Equ.Nom}</h4>
                                <span>{Equ.Description}</span><br />
                                {Equ.Ar && Equ.Ar.trim() !== "" && (
                                    <span><strong>Valeur d'Armure (Ar) :</strong> {Equ.Ar}<br /></span>
                                )}
                                {Equ.Effet && Equ.Effet.trim() !== "" && (
                                    <span><strong>Effet :</strong> {Equ.Effet}<br /></span>
                                )}
                                {Equ.Trait && Equ.Trait.trim() !== "" && (
                                    <span><strong>Trait :</strong> {Equ.Trait}<br /></span>
                                )}
                                <span><strong>Valeur :</strong> {Equ.Valeur}</span><br />
                                <span><strong>Rareté :</strong> {Equ.Rareté}</span><br />
                                <span><strong>Mots-Clé :</strong> {Equ.MotsClés}</span><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ListeEquipements;