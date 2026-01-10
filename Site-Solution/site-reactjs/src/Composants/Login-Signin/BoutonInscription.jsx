import { Link } from 'react-router-dom'

function BoutonInscription() {
  return (
      <>
          <Link className="Bouton-Login" to="/Accueil">
              S'inscrire
          </Link>
      </>
  );
}

export default BoutonInscription;