import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import Bouton_Select from '../../Composants/CygnusProjects/Bouton_Select.jsx'
import Details_Operateur from '../../Composants/CygnusProjects/Details_Operateurs.jsx'
import { ListeOperateurs } from '/src/Listes/Operateurs.js'

function Operateurs() {
    const ChevronLeftIcon = Lucide.ChevronLeft

    const [isHovered, setIsHovered] = useState(false);
    const [selectedOperateurTitre, setSelectedOperateurTitre] = useState(null);

    const handleOperateurSelected = (titre) => {
        if (titre === selectedOperateurTitre) {
            setSelectedOperateurTitre(null);
        } else {
            setSelectedOperateurTitre(titre);
        }
    }
  return (
    <>
        <div className="Container-Operateur">
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
              <div>
                  <div className="Container-Bouton-Select-Operateur">
                      {ListeOperateurs.map((Operateur) => (
                          <Bouton_Select
                              key={Operateur.Id}
                              Objet={Operateur}
                              IsActive={Operateur.Titre === selectedOperateurTitre}
                              OnSelect={handleOperateurSelected}
                          />
                      ))}
                  </div>
                  <div className="Operateur-Data">
                      {selectedOperateurTitre &&
                          ListeOperateurs.map((Operateur) => (
                              <Details_Operateur
                                  key={Operateur.Id}
                                  Details={Operateur.Details}
                                  IsActive={Operateur.Titre === selectedOperateurTitre}
                              />
                          ))}
                  </div>
              </div>
        </div>
    </>
  );
}

export default Operateurs;