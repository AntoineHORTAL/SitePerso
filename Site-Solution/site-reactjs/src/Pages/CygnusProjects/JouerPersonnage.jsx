import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { ListeOperateurs } from '../../Listes/Operateurs';
import { ListeAliens } from '../../Listes/Aliens';
import { ListeProgression } from '../../Listes/Progression_';

function JouerPersonnage() {
    const [isHoveredRetour, setIsHoveredRetour] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activePersonnage, setActivePersonnage] = useState();
    const [capacites, setCapacites] = useState("");
    const [competences, setCompetences] = useState([]);
    const [personnage, setPersonnage] = useState();
    const [choix, setChoix] = useState();
    const [pv, setPV] = useState(0);
    const [protection, setProtection] = useState(0);

    const ListePersonnages = [
        ...ListeAliens.map(alien => ({ ...alien, type: 'Alien' })),
        ...ListeOperateurs.map(operateur => ({ ...operateur, type: 'Operateur' }))
    ];

    const ChevronLeftIcon = Lucide.ChevronLeft

    useEffect(() => {
        const ChargementJeu = () => {
            const Nom = localStorage.getItem('activePersonnage');
            const Comp = JSON.parse(localStorage.getItem('competences'));
            const Capa = localStorage.getItem('capacites');

            console.log("Données récupérées :", { Nom, Comp, Capa });

            setActivePersonnage(Nom);

            if (!Nom) {
                console.error("Nom vide !");
                setIsLoading(false);
                return;
            }

            const found = ListePersonnages.find(p => p.Id === Nom);

            if (found) {
                console.log("Personnage trouvé :", found.Titre);
                setPersonnage(found);
                setPV(found.Details.PointsVie);
                setProtection(found.Details.Protection);

                try {
                    const mesDeuxCompetences = [
                        found.Details.Competences[Comp[0]],
                        found.Details.Competences[Comp[1]]
                    ];

                    setCompetences(mesDeuxCompetences);

                    setCapacites(found.Details.Capacites[Capa]);
                } catch (e) {
                    console.error("Erreur de lecture des compétences", e);
                }
            } else {
                console.error("Identifiant introuvable dans la liste :", name);
            }
            setIsLoading(false);
        };

        ChargementJeu();
    }, []);

    if (isLoading || !activePersonnage || !personnage) {
        return <h2>Chargement du personnage en cours...</h2>;
    }

    const AjoutInputPV = () => {
        setPV(prev => { return Number(prev) + 1 });
    }

    const AjoutInputProt = () => {
        setProtection(prev => { return Number(prev) + 1 });
    }

    const EnleveInputPV = () => {
        setPV(prev => { return Number(prev) - 1 });
    }

    const EnleveInputProt = () => {
        setProtection(prev => { return Number(prev) - 1 });
    }

  return (
      <>
          <div
              className="Container-Bouton-Retour-JDR"
              onMouseEnter={() => setIsHoveredRetour(true)}
              onMouseLeave={() => setIsHoveredRetour(false)}
          >
              <Link to="/CygnusProjects_JouerProfils" className="Bouton-Retour-JDR">
                  <div className="IconeChevron-Left-Bouton-Retour">
                      <ChevronLeftIcon
                          size={40}
                          color={isHoveredRetour ? "black" : "hsl(0 0% 60%)"}
                      />
                  </div>
                  <span>Retour</span>
              </Link>
          </div>
          {
              isLoading ?
                  (
                      <h2>Chargement en cours ...</h2>
                  ) : (
                      <div style={{display: 'flex', flexDirection: 'column', width: '100rem', marginBottom: '20rem'}}>
                          <h1>{activePersonnage.toUpperCase()}</h1>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                              <div style={{ width: '50%' }}>
                                  <img src={personnage.Details.CheminImage} style={{width: '50%', margin: 'auto', display: 'block'}} />
                              </div>
                              <div style={{display:'flex', flexDirection:'column'}}>
                                  <div style={{ width: '50%', display: 'flex', flexDirection: 'row', marginTop: 'auto', marginBottom: 'auto' }}>
                                      <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                                          <label style={{ textAlign: 'center', width: '100%', display:'block' }}>Points de vie</label>
                                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                                              <button
                                                  className="Bouton-Input-PV-Prot-Gauche"
                                                  onClick={() => EnleveInputPV()}
                                              >-</button>
                                              <input type="number" value={pv} className="Input-PV-Prot" disabled />
                                              <button
                                                  className="Bouton-Input-PV-Prot-Droite"
                                                  onClick={() => AjoutInputPV()}
                                              >+</button>
                                          </div>
                                      </div>
                                      <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                                          <label style={{ textAlign: 'center', width: '100%', display: 'block' }}>Protection</label>
                                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                                              <button
                                                  className="Bouton-Input-PV-Prot-Gauche"
                                                  onClick={() => EnleveInputProt()}
                                              >-</button>
                                              <input type="number" value={protection} className="Input-PV-Prot" disabled />
                                              <button
                                                  className="Bouton-Input-PV-Prot-Droite"
                                                  onClick={() => AjoutInputProt()}
                                              >+</button>
                                          </div>
                                      </div>
                                  </div>
                                  <table style={{ marginTop: 'auto', marginBottom: '5rem', backgroundColor: 'black', textAlign:'center' }}>
                                      <thead>
                                          <tr>
                                              <td>
                                                  <label>FORCE</label>
                                              </td>
                                              <td>
                                                  <label>DEXTÉRITÉ</label>
                                              </td>
                                              <td>
                                                  <label>CONSTITUTION</label>
                                              </td>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Force}
                                                  </label>
                                              </td>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Dextérité}
                                                  </label>
                                              </td>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Constitution}
                                                  </label>
                                              </td>
                                          </tr>
                                      </tbody>
                                      <thead>
                                          <tr>
                                              <td>
                                                  <label>INTELLIGENCE</label>
                                              </td>
                                              <td>
                                                  <label>SAGESSE</label>
                                              </td>
                                              <td>
                                                  <label>CHARISME</label>
                                              </td>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Intelligence}
                                                  </label>
                                              </td>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Sagesse}
                                                  </label>
                                              </td>
                                              <td>
                                                  <label>
                                                      {personnage.Details.Charisme}
                                                  </label>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <h4>COMPÉTENCES</h4>
                          <div style={{display:'flex', flexDirection:'column', gap:'3rem', marginBottom: '5rem'}}>
                              {
                                  competences.map((comp, index) => (
                                      <label key={index}>{comp}</label>
                                  ))
                              }
                          </div>
                          <h4>CAPACITÉ SPÉCIALE</h4>
                          <label>{capacites}</label>
                      </div>
                  )
          }
      </>
  );
}

export default JouerPersonnage;