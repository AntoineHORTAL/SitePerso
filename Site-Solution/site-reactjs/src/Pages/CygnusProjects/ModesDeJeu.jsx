import { useState } from 'react'
import * as Lucide from 'lucide-react'
import { Link } from 'react-router-dom'

function ModesDeJeu() {
    const [HuisClos_IsOpen, setHuisClos_IsOpen] = useState(false);
    const [ChasseGros_IsOpen, setChasseGros_IsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const ChevronUpIcon = Lucide.ChevronUp
    const ChevronDownIcon = Lucide.ChevronDown
    const ChevronLeftIcon = Lucide.ChevronLeft

  return (
    <>
        <div style={{ paddingBottom: '10rem' }}>
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/CygnusProjects" className="Bouton-Retour-JDR">
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
                  className="Bouton-Affiche-Mode"
                  onClick={() => setHuisClos_IsOpen(!HuisClos_IsOpen)}
            >
                <h2>HUIS CLOS</h2>
                <span>
                    {
                        HuisClos_IsOpen ? <ChevronUpIcon size={40} color={'hsl(0 0% 60%)'} /> : <ChevronDownIcon size={40} color={'hsl(0 0% 60%)'} />
                    }
                </span>
            </div>
            <div className="Container-Modes-De-Jeu"  id="HuisClos_Mode" style={{ display: HuisClos_IsOpen ? 'block' : 'none' }}>
                <p>
                    Les joueurs qui jouent les humains choisissent un des Opérateurs disponibles.<br />
                    Le joueur qui joue l'alien choisi un des Aliens disponibles.<br />
                    <br />
                    <br />
                    Les joueurs apparaissent sur une carte de vaisseau spatial dont l'agencement est inconnu des joueurs.<br />
                    Les humains commencent dans la chambre de cryostase.<br />
                    L'alien commence d'une salle aléatoire ou non en fonction du scénario choisi.<br />
                    <br />
                    <br />
                    <strong>Liste des Scénarios</strong>
                </p>
                <ul>
                    <li>Rupture de confinement de spécimen inconnu</li>
                    <li>Exfiltration d'un scientifique ou ingénieur important</li>
                    <li>Sabotage de la concurrence</li>
                    <li>Éliminer l'intrus</li>
                    <li>Tous aux canots de sauvetage</li>
                    <li>Panne de courant</li>
                    <li>Patient zéro</li>
                    <li>Source de démence</li>
                    <li>Vaisseau fantôme</li>
                    <li>Défaillance de cryostase</li>
                    <li>Danger de collision</li>
                    <li>A l'abordage</li>
                </ul>
                <br /><br /><br />
                <h3><strong>Détail des Scénarios</strong></h3>
                <br />
                <p>
                    <strong>Tous aux canots de sauvetage</strong><br /><br />
                    Le vaisseau a été endommagé par un champ d'astéroïde. Les opérateurs doivent aller jusqu'aux capsules de sauvetage avant l'explosion du vaisseau (30 tours).<br />
                    L'alien sort du laboratoire.<br />
                    <br />
                    <br />
                    <strong>Rupture de confinement</strong><br /><br />
                    Une nouvelle race extraterrestre est sortie de son confinement dans le laboratoire du vaisseau. Les opérateurs doivent réactiver le confinement (salle des SAS) avec la créature dans le laboratoire. Ils doivent ramener la créature à 
                        destination en vie quoi qu'il en coûte.<br /> 
                    Exfiltration importante 
                    Un éminent scientifique était en train d'étudier une nouvelle forme de vie. Cette dernière à éliminer une majeure (1D4) partie de l'équipe scientifique et de sécurité. Les opérateurs doivent exfiltrer le scientifique (confiné dans la 
                        salle de commandement) et ses données (dans les archives et le laboratoire) quel qu'en soit le prix.<br />
                    <br />
                    <br />
                    <strong>Sabotage de la concurrence</strong> <br /><br />
                    Les opérateurs sont envoyés saboter un vaisseau d'une compagnie concurrente afin qu'il n'arrive jamais à sa destination.<br />
                    Il y a D6+6 occupants dans le vaisseau en plus de l'alien (qui est dans le laboratoire : test force pour sortir, 3 réussites).<br />
                    <br />
                    <br /> 
                    <strong>Éliminer l'intrus</strong><br /> <br />
                    Peu avant le départ du vaisseau un intru s'est infiltré dans le vaisseau. Il a été repéré par le système de surveillance passif. Les opérateurs ont été réveillé pour repérer et éliminer cet intrus.<br />
                    <br />
                    <br />
                    <strong>Panne de courant</strong><br /> <br />
                    Une panne de courant généralisée affecte le vaisseau des opérateurs. Ils sortent alors de cryostase et doivent redémarrer le générateur, les moteurs, le système de refroidissement, remettre la destination dans l'ordinateur de bord 
                        avant de retourner en cryostase (l'alien sort du laboratoire).<br />
                    <br />
                    <br />
                    <strong>Patient zéro (Necrosia)</strong> <br /><br />
                    Les opérateurs sont envoyés à bord d'un vaisseau médical pour exterminer tous ses occupants (D20+5). Ils devront trouver la créature à l'origine de tout ça et l'éliminer. Facultatif : trouver, récupérer et extraire les données des 
                        scientifiques (dans les archives et le laboratoire).<br />
                    <br />
                    <br />
                    <strong>Source de démence (Vaz-Thun)</strong><br /><br />
                    Une mystérieuse créature à réussie à s'infiltré dans le vaisseau grâce à un tour de passe passe. Il commence à créer des illusions dans l'esprit de l'équipage avant de rentrer en cryostase. Ils doivent le trouver et l'éliminer avant 
                        qu'il ne s'empare de leurs esprits pour en faire ses pantins. Chaque opérateur doit faire un test de charisme à chaque tour. Pour 5 échecs cumulés, -1 sur tous les tests (sauf test démence). Pour 10 échecs cumulés, -2 sur tous les 
                        tests (sauf test démence). A 15 échecs cumulé le joueur est au service de l'alien.<br />
                    <br />
                    <br />
                    <strong>Vaisseau fantôme</strong><br /> <br />
                    L'ordinateur de bord reçois un message de détresse d'un vaisseau disparu depuis plusieurs années. Il réveille les opérateurs et les emmènent en direction du fameux vaisseau. Les opérateurs démarrent de n'importe quel SAS d'entrée et 
                        l'alien d'où il veut (avec des avantages en fonction de la race de son choix).<br />
                    <br />
                    <br />
                    <strong>Défaillance de cryostase</strong><br /> <br />
                    Pour une raison encore inconnue les opérateurs se réveillent de cryostase au milieu de leurs voyage (ils sont encore en hyperespace). Ils sont désorientés au départ (pendant 5 tours malus de 1). Ils doivent trouver un moyen de refaire 
                        fonctionner la cryostase (réparer la salle de refroidissement) sous peine de mourir quand le vaisseau amorcera sa sortie d'hyperespace (dans 30 tours).<br />
                </p>
            </div>


            <div 
                  className="Bouton-Affiche-Mode"
                  onClick={() => setChasseGros_IsOpen(!ChasseGros_IsOpen)}
            >
                <h2>LA CHASSE AU GROS</h2>
                <span>
                    {
                        ChasseGros_IsOpen ? <ChevronUpIcon size={40} color={'hsl(0 0% 60%)'} /> : <ChevronDownIcon size={40} color={'hsl(0 0% 60%)'} />
                    }
                </span>
            </div>
            <div className="Container-Modes-De-Jeu"  style={{ display : ChasseGros_IsOpen ? 'block' : 'none' }}  id="ChasseGros_Mode">
                <p>
                    Le joueur qui joue les aliens devra choisir 5 caractéristiques dans la <strong>Table Caractéristiques</strong> ci-dessous (sans compter la taille qui est obligatoire).<br /> 
                    Les joueurs qui jouent les humains choisissent un opérateur. 
                </p>
                <label><strong>Tables des Caractéristiques</strong></label><br/>
                <div className="Container-Carac">
                    <div style={{ display: 'flex' }}>
                        <table style={{ marginRight: 'auto' }}>
                            <thead>
                                <tr>
                                    <td colSpan="3">
                                        <label>TAILLE</label>
                                    </td>
                                </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Grande (3m)</label>
                                    </td>
                                    <td>
                                        <label>Moyenne (2m)</label>
                                    </td>
                                    <td>
                                        <label>Petite (1m)</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <label>SANG</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Chaud</label>
                                    </td>
                                    <td>
                                        <label>Froid</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{ marginLeft: 'auto' }}>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <label>CAMOUFLAGE</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Mimétique</label>
                                    </td>
                                    <td>
                                        <label>Thermique</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="3">
                                    <label>AILES</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Patagium (Chauves-Souris / Dextérité)</label>
                                </td>
                                <td>
                                    <label>Régime (Oiseaux / Force)</label>
                                </td>
                                <td>
                                    <label>Stigiformes (Hiboux / Consitution)</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="5">
                                    <label>PATTES</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Natatoires (Plus de déplacement dans l'eau)</label>
                                </td>
                                <td>
                                    <label>Adhésives</label>
                                </td>
                                <td>
                                    <label>Onguligrades (Vitesse / Force)</label>
                                </td>
                                <td>
                                    <label>Digitigrades (Agilité / Dextérité)</label>
                                </td>
                                <td>
                                    <label>Saltatorial (Saut / Dextérité)</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="5">
                                    <label>PROTECTION</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Exosquelette chitineux (+5 protection)</label>
                                </td>
                                <td>
                                    <label>Carapace dorsale (+15 protection , -2 cases de mouvement)</label>
                                </td>
                                <td>
                                    <label>Carapace nanoceramique (+20 protection , -4cases de déplacement)</label>
                                </td>
                                <td>
                                    <label>Peau inifugée (insensible au feu)</label>
                                </td>
                                <td>
                                    <label>Armure osseuse (-10 protection , -1 case de déplacement)</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="5">
                                    <label>VISION</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Infrarouge (chaleur)</label>
                                </td>
                                <td>
                                    <label>Écholocalisation ("écoute" à travers les murs)</label>
                                </td>
                                <td>
                                    <label>Ultraviolette (détection des traces de pas et autres)</label>
                                </td>
                                <td>
                                    <label>Antennes sensitives (détections des êtres vivants dans les 2 zones au alentours)</label>
                                </td>
                                <td>
                                    <label>Téléscopique (double la distance de vision)</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginLeft: '-3.25rem' }}>
                        <thead>
                            <tr>
                                <td colSpan="13">
                                    <label>ATTAQUE</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Dents secondaires (dégâts doublé si morsure)</label>
                                </td>
                                <td>
                                    <label>Dard venimeux</label>
                                </td>
                                <td>
                                    <label>Cornes offensives (+5 dégâts de charge)</label>
                                </td>
                                <td>
                                    <label>Sécrétion acide (7 dégâts ignore protections ; recharge en 3 tours)</label>
                                </td>
                                <td>
                                    <label>Queue à points (10 dégâts)</label>
                                </td>
                                <td>
                                    <label>Excrétion toxique (5 dégâts au touché)</label>
                                </td>
                                <td>
                                    <label>Lames oorganiques</label>
                                </td>
                                <td>
                                    <label>Crocs venimeux (4PV/Tour pendant 3 Tours)</label>
                                </td>
                                <td>
                                    <label>Cornes perforantes (+5 dégâts ignore les protections)</label>
                                </td>
                                <td>
                                    <label>Souffle thermique (comme un lance flamme , 1-3-3-3-3-5)</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <label>Griffes rétractiles (double de dégâts , se rétractes automatiquement  au bout d'un tour)</label>
                                </td>
                                <td colSpan="3">
                                    <label>Dard paralysant (paralyse sa cible pendant un Tour , recharge en 10 Tours)</label>
                                </td>
                                <td colSpan="3">
                                    <label>Épines défensives (4 dégâts si victime d'une attaque au corps à corps)</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="7">
                                    <label>PASSIF</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Régénération cellulaire (2PV/Tour , 50% des PV perdu maximum)</label>
                                </td>
                                <td>
                                    <label>Surchage musculaire (+5 dégâts au corps à corps , recharge en 3 tours)</label>
                                </td>
                                <td>
                                    <label>Squelette allégé (Vitesse x3 , dégâts x1,5)</label>
                                </td>
                                <td>
                                    <label>Ailerons propulseurs (Vitesse x2 dans l'eau)</label>
                                </td>
                                <td>
                                    <label>Peau régénérante (+D12 PV pendant un repos)</label>
                                </td>
                                <td>
                                    <label>Réflexes défensifs (1 esquive , recharge en 3 tours / si -25% PV)</label>
                                </td>
                                <td>
                                    <label>Sécrétion collante (immobilie une cible pendant 2 Tours [la cible sera toujours en capacité de se battre])</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <td colSpan="3">
                                    <label>AUTRES</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Audible à courte distance</label>
                                </td>
                                <td>
                                    <label>Audible à longue distance</label>
                                </td>
                                <td>
                                    <label>Silencieux</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
                <h3>Gameplay Opérateur</h3>
                <p>
                    Les opérateurs arrivent à un endroit de la carte via un aéronef.<br />
                    Ils doivent trouver un premier individu et le combattre pour voir et tester ses capacités afin de pouvoir s'y adapter.<br />
                    Ils doivent ensuite trouver un groupe de D8+3 individus ; le dernier en vie d'enfuis et repart à son nid.<br />
                    Les opérateurs doivent le traquer et trouver l'entrée de son nid.<br />
                    Une fois l'entrée du nid trouvé, ils doivent y entrer, détruire le nid et éliminer ses occupants avant d'aller au point d'extraction.<br />
                    <br />
                    Si un seul opérateur est encore en vie mais que la mission n'est pas encore terminée, il peut trouver un endroit dégagé ou leurs point d'attérissage et appeler des renforts.<br />
                    Les joueurs morts reviennent avec D4+3 alliés (militaires standards) qui obéhiront aux Opérateurs.
                </p><br/>
                <h3>Gameplay Alien</h3>
                <p>
                    L'alien “principale” est dans le nid tout le long de la partie et ne bouge que quand les opérateurs y sont aussi.<br /> 
                    Il contrôle 1 puis D8+3 puis D12+5 individus. <br />
                    L'alien “principale” à toutes les capacités d'un individus normal x2.<br /> 
                    <br />
                    Le nid des aliens peut être sous le sol ou dans une grande pièce.
                </p>
              </div>
        </div>
    </>
  );
}

export default ModesDeJeu;