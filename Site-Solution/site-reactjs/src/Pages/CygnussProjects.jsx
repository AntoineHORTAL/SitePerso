import { ListeOperateurs } from "../Listes/Operateurs.js"
import { ListeAliens } from "../Listes/Aliens.js"
import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'

function CygnusProjects() {

    const UserIcon = Lucide.Users
    const ArchiveIcon = Lucide.Archive
    const SkullIcon = Lucide.Skull
    const BookOpenIcon = Lucide.BookOpen
    const GamePad2Icon = Lucide.Gamepad2
    const ChevronRightIcon = Lucide.ChevronRight

    const ChevronLeftIcon = Lucide.ChevronLeft

    const [isHoveredBouton1, setIsHoveredBouton1] = useState(false)
    const [isHoveredBouton2, setIsHoveredBouton2] = useState(false)
    const [isHoveredBouton3, setIsHoveredBouton3] = useState(false)
    const [isHoveredBouton4, setIsHoveredBouton4] = useState(false)
    const [isHoveredBouton5, setIsHoveredBouton5] = useState(false)

    const [isHovered, setIsHovered] = useState(false)

  return (
      <>
          <div
              className="Container-Bouton-Retour-JDR"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
              <Link to="/Accueil" className="Bouton-Retour-JDR">
                  <div className="IconeChevron-Left-Bouton-Retour">
                      <ChevronLeftIcon
                          size={40}
                          color={isHovered ? "black" : "hsl(0 0% 60%)"}
                      />
                  </div>
                  <span>Retour</span>
              </Link>
          </div>
          <div className="Container-Bouton-CygnusProjects-Redirect">
              <Link
                  className="Bouton-CygnusProjects-Redirect UsersIcone-Bouton-Container-CygnusProjects-Redirect"
                  to="/CygnusProjects_ListeProfils"
                  onMouseEnter={() => setIsHoveredBouton1(true)}
                  onMouseLeave={() => setIsHoveredBouton1(false)}
              >
                  <div className="Icone-Bouton-CygnusProjects-Redirect UsersIcone-Bouton-CygnusProjects-Redirect">
                    <UserIcon 
                          size={30}
                          color={isHoveredBouton1 ? "black" : "white"}
                      />
                  </div>
                  <span>Liste de vos profils</span>
                  <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                      <ChevronRightIcon
                          size={40}
                          color={isHoveredBouton1 ? "black" : "hsl(0 0% 60%)"}
                          style={{ margin: 'auto' }}
                      />
                  </div>
              </Link>

              <Link
                  className="Bouton-CygnusProjects-Redirect ArchiveIcone-Bouton-Container-CygnusProjects-Redirect"
                  to="/CygnusProjects_Operateurs"
                  onMouseEnter={() => setIsHoveredBouton2(true)}
                  onMouseLeave={() => setIsHoveredBouton2(false)}
              >
                  <div className="Icone-Bouton-CygnusProjects-Redirect ArchiveIcone-Bouton-CygnusProjects-Redirect">
                      <ArchiveIcon
                          size={30} 
                          color={isHoveredBouton2 ? "black" : "white"}
                      />
                  </div>
                  <span>Archives de tous les Opérateurs</span>
                  <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                      <ChevronRightIcon
                          size={40}
                          color={isHoveredBouton2 ? "black" : "hsl(0 0% 60%)"}
                       />
                  </div>
              </Link>

              <Link
                  className="Bouton-CygnusProjects-Redirect SkullIcon-Bouton-Container-CygnusProjects-Redirect"
                  to="/CygnusProjects_Aliens"
                  onMouseEnter={() => setIsHoveredBouton3(true)}
                  onMouseLeave={() => setIsHoveredBouton3(false)}
              >
                  <div className="Icone-Bouton-CygnusProjects-Redirect SkullIcon-Bouton-CygnusProjects-Redirect">
                      <SkullIcon
                          size={30}
                          color={isHoveredBouton3 ? "black" : "white"}
                      />
                  </div>
                  <span>Archives de tous les Aliens</span>
                  <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                      <ChevronRightIcon
                          size={40}
                          color={isHoveredBouton3 ? "black" : "hsl(0 0% 60%)"}
                      />
                  </div>
              </Link>

              <Link
                  className="Bouton-CygnusProjects-Redirect BookOpenIcone-Bouton-Container-CygnusProjects-Redirect"
                  to="/CygnusProjects_Regles"
                  onMouseEnter={() => setIsHoveredBouton4(true)}
                  onMouseLeave={() => setIsHoveredBouton4(false)}
              >
                  <div className="Icone-Bouton-CygnusProjects-Redirect BookOpenIcone-Bouton-CygnusProjects-Redirect">
                      <BookOpenIcon
                          size={30}
                          color={isHoveredBouton4 ? "black" : "white"}
                      />
                  </div>
                  <span>Toutes les règles du jeu</span>
                  <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                      <ChevronRightIcon
                          size={40}
                          color={isHoveredBouton4 ? "black" : "hsl(0 0% 60%)"}
                      />
                  </div>
              </Link>

              <Link
                  className="Bouton-CygnusProjects-Redirect GamePad2Icon-Bouton-Container-CygnusProjects-Redirect"
                  to="/CygnusProjects_ModesDeJeu"
                  onMouseEnter={() => setIsHoveredBouton5(true)}
                  onMouseLeave={() => setIsHoveredBouton5(false)}
              >
                  <div className="Icone-Bouton-CygnusProjects-Redirect GamePad2Icon-Bouton-CygnusProjects-Redirect">
                      <GamePad2Icon
                          size={30}
                          color={isHoveredBouton5 ? "black" : "white"}
                      />
                  </div>
                  <span>Tous les modes de jeux</span>
                  <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                      <ChevronRightIcon
                          size={40}
                          color={isHoveredBouton5 ? "black" : "hsl(0 0% 60%)"}
                      />
                  </div>
              </Link>
          </div>
      </>
  );
}

export default CygnusProjects;