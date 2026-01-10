import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Particles from './Background.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={2500}
                particleSpread={10}
                speed={0.01}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={true}
            />
            <App />
  </StrictMode>,
)
