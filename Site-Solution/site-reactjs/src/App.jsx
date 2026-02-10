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
import CygnusProjects_JouerProfils from './Pages/CygnusProjects/JouerProfil.jsx'
import CygnusProjects_JouerPersonnage from './Pages/CygnusProjects/JouerPersonnage.jsx'
import WrathAndGlory from './Pages/WrathAndGlory.jsx'
import WrathAndGlory_Règles from './Pages/WrathAndGlory/Règles.jsx'
import WrathAndGlory_ListePersonnages from './Pages/WrathAndGlory/ListePersonnages.jsx'
import WrathAndGlory_SystemGilead from './Pages/WrathAndGlory/SystemGilead.jsx'
import WrathAndGlory_ListeArmes from './Pages/WrathAndGlory/ListeArmes.jsx'
import WrathAndGlory_ListeAugmentiques from './Pages/WrathAndGlory/ListeAugmentiques.jsx'
import WrathAndGlory_ListeEquipements from './Pages/WrathAndGlory/ListeEquipements.jsx'
import WrathAndGlory_ListePouvoirPsychiques from './Pages/WrathAndGlory/ListePouvoirPsychiques.jsx'
import WrathAndGlory_CreationPersonnageAvancee from './Pages/WrathAndGlory/CreationPersonnageAvancee.jsx'
import WrathAndGlory_CreationPersonnageArchetype from './Pages/WrathAndGlory/CreationPersonnageArchetype.jsx'
import WrathAndGlory_JouerPersonnage from './Pages/WrathAndGlory/JouerPersonnage.jsx'



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
                  <Route path="/WrathAndGlory" element={<WrathAndGlory />} /> 

                  { /* Sous pages de Cygnus's Prjects */}
                  <Route path="/CygnusProjects_Regles" element={<CygnusProjects_Regles />} />
                  <Route path="/CygnusProjects_ModesDeJeu" element={<CygnusProjects_ModesDeJeu />} />
                  <Route path="/CygnusProjects_Aliens" element={<CygnusProjects_Aliens />} />
                  <Route path="/CygnusProjects_Operateurs" element={<CygnusProjects_Operateurs />} />
                  <Route path="/CygnusProjects_ListeProfils" element={<CygnusProjects_ListeProfils />} />                  
                  <Route path="/CygnusProjects_JouerProfils" element={<CygnusProjects_JouerProfils />} />                  
                  <Route path="/CygnusProjects_JouerPersonnage" element={<CygnusProjects_JouerPersonnage />} />                  

                  { /* Sous pages de Wrath And Glory */}
                  <Route path="/WrathAndGlory_Règles" element={<WrathAndGlory_Règles />} />    
                  <Route path="/WrathAndGlory_ListePersonnages" element={<WrathAndGlory_ListePersonnages />} />    
                  <Route path="/WrathAndGlory_SystemGilead" element={<WrathAndGlory_SystemGilead />} />    
                  <Route path="/WrathAndGlory_ListeArmes" element={<WrathAndGlory_ListeArmes />} />    
                  <Route path="/WrathAndGlory_ListeAugmentiques" element={<WrathAndGlory_ListeAugmentiques />} />    
                  <Route path="/WrathAndGlory_ListeEquipements" element={<WrathAndGlory_ListeEquipements />} />    
                  <Route path="/WrathAndGlory_ListePouvoirPsychiques" element={<WrathAndGlory_ListePouvoirPsychiques />} />    
                  <Route path="/WrathAndGlory_CreationPersonnageAvancee" element={<WrathAndGlory_CreationPersonnageAvancee />} />    
                  <Route path="/WrathAndGlory_CreationPersonnageArchetype" element={<WrathAndGlory_CreationPersonnageArchetype />} />    
                  <Route path="/WrathAndGlory_JouerPersonnage" element={<WrathAndGlory_JouerPersonnage />} />    
                  


              </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
