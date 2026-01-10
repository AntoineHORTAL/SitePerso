function InputConfMotDePasse({ value, onChange }) {
    return (
        <>
            <div className="input-wrapper input-wrapper-fixed">
                <input
                    type="password"
                    id="Input-ConfMDP"
                    className="Input-Login Input-ConfMDP floating-input-fixed"
                    value={value}
                    placeholder=" "
                    onChange={onChange}
                ></input>
                <label htmlFor="Input-ConfMDP" className="floating-label-fixed">Confirmer le mot de passe</label>
            </div>
        </>
    );
}

export default InputConfMotDePasse;