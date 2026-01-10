import Image from "/public/Images/Logo_Cygnuss_Projects.png"
import { Link } from 'react-router-dom'
 
function CygnusProjects() {
  return (
      <>
          <div className="CarteJDR">
              <Link to="/CygnusProjects">
                  <img src={Image} alt="Cygnus's Projects" height="1000vh" />
                  <h2>CYGNUS'S PROJECTS</h2>
              </Link>
          </div>
      </>
  );
}

export default CygnusProjects;