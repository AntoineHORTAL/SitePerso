import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../../CSS/CygnussProjects.css';
import { Link, useNavigate } from 'react-router-dom'
import * as Lucide from 'lucide-react'

import InputNomProfil from '../../Composants/CygnusProjects/InputNomProfil'



function ListeProfils() {
    const [profils, setProfils] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isHoveredRetour, setIsHoveredRetour] = useState(false);
    const [isHoveredCrea, setIsHoveredCrea] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const Trash = Lucide.Trash;
    const Pencil = Lucide.Pencil;
    const Play = Lucide.Play;
    const Plus = Lucide.Plus;
    const UserIcon = Lucide.User;


    const [NomProfil, setNomProfil] = useState('');
    const [Message, setMessage] = useState('');
    const [Erreur, setErreur] = useState('');
    const [hoveredButton, setHoveredButton] = useState({});

    const navigate = useNavigate();

    const DivCreationProfil = useRef(null);


    const User = JSON.parse(localStorage.getItem('user'));

    //recherche de tous les profils créer avec l'utilisateur connecté
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User from localStorage :", user);

        if (!user || !user.Id) {
            console.error("User ou User.Id manquant");
            setErreur("Utilisateur non connecté");
            setLoading(false);
            return;
        }

        axios.get(`${API_URL}/API/API_Profil/user/${user.Id}`)
            .then(res => {
                console.log("Réponse complète API profils :", res.data);
                // Si l'API retourne un objet avec une clé "profils", adapte
                const profilsData = Array.isArray(res.data) ? res.data : res.data.profils || [];
                setProfils(profilsData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur API profils :", err.response?.data || err.message);
                setErreur("Impossible de charger les profils");
                setLoading(false);
            });
    }, []);


    // Création d'un nouveau profil
    const CreationProfil = async (e) => {
        e.preventDefault(); 

        setMessage('');
        setErreur('');
        setLoading(true);

        const NomProfilTrim = NomProfil.trim();

        if (!NomProfilTrim) {
            setErreur('Veuillez remplir le Nom du nouveau Profil.');
            setLoading(false);
            return;
        }

        try {
            console.log("📡 Envoi requête création profil...");

            const response = await axios.post(`${API_URL}/API/API_Profil/`, {
                Profil: {
                    NomProfil: NomProfilTrim,
                    IdUser: User.Id
                }
            });

            const nouvelProfilId = response.data.profil.idProfil;

            try {
                const progressionResponse = await axios.post(`${API_URL}/API/API_Progression/`, {
                    Progression: {
                        IdProfil: nouvelProfilId
                    }
                });
            } catch (progError) {
                console.error("Détails:", progError.response?.data);

                setErreur('Profil créé mais erreur lors de la création de la progression');
            }

            setMessage(response.data.message || 'Profil créé avec succès !');

            // Recharger la liste des profils
            const profilsResponse = await axios.get(`${API_URL}/API/API_Profil/user/${User.Id}`);
            setProfils(profilsResponse.data);

            setTimeout(() => {
                Annuler();
            }, 1500);

        } catch (error) {
            console.error("Détails:", error.response?.data);

            setErreur(error.response?.data?.message || 'Impossible de contacter le serveur.');

        } finally {
            setLoading(false);
        }
    };


    //suppression d'un profil
    const DeleteProfil = (profilId) => async () => {
        const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce profil ? Cette action est irréversible.');
        if (!confirmation) return;

        setMessage('');
        setErreur('');
        setLoading(true);

        try {
            const response = await axios.delete(`${API_URL}/API/API_Profil/${profilId}`);

            setMessage(response.data.message || 'Profil supprimé avec succès !');

            try {
                const responseProg = await axios.delete(`${API_URL}/API/API_Progression/${profilId}`);
                console.log("Progression supprimée :", responseProg.data);
            } catch (progError) {
                if (progError.response?.status === 404) {
                    console.warn("Aucune progression à supprimer (déjà absente ou inexistante)");
                } else {
                    console.warn("Échec suppression progression :", progError.response?.data || progError.message);
                }
            }

            setProfils(prevProfils =>
                prevProfils.filter(profil =>
                    (profil.Profil?.Id !== profilId) && (profil._id !== profilId)
                )
            );

            setTimeout(() => {
                setMessage('');
            }, 2000);

        } catch (error) {
            if (error.response) {
                setErreur(error.response.data.message || 'Erreur lors de la suppression');
            } else {
                setErreur('Impossible de contacter le serveur.');
            }
            console.error('Erreur suppression profil :', error);
        } finally {
            setLoading(false);
        }
    }

    //modification d'un profil
    const ModificationProfil = (profilId, ancienNom) => async () => {
        const nouveauNom = window.prompt('Modifier le nom du profil :', ancienNom);

        if (!nouveauNom || nouveauNom.trim() === '' || nouveauNom.trim() === ancienNom) {
            return;
        }

        setMessage('');
        setErreur('');
        setLoading(true);

        try {
            const response = await axios.patch(`${API_URL}/API/API_Profil/${profilId}`, {
                NomProfil: nouveauNom.trim()
            });

            setMessage(response.data.message || 'Profil modifié avec succès !');

            // Mise à jour immédiate dans la liste locale
            setProfils(prevProfils =>
                prevProfils.map(profil =>
                    (profil.Profil?.Id === profilId || profil._id === profilId)
                        ? { ...profil, Profil: { ...profil.Profil, NomProfil: nouveauNom.trim() } }
                        : profil
                )
            );

            setTimeout(() => setMessage(''), 2000);
        } catch (error) {
            setErreur(error.response?.data?.message || 'Erreur lors de la modification');
            console.error('Erreur modification :', error);
        } finally {
            setLoading(false);
        }
    };


    //Jouer le profil
    const JouerProfil = () => {

    }

    const Annuler = () => {
        setNomProfil('');
        if (DivCreationProfil.current) {
            DivCreationProfil.current.style.display = 'none';
        }
    };

    const AfficheDivCreationProfil = () => {

        console.log(DivCreationProfil);

        if (DivCreationProfil.current) {
            DivCreationProfil.current.style.display = 'block';
        }
    };

    //hoover bouton profil
    const handleMouseEnter = (profilId, buttonType) => {
        setHoveredButton(prev => ({ ...prev, [`${profilId}-${buttonType}`]: true }));
    };

    const handleMouseLeave = (profilId, buttonType) => {
        setHoveredButton(prev => ({ ...prev, [`${profilId}-${buttonType}`]: false }));
    };

    const getIsHovered = (profilId, buttonType) => {
        return hoveredButton[`${profilId}-${buttonType}`] || false;
    };

    //JOUER AVEC LE PROFIL
    const PlayProfil = async (idProfil) => {
        console.log("PlayProfil appelée avec idProfil :", idProfil);

        if (!idProfil || isNaN(idProfil)) {
            setErreur("ID du profil invalide");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(`${API_URL}/API/API_Progression/${idProfil}`);

            console.log("Progression reçue :", response.data);

            localStorage.setItem('progression_profil', JSON.stringify(response.data));

            setMessage('Progression chargée !');

            navigate('/CygnusProjects_JouerProfils');
        } catch (error) {
            console.error("Erreur API :", error.response?.data || error.message);
            setErreur("Progression non trouvée ou erreur serveur");
        } finally {
            setLoading(false);
        }
    };


  return (
    <>
        <div>
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHoveredRetour(true)}
                onMouseLeave={() => setIsHoveredRetour(false)}
            >
                <Link to="/CygnusProjects" className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHoveredRetour ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </Link>
            </div>
            <div 
                  className="Container-Bouton-Creation-Profil"
                  onMouseEnter={() => setIsHoveredCrea(true)}
                  onMouseLeave={() => setIsHoveredCrea(false)}
                  onClick={AfficheDivCreationProfil}
            >
                <div className="Bouton-Creation-Profil">
                    <Plus
                        size={30}
                        color={isHoveredCrea ? "black" : "hsl(0 0% 60%)"}
                    />
                    <UserIcon
                        size={30}
                        color={isHoveredCrea ? "black" : "hsl(0 0% 60%)"}
                        style={{ marginRight : "1rem" }}
                    />
                    Créer un nouveau Profil
                </div>
            </div>

            <div className="Grand-Container-Form-Creation-Profil" id="DivCreationProfil" ref={DivCreationProfil}>
                <div className="Container-Form-Creation-Profil" onClick={Annuler}>
                    <form onSubmit={CreationProfil} className="Form-Creation-Profil" onClick={(e) => e.stopPropagation()}>
                        <h2>Création d'un nouveau profil</h2>
                        <InputNomProfil
                            value={NomProfil}
                            onChange={(e) => setNomProfil(e.target.value)}
                        />
                          <div style={{ display: 'flex', marginTop: '4rem' }}>
                            <button className="Bouton-Annuler" onClick={Annuler}>Annuler</button>
                            <button type="submit" className="Bouton-Valider">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>

              {loading ? (
                  <p>Chargement des profils...</p>
              ) : profils.length > 0 ? (

                 <table className="Table-Listage-Profil">
                      <tbody>
                          {profils.map((profil) => (
                              <tr key={profil._id || profil.Profil?.Id}>
                                  <td>{profil.Profil?.NomProfil || ''}</td>
                                  <td style={{ width: '4rem' }}>
                                      <Link
                                          to="/CygnusProjects_JouerProfils"
                                          onClick={(e) => {
                                              PlayProfil(profil.Profil?.Id);
                                          }}>
                                          <div
                                              className="Bouton-Table-Listage-Profil"
                                              onMouseEnter={() => handleMouseEnter(profil._id || profil.Profil?.Id, 'play')}
                                              onMouseLeave={() => handleMouseLeave(profil._id || profil.Profil?.Id, 'play')}
                                              style={{
                                                  backgroundColor: getIsHovered(profil._id || profil.Profil?.Id, 'play') ? 'green' : 'black',
                                                  cursor: getIsHovered(profil._id || profil.Profil?.Id, 'play') ? 'pointer' : 'pointer'
                                              }}
                                          >
                                              <Play
                                                  size={30}
                                                  color={getIsHovered(profil._id || profil.Profil?.Id, 'play') ? 'black' : 'green'}
                                              />
                                          </div>
                                      </Link>
                                  </td>
                                  <td style={{ width: '4rem' }}>
                                      <div
                                          className="Bouton-Table-Listage-Profil"
                                          onMouseEnter={() => handleMouseEnter(profil.Profil?.Id || profil._id, 'pencil')}
                                          onMouseLeave={() => handleMouseLeave(profil.Profil?.Id || profil._id, 'pencil')}
                                          style={{
                                              backgroundColor: getIsHovered(profil.Profil?.Id || profil._id, 'pencil') ? 'hsl(0 0% 60%)' : 'black',
                                              cursor: 'pointer'
                                          }}
                                          onClick={() => {
                                              const id = profil.Profil?.Id;
                                              const nom = profil.Profil?.NomProfil || '';
                                              if (!id) {
                                                  alert("Erreur : ID du profil manquant");
                                                  return;
                                              }
                                              else if (!nom) {
                                                  alert("Erreur : Nom du profil manquant");
                                                  return;
                                              }
                                              ModificationProfil(id, nom)();
                                          }}
                                      >
                                          <Pencil
                                              size={30}
                                              color={getIsHovered(profil.Profil?.Id || profil._id, 'pencil') ? 'black' : 'hsl(0 0% 60%)'}
                                          />
                                      </div>
                                  </td>
                                  <td style={{ width: '4rem' }}>
                                      <div
                                          className="Bouton-Table-Listage-Profil"
                                          onMouseEnter={() => handleMouseEnter(profil._id || profil.Profil?.Id, 'trash')}
                                          onMouseLeave={() => handleMouseLeave(profil._id || profil.Profil?.Id, 'trash')}
                                          style={{
                                              backgroundColor: getIsHovered(profil._id || profil.Profil?.Id, 'trash') ? 'red' : 'black',
                                              cursor: 'pointer' 
                                          }}
                                          onClick={DeleteProfil(profil.Profil?.Id)}
                                      >
                                          <Trash
                                              size={30}
                                              color={getIsHovered(profil._id || profil.Profil?.Id, 'trash') ? 'white' : 'red'}
                                          />
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              ) : (
                  <h1>Vous n'avez pas encore créé de profil</h1>
              )}
        </div>
    </>
  )
}

export default ListeProfils;