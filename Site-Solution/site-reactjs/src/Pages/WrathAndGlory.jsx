import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState } from 'react'

function WrathAndGlory() {

    const [isHoveredBouton1, setIsHoveredBouton1] = useState(false);
    const [isHoveredBouton2, setIsHoveredBouton2] = useState(false);
    const [isHoveredBouton3, setIsHoveredBouton3] = useState(false);
    const [isHoveredBouton4, setIsHoveredBouton4] = useState(false);
    const [isHoveredBouton5, setIsHoveredBouton5] = useState(false);
    const [isHoveredBouton6, setIsHoveredBouton6] = useState(false);
    const [isHoveredBouton7, setIsHoveredBouton7] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const ChevronRightIcon = Lucide.ChevronRight;
    const ChevronLeftIcon = Lucide.ChevronLeft;
    const UserIcon = Lucide.User;
    const OrbitIcon = Lucide.Orbit;
    const BookOpenIcon = Lucide.BookOpen;
    const ShieldIcon = Lucide.Shield;
    const BrainIcon = Lucide.Brain;
    const BicepsFlexedIcon = Lucide.BicepsFlexed;
    const SwordIcon = Lucide.Sword;

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
                    className="Bouton-CygnusProjects-Redirect OrbitIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_SystemGilead"
                    onMouseEnter={() => setIsHoveredBouton1(true)}
                    onMouseLeave={() => setIsHoveredBouton1(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect OrbitIcon-Bouton-WrathAndGlory-Redirect">
                        <OrbitIcon
                            size={30}
                            color={isHoveredBouton1 ? "black" : "white"}
                        />
                    </div>
                    <span>Système Gilead</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={isHoveredBouton1 ? "black" : "hsl(0 0% 60%)"}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect UsersIcone-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_ListePersonnages"
                    onMouseEnter={() => setIsHoveredBouton2(true)}
                    onMouseLeave={() => setIsHoveredBouton2(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect UsersIcone-Bouton-WrathAndGlory-Redirect">
                        <UserIcon
                            size={30}
                            color={isHoveredBouton2 ? "black" : "white"}
                        />
                    </div>
                    <span>Liste de vos personnages</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={isHoveredBouton2 ? "black" : "hsl(0 0% 60%)"}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect BookOpenIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_Règles"
                    onMouseEnter={() => setIsHoveredBouton3(true)}
                    onMouseLeave={() => setIsHoveredBouton3(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect BookOpenIcon-Bouton-WrathAndGlory-Redirect">
                        <BookOpenIcon
                            size={30}
                            color={isHoveredBouton3 ? "black" : "white"}
                        />
                    </div>
                    <span>Règles du jeu</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={isHoveredBouton3 ? "black" : "hsl(0 0% 60%)"}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect BrainIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_ListePouvoirPsychiques"
                    onMouseEnter={() => setIsHoveredBouton4(true)}
                    onMouseLeave={() => setIsHoveredBouton4(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect BrainIcon-Bouton-WrathAndGlory-Redirect">
                        <BrainIcon
                            size={30}
                            color={setIsHoveredBouton4 ? 'black' : 'white'}
                        />
                    </div>
                    <span>Liste des Pouvois Psychiques</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={setIsHoveredBouton4 ? 'hsl(0 0% 60%)' : 'black'}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect SwordIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_ListeArmes"
                    onMouseEnter={() => setIsHoveredBouton5(true)}
                    onMouseLeave={() => setIsHoveredBouton5(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect SwordIcon-Bouton-WrathAndGlory-Redirect">
                        <SwordIcon
                            size={30}
                            color={setIsHoveredBouton5 ? 'black' : 'white'}
                        />
                    </div>
                    <span>Liste des Armes</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={setIsHoveredBouton5 ? 'hsl(0 0% 60%)' : 'black'}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect ShieldIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_ListeEquipements"
                    onMouseEnter={() => setIsHoveredBouton6(true)}
                    onMouseLeave={() => setIsHoveredBouton6(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect ShieldIcon-Bouton-WrathAndGlory-Redirect">
                        <ShieldIcon
                            size={30}
                            color={setIsHoveredBouton6 ? 'black' : 'white'}
                        />
                    </div>
                    <span>Liste des Équipements</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={setIsHoveredBouton6 ? 'hsl(0 0% 60%)' : 'black'}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>

                <Link
                    className="Bouton-CygnusProjects-Redirect BicepsFlexedIcon-Bouton-Container-WrathAndGlory-Redirect"
                    to="/WrathAndGlory_ListeAugmentiques"
                    onMouseEnter={() => setIsHoveredBouton7(true)}
                    onMouseLeave={() => setIsHoveredBouton7(false)}
                >
                    <div className="Icone-Bouton-CygnusProjects-Redirect BicepsFlexedIcon-Bouton-WrathAndGlory-Redirect">
                        <BicepsFlexedIcon
                            size={30}
                            color={setIsHoveredBouton7 ? 'black' : 'white'}
                        />
                    </div>
                    <span>Liste des Augmentiques</span>
                    <div className="Icone-Chevron-Right-CygnusProjects-Redirect">
                        <ChevronRightIcon
                            size={40}
                            color={setIsHoveredBouton7 ? 'hsl(0 0% 60%)' : 'black'}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default WrathAndGlory;