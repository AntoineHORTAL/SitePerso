import { useState } from 'react'

function InputMail() {
    const [Email, setEmail] = useState('')

  return (
      <>
          <div className="input-wrapper input-wrapper-fixed">
              <input
                  type="mail"
                  id="Input-Mail"
                  className="Input-Login Input-Mail floating-input-fixed"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
              ></input>
              <label htmlFor="Input-Mail" className="floating-label-fixed">Adresse E-Mail</label>
          </div>
      </>
  );
}

export default InputMail;