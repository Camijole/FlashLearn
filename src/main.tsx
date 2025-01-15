import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//The entry point where React is rendered into the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
