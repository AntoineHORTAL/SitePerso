function InputNomProfil({ value, onChange }) {
    return (
        <>
            <div className="input-wrapper input-wrapper-fixed">
                <input
                    type="text"
                    id="Input-NomProfil"
                    className="Input-Login floating-input-fixed"
                    value={value}
                    placeholder=" "
                    onChange={onChange}
                ></input>
                <label htmlFor="Input-NomProfil" className="floating-label-fixed">Nom du Profil</label>
            </div>
        </>
    );
}

export default InputNomProfil;