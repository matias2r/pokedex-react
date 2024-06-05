import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokemonProvider } from './components/context/PokemonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
    <App />
    </PokemonProvider>
  </React.StrictMode>,
)
