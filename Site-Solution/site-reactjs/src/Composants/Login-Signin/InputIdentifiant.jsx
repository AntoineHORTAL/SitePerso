import { useState } from 'react'

function InputIdentifiant({ value, onChange }) {
    const [identifiant, setIdentifiant] = useState('')

  return (
      <>
          <div className="input-wrapper input-wrapper-fixed">
              <input
                  type="text"
                  id="Input-Identifiant"
                  className="Input-Login Input-Identifiant floating-input-fixed"
                  value={value}
                  onChange={onChange}
                  style={{ pointerEvents: 'auto' }}
                  placeholder=" "
              />
              <label htmlFor="Input-Identifiant" className="floating-label-fixed">Identifiant</label>
          </div>
      </>
  );
}

export default InputIdentifiant;