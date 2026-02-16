import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import * as Lucide from 'lucide-react'

function ListePersonnages() {

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredButton, setHoveredButton] = useState({});
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const ChevronLeftIcon = Lucide.ChevronLeft;
    const PlusIcon = Lucide.Plus;
    const UserIcon = Lucide.User;
    const CroixIcon = Lucide.X;
    const TrashIcon = Lucide.Trash;
    const PlayIcon = Lucide.Play;

    //const [isHovered, getIsHovered] = useState(null);

    const [personnages, setPersonnages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErreur] = useState(null);
    const [isHoveredCrea, setIsHoveredCrea] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const User = JSON.parse(localStorage.getItem('user'));

    const DivCreationPersonnage = useRef(null);

    const Annuler = () => {
        if (DivCreationPersonnage.current) {
            DivCreationPersonnage.current.style.display = 'none';
        }
    };

    const AfficheDivCreationPersonnage = () => {
        if (DivCreationPersonnage.current) {
            DivCreationPersonnage.current.style.display = 'block';
        }
    };

    //recherche de tous les personnages créer avec l'utilisateur connecté
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User from localStorage :", user);

        if (!user || !user.Id) {
            console.error("User ou User.Id manquant");
            setErreur("Utilisateur non connecté");
            setLoading(false);
            return;
        }

        axios.get(`${API_URL}/API/API_Personnages_WrathAndGlory/user/${user.Id}`)
            .then(res => {
                console.log("Réponse complète API personnages :", res.data);
                // Si l'API retourne un objet avec une clé "personnages", adapte
                const personnagesData = Array.isArray(res.data) ? res.data : res.data.personnages || [];
                setPersonnages(personnagesData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur API personnages :", err.response?.data || err.message);
                setErreur("Impossible de charger les personnages");
                setLoading(false);
            });
    }, []);

    const getIsHovered = (personnageId, buttonType) => {
        return hoveredButton[`${personnageId}-${buttonType}`] || false;
    };

    const DeletePersonnage = (personnageId) => async () => {
        const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce Personnage ? Cette action est irréversible.');
        if (!confirmation) return;

        setMessage('');
        setErreur('');
        setLoading(true);

        try {
            const response = await axios.delete(`${API_URL}/API/API_Personnages_WrathAndGlory/${personnageId}`);

            setMessage(response.data.message || 'Personnage supprimé avec succès !');

            setPersonnages(prevPersos =>
                prevPersos.filter(perso =>
                    (perso.Personnages_WrathAndGlory?.Id !== personnageId) && (perso._id !== personnageId)
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

    const handleMouseEnter = (profilId, buttonType) => {
        setHoveredButton(prev => ({ ...prev, [`${profilId}-${buttonType}`]: true }));
    };

    const handleMouseLeave = (profilId, buttonType) => {
        setHoveredButton(prev => ({ ...prev, [`${profilId}-${buttonType}`]: false }));
    };

    const PlayPersonnage = async (idPersonnage) => {
        console.log("PlayPersonnage appelée avec idPersonnage :", idPersonnage);

        if (!idPersonnage) {
            setErreur("ID du personnage invalide");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(`${API_URL}/API/API_Personnages_WrathAndGlory/${idPersonnage}`);

            localStorage.setItem('personnage_wrathandglory', JSON.stringify(response.data));

            setMessage('Personnage chargé !');

            navigate('/WrathAndGlory_JouerPersonnage');
        } catch (error) {
            console.error("Erreur API :", error.response?.data || error.message);
            setErreur("Personnage non trouvé ou erreur serveur");
        } finally {
            setLoading(false);
        }
    };


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

            <div
                className="Container-Bouton-Creation-Profil"
                onMouseEnter={() => setIsHoveredCrea(true)}
                onMouseLeave={() => setIsHoveredCrea(false)}
                onClick={AfficheDivCreationPersonnage}
                style={{ width: '31rem', padding: '1rem' }}
            >
                <div className="Bouton-Creation-Profil">
                    <PlusIcon
                        size={30}
                        color={isHoveredCrea ? "black" : "hsl(0 0% 60%)"}
                    />
                    <UserIcon
                        size={30}
                        color={isHoveredCrea ? "black" : "hsl(0 0% 60%)"}
                        style={{ marginRight: "1rem" }}
                    />
                    Créer un nouveau Personnage
                </div>
            </div>

            <div
                className="Grand-Container-Select-Pouvoir-Psychique"
                id="Div-Select-Talents"
                ref={DivCreationPersonnage}
            >
                <div className="Container-Select-Pouvoir-Psychique" onClick={Annuler}>
                    <div className="Select-Pouvoir-Psychique" onClick={(e) => e.stopPropagation()} style={{ margin: 'auto' }}>
                        <div
                            className="IconeChevron-Left-Bouton-Retour"
                            onClick={Annuler}
                            style={{ cursor: 'pointer', width: '40px', height: '40px', marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}
                        >
                            <CroixIcon
                                size={40}
                                color={isHovered ? "black" : "hsl(0 0% 60%)"}
                            />
                        </div>
                        <h2 style={{ textAlign: 'center' }}>Création d'un nouveau personnage</h2>
                        <div className="Container-Bouton-Creation-Personnage">
                            <Link to='/WrathAndGlory_CreationPersonnageArchetype' className="Bouton-Creation-Personnage">
                                <h3 style={{ textAlign: 'center' }}>Création par Archétype</h3>
                            </Link>
                            <Link to='/WrathAndGlory_CreationPersonnageAvancee' className="Bouton-Creation-Personnage">
                                <h3 style={{ textAlign: 'center' }}>Création Avancée</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {loading ? (
                <p>Chargement des personnages...</p>
            ) : personnages.length > 0 ? (

                <table className="Table-Liste-Personnages">
                    <tbody>
                        {personnages.map((persos) => (
                            <tr key={persos._id || persos.Personnages_WrathAndGlory?.Id}>
                                <td>{persos.Personnages_WrathAndGlory?.Nom}</td>
                                <td style={{ width: '4rem' }}>
                                    <Link
                                        //to="/WrathAndGlory_JouerPersonnage"
                                        onClick={(e) => {
                                            PlayPersonnage(persos.Personnages_WrathAndGlory?.Id);
                                            console.log(persos.Personnages_WrathAndGlory);
                                        }}>
                                        <div
                                            className="Bouton-Liste-Personnage"
                                            onMouseEnter={() => handleMouseEnter(persos._id || persos.Personnages_WrathAndGlory?.Id, 'play')}
                                            onMouseLeave={() => handleMouseLeave(persos._id || persos.Personnages_WrathAndGlory?.Id, 'play')}
                                            style={{
                                                backgroundColor: getIsHovered(persos._id || persos.Personnages_WrathAndGlory?.Id, 'play') ? 'green' : 'black',
                                                cursor: getIsHovered(persos._id || persos.Personnages_WrathAndGlory?.Id, 'play') ? 'pointer' : 'pointer'
                                            }}
                                        >
                                            <PlayIcon
                                                size={30}
                                                color={getIsHovered(persos._id || persos.Personnages_WrathAndGlory?.Id, 'play') ? 'black' : 'green'}
                                            />
                                        </div>
                                    </Link>
                                </td>
                                <td style={{ width: '4rem' }}>
                                    <div
                                        className="Bouton-Liste-Personnage"
                                        onMouseEnter={() => handleMouseEnter(persos._id || persos.Personnages_WrathAndGlory?.Id, 'trash')}
                                        onMouseLeave={() => handleMouseLeave(persos._id || persos.Personnages_WrathAndGlory?.Id, 'trash')}
                                        style={{
                                            backgroundColor: getIsHovered(persos._id || persos.Personnages_WrathAndGlory?.Id, 'trash') ? 'red' : 'black',
                                            cursor: 'pointer'
                                        }}
                                        onClick={DeletePersonnage(persos.Personnages_WrathAndGlory?.Id)}
                                    >
                                        <TrashIcon
                                            size={30}
                                            color={getIsHovered(persos._id || persos.Personnages_WrathAndGlory?.Id, 'trash') ? 'white' : 'red'}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1 className="Titre-Pas-Encore-Perso">Vous n'avez pas encore créé de Personnage</h1>
            )}
        </>
    );
}

export default ListePersonnages;