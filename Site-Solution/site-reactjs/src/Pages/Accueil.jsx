import CygnusProjects from '../Composants/Accueil/CygnussProjectsCarte.jsx'
import WrathAndGlory from '../Composants/Accueil/WrathAndGlory.jsx'
import CalculatorLOL from '../Composants/Accueil/CalculatorLOL.jsx'

function Acceuil() {
  return (
      <>
          <div className="Container-Carte-JDR">
                <CygnusProjects />
                <WrathAndGlory />
                <CalculatorLOL />
          </div>
      </>
  );
}

export default Acceuil;