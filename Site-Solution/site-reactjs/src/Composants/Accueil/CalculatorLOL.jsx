import Image from "/public/Images/Logo_Calculator_LOL.png"
import { Link } from 'react-router-dom'

function CalculatorLOL() {
    return (
        <>
            <div className="CarteJDR">
                <Link to="/Calculator_LOL">
                    <img src={Image} alt="Calculator LOL" height="1000vh" />
                    <h2>OK SKYYART</h2>
                </Link>
            </div>
        </>
    );
}

export default CalculatorLOL;