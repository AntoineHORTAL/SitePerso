import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Connexion from './Pages/Connexion.jsx'
import Inscription from './Pages/Inscription.jsx'
import Accueil from './Pages/Accueil.jsx'
import CygnusProjects from './Pages/CygnussProjects.jsx'
import CygnusProjects_Regles from './Pages/CygnusProjects/Regles.jsx'
import CygnusProjects_ModesDeJeu from './Pages/CygnusProjects/ModesDeJeu.jsx'
import CygnusProjects_Aliens from './Pages/CygnusProjects/Aliens.jsx'
import CygnusProjects_Operateurs from './Pages/CygnusProjects/Operateurs.jsx'
import CygnusProjects_ListeProfils from './Pages/CygnusProjects/ListeProfils.jsx'
import CygnusProjects_JouerProfils from './Pages/CygnusProjects/JouerProfil'
import CygnusProjects_JouerPersonnage from './Pages/CygnusProjects/JouerPersonnage'
import './CSS/Base.css'
import './CSS/Responsive.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Connexion />} />
                  <Route path="/Connexion" element={<Connexion />} />
                  <Route path="/Inscription" element={<Inscription />} />
                  <Route path="/Accueil" element={<Accueil />} />
                  <Route path="/CygnusProjects" element={<CygnusProjects />} />

                  { /* Sous pages de Cygnus's Prjects */}
                  <Route path="/CygnusProjects_Regles" element={<CygnusProjects_Regles />} />
                  <Route path="/CygnusProjects_ModesDeJeu" element={<CygnusProjects_ModesDeJeu />} />
                  <Route path="/CygnusProjects_Aliens" element={<CygnusProjects_Aliens />} />
                  <Route path="/CygnusProjects_Operateurs" element={<CygnusProjects_Operateurs />} />
                  <Route path="/CygnusProjects_ListeProfils" element={<CygnusProjects_ListeProfils />} />                  
                  <Route path="/CygnusProjects_JouerProfils" element={<CygnusProjects_JouerProfils />} />                  
                  <Route path="/CygnusProjects_JouerPersonnage" element={<CygnusProjects_JouerPersonnage />} />                  
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
