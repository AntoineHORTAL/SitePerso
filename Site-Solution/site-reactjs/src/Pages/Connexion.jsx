import InputIdentifiant from '../Composants/Login-Signin/InputIdentifiant.jsx';
import InputMDP from '../Composants/Login-Signin/InputMotDePasse.jsx';
import '../CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Connexion() {
    // On garde seulement les states nécessaires
    const [identifiant, setIdentifiant] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [message, setMessage] = useState('');
    const [erreur, setErreur] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setErreur('');
        setLoading(true);

        const identifiantTrim = identifiant.trim();
        const motDePasseTrim = motDePasse.trim();

        if (!identifiantTrim || !motDePasseTrim) {
            setErreur('Veuillez remplir tous les champs.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/API/API_User/login', {
                User: {
                    Identifiant: identifiantTrim,
                    MotDePasse: motDePasseTrim
                }
            });

            setMessage(response.data.message || 'Connexion réussie !');

            console.log(response);

            setIdentifiant('');
            setMotDePasse('');

            const User = {
                Id: response.data.user.Id,
                Identifiant: response.data.user.Identifiant
            };

            console.log('Id :' + response.data.user.Id);
            console.log('Identifiant :' + response.data.user.Identifiant);

            localStorage.setItem('user', JSON.stringify(User));

            setTimeout(() => {
                navigate('/Accueil');
            }, 1500);

        } catch (error) {
            if (error.response) {
                setErreur(error.response.data.message || 'Identifiant ou mot de passe incorrect');
            } else {
                setErreur('Impossible de contacter le serveur.');
            }
            console.error('Erreur connexion :', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="Container-Connexion">
                    <h1>Connexion</h1>

                    {/* On passe value et onChange pour que les inputs soient contrôlés */}
                    <InputIdentifiant
                        value={identifiant}
                        onChange={(e) => setIdentifiant(e.target.value)}
                    />

                    <InputMDP
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                    />

                    <button type="submit" className="Bouton-Login" disabled={loading}>
                        {loading ? 'Connexion en cours...' : 'Se Connecter'}
                    </button>

                    <p>
                        Vous n'avez pas de compte ? <br />
                        <Link to="/Inscription">Inscription</Link>
                    </p>

                    {/* Affichage des messages */}
                    {message && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{message}</p>}
                    {erreur && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{erreur}</p>}
                </div>
            </form>
        </>
    );
}

export default Connexion;
