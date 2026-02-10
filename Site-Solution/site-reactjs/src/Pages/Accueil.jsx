import CygnusProjects from '../Composants/Accueil/CygnussProjectsCarte.jsx'
import WrathAndGlory from '../Composants/Accueil/WrathAndGlory.jsx'

function Acceuil() {
  return (
      <>
          <div className="Container-Carte-JDR">
              <CygnusProjects />
              <WrathAndGlory />
          </div>
      </>
  );
}

export default Acceuil;