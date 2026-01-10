import InputIdentifiant from '../Composants/Login-Signin/InputIdentifiant.jsx'
import InputMDP from '../Composants/Login-Signin/InputMotDePasse.jsx'
import BoutonInscription from '../Composants/Login-Signin/BoutonInscription.jsx'
import InputConfMotDePasse from '../Composants/Login-Signin/InputConfMotDePasse.jsx'
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';

function Inscription() {
    const [Identifiant, setIdentifiant] = useState('');
    const [MotDePasse, setMotDePasse] = useState('');
    const [IdentifiantInput, setIdentifiantInput] = useState('');
    const [MotDePasseInput, setMotDePasseInput] = useState('');
    const [ConfMotDePasse, setConfMotDePasse] = useState('');
    const [MotDePasseNonConfirmer, setMotDePasseNonConfirmer] = useState(false);
    const [message, setMessage] = useState('');
    const [erreur, setErreur] = useState('');
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const navigate = useNavigate();

    const IdentifiantonChange = (e) => {
        setIdentifiantInput(e.target.value)
    }

    const MotDePasseonChange = (e) => {
        setMotDePasseInput(e.target.value)
    }

    const MotDePasseVerif = (e) => {
        const NewConfMotDePasse = e.target.value

        setConfMotDePasse(NewConfMotDePasse)

        if (MotDePasseInput && NewConfMotDePasse != MotDePasseInput) {
            setMotDePasseNonConfirmer(true)
        }
        else {
            setMotDePasseNonConfirmer(false)
        }
    }


    const SubmitForm = async (e) => {
        e.preventDefault();
        setMessage('');
        setErreur('');
        setLoading(true);

        if (!MotDePasseNonConfirmer) {
            try {
                const response = await axios.post(`${API_URL}/API/API_User`, {
                    User: {
                        Identifiant: IdentifiantInput,
                        MotDePasse: MotDePasseInput
                    }
                });

                setMessage(response.data.message || 'Inscription réussie !');

                setTimeout(() => {
                    navigate('/Connexion');
                }, 1500);

                setIdentifiantInput('');
                setMotDePasseInput('');
                setConfMotDePasse('');
            } catch (error) {
                if (error.response) {
                    setErreur(error.response.data.message || 'Erreur lors de l\'inscription');
                } else {
                    setErreur('Impossible de contacter le serveur. Vérifie que ton backend est lancé.');
                }
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        else {
            setErreur('Les mots de passe ne sont pas identiques.');
        }
    }

  return (
      <>
        <form onSubmit={SubmitForm}>
            <div className="Container-Connexion">
                <h1>Inscription</h1>
                <InputIdentifiant
                    value={IdentifiantInput}
                    onChange={IdentifiantonChange}
                    required
                />

                <InputMDP
                    value={MotDePasseInput}
                    onChange={MotDePasseonChange}
                    required
                />

                <InputConfMotDePasse
                    value={ConfMotDePasse}
                    onChange={MotDePasseVerif}
                    required
                />

                {MotDePasseNonConfirmer && (
                    <label
                        className="label-erreur-MDP"
                        id="label-erreur-MDP"              >
                        Les mots de passe ne sont pas identiques
                    </label>
                )}

                <button type="submit" className="Bouton-Login"  disabled={loading}>
                    {loading ? 'Inscription en cours...' : 'S\'inscrire'}
                </button>

                <p>
                    Vous avez un compte ?<br />
                    <Link to="/">Connexion</Link>
                </p>
                <p>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    {erreur && <p style={{ color: 'red' }}>{erreur}</p>}          
                </p>
            </div>
        </form>
      </>
  );
}

export default Inscription;