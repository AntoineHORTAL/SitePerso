function Bouton_Select({ Objet, IsActive, OnSelect }) {

    const handleClick = () => {
        OnSelect(Objet.Titre);
    }

  return (
    <>
        <div 
              className={`Bouton-Select-Alien ${IsActive ? 'Bouton-Select-Alien-Actif' : ''}`}
              onClick={handleClick}
            >
            <div className="Container-Icone-Bouton-Select-Alien">
                  <span>{Objet.Icone}</span>
            </div>
            <div>
                  <label>{Objet.Titre}</label>
            </div>
        </div>
    </>
  );
}

export default Bouton_Select;