import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState, useMemo } from 'react'
import { ListeArmesAeldari } from '../../Listes/WrathAndGlory/ArmesAeldari'
import { ListeArmesOrk } from '../../Listes/WrathAndGlory/ArmesOrk'
import { ListeArmesImpériales } from '../../Listes/WrathAndGlory/ArmesImpériales'

function ListeArmes() {
    const [isHovered, setIsHovered] = useState(false);
    const [filtreValeur, setFiltreValeur] = useState('');
    const [filtreRareté, setFiltreRareté] = useState('');
    const [filtreMotsCles, setFiltreMotsCles] = useState('');

    const ChevronLeftIcon = Lucide.ChevronLeft;

    const toutesLesArmes = useMemo(() => {
        return [...ListeArmesAeldari, ...ListeArmesOrk, ...ListeArmesImpériales];
    }, []);

    const armesFiltrees = useMemo(() => {
        return toutesLesArmes.filter(arme => {
            if (filtreValeur && arme.Valeur !== filtreValeur) return false;

            if (filtreRareté && arme.Rareté !== filtreRareté) return false;

            if (filtreMotsCles && !arme.MotsClés.toLowerCase().includes(filtreMotsCles.toLowerCase())) {
                return false;
            }

            return true;
        });
    }, [toutesLesArmes, filtreValeur, filtreRareté, filtreMotsCles]);

    const armesParType = useMemo(() => {
        const groupes = {};
        armesFiltrees.forEach(arme => {
            if (!groupes[arme.Type]) {
                groupes[arme.Type] = [];
            }
            groupes[arme.Type].push(arme);
        });
        return groupes;
    }, [armesFiltrees]);

    const valeursUniques = useMemo(() => {
        return [...new Set(toutesLesArmes.map(a => a.Valeur))].sort((a, b) => a - b);
    }, [toutesLesArmes]);

    const raretesUniques = useMemo(() => {
        return [...new Set(toutesLesArmes.map(a => a.Rareté))];
    }, [toutesLesArmes]);

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

            <div className="Container-Global-Liste-Armes">
                <h2 style={{ textAlign: 'center' }}>ARMES</h2>

                {/* Section de filtres */}
                <div className="Container-Filtre-Arme">
                    <div className="Filtre-Arme">
                        <label>Valeur :</label>
                        <select
                            value={filtreValeur}
                            onChange={(e) => setFiltreValeur(e.target.value)}
                        >
                            <option value="">Toutes</option>
                            {valeursUniques.map(val => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                    </div>

                    <div className="Filtre-Arme">
                        <label>Rareté :</label>
                        <select
                            value={filtreRareté}
                            onChange={(e) => setFiltreRareté(e.target.value)}
                        >
                            <option value="">Toutes</option>
                            {raretesUniques.map(rar => (
                                <option key={rar} value={rar}>{rar}</option>
                            ))}
                        </select>
                    </div>

                    <div className="Filtre-Arme">
                        <label>Mots-clés :</label>
                        <input
                            type="text"
                            value={filtreMotsCles}
                            onChange={(e) => setFiltreMotsCles(e.target.value)}
                            placeholder="Ex: ORK, CHAMP DE FORCE..."
                        />
                    </div>

                    {(filtreValeur || filtreRareté || filtreMotsCles) && (
                        <button
                            onClick={() => {
                                setFiltreValeur('');
                                setFiltreRareté('');
                                setFiltreMotsCles('');
                            }}
                            className="Bouton-Reset-Filtre-Arme"
                        >
                            Réinitialiser
                        </button>
                    )}
                </div>

                {/* Affichage des armes groupées par type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {Object.keys(armesParType).sort().map(type => (
                        <div key={type} className="Container-Type-Arme">
                            <h4> {type} </h4>

                            {armesParType[type].map(arme => (
                                <div
                                    key={arme.Id + "_" + type}
                                    className="Arme"
                                >
                                    <label className="Nom-Arme">{arme.Nom}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Description :</strong> {arme.Description}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Pénétration d'Armure (PA) :</strong> {arme.PénétrationArmure}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Dégâts :</strong> {arme.Dégâts}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Dés de Dégâts Supplémentaires :</strong> {arme.DésDégâtsSupplémentaires}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Portée :</strong> {arme.Portée}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Rafale :</strong> {arme.Rafale}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Traits :</strong> {arme.Traits}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Valeur :</strong> {arme.Valeur}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Rareté :</strong> {arme.Rareté}</label>
                                    <label><strong style={{ textDecoration: 'underline' }}>Mots-Clés :</strong> {arme.MotsClés}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {armesFiltrees.length === 0 && (
                    <p style={{ textAlign: 'center', opacity: 0.7, marginTop: '2rem' }}>
                        Aucune arme ne correspond aux filtres sélectionnés.
                    </p>
                )}
            </div>
        </>
    );
}

export default ListeArmes;