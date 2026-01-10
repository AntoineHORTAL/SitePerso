import { ListeAliens } from './../../Listes/Aliens.js'
import { useState } from 'react'
import Bouton_Select from '../../Composants/CygnusProjects/Bouton_Select.jsx';
import Details_Alien from '../../Composants/CygnusProjects/Details_Alien.jsx';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';

function Aliens() {

    const ChevronLeftIcon = Lucide.ChevronLeft

    const [selectedAlienTitre, setSelectedAlienTitre] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleAlienSelected = (titre) => {
        if (titre === selectedAlienTitre) {
            setSelectedAlienTitre(null);
        } else {
            setSelectedAlienTitre(titre);
        }
    }

  return (
    <>
        <div>
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
            <div className="Container-Bouton-Select-Alien">
                  {ListeAliens.map((Alien) => (
                      <Bouton_Select
                          key={Alien.Id}
                          Objet={Alien}
                          IsActive={Alien.Titre === selectedAlienTitre}
                          OnSelect={handleAlienSelected}
                      />
                  )) }
            </div>
            <div className="Alien-Data">
                  {selectedAlienTitre && 
                      ListeAliens.map((Alien) => (
                      <Details_Alien
                          key={Alien.Id}
                              Details={Alien.Details}
                              IsActive={Alien.Titre === selectedAlienTitre}
                      />
                )) }
            </div>
        </div>
    </>
  );
}

export default Aliens;