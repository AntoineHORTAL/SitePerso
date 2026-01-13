import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { ListeOperateurs } from '../../Listes/Operateurs';
import { ListeAliens } from '../../Listes/Aliens';
import { ListeProgression } from '../../Listes/Progression_';

function JouerProfil() {
    const [isHoveredRetour, setIsHoveredRetour] = useState(false);
    const [activePersonnage, setActivePersonnage] = useState("Ktharr");
    const [isLoading, setIsLoading] = useState(true);
    const [progression, setProgression] = useState(null);
    const [compteurComp, setCompteurComp] = useState(0);
    const [compteurCapa, setCompteurCapa] = useState(0);
    const [competences, setCompetences] = useState([]);
    const [capacites, setCapacites] = useState([]);
    const [compComplet, setCompComplet] = useState(false);
    const [capaComplet, setCapaComplet] = useState(false);
    const [personnageComplet, setPersonnageComplet] = useState(false);

    const navigate = useNavigate();

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const ChevronUpIcon = Lucide.ChevronUp;
    const ChevronDownIcon = Lucide.ChevronDown;

    const ListePersonnages = [
        ...ListeAliens.map(alien => ({ ...alien, type: 'Alien' })),
        ...ListeOperateurs.map(operateur => ({ ...operateur, type: 'Operateur' }))
    ];

    useEffect(() => {
        const loadProgression = () => {
            const data = localStorage.getItem('progression');
            if (data) {
                try {
                    const parsed = JSON.parse(data);
                    console.log("Progression chargée avec succès :", parsed);
                    setProgression(parsed);
                    setIsLoading(false);
                } catch (e) {
                    console.error("Erreur parsing progression :", e);
                    setIsLoading(false);
                }
            } else {
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    const retryData = localStorage.getItem('progression_profil');
                    if (retryData || attempts >= 5) {
                        clearInterval(interval);
                        if (retryData) {
                            setProgression(JSON.parse(retryData));
                        }
                        setIsLoading(false);
                    }
                }, 500);
            }
        };

        loadProgression();
    }, []);

    useEffect(() => {
        const estCompOk = competences.length === 2;
        const estCapaOk = capacites.length === 1;

        setCompComplet(estCompOk);
        setCapaComplet(estCapaOk);

        setPersonnageComplet(estCompOk && estCapaOk);

        localStorage.setItem('competences', JSON.stringify(competences));
        localStorage.setItem('capacites', JSON.stringify(capacites));
        localStorage.setItem('activePersonnage', JSON.stringify(activePersonnage));

    }, [competences, capacites]);

    if (isLoading) {
        return <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Chargement de la progression du profil...</h2>;
    }

    if (!progression) {
        return <h2 style={{ textAlign: 'center', color: 'red' }}>Aucune progression trouvée. Retourne à la liste des profils.</h2>;
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const offset = -10 * remInPixels; // -10rem

            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const SelectCompetence = (index) => {

        console.log("Index cliqué :", index);

        setCompetences(prev => {
            const isAlreadySelected = prev.includes(index);

            if (isAlreadySelected) {                // Déjà sélectionné → on l'enlève
                return prev.filter(i => i !== index);

            }
            if (prev.length < 2) {                  // Pas sélectionné et place disponible → on l'ajoute
                return [...prev, index];

            } else {                                // Pas de place
                console.log("Maximum de 2 compétences atteint");
                return prev;
            }
        });
    };

    const SelectCapacite = (index) => {

        console.log("Index cliqué :", index);

        setCapacites(prev => {
            const isAlreadySelected = prev.includes(index);

            if (isAlreadySelected) {                // Déjà sélectionné → on l'enlève
                return prev.filter(i => i !== index);

            }
            if (prev.length < 1) {                  // Pas sélectionné et place disponible → on l'ajoute
                return [...prev, index];

            } else {                                // Pas de place
                console.log("Maximum de 1 capacités spéciales atteint");
                return prev;
            }
        });
    };

    const JouerPersonnage = () => {
        localStorage.setItem('activePersonnage', activePersonnage);
        localStorage.setItem('competences', JSON.stringify(competences));
        localStorage.setItem('capacites', capacites);

        navigate('/CygnusProjects_JouerPersonnage');
    };

    return (
        <>
            <div>
                <div
                    className="Container-Bouton-Retour-JDR"
                    onMouseEnter={() => setIsHoveredRetour(true)}
                    onMouseLeave={() => setIsHoveredRetour(false)}
                >
                    <Link to="/CygnusProjects_ListeProfils" className="Bouton-Retour-JDR">
                        <div className="IconeChevron-Left-Bouton-Retour">
                            <ChevronLeftIcon size={40} color={isHoveredRetour ? "black" : "hsl(0 0% 60%)"} />
                        </div>
                        <span>Retour</span>
                    </Link>
                </div>

                <div className="barre-navigation-fixe">
                    <label>Personnage sélectionné : {activePersonnage}</label>
                    <button
                        className="button-nav"
                        onClick={() => scrollToSection('Container-Global-Carte-Personnage')}
                        title="Cartes des personnages"
                    >
                        Cartes des personnages
                    </button>
                    <button
                        className="button-nav"
                        onClick={() => scrollToSection('Container-Table-Competences-Capacites')}
                        title="Tableaux de compétences et de capacités spéciales"
                    >
                        Tableaux de compétences et de capacités spéciales
                    </button>
                    <button
                        className="Bouton-Jeu-Avec-Personnage-Complet"
                        style={{
                            display: personnageComplet ? ('block') : ('none')
                        }}
                        onClick={JouerPersonnage}
                    >
                        Commencer à jouer avec {activePersonnage}
                    </button>
                </div>

                {/***************CARTES PERSONNAGES************/}
                <div className="Container-Global-Carte-Personnage" id="Container-Global-Carte-Personnage">
                    <h2>Aliens</h2>
                    <div className="Container-Carte-Personnage">
                        {ListePersonnages.filter(personnage => personnage.type === 'Alien').map(alien => {
                            //On récupère les infos du personnage (Niveau et XP actuelle)
                            const niveauAlien = progression?.Alien?.[alien.Id]?.Niveau || 1;
                            const xpActuelleAlien = progression?.Alien?.[alien.Id]?.XP || 0;

                            //On cherche le seuil d'XP dans ta ListeProgression pour ce niveau
                            const palierNiveau = ListeProgression.find(p => p.niveau_actuel === niveauAlien);
                            const xpRequise = palierNiveau ? palierNiveau.xp_necessaire : null;

                            //Calcul du pourcentage (si niveau max ou xp_necessaire null, on met 100%)
                            let pourcentageBarre = 0;
                            if (xpRequise === null) {
                                pourcentageBarre = 100; // Niveau max atteint
                            } else {
                                pourcentageBarre = Math.min((xpActuelleAlien / xpRequise) * 100, 100);
                            }

                            return (
                                <div key={alien.Id} className="Carte-Personnage" onClick={() => setActivePersonnage(alien.Id)}>
                                    <img src={alien.Details.CheminImage} alt={alien.Titre} />
                                    <label>{alien.Titre}</label>
                                    <div className="Container-Niveau-Barre">
                                        <label>Niveau {niveauAlien}</label>
                                        <div className="Progress-Barre">
                                            <div className="Barre" style={{ width: `${pourcentageBarre}%` }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <h2>Opérateurs</h2>
                    <div className="Container-Carte-Personnage">
                        {ListePersonnages.filter(personnage => personnage.type === 'Operateur').map(ope => {
                            const niveauOperateur = progression?.Operateur?.[ope.Id]?.Niveau || 1;
                            const progressionOperateur = progression?.Operateur?.[ope.Id]?.Progression || 0;

                            return (
                                <div key={ope.Id} className="Carte-Personnage" onClick={() => setActivePersonnage(ope.Id)}>
                                    <img src={ope.Details.CheminImage} />
                                    <label>{ope.Titre}</label>
                                    <div className="Container-Niveau-Barre">
                                        <label>Niveau {niveauOperateur}</label>
                                        <div className="Progress-Barre">
                                            <div className="Barre" style={{ width: `${progressionOperateur}%` }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/***************TABLEAU COMPETENCES ET CAPACITES************/}
                <div className="Container-Table-Competences-Capacites" id="Container-Table-Competences-Capacites">
                    <h2 style={{ marginTop: "5rem" }}>Liste des compétences de {activePersonnage}</h2>
                    <table>
                        <thead>
                            <tr>
                                <td><label style={{ padding: "1rem" }}>Nom</label></td>
                            </tr>
                        </thead>
                        <tbody>
                            {ListePersonnages
                                .find(perso => perso.Id === activePersonnage)?.Details?.Competences
                                .map((Comp, index) => (
                                    <tr key={index} className="TR" onClick={() => SelectCompetence(index)}>
                                        <td className="checkbox" style={{ display: 'none' }}>
                                            <input
                                                type="checkbox"
                                                id={`comp_${index}`}
                                                checked={competences.includes(index)}
                                            />
                                        </td>
                                        <td>
                                            <label>{Comp}</label>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <h2>Liste des Capacités spéciales de {activePersonnage}</h2>
                    <table>
                        <thead>
                            <tr>
                                <td><label>Nom</label></td>
                            </tr>
                        </thead>
                        <tbody>
                            {ListePersonnages
                                .find(perso => perso.Id === activePersonnage)?.Details?.Capacites
                                .map((Capa, index) => (
                                    <tr key={index} className="TR" onClick={() => SelectCapacite(index)}>
                                        <td className="checkbox" style={{ display: 'none' }}>
                                            <input
                                                type="checkbox"
                                                id={`capa_${index}`}
                                                checked={capacites.includes(index)}
                                            />
                                        </td>
                                        <td>
                                            <label>{Capa}</label>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default JouerProfil;