import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'

function Règles() {
    const [isHovered, setIsHovered] = useState(false);
    const [sectionActive, setSectionActive] = useState('fondamentaux');

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const ChevronDownIcon = Lucide.ChevronDown;
    const ChevronUpIcon = Lucide.ChevronUp;

    const [subsectionsOuvertes, setSubsectionsOuvertes] = useState({});
    const [isHoveredBoutonRedirectPouvoirsPsychiques, setIsHoveredBoutonRedirectPouvoirsPsychiques] = useState(false);

    const toggleSubsection = (id) => {
        setSubsectionsOuvertes(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const sections = [
        { id: 'fondamentaux', nom: 'Fondamentaux' },
        { id: 'systeme', nom: 'Système de Jeu' },
        { id: 'combat', nom: 'Combat' },
        { id: 'degats', nom: 'Dégâts & Survie' },
        { id: 'conditions', nom: 'Conditions' },
        { id: 'dangers', nom: 'Dangers Environnementaux' },
        { id: 'equipement', nom: 'Équipement' },
        { id: 'psychiques', nom: 'Pouvoirs Psychiques' },
        { id: 'corruption', nom: 'Corruption & Ruine' },
        { id: 'progression', nom: 'Progression' },
        { id: 'speciales', nom: 'Règles Spéciales' }
    ];

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

            <div className="Container_Regles_WrathAndGlory">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>RÈGLES DE JEU</h2>

                {/* Navigation par onglets */}
                <div className="regles-navigation">
                    {sections.map(section => (
                        <button
                            key={section.id}
                            className={`regles-nav-btn ${sectionActive === section.id ? 'active' : ''}`}
                            onClick={() => setSectionActive(section.id)}
                        >
                            <span className="nav-text">{section.nom}</span>
                        </button>
                    ))}
                </div>

                {/* Contenu des sections */}
                <div className="regles-contenu">
                    {/* FONDAMENTAUX */}
                    {sectionActive === 'fondamentaux' && (
                        <div className="section-content">
                            <h2>Les Fondamentaux</h2>

                            <div className="regle-card">
                                <h3>Lancer les Dés</h3>
                                <p>Tous les Tests se feront via un cumul de D6. Le cumul prendra en compte la valeur de la Compétence ciblée et y ajouter la valeur de l'Attribut associé.</p>

                                <div className="highlight-box">
                                    <h4>Dé de Fureur</h4>
                                    <p>L'un des dé de ce cumul sera le "Dé de Fureur", prennez un dé d'une couleur ou d'une taille différente pour le différencier.</p>
                                    <ul>
                                        <li><strong>Sur 6 :</strong> Fureur Critique (ajoute 1 point de Gloire)</li>
                                        <li><strong>Sur 1 :</strong> Complication de Fureur</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="regle-card">
                                <h3>Seuil de Difficulté (SD)</h3>
                                <p>Chaque Test sera fait après la détermination du SD : <strong>[1-3-5-7-9]</strong></p>
                            </div>

                            <div className="regle-card">
                                <h3>Comptabiliser les Icônes</h3>
                                <ul>
                                    <li><strong>Icône simple :</strong> un 4 ou un 5</li>
                                    <li><strong>Icône Exaltée :</strong> un 6 (compte comme 2 icônes simples)</li>
                                </ul>
                                <p>Le SD équivaut au nombre d'Icônes que doit atteindre ou dépasser le Test.</p>
                            </div>

                            <div className="regle-card">
                                <h3>Exemples de Résultats</h3>
                                <div className="exemple-grid">
                                    <div className="exemple-box success">
                                        <strong>Réussite</strong>
                                        <p>SD 3 + 4 Icônes = Réussi</p>
                                    </div>
                                    <div className="exemple-box critical">
                                        <strong>Réussite Critique</strong>
                                        <p>Réussi + Dé Fureur 6 = Spectaculaire</p>
                                    </div>
                                    <div className="exemple-box fail">
                                        <strong>Échec</strong>
                                        <p>SD 3 + 2 Icônes = Échoué</p>
                                    </div>
                                    <div className="exemple-box complication">
                                        <strong>Complication</strong>
                                        <p>Échoué + Dé Fureur 1 = Désastreux</p>
                                    </div>
                                </div>
                            </div>

                            <div className="regle-card">
                                <h3>Conversion d'Icônes Exaltées</h3>
                                <p>On peut convertir une Icône Exaltée pour :</p>
                                <ul>
                                    <li>Gagner des informations</li>
                                    <li>Améliorer la qualité d'un Test</li>
                                    <li>Réduire le temps d'exécution</li>
                                    <li>Conversion en dégâts supplémentaires</li>
                                    <li>Conversion en points de Gloire</li>
                                </ul>
                            </div>

                            <div className="regle-card">
                                <h3>Ressources de Départ</h3>
                                <div className="ressources-grid">
                                    <div className="ressource-box joueur">
                                        <h4>Joueurs</h4>
                                        <p><strong>2 points de FUREUR</strong></p>
                                        <p><strong>0 point de GLOIRE</strong></p>
                                    </div>
                                    <div className="ressource-box mj">
                                        <h4>MJ</h4>
                                        <p><strong>Autant de points de RUINE que de joueurs</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SYSTÈME DE JEU */}
                    {sectionActive === 'systeme' && (
                        <div className="section-content">
                            <h2>Système de Jeu</h2>

                            <div className="regle-card">
                                <h3 onClick={() => toggleSubsection('fureur')} className="clickable-title">
                                    <span>Fureur</span>
                                    {subsectionsOuvertes['fureur'] ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                                </h3>
                                {subsectionsOuvertes['fureur'] && (
                                    <div className="subsection-content">
                                        <h4>Utilisation</h4>
                                        <ul>
                                            <li>Relancer les 1, 2, 3</li>
                                            <li>Action + 1 Fureur = enlever Rang + Tier points de Stress</li>
                                        </ul>
                                        <h4>Gain</h4>
                                        <ul>
                                            <li>Action héroïque</li>
                                            <li>Remplir un Objectif de Faction</li>
                                        </ul>
                                        <div className="info-box">
                                            <p>Au début de chaque session, chaque joueur lance 1D6 pour choisir son Objectif de Faction. Si réussi : +1 point de Fureur.</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="regle-card">
                                <h3 onClick={() => toggleSubsection('gloire')} className="clickable-title">
                                    <span>Gloire</span>
                                    {subsectionsOuvertes['gloire'] ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                                </h3>
                                {subsectionsOuvertes['gloire'] && (
                                    <div className="subsection-content">
                                        <h4>Gain</h4>
                                        <ul>
                                            <li>Convertir une Icône Exaltée (6) lors d'un Test (1 par Test)</li>
                                            <li>Réussite Critique (Test réussi + Dé Fureur 6)</li>
                                        </ul>
                                        <h4>Utilisation</h4>
                                        <ul>
                                            <li>Influencer la narration</li>
                                            <li>+1 dé par point de Gloire sur un Test</li>
                                            <li>+1 dégât par point de Gloire</li>
                                            <li>Augmenter la gravité d'un Coup Critique</li>
                                            <li>Voler l'Initiative d'un Ennemi</li>
                                        </ul>
                                        <div className="warning-box">
                                            <p><strong>⚠️ Attention :</strong> Utiliser un point de Gloire sans l'autorisation des autres = +1 point de Corruption</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="regle-card">
                                <h3 onClick={() => toggleSubsection('tests')} className="clickable-title">
                                    <span>Autres Types de Tests</span>
                                    {subsectionsOuvertes['tests'] ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                                </h3>
                                {subsectionsOuvertes['tests'] && (
                                    <div className="subsection-content">
                                        <div className="test-type">
                                            <h4>Test d'Influence</h4>
                                            <p>Avoir au moins un Mot-Clé en commun avec la cible</p>
                                            <p><strong>Pot-de-vin :</strong> 1 point de Richesse = 1 Icône</p>
                                        </div>
                                        <div className="test-type">
                                            <h4>Test d'Aide</h4>
                                            <p>Utiliser une Compétence ou Aptitude pour aider un allié</p>
                                        </div>
                                        <div className="test-type">
                                            <h4>Test Opposé</h4>
                                            <p>Modificateur de SD pour l'un = dés bonus pour l'autre</p>
                                        </div>
                                        <div className="test-type">
                                            <h4>Test de Corruption</h4>
                                            <p>Dés = Conviction</p>
                                        </div>
                                        <div className="test-type">
                                            <h4>Test de Résolution</h4>
                                            <p>Résister à la condition Effrayé (dés = Résolution)</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* COMBAT */}
                    {sectionActive === 'combat' && (
                        <div className="section-content">
                            <h2>Système de Combat</h2>

                            <div className="regle-card">
                                <h3>Initiative</h3>
                                <p>Trier tous les personnages par ordre décroissant d'Initiative.</p>
                                <p>Si égalité : lancer 1D6 pour départager.</p>
                            </div>

                            <div className="regle-card">
                                <h3>Embuscade</h3>
                                <p>Personnages pris en embuscade ne peuvent pas jouer au premier tour.</p>
                                <div className="info-box">
                                    <p><strong>Astuce :</strong> Dépenser 1 point de Gloire (PJ) ou Ruine (MJ) pour prendre conscience et jouer quand même.</p>
                                </div>
                            </div>

                            <div className="regle-card">
                                <h3>Actions (une fois par Tour)</h3>
                                {subsectionsOuvertes['actions'] && (
                                    <div className="subsection-content">
                                        <div className="action-category">
                                            <h4>Déplacement</h4>
                                            <p>Se déplacer selon sa Vitesse</p>
                                        </div>

                                        <div className="action-category">
                                            <h4>Action de Combat</h4>
                                            <ul>
                                                <li>Effectuer une attaque</li>
                                                <li>Attaque déstabilisante</li>
                                                <li>Test de Medicae</li>
                                            </ul>
                                        </div>

                                        <div className="action-category">
                                            <h4>Action Simple</h4>
                                            <ul>
                                                <li>Recharger une arme</li>
                                                <li>Dégainer/ranger une arme</li>
                                                <li>Enfoncer une porte</li>
                                                <li>Test de Vigilance</li>
                                            </ul>
                                        </div>

                                        <div className="action-category">
                                            <h4>Action de Réaction</h4>
                                            <p>1 fois par round en réponse à une action</p>
                                        </div>

                                        <div className="action-category special">
                                            <h4>Actions Multiples</h4>
                                            <p>Déclarer au début du tour : +2 SD par action supplémentaire</p>
                                        </div>

                                        <div className="action-category special">
                                            <h4>Actions Complexes</h4>
                                            <p>Empêche toute autre action (sauf gratuites)</p>
                                            <ul>
                                                <li>Sprinter</li>
                                                <li>Défense totale</li>
                                            </ul>
                                        </div>

                                        <div className="action-category special">
                                            <h4>Actions Gratuites</h4>
                                            <ul>
                                                <li>Crier un avertissement</li>
                                                <li>Ouvrir une porte déverrouillée</li>
                                                <li>Utiliser Psyniscience</li>
                                                <li>Jet de Détermination</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Suite du combat... */}
                        </div>
                    )}

                    {/* RÉGLES SPCIALES */}
                    {sectionActive === 'speciales' && (
                        <div className="section-content">
                            <h2>Règles Spéciales</h2>

                            <div className="regle-card">
                                <h3>Horde</h3>
                                <p>
                                    Chaque membre d'une Horde n'a qu'une Blessure.<br />
                                    Si on a plus d'Icônes que la Défense de la Horde on touche plusieurs cibles, chaque Icône supplémentaire compte comme une cible en plus.<br />
                                    Si autant d'Icônes que la Défense de la horde touche la cible.
                                </p>
                                <div className="info-box">
                                    <p>Si un membre de la Horde dépasse son max de Stress il meurt.</p>
                                </div>
                            </div>
                            <div className="regle-card">
                                <h3>Modificateur de Combat</h3>
                                <p>
                                    Complication p191<br />
                                    Tailles p191<br />
                                    Vision p191
                                </p>
                            </div>
                        </div>
                    )}

                    {/* PROGRESSION */}
                    {sectionActive === 'progression' && (
                        <div className="section-content">
                            <h2>Progression</h2>

                            <div className="regle-card">
                                <h3>On peut passer à un Tier suppérieur de 4 manières différentes:</h3>
                                <div className="exemple-grid">
                                    <div className="exemple-box success">
                                        <h4>L'Ascension dès la création</h4>
                                    </div>
                                    <div className="exemple-box critical">
                                        <h4>L'Ascension pas l'éxpérience</h4>
                                    </div>
                                    <div className="exemple-box fail">
                                        <h4>L'Ascension par étape</h4>
                                    </div>
                                    <div className="exemple-box complication">
                                        <h4>L'Ascension d'Archétype</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="regle-card success">
                                <p>
                                    Pour la création dès la création, il s'agit d'acheter l'un des packs d'Ascension après la création du personnage.<br />
                                    PAGES 149-154
                                </p>
                            </div>
                            <div className="regle-card critical">
                                <p>
                                    Le second c'est accumuler des PX au delà de 100PX et acheter un Tier supérieur.
                                </p>
                            </div>
                            <div className="regle-card fail">
                                <p>
                                    Le troisième c'est accomplir des étapes importantes dans la campagne pour gagner un Tier supérieur.
                                </p>
                            </div>
                            <div className="regle-card complication">
                                <p>
                                    Pour l'Ascension d'Archétype, il faut atteindre le Rang 3 minimum.<br />
                                    Choisir un des Archétypes du Tier supérieur qui correspond à l'évolution de votre archétype actuel.<br />
                                    Dépenser des PX pour égaler ou dépasser les Attributs et Compétences de l'Archétype choisi.<br />
                                    Vous êtes maintenant ce nouvel Archétype, ajouter tous les avantages de celui-ci tout en concervant ceux de l'ancien.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* CORRUPTION & RUINE */}
                    {sectionActive === 'corruption' && (
                        <div className="section-content">
                            <h2>Test de Corruption</h2>

                            <div className="regle-card">
                                <p>
                                    Pour les tests de corruption utiliser le score de conviction.<br />
                                    Si échec +1 point de RUINE pour le MJ et autant de points de CORRUPTION que la différence entre les Icônes et le SD.<br />
                                    Si complication en échecc points de CORRUPTION x 2, si réussite critique -2 SD.<br />
                                    On peut utiliser des points de FUREUR pour diminuer le SD (SD minimum 1).
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Test de mutation</h3>
                                <p>
                                    A chaque fois qu'on augmente le niveau de corruption on fait un test de mutation, on peut choisir de raté ce test.<br />
                                    Faire un jet de conviction, si échec faire un jet pour le tableau page 287.<br />
                                    Ensuite faire un jet d66 dans le tableau page 288 correspondant (si on a déjà la mutation ajouter 10).<br />
                                    <br />
                                    Pages tableau pour niveau de corruption et test de corruption.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>La Ruine</h3>
                                <p>
                                    Le MJ commence avec autant de points de RUINE que de joueurs.<br />
                                    Nombre de points de RUINE max nb joueur x 2.<br />
                                    On regagne des points de RUINE quand un joueur perd un test de corruption, perd un test de peur, un 6 sur dé fureur.<br />
                                    On peut utiliser les points de ruines pour relancer les échecs, restaurer le stress, faire des jet de détermination ou faire des actions de ruines (p320 Corebook et p7 TA Xenos).
                                </p>
                            </div>
                        </div>
                    )}

                    {/* POUVOIRS PSYCHIQUES */}
                    {sectionActive === 'psychiques' && (
                        <div className="section-content">
                            <h2>Pouvoirs Psychiques</h2>


                            <div className="regle-card">
                                <h3>Utiliser un Pouvoirs Psychique</h3>
                                <p>
                                    Dire quel pouvoir on utiliser et a quel niveau de puissance (tableau puissance p260).<br />
                                    Si une complication sur les dés de fureurs, faire un jet sur la tableau p263-264 pour chaque complication en plus de la première ajouter 10 au jet (D66).<br />
                                    Pas de réussite critique sur un 6 mais une Icône éxaltée.
                                </p>
                            </div>
                            <div className="regle-card" style={{ paddingBottom: '4rem' }}>
                                <h3>Différents Pouvoirs</h3>
                                <Link
                                    className="Bouton-Redirect-Pouvoirs-Psychiques"
                                    to="/WrathAndGlory_ListePouvoirPsychiques"
                                    onMouseEnter={() => setIsHoveredBoutonRedirectPouvoirsPsychiques(true)}
                                    onMouseLeave={() => setIsHoveredBoutonRedirectPouvoirsPsychiques(false)}
                                    style={{
                                        backgroundColor: isHoveredBoutonRedirectPouvoirsPsychiques ? 'hsl(0 0% 60%)' : 'black',
                                        color: isHoveredBoutonRedirectPouvoirsPsychiques ? 'black' : 'hsl(0 0% 60%)'
                                    }}
                                >
                                    <span>Liste de tous les Pouvoirs Psychiques</span>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* ÉQUIPEMENT */}
                    {sectionActive === 'equipement' && (
                        <div className="section-content">
                            <h2>Équipements</h2>


                            <div className="regle-card">
                                <p>
                                    Pour Réquisitionner de l'équipement faire un Test d'Influence SD en fonction de la valeur de l'équipement en question.<br />
                                    Il faut au moins un Mot-Clé en commun avec l'objet voulu.<br />
                                    Ajouter autant de dé au Test que de Mot-Clé en commun en plus du premier.<br />
                                    Si échec on peut utiliser de la Richesse pour ajouter des Icônes.<br />
                                    Si Complication -1 richesse.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Rareté d'Arme</h3>
                                <table style={{ margin: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <td>
                                                <span>Rareté</span>
                                            </td>
                                            <td>
                                                <span>Pénalité SD</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>Courant</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>0</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Peu Courant</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>+1</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Rare</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>+2</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Très Rare</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>+3</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Unique</span>
                                            </td>
                                            <td>
                                                <spann style={{ width: '100%', display: 'block', textAlign: 'center' }}>+4</spann>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="regle-card">
                                <h3>Richesse</h3>
                                <p>
                                    Richesse de départ = Tier.<br />
                                    Certains objet qu'on récupère pendant l'aventure peuvent valoir de la Richesse.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Marché noir</h3>
                                <p>
                                    Fiare un Test de Ruse SD 3 (modifiable en fonction de la Rareté de l'objet).<br />
                                    Il peut vous échanger l'objet qu'on veut contre d'autres objet, Richesse ou un service.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Réparer</h3>
                                <p>
                                    On peut Réparer un objet avec un Test de Technomaitrise (SD en fonction de l'usure par défaut 3).<br />
                                    +1 dé par Mot-Clé en commun avec l'objet.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Traits d'Armes</h3>

                                <div className="exemple-grid-equipement">
                                    <div className="exemple">
                                        <h4>Assaut</h4>
                                        <p>
                                            Tire pendant un Sprint avec SD +2.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Brutal</h4>
                                        <p>
                                            Les dés de dégâts supplémentaires:<br />
                                            <ul>
                                                <li>
                                                    <span>1 ou 2 -- 0 Dégât</span>
                                                </li>
                                                <li>
                                                    <span>3 ou 4 -- 1 Dégât</span>
                                                </li>
                                                <li>
                                                    <span>5 ou 6 -- 2 Dégâts</span>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Dispersion</h4>
                                        <p>
                                            +3 dés bonus sur une Horde.<br />
                                            Touches n'importe quelle nombre de cible tant qu'elles se trouvent à moins de 3 mètres les unes des autres.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Douloureux</h4>
                                        <p>
                                            Chaque Blessure donne aussi 1 point de Stress.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Electro (X)</h4>
                                        <p>
                                            Ajoute score en DS sur les véhicules.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Encombrant (X)</h4>
                                        <p>
                                            Ajoute le score en SD sur les Tests d'Attaques.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Explosion (X)</h4>
                                        <p>
                                            <table style={{ margin: 'auto' }}>
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <span>Score Explosion</span>
                                                        </td>
                                                        <td>
                                                            <span>Cibles Horde</span>
                                                        </td>
                                                        <td>
                                                            <span>Exemples</span>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>2</span>
                                                        </td>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>1</span>
                                                        </td>
                                                        <td>
                                                            <span>Micro-grenade</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>6</span>
                                                        </td>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>3</span>
                                                        </td>
                                                        <td>
                                                            <span>Grenade Frag</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>10</span>
                                                        </td>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>5</span>
                                                        </td>
                                                        <td>
                                                            <span>Missile Frag</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>20</span>
                                                        </td>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>10</span>
                                                        </td>
                                                        <td>
                                                            <span>Obus</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>30</span>
                                                        </td>
                                                        <td>
                                                            <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>15</span>
                                                        </td>
                                                        <td>
                                                            <span>Obus Tremble-Terre</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Fiable</h4>
                                        <p>
                                            Test de Réparation +1 dé bonus.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Flamme</h4>
                                        <p>
                                            Possède aussi le Trait Infligé (Feu).<br />
                                            1 seul jet de Dégâts même si plusieurs cibles touchées.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Force</h4>
                                        <p>
                                            Si Mot-Clé Psyker ajouter la moitié du score de Force Mentale à la valeur des Dégâts, sinon -2 Dégâts.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Fusion</h4>
                                        <p>

                                            Les dés de dégâts supplémentaires (portée courte):<br />
                                            <ul>
                                                <li>
                                                    <span>1 ou 2 -- 0 dégât</span>
                                                </li>
                                                <li>
                                                    <span>3 ou 4 -- 1 dégât</span>
                                                </li>
                                                <li>
                                                    <span>5 ou 6 -- 2 dégâts</span>
                                                </li>
                                            </ul>
                                            <br />
                                            Les dés de Dégâts Supplémentaires (contre véhicule):
                                            <ul>
                                                <li>
                                                    <span>1-3 -- 1 dégât</span>
                                                </li>
                                                <li>
                                                    <span>4-6 -- 2 dégâts</span>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Inflige (Condition)</h4>
                                        <p>
                                            Si cible Bléssée, elle prend la condition et si nombre après condition sore de SD à faire pour l'enlever.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Kustom</h4>
                                        <p>
                                            Choisir n'importe quel autre Trait et si il peut prendre un score 1D3.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Lourd (X)</h4>
                                        <p>
                                            Force égale au score sinon +2 SD sur les Tests.<br />
                                            Si complication vou êtes À Terre.<br />
                                            Caler ou installer l'arme annule Lourd.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Parade</h4>
                                        <p>
                                            +1 Défense contre Attaque Mêlée.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Perforant (X)</h4>
                                        <p>
                                            Si Icône Exaltée pendant Test ajoute score en PA.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Pistolet</h4>
                                        <p>
                                            Peuvent être utilisés en Engagé.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Précis (X)</h4>
                                        <p>
                                            +1 dé bonus sur Test + score DS.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Radiation (X)</h4>
                                        <p>
                                            Ajoute le score en résultat de DS.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Silencieux</h4>
                                        <p>
                                            Score Furtivité -2.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Surcharge</h4>
                                        <p>
                                            Si on utilise une arme Surchargée, complication on prend 1D6 Blessure Mortelles, si on touche +3 DS.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Tir rapide (X)</h4>
                                        <p>
                                            + score DS si cible courte portée.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Waaagh !</h4>
                                        <p>
                                            +1 dé bonus Si ORK et si Bléssé +1 DS.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Warp</h4>
                                        <p>
                                            Dégâts = Resistance Totale - 4 (sauf si Dégats de base plus élevés).
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Amélioration d'Arme</h4>
                                        <p>
                                            3 amélioration sur une arme maximum et une de chaque types.<br />
                                            p227-228.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Munitions</h4>
                                        <p>
                                            Pour acquerir des Munitions on peut faire un Test d'Influence, si reussite on à 3 Munitions supplémentaires.<br />
                                            Même chose pour les grenades et missiles, si réussite on en à 5 - rareté.<br />
                                            <br />
                                            Pour stocker plus de munitions on peut acheter des objets (Cartouchière ou Paquetage dorsal de Munition).<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/*DANGER ENVIRONNEMENTAUX*/}
                    {sectionActive === 'dangers' && (
                        <div className="section-content">
                            <h2>Danger Environnementaux</h2>


                            <div className="regle-card">
                                <h3>Asphyxie</h3>
                                <p>
                                    Faire un Test d'Endurence SD 3 pour chaque Tour ou Déplacement.<br />
                                    Si échec 1D3 Stress (si subi plus du max on perd connaissance).<br />
                                    Si vous perder connaissance sans avoir de sources d'oxygène, on meurt au bout d'autant de tour que le score d'Endurence.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Chute</h3>
                                <p>
                                    On subi 1 Blessure Mortelle (à partir de 5 mètres) + 1D3 Blessure Mortelles pour chaque 5 mètres.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Électricité</h3>
                                <p>
                                    Subi autant de Dégats que l'intensité életrique (voir tableau p201), après faire un Test d'Endurence.<br />
                                    Si échec Entravé pendant 1 tour et mis à terre si complication, sinon on agit normalement.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Feu</h3>
                                <p>
                                    Test Athlétisme quand exposé à des flammes.<br />
                                    Si echec on prend Feu, si c'est une arme en cas de Blessure on prend Feu.<br />
                                    Si pas d'agilité réussite auto.
                                </p>
                            </div>
                            <div className="regle-card">
                                <h3>Radiations</h3>
                                <p>
                                    Test Survie SD 9 pour repérer la source des rayonnements.<br />
                                    Test Endurence quand on est exposé.<br />
                                    Si échec 1D3 Blessures Mortelles, 1D3 Stress, Secoué pendant 1 Round.<br />
                                    Quand exposé à des Radiations possibbilité de Test de Corruption.<br />
                                    <br />
                                    Si empoisonnement au  radiation voir tableau p202.
                                </p>
                                <table style={{ margin: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <td>
                                                <span>Intensité</span>
                                            </td>
                                            <td>
                                                <span>Dégâts</span>
                                            </td>
                                            <td>
                                                <span>SD Test Endurence</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>Faible</span>
                                            </td>
                                            <td>
                                                <span>1 Blessure Mortelle</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>3</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Moyenne</span>
                                            </td>
                                            <td>
                                                <span>1D3 Blessures Mortelles</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>5</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Élevée</span>
                                            </td>
                                            <td>
                                                <span>1D6 Blessures Mortelles</span>
                                            </td>
                                            <td>
                                                <span style={{ width: '100%', display: 'block', textAlign: 'center' }}>7</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="regle-card">
                                <h3>Températures extrêmes</h3>
                                <p>
                                    Faire un Test d'Endurence, toutes les Heures ou tous les x round (x = score endurence).<br />
                                    Si échec vous êtes Fatigué juqu'au prochain Repos / Rassemblement.
                                </p>
                            </div>
                        </div>
                    )}

                    {/*CONDITIONS*/}
                    {sectionActive === 'conditions' && (
                        <div className="section-content">
                            <h2>Conditions</h2>

                            <div className="regle-card">
                                <div className="exemple-grid-equipement">
                                    <div className="exemple">
                                        <h4>À terre</h4>
                                        <p>
                                            Défense -2 contre les ennemi à - 5 mètres.<br />
                                            Défense +1 contre les ennemi à + 6 mètres.<br />
                                            Se lever Action Gratuite (même chose pour l'aide alliée).
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Aveuglé</h4>
                                        <p>
                                            +4 SD pour les Actions liées à la vue.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Effrayé</h4>
                                        <p>
                                            Test de Résolution contre SD de la cause.<br />
                                            Si échec, +2 SD sur tous les Test jusqu'à la fin de la Scène ou un Test de Commandement allié (SD 2 + valeur source peur), sinon plus Effrayé.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Empoisonné</h4>
                                        <p>
                                            +2 SD sur tous les Test.<br />
                                            Pour l'enlevé faire un Test d'Endurence SD en fonction du poison ou avoir reçu du Medicae.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>EN feu</h4>
                                        <p>
                                            1D3 Blessures au début de chaque Tour.<br />
                                            Test d'Athlétisme (SD 3) pour se roulé par terre et éteindre le feu.<br />
                                            Sinon ignorer le feu et faire un Test de Force Mental SD 3, si échec vous êtes Perturbé.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Etravé</h4>
                                        <p>
                                            Pas de Déplacement et Défense -2.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Fatigué</h4>
                                        <p>
                                            Déplacement diminué (Ramper ou Marcher), Action De Combat de base, Battre En Retraite.<br />
                                            Pas de Test de Détermination, Si Stress en plus transformé en Blessure Mortelle.<br />
                                            Si le Stress dépasse la jauge vous êtes Fatigué.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Frénétique</h4>
                                        <p>
                                            Si résiste à la frénésie Test Force Mentale SD 3.<br />
                                            Vous courez vers l'ennemi le plus proche.<br />
                                            +1 à votre Force, immunisé contre Fatigué et Pilonné et utilisé Attaque À Outrance.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Perturbé</h4>
                                        <p>
                                            +1 SD sur tous les Tests.<br />
                                            Dure 1 Tour.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Pilloné</h4>
                                        <p>
                                            Rester a couvert ou chercher le couvert le plus proche (utilise le Déplacement de votre Tour).<br />
                                            +2 SD sur celui qui voius Pilonne.<br />
                                            Vous pouvez rallier les autres personnages Pilonné pour enlever l'effet (Test Commandement SD = valeur Rafale).
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Saignement</h4>
                                        <p>
                                            1 Blessure Mortelle au début de chaque Tour.<br />
                                            Test Endurence (SD 4), allié Medicae ou auto Medicae SD +1.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Secoué</h4>
                                        <p>
                                            Ni Courir ni Sprinter jusqu'à fin du Tour.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Térrorisé</h4>
                                        <p>
                                            Faire Test Résolution contre la source de la terreur.<br />
                                            Si échec utiliser toutes les Actions pendant votre Tour ou partir jsuqu'à ne plus voir la source de la terreur.<br />
                                            Sarrête à la fin de la Scène ou si allié Commandement (SD 2 + valeur terrorisé).
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Vulérable</h4>
                                        <p>
                                            -1 Défense jusqu'à prochain Tour.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/*DÉGÂTS & SURVIE*/}
                    {sectionActive === 'degats' && (
                        <div className="section-content">
                            <h2>Dégâts et Survie</h2>


                            <div className="regle-card">
                                <p>
                                    Les personnages bléssés ont +1 SD sur tous les Tests.<br />
                                    <br />
                                    Quand on est Mourrant on peut ni bouger ni se battre comme avant, il faut vite se faire soigner.<br />
                                    On a automatiquement une Blessure De Guerre et on tombe à terre.<br />
                                    <br />
                                    Si on subi une Blessure quand on est mourrant, on a une Blessure Grave et si on subi plus de Blessure Grave que le Tier +1 on Meurt (tableau p195).<br />
                                    <br />
                                    On peut faire un Test de Détermination quand on prend des Blessures en étant Mourrant, si on baisse les Blessures à 0 on prend pas de Blessures Grave.<br />
                                    <br />
                                    Quand on est Mourant on peut soit Ramper, faire une Retraite ou faire une Action De Combat.
                                </p>
                            </div>

                            <div className="regle-card">
                                <h3>Blessures de guerre</h3>
                                <p>
                                    Si on montre une Blessure De Guerre on gagne +1 sur le Test d'Intimidation.
                                </p>
                            </div>

                            <div className="regle-card">
                                <h3>Agravations</h3>
                                <p>
                                    <table style={{ margin: 'auto' }}>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <span>D6</span>
                                                </td>
                                                <td>
                                                    <span>Résultat</span>
                                                </td>
                                                <td>
                                                    <span>Aggravation</span>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>1-2</span>
                                                </td>
                                                <td>
                                                    <span>Cicatrice de guerre</span>
                                                </td>
                                                <td>
                                                    <span>Doigts manquants</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>3</span>
                                                </td>
                                                <td>
                                                    <span>Brûlure localisée</span>
                                                </td>
                                                <td>
                                                    <span>Brûlure sévère</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>4</span>
                                                </td>
                                                <td>
                                                    <span>Mâchoire brisée</span>
                                                </td>
                                                <td>
                                                    <span>Langue coupée</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>5</span>
                                                </td>
                                                <td>
                                                    <span>Spasmes réccurrents</span>
                                                </td>
                                                <td>
                                                    <span>Genou douloureux</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>6</span>
                                                </td>
                                                <td>
                                                    <span>Oreille arrachée</span>
                                                </td>
                                                <td>
                                                    <span>Blessure persistante</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>

                            <div className="regle-card">
                                <h3>Effets</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                <span>D6</span>
                                            </td>
                                            <td>
                                                <span>Résultat</span>
                                            </td>
                                            <td>
                                                <span>Effet</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>1</span>
                                            </td>
                                            <td>
                                                <span>Main</span>
                                            </td>
                                            <td>
                                                <span>Vous souffrez d'une grave blessure à la main ; vous ne pouvez plus utiliser cette dernière. <br />Lancer 1D6 ; <br />1-3 -- votre main gauche est blessée ; <br />4-6 -- voter main droite
                                                    est blessée. <br /><br />La pert des deux mains signifie que vous ne pouvez plus tenir d'armes ou d'équipement similaire.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>2</span>
                                            </td>
                                            <td>
                                                <span>Bras</span>
                                            </td>
                                            <td>
                                                <span>Vous souffrez d'une grave blessure au bras. <br />Lancez 1D6 ; <br />1-3 -- votre bras gauche est blessé ; <br />4-6 -- votre bras droit est blessé. <br /><br />La perte des deux bras signifie que
                                                    vous ne pouvez plus tenir d'armes ni d'équipement similaire.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>3</span>
                                            </td>
                                            <td>
                                                <span>Pied</span>
                                            </td>
                                            <td>
                                                <span>Vous souffrez d'une grave blessure au pied. <br />Lancez 1D6 ; <br />1-3 -- votre pied gauche est blessé ; <br />4-6 -- votre pied droit est blessé. <br /><br />Perdre les deux pieds signifie que vous
                                                    êtes incapables de Marcher, de Courir ou de Sprinter et que vous ne pouvez que Ramper.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>4</span>
                                            </td>
                                            <td>
                                                <span>Jambe</span>
                                            </td>
                                            <td>
                                                <span>Vous souffrez d'une grave blessure à la jambe. <br />Lancez 1D6 ; <br />1-3 -- votre jambe gauche est blessé ; <br />4-6 -- votre jambe droit est blessé. <br /><br />Tous les Tests basé sur l'Enduance
                                                    peuvent devenir plus difficiles, avec une pénalité minimale de +1 SD.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>5</span>
                                            </td>
                                            <td>
                                                <span>Torse</span>
                                            </td>
                                            <td>
                                                <span>Vous souffrez d'une blessure grave sui endommage vos organes, par emeple le coeur, les poumons ou le foie. <br />Tous les Tests basés sur l'Endurance peuvent devenir plus difficiles,
                                                    avec une pénalité minimale de +1 SD.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>6</span>
                                            </td>
                                            <td>
                                                <span>Oeil</span>
                                            </td>
                                            <td>
                                                <span>Un de vos yeux est irrémédiablement endommagé. <br />Un seul oeil blessé peut ajouter ue pénalité, telle que +2 SD  tous les Tests qui nécessitet de voir. <br />Lancez 1D6 : <br />1-3 -- votre oeil
                                                    gauche est blessé ; <br />4-6 -- votre oeil droit est blessé. <br /><br />Si vous perdez vos deux yeux vous êtes Aveuglés.</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="regle-card">
                                <div className="exemple-grid-equipement">
                                    <div className="exemple">
                                        <h4>Mort instantannée</h4>
                                        <p>
                                            Si on subi plus du double de notre max de blessure on meurt sur le coup.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Stress</h4>
                                        <p>
                                            Si la jauge de Stress est dépassé on est Fatigué.<br />
                                            On peut prendre une Action De Combat et un point de Fureur pour enlever Rang + Tier points de Stress.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Détermination</h4>
                                        <p>
                                            On peut faire un Test De Détermination pour convertir les Blessures en Stress (dés = score Endurence), 1 Icône = +1 Stress -1 Blessure.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Rassemblement</h4>
                                        <p>
                                            Prend 1 heure pour se reposer et réfléchire, si on a un score de Medicae on peut soigné un seul allié d'autant de Blessure que le score de Medicae.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Repos</h4>
                                        <p>
                                            Prend 6 heures poyur se reposer et réfléchir, le Stress et le Repos passent à 0, points de Fureur réinitialisé à 2.
                                        </p>
                                    </div>
                                    <div className="exemple">
                                        <h4>Retraite peu honorable</h4>
                                        <p>
                                            On peut faire une Retraite Peu Honorable qui ammène tous les PJ dans un lieu sur, ils perdent tous leurs points de Gloire et le MJ prend autant de points de Ruines que de joueurs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Règles;


//import { Link } from 'react-router-dom'
//import * as Lucide from 'lucide-react'
//import { useState } from 'react'

//function Règles() {

//    const [isHovered, setIsHovered] = useState(false);

//    const ChevronLeftIcon = Lucide.ChevronLeft;

//    return (
//        <>
//            <div
//                className="Container-Bouton-Retour-JDR"
//                onMouseEnter={() => setIsHovered(true)}
//                onMouseLeave={() => setIsHovered(false)}
//            >
//                <Link to="/WrathAndGlory" className="Bouton-Retour-JDR">
//                    <div className="IconeChevron-Left-Bouton-Retour">
//                        <ChevronLeftIcon
//                            size={40}
//                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
//                        />
//                    </div>
//                    <span>Retour</span>
//                </Link>
//            </div>


//            <div className="Container_Regles_WrathAndGlory">
//                <h2 style={{ textAlign: 'center' }}>RÈGLES</h2>

//                <p>
//                    <h3 style={{ textAlign: 'center' }}>LES FONDAMENTAUX</h3>
//                    Tous les Tests se feront via un cumul de D6.<br />
//                    Le cumul prendra en compte la valeur de la Compétence ciblée et y ajouter la valeur de l'Attribut associé.<br />
//                    Chaque Test sera fait après la détermination du SD (Seuil de Difficulté) [1-3-5-7-9].<br />
//                    Si le joueur ou le groupe décide que le Test est faisable ou qu'il doit absolument être fait, il lance le cumul de dés.<br />
//                    L'un des dé de ce cumul sera le "Dé de Fureur", prennez un dé d'une couleur ou d'une taille différente pour le différencier.<br />
//                    Il fonctionne comme un dé normal à la différece qu'il peut déclencher une Fureur Critique (sur un 6) [en ajoutant 1 à la réserve de Gloire] ou une Complication de Fureur (sur un 1).<br /><br />
//                    Expl :
//                    <ul>
//                        <li>
//                            <span>Si le SD est de 3 et que le joueur obtient 4 Icônes, le Test est réussi ; si il y a une Complication de Fureur, le Test reste réussi mais il y aura une complication innatendu</span>
//                        </li>
//                        <li>
//                            <span>Si le SD est de 3 et que le joueur obtient 4 Icônes, le Test est réussi ; si il y a une Fureur Critique, le Test est réussi de manière spectaculaire</span>
//                        </li>
//                        <li>
//                            <span>Si le SD est de 3 et que le joueur obtient 2 Icônes, le Test est échoué ; si il y a une Complication de Fureur, le Test échouée de manière désastreuse</span>
//                        </li>
//                        <li>
//                            <span>Si le SD est de 3 et que le joueur obtient 2 Icônes, le Test est échoué ; si il y a une Fureur Critique, le Test est échouée mais avec un effet positif inattendu</span>
//                        </li>
//                    </ul>
//                    <br />
//                    Une fois le cumul de dés fait et lancer, on comptabilise les Icônes.<br />
//                    Icône simple: un 4 ou un 5.<br />
//                    Icône Exaltée: un 6 (compte comme 2 icônes simples).<br />
//                    Le SD défini avant le Test équivaux au nombre d'Icône que doit atteindre ou dépasser le Test.<br />
//                    <br />
//                    On peut aussi Convertir une Icône Exaltée pour :
//                    <ul>
//                        <li>
//                            <span>Gagner des informations</span>
//                        </li>
//                        <li>
//                            <span>Améliorer la qualité d'un Test</span>
//                        </li>
//                        <li>
//                            <span>Réduire le temps d'éxectution</span>
//                        </li>
//                        <li>
//                            <span>Conversion en dégâts supplémentaires</span>
//                        </li>
//                        <li>
//                            <span>Et conversion en points de Gloire</span>
//                        </li>
//                    </ul>
//                    <br />
//                    <h3>RESSOURCES DE DEPART</h3>
//                    <h4>JOUEURS</h4>
//                    2 points de FUREUR.<br />
//                    0 point de GLOIRE.
//                    <h4>MJ</h4>
//                    Autant de points de RUINE que de joueurs.<br />
//                    <br />
//                    <br />
//                    <br />
//                    <h3 style={{ textAlign: 'center' }}>SYSTÈME DE JEU</h3>
//                    <h4>FUREUR</h4>
//                    On peut dépenser un point de Fureur pour pouvoir relancer les 1, 2, 3.<br />
//                    On peut dépenser une action et un point de Fureur pour enlever rang + tier points de stress.<br />
//                    On peut gagner un point de Fureur en faisant une action héroique ou remplir un Objectif.<br />
//                    A chaque début de session de jeu, chaque joueur lance 1D6 pour choisir son Objectf de Faction durant la session.<br />
//                    Si le joueur réussit son Objectif, il gagne 1 point de Fureur.<br />
//                    <br />
//                    <h4>GLOIRE</h4>
//                    N'importe quel 6 (Icône exaltée) lors d'un test peut être converti en point de GLOIRE (1 par test).<br />
//                    On gagne aussi 1 point de GLOIRE quand on obtient une Réussite Critique (Test réussi + dé Fureur 6).<br />
//                    Les points de Gloire sont utiliser par tout le groupe pour :
//                    <ul>
//                        <li>
//                            <span>Influencer la narration et se tirer de situations difficiles</span>
//                        </li>
//                        <li>
//                            <span>Augmenter le nombre de dés lors d'un Test (1 dé par points de Gloire)</span>
//                        </li>
//                        <li>
//                            <span>Augmenter les dégâts (1 par points de Gloire)</span>
//                        </li>
//                        <li>
//                            <span>Augmenter la gravité d'un Coup Critique</span>
//                        </li>
//                        <li>
//                            <span>Voler l'Initiative d'un Ennemi lors d'un Combat</span>
//                        </li>
//                    </ul>
//                    Si un joueur utilise un point de GLOIRE sans l'autorisation des autres il gagne un point de corruption.<br />
//                    <br />
//                    <br />
//                    <h3>AUTRES TESTS</h3>
//                    Il y aura plusieurs types de Test (en plus du Test simple) :
//                    <ul>
//                        <li>
//                            <span>Les Tests d'Influence</span>
//                            <span>Pot-de-vin</span><br />
//                            <span>Après un Test d'Influence, on peut utiliser de la richesse pour acquérir plus d'Icônes (1 point de Richesse = 1 Icône)</span>
//                        </li>
//                        <li>
//                            <span>Exercer son autorité</span><br />
//                            <span>Avoir au moins un Mot-Clé en commun avec la cible du Test</span>
//                        </li>
//                        <li>
//                            <span>Test d'Attaque</span>
//                        </li>
//                        <li>
//                            <span>Aider</span><br />
//                            <span>Utiliser des Compétences ou Aptitude pour aider un allier lors d'un Test</span>
//                        </li>
//                        <li>
//                            <span>Test d'Attribut</span>
//                        </li>
//                        <li>
//                            <span>Test de Corruption (cumul de dés = Conviction)</span>
//                        </li>
//                        <li>
//                            <span>Test de Résolution :  résiste à la condition Effrayé (cumul de dés = Résolution)</span>
//                        </li>
//                        <li>
//                            <span>Test Opposés</span><br />
//                            <span>Quand 2 personnages font des actions opposés, ils font un Test opposé; tout modificateur de SD pour l'un donne un dés bonus pour l'autre</span>
//                        </li>
//                    </ul>
//                    <br />
//                    <br />

//                    <h3 style={{ textAlign: 'center' }}>SYSTÈME DE COMBAT</h3>
//                    <h4>TIRER L'INITIATIVE</h4>
//                    Quand un combat commence, on prend la stat d'Initiative de tous les personnages impliqués dans le combat et on les tries par ordre décroissant.<br />
//                    Si plusieurs personnages ont la même valeur d'Initiative, ils lancent un D6 pour savoir qui commence avant l'autre.<br />
//                    <br />
//                    <h4>EMBUSCADE</h4>
//                    Si un personnage ou un groupe de personnage ne sont pas prêt a être en combat ils sont en embuscade.<br />
//                    Les personnages prient en embuscade ne peuvent pas jouer pendant le premier tour du combat.<br />
//                    Un PJ peut dépenser un point de GLOIRE pour que le personnage prenne conscience d'être dans une embuscade et joue pendant le premier tour.<br />
//                    Même chose pour les menaces avec un point de RUINE.<br />
//                    <br />
//                    <h4>ACTIONS</h4>
//                    On ne peut utiliser ces actions qu'une fois par tour:
//                    <ul>
//                        <li>
//                            <span>Déplacement</span>
//                        </li>
//                        <li>
//                            <span>Action ou Action de Combat</span>
//                            <ul>
//                                <li>
//                                    <span>Effectuer une attaque</span>
//                                </li>
//                                <li>
//                                    <span>Utiliser une Compétence pour effectuer une Attaque déstabilisante</span>
//                                </li>
//                                <li>
//                                    <span>Utiliser une Compétence ou un objet qui demande du temps et de l'attention, comme un Test de Medicae</span>
//                                </li>
//                            </ul>
//                        </li>
//                        <li>
//                            <span>Action simple</span>
//                            <ul>
//                                <li>
//                                    <span>Recharger une arme</span>
//                                </li>
//                                <li>
//                                    <span>Dégainer ou réparer une arme</span>
//                                </li>
//                                <li>
//                                    <span>Enfoncer une porte verrouillée</span>
//                                </li>
//                                <li>
//                                    <span>Regarder autour de vous avec votre Compétences Vigilence</span>
//                                </li>
//                            </ul>
//                        </li>
//                        <li>
//                            <span>Action de réaction</span>
//                        </li>
//                    </ul>
//                    <br />
//                    <h5>ACTIONS MULTIPLES</h5>
//                    Déclarer au début du tour qu'on vas faire une action multiples.<br />
//                    Pour chaque action en plus de la première ajoute un malus de 2SD sur chaque test.<br />
//                    <br />
//                    <h5>ACTIONS COMPLEXES</h5>
//                    Les actions complexes empêches d'effectuer d'autres actions.<br />
//                    Si on utilise une action complexe on ne peut faire que des actions gratuites pendant le reste du tour.<br />
//                    <ul>
//                        <li>
//                            <span>Sprinter</span>
//                        </li>
//                        <li>
//                            <span>Se mettre en posture de Défense totale</span><br />
//                            <span>Vitesse / 2 et un Test d'Initiative à faire</span><br />
//                            <span>Jusqu'à la fin du Tour et votre Défense est augmenté de 1 + 1 pour chaque Icône obtenue pendant le Test</span>
//                        </li>
//                        <li>
//                            <span>Utiliser le pouvoir Psychique Bruit Blanc</span>
//                        </li>
//                    </ul>
//                    <br />
//                    <h5>ACTIONS GRATUITES</h5>
//                    Les actions gratuites peuvent être utiliser en dehors de votre tour.<br />
//                    <ul>
//                        <li>
//                            <span>Crier un avertissement ou une phrase courte</span>
//                        </li>
//                        <li>
//                            <span>Ouvrir une porte déverrouillée</span>
//                        </li>
//                        <li>
//                            <span>Utiliser Psyniscience</span>
//                        </li>
//                        <li>
//                            <span>Faire un jet de Détermination pour réduire les dégâts</span>
//                        </li>
//                    </ul>
//                    <br />
//                    <h5>ACTIONS DE REACTION</h5>
//                    On peut utiliser une action de réaction une fois par round en réponse à une action d'une autre personne.<br />
//                    <br />
//                    <h4>DEPLACEMENT</h4>
//                    <h5>COURIR</h5>
//                    Double la vitesse de déplacement, empêche d'effectuer une action simple et on ne peut pas courir si on a déjà utiliser son action simple.<br />
//                    <br />
//                    <h5>GRIMPER</h5>
//                    Grimper sur score de Vitess / 2 mètres.<br />
//                    On peut grimper sur le score de Vitesse en mètre en faisant un test d'athlétisme SD 3.<br />
//                    <br />
//                    <h5>NAGER</h5>
//                    On peut nager sur le score de Vitesse / 2 mètres en faisant un test d'athéltisme.<br />
//                    <br />
//                    <h5>RAMPER</h5>
//                    On peut ramper sur le score de Vitesse / 2.<br />
//                    Pendant qu'on rampe on est a terre.<br />
//                    <br />
//                    <h5>SAUTER</h5>
//                    On peut sauter 1 mètre de haut et / ou 1 mètre de long pour un déplacement simple.<br />
//                    Si on veut sauter plus loin ou plus haut on doit utiliser une action simple et faire un test d'athlétisme.<br />
//                    La distance de saut en longueur max vaut le score de Force.<br />
//                    La distance de saut en hauteur max vaut le score de Force / 4.<br />
//                    <br />
//                    <h5>SPRINTER</h5>
//                    Le sprint est une action complèxe qui permet de courir sur le score de vitesse x 3.<br />
//                    <br />
//                    <h5>VOLER</h5>
//                    Certains personnages peuvent voler, ils utilisent le score de vitesse ou le score de vitesse de vole.<br />
//                    <br />
//                    <h4>COUVERT</h4>
//                    Si on vois au moins la moitié du corps d'un personnage derrière un couvert +1 Défense si on en vois moins de la moitié +2 Défense.<br />
//                    <br />
//                    <h4>FURTIVITE ET VIGILANCE</h4>
//                    Pour la furtivité il faut faire un Test de Furtivité opposé à un test de vigilance.<br />
//                    <br />
//                    <h5>SCORE DE FURTIVITE</h5>
//                    Vous pouvez faire un Tets de Furtivité comme Action de Combat (une fois par Scène).<br />
//                    Le résultat de ce Test sert de Score de Furtivité.<br />
//                    Si un ennemi fait un Test de Vigilance votre Score de Furtivité sert de SD.<br />
//                    Si il réussi son Test de Vigilance vous n'avez plus de Score de Furtivité et êtes visible de tous.<br />
//                    <br />
//                    <h5>DEPLACEMENT FURTIF</h5>
//                    On peut se déplacer furtivement en utilisant son Déplacement et son Action de Combat.<br />
//                    <br />
//                    <h5>ATTAQUE FURTIVE</h5>
//                    Si vous attaquer un ennemi qui ne vous vois pas +2 dés sur le Test d'Attaque et +2 Dégats Bonus.<br />
//                    Si cette attaque déclenche un Combat la cible est prise en Embuscade.<br />
//                    L'Attaque peut réduire le Score de Furtivité (voir tableau p182).<br />
//                    <br />
//                    <h3 style={{ textAlign: 'center' }}>TABLE DE RÉDUCTION DU SCORE DE FURTIVITÉ</h3>
//                    <table>
//                        <thead>
//                            <tr>
//                                <td>
//                                    <span>Action</span>
//                                </td>
//                                <td style={{ width: '10%' }}>
//                                    <span>Réduction du score</span>
//                                </td>
//                            </tr>
//                        </thead>
//                        <tbody>
//                            <tr>
//                                <td>
//                                    <span>Chuchoter. Préparer une arme silencieuse. Briser une brindille</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-1</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Parler doucement. Préparer une arme avec des mièces mobiles, par exemple un Revolver. Recharger</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-2</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Parler normalement. Attaquer une cible inconsciente avec un Couteau. Tirer avec une arme vaec le Mot-Clé FUSION, qui génère unn fort sifflement. Activer n'importe quel Équipement qui produit de la lumière.</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-3</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Faire un duel à l'épée. Engager les moteurs d'un véhycule grav. Tirer avec une arme avec le Mot-Clé FLAMME.</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-4</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Crier ou hurler. Enclencher une arme avec le Mot-Clé TRONÇONNEUSE. Tirer avec une arme avec le Mot-Clé ÉLECTRO, LASER, PLASMA ou PROJECTILE. Engager un Réacteur dorsal ou les moteur d'un véhicule au prométhium.</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-5</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Tirer avec une arme avec le Mot-Clé BOLT. Déclencher un explosif. Engager les moteur à réaction d'un véhicule volant.</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>-6</span>
//                                </td>
//                            </tr>
//                        </tbody>
//                    </table>
//                    <br />
//                    <br />
//                    <h3 style={{ textAlign: 'center' }}>ATTAQUE</h3>
//                    Pendant le jet de Capacité De Tir ou de Capacité De Combat, si le nombre d'Icône est supérieur ou égale à la Défense de la cible on touche.<br />
//                    On peut convertir les Icône Exaltée (6) en dégat supplémentaires<br />
//                    <br />
//                    On compte le nombre de Ddégâts Supplémentaires (ou DS) et on lance autant de dés, on compte le nombre d'Icônes qui donnent le nombre de dégat en plus des dégats de l'arme.<br />
//                    <br />
//                    On déduit la Pénétration de l'arme de la Résistance de la cible et on prend la différence entre les Dégat et la Résistance pour avoir le nombre de Blessures.<br />
//                    <br />
//                    On peut utiliser une Action De Combat pour Battre En Retraite d'un engagement au corps à corps sans subir d'Attaque De Reaction.<br />
//                    <br />
//                    <h4>ATTAQUES DE MELEES</h4>
//                    Pour les attaques de mêlée on ajoute la valeur de Force au Dégats.<br />
//                    Si on attaque à mains nues on utilise la Force comme valeur de Dégats avec +1 DS.<br />
//                    Quand on attaque ou qu'on est attaqué au corps à corps on est Engagé et on ne peut attaqué que les personnages Engagés.<br />
//                    Si la cible avec laquelle on est engagé se Désengage on peut utiliser notre Attaque De Réaction pour l'attaquer avant qu'il ne se Désengage, sauf si il utilise Action De Combat Retraite.<br />
//                    On peut utiliser un Pistolet en mêlé (avec le trait Pistolet) avec un malus de +2 SD, si le dé de Fureur donne 1 l'ennemi peut retourner l'arme contre nous.<br />
//                    <br />
//                    On peut faire une Attaque À Outrance qui donne +2 dés bonus à au Test d'attaque mais enlève 2 à notre Défense jusqu'à notre prochain Tour.<br />
//                    On peut aussi Chargé une cible en utilisant une Action Complexe avec un bonus de 1 dé sur le Test d'attaque et double la vitesse (il faut charger au moins 4 mètres).<br />
//                    <br />
//                    On peut utiliser une Action De Combat pour saisir une cible avec laquelle on est Engagé, il faut faire un Test Opposé de Force.<br />
//                    <br />
//                    <h4>ATTAQUES A DISTANCES</h4>
//                    Cible à courte portée 1 dé bonus.<br />
//                    Cible plus de moyenne portée, cible gagne +2 Defense.<br />
//                    <br />
//                    Au début de chaque parties les armes sont chargées et possèdes 3 points de MUNITIONS.<br />
//                    Les complications peuvent faire perdre des points de MUNITIONS.<br />
//                    On peut utiliser les points de MUNITIONS pour Recharger.<br />
//                    <br />
//                    Quand une arme utilise le Tir Automatique on vide notre chargeur sur une cible.<br />
//                    Quand on utilise le Tir De Dispertion on tir sur plusieurs cibles, on ne peut l'utiliser que pour une Action Multiple et on peut réduire le SD par la valeur de Rafale.<br />
//                    On peut utiliser le Tir De Dispertion sur une Horde avec une Action Complexe, si le Test réussi on touche autant de cibles en plus que la valeur de Rafale.<br />
//                    <br />
//                    Quand on utilise une arme a Aire d'Effet, on fait un Test de Capacite De Tire SD 3 et si le Test est réussi l'explosion est centrée sur la cible sinon l'attaque rate et se Disperse (voir diagramme p186).<br />
//                    La zone de déflagration vaut le Ccore de l'Explosion en mètre (toute personne dans la zone est touchée).<br />
//                    Si on vise une Horde, le nombre de cible touchée vaut la moitié du Score de l'Explosion.<br />
//                    On ne peut pas convertir pour les Armes À Explosions.<br />
//                    <br />
//                    Si on est touché par un Lance-Flamme ou dans la Zone d'une Explosion, Defense Totale<br />
//                    <br />
//                    Pour un tir ciblé, si le Test est réussi on gagne autant de dés de DS que la pénalité de SD.<br />
//                    <br />
//                    <table style={{ margin: 'auto' }}>
//                        <thead>
//                            <tr>
//                                <td>
//                                    <span>Taille</span>
//                                </td>
//                                <td>
//                                    <span>Pénalité SD</span>
//                                </td>
//                                <td>
//                                    <span>DS</span>
//                                </td>
//                            </tr>
//                        </thead>
//                        <tbody>
//                            <tr>
//                                <td>
//                                    <span>Moyenne (bras ou jambes)</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>1</span>
//                                </td>
//                                <td>
//                                    <span>1</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Petite (main, tête)</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>2</span>
//                                </td>
//                                <td>
//                                    <span>2</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Minuscule (visière, articulation d'armure)</span>
//                                </td>
//                                <td>
//                                    <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>3</span>
//                                </td>
//                                <td>
//                                    <span>3</span>
//                                </td>
//                            </tr>
//                        </tbody>
//                    </table>
//                    <br />
//                    Si un tir ciblé touche la main ou une arme d'un ennemi, il doit faire un Test de Force dont le SD est égale à la moitié des Dégats de l'Attaque (ce tir ne fait aucun Dégat et n'as pas de DS).<br />
//                    <br />
//                    La Défense Total, utilise une Aciton Complexe, faire un Test d'Initiative et on gagne +1 de défense + le nombre d'Icônes.<br />
//                    Si on l'utilise avec une Action De Reaction, dans notre prochain Tour on ne peut pas faire de Déplacement , d'Action De Combat ou d'Action Simple.<br />
//                    On se focalise uniquement sur la Défense.<br />
//                    <br />
//                    On peut choisir de retarder une Action De Combat pour l'utiliser a un autre moment dans le Round.<br />
//                    Au moment de l'utiliser , il faut faire un Test d'Initiative Opposé contre la personne qui a le tour en cours.<br />
//                    <br />
//                    Il est possible d'effectuer une Attaque Multiple, a chaque cible supplémentaire cette cible gragne +2 de défense (on ne peut pas convertir d'Icône exaltée).<br />
//                    On ne lance les Dégats qu'une seule fois pour toutes les cibles.<br />
//                    <br />
//                    <h4>ATTAQUES DESTABILISANTE</h4>
//                    Le SD de ce type d'Attaque est le score opposé de Compétence ou de Résolution (le score le plus élevé des 2).<br />
//                    Si l'Attaque réussie choisir entre rendre la cible Pertubée ou Vulnérable (jusqu'à votre prochain Tour).<br />
//                    <br />
//                    <table>
//                        <thead>
//                            <tr>
//                                <td>
//                                    <span>Compétence</span>
//                                </td>
//                                <td>
//                                    <span>Portée</span>
//                                </td>
//                            </tr>
//                        </thead>
//                        <tbody>
//                            <tr>
//                                <td>
//                                    <span>Athlétisme</span>
//                                </td>
//                                <td>
//                                    <span>Vpis devez être Engagé avec ma cible.</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Duperie, Intimidation, Persuasion</span>
//                                </td>
//                                <td>
//                                    <span>La cible doit ous voir et vous entendre clairement</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Technomaïtrise</span>
//                                </td>
//                                <td>
//                                    <span>La cible doit être à un nombre de mètres égal à votre Attribut Intelligence</span>
//                                </td>
//                            </tr>
//                        </tbody>
//                    </table>
//                    <br />
//                    <h3>EQUIPEMENT</h3>
//                    
//                    <table>
//                        <thead>
//                            <tr>
//                                <td>
//                                    <span>Source</span>
//                                </td>
//                                <td>
//                                    <span>Munitions</span>
//                                </td>
//                                <td>
//                                    <span>Modificateur Test</span>
//                                </td>
//                            </tr>
//                        </thead>
//                        <tbody>
//                            <tr>
//                                <td>
//                                    <span>Avachrus</span>
//                                </td>
//                                <td>
//                                    <span>Les vastes forges etMunitrums travaillent sans relâche sous la surface de ce monde-forge riche de ressources, bien que ses maîtres de l'Adeptus Mechanicus détestent
//                                        commercer avec les étrangers.<br />Tous les types de Munitions sont disponibles, sauf les Shuriken.</span>
//                                </td>
//                                <td>
//                                    <span>+2 SD si vous n'avez pas le Mot-Clé ADEPTUS MECHANICUS</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Gilead Primus</span>
//                                </td>
//                                <td>
//                                    <span>Chacune des imposantes cités-ruches est dirigée pas un réseau complexe de noble et de maison marchandes complices et avides d'argent. Beaucoup voient la menace
//                                        imminente de la Grande Faille comme une chance de faire fortune, en produisant des munitions excédentaires à l'insu de Taleria Fylamon pour les vendre au plus offrant.
//                                        <br />Tous les types de Munitions sont disponibles, sauf les Munitions Plasma, Fusion et Shuriken.</span>
//                                </td>
//                                <td>
//                                    <span>Exige toujours au moins 1 Richesse.</span>
//                                </td>
//                            </tr>
//                            <tr>
//                                <td>
//                                    <span>Flotte Varonius</span>
//                                </td>
//                                <td>
//                                    <span>Les MunitionsProjectile, Laser, Bolt, Plasma et Shuriken sonnt disponibles.</span>
//                                </td>
//                                <td>
//                                    <span>Offre des Munitions ggratuites chaquie fois que vous terminez ou acceptez une mission.</span>
//                                </td>
//                            </tr>
//                        </tbody>
//                    </table>
//                    <br />
//                    <h4>ARMURES</h4>
//                    On peut porter plusieurs Armures mais on utilise que l'AR le plus élevé sauf si elles ont le Trait Bouclier.<br />
//                    <br />
//                    La valeur avec * n'est pas affecté avec les PA.<br />
//                    <br />
//                    <h4>TRAITS D'ARMURES</h4>
//                    <h5>BOUCLIER</h5>
//                    Ajoute l'AR à la Défense et à la Résistance.<br />
//                    <br />
//                    <h5>CHAMP DE FORCE</h5>
//                    Test de Détermination contre Blessure Mortelles.<br />
//                    <br />
//                    <h5>ENCOMBRANTE</h5>
//                    On peut ni Courir ni Sprinter.<br />
//                    <br />
//                    <h5>ENERGETIQUE (X)</h5>
//                    Ajoutte le score à la Force et si on utilise une arme avec le Trait Lourd on ne tombe pas À Terre.<br />
//                    <br />
//                    <h5>MASSIVE (X)</h5>
//                    Réduit les Déplacement du score en mètres.<br />
//                    <br />
//                    <h5>ON Y VA!</h5>
//                    Ignore Massive et Encombrant si Blessé.<br />
//                    <br />
//                    <h4>AUGMENTIQUES</h4>
//                    <h5>POSE ET DEPOSE</h5>
//                    Test de Technomaitrise le SD vaut la valeur de l'arme.<br />
//                    Si echec, Blessure Grave sauf si Test de Medicae avec le même SD.<br />
//                    Peut-être que le vendre peut aussi faire la pose pour 1 Richesse ou un Service.<br />
//                    <br />
//                    On peut enlever un Augmentique avec un Test de Technomaitrise du même SD que la pose / 2.<br />
//                    <br />
//                    <h4>BABIOLES ET FETICHES</h4>
//                    Objet mistérieux sur votre passé ou votre quête.<br />
//                    pages 248-251 (D66)<br />
//                    <br />
                    
//                    
//                </p>
//            </div>
//        </>
//    );
//}

//export default Règles;