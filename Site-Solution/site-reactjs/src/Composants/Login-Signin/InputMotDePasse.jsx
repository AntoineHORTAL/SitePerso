import { useState } from 'react'

function InputMotDePasse({ value, onChange }) {
    const [MDP, setMDP] = useState('')

    return (
        <>
            <div className="input-wrapper input-wrapper-fixed">
                <input
                    type="password"
                    id="Input-MDP"
                    className="Input-Login Input-MDP floating-input-fixed"
                    value={value}
                    onChange={onChange}
                    placeholder=" "
                ></input>
                <label htmlFor="Input-MDP" className="floating-label-fixed">Mot de passe</label>
            </div>
        </>
    );
}

export default InputMotDePasse;