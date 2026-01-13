import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'

function Regles() {
    const ChevronLeftIcon = Lucide.ChevronLeft
    const [isHovered, setIsHovered] = useState(false)

  return (
      <>
        <div className="Container-Regles">
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
            <h2>SYSTÈME DE JEU</h2>
            <p>
              Les principaux tests demandés seront à faire avec un D20.<br/><br/>
              Pendant son Tour, chaque joueur (humains comme alien) peut faire 2 actions et un déplacement.<br/>
              Cependant, je joueur qui joue l'Alien, pourra effectuer une action entre les tours des humains (pour contrebalancer leurs surnombre).<br/><br/>
              <strong>Déplacements</strong><br/>
              Hors combat: 1 zone de déplacement.<br/>
              En combat: 5 cases de déplacement.<br/>
              Le déplacement peut se faire avant, entre ou après les actions du joueur.<br/><br/>
              Certains aliens peuvent se déplacer de 1 + 1D3 bouches d'aération par tour (1 action pour rentrer et sortir d'une bouche d'aération).<br/><br/>
              Pour l'initiaive des joueurs, il y aura toujours plus de joueurs humains qui joueront avant l'alien.<br/>
              L'ordre des joueurs humains se fait une fois le Tour fini.<br/><br/>
              Si un humain arrive dans une salle ou un couloir avec l'alien déjà dedans (et qu'il n'est pas vu), il prend un malus de –2 sur sa prochaine action, l'alien prend un bonus de +2.<br/><br/><br/><br/>
              <strong>Progression</strong><br/>
              En cours de reflexion<br/>
              <br/>
              <br/>
              <br/>
              <strong>Les Personanges</strong><br/>
              Tous les personnages ont les caractéristiques suivantes :
              <ul>
                  <li>Points de Vie</li>
                  <li>Protection</li>
                  <li>2 Compétences</li>
                  <li>1 Capacité Spéciale</li>
                  <li>1 Arme</li>
                  <li>Tous les Attributs du personnage choisi</li>
                  <li>3 Passifs (une fois la progression terminée)</li>
              </ul>
              </p>
            <strong>Les Attributs</strong>
            <ul>
                <li>Force</li>
                <li>Dextérité</li>
                <li>Consitution</li>
                <li>Intelligence</li>
                <li>Sagesse</li>
                <li>Charisme</li>
            </ul>
            <p>
              Les Attributs peuvent évoluer grâce à des passifs.<br/>
              Passifs qui seront disponibles en fonction de la progression global du joueur.<br/>
              Il est possible d'attribuer un bonus passif à un Attribut avant le début de la partie (pendant la selection du personnage), ils sont non cumulables - 1 seul bonus par Attribut maximum.<br/><br/><br/>
              <strong>Les Armes</strong><br/>
              <table>
                  <thead>
                      <tr>
                          <td><label>Nom</label></td>
                          <td><label>Distance d'attaque / Forme</label></td>
                          <td><label>Dégâts</label></td>
                          <td><label>Nombres de tirs</label></td>
                      </tr>
                  </thead>
                    <tbody>
                        <tr>
                            <td><label>Fusil</label></td>
                            <td><label>4</label></td>
                            <td><label>1D6</label></td>
                            <td><label>2</label></td>
                        </tr>
                        <tr>
                            <td><label>Fusil à plasma</label></td>
                            <td><label>5</label></td>
                            <td><label>1D6+3</label></td>
                            <td><label>1</label></td>
                        </tr>
                        <tr>
                            <td><label>Lance Flammes</label></td>
                            <td><label>1 ; 3 ; 5</label></td>
                            <td><label>3D4 (en feu pendant 2 Tours : 1D4 / Tour)</label></td>
                            <td><label>1</label></td>
                        </tr>
                        <tr>
                            <td><label>Sniper</label></td>
                            <td><label>8</label></td>
                            <td><label>1D12</label></td>
                            <td><label>1</label></td>
                        </tr>
                        <tr>
                            <td><label>Mitraillette</label></td>
                            <td><label>3</label></td>
                            <td><label>1D4+1</label></td>
                            <td><label>4</label></td>
                        </tr>
                        <tr>
                            <td><label>Taser</label></td>
                            <td><label>1</label></td>
                            <td><label>1D4</label></td>
                            <td><label>1</label></td>
                        </tr>
                        <tr>
                            <td><label>Fusil à pompe</label></td>
                            <td><label>1 ; 3 ; 3</label></td>
                            <td><label>2D4</label></td>
                            <td><label>1</label></td>
                        </tr>
                        <tr>
                            <td><label>Mitrailleuse</label></td>
                            <td><label>5</label></td>
                            <td><label>1D4</label></td>
                            <td><label>5</label></td>
                        </tr>
                        <tr>
                            <td><label>Minigun</label></td>
                            <td><label>6</label></td>
                            <td><label>1D4-1</label></td>
                            <td><label>6</label></td>
                        </tr>
                    </tbody>
              </table>
            </p>
            <br/><br/>
            <p>
                <strong>Incendie</strong><br/>
                S'il y a du feu dans une salle (20 cases cumulées), il se propage de 3 cases par tour .<br/>
                Il peut être arrêter et éteint grâce à la salle de système à incendie .<br/><br/><br/><br/>
                <strong>Sabotage</strong><br/>
                Le sabotage est principalement fait pour l'Alien mais dans certains scénario (ou certaines volonté de joueurs) il peut être effectuer par tout le monde.<br/><br/>
                Saboter les moteurs les fonts exploser après 10 tours ; 2 actions réussites pour les saboter (force ou intelligence).<br/>
                Saboter le réacteur fait exploser le vaisseau après 20 tours ; 2 actions réussites pour les saboter (force ou intelligence).<br/>
                Saboter le réacteur auxiliaire le fait exploser après 15 tours ; 2 actions réussites pour les saboter (force ou intelligence).<br/><br/>
                Pour arrêter le compte à rebours avant destruction, 1 actions réussite (intelligence).<br/>
                Pour redémarrer le compte à rebours, 2 actions réussites (intelligence).<br/><br/>
                En cas de surcharge de la salle du réacteur ou de la salle des machines d'un moteur, il faut 1 action réussite pour endommagé la salle et divise le compte à rebours avant destruction de 2.<br/>
            </p><br /><br />
            <h2>Les Phases de Jeu</h2>
            <p>
                Tous les joueurs choisissent leur Opérateur ou leur Alien. <br/>
                Ils personnalisent leurs Opérateurs / Alien avec les compétences débloquées, armes, ...<br/>
                Les Opérateurs ou l'Alien ne prennent que 2 Compétences ou Amélioration et une seule Capacité Spéciale (passive ou active) ainsi que 3 Passifs pour la partie.<br/>
                En fonction du scénario, ils choisissent leur.s point.s de départ.s (s'il n'est pas imposé). <br/>
            </p>
        </div>
      </>
  );
}

export default Regles;