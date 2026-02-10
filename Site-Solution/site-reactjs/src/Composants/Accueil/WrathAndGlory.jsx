import Image from "/public/Images/Logo_Wrath_And_Glory.png"
import { Link } from 'react-router-dom'

function WrathAndGlory() {
    return (
        <>
            <div className="CarteJDR">
                <Link to="/WrathAndGlory">
                    <img src={Image} alt="Cygnus's Projects" height="1000vh" />
                    <h2>WRATH AND GLORY</h2>
                </Link>
            </div>
        </>
    );
}

export default WrathAndGlory;