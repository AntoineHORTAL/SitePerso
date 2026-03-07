import CygnusProjects from '../Composants/Accueil/CygnussProjectsCarte.jsx'
import WrathAndGlory from '../Composants/Accueil/WrathAndGlory.jsx'
import CalculatorLOL from '../Composants/Accueil/CalculatorLOL.jsx'

function Acceuil() {
  return (
      <>
          <div className="Container-Carte-JDR">
              <div className="Demi-Container-Carte-JDR">
                  <CygnusProjects />
                  <WrathAndGlory />
              </div>
              <div className="Demi-Container-Carte-JDR">
                  <CalculatorLOL />
              </div>
          </div>
      </>
  );
}

export default Acceuil;