import { Link } from 'react-router-dom'

function BoutonConnexion() {
  return (
      <>
          <Link className="Bouton-Login" to="/Accueil">
              Se Connecter
          </Link>
      </>
  );
}

export default BoutonConnexion;