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
                                <table style={{ margin: 'auto' }} className="Tableau-Agravation-Effet-Survie">
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
                                    <table style={{ margin: 'auto' }} className="Tableau-Agravation-Effet-Survie">
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
                                <table className="Tableau-Agravation-Effet-Survie">
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