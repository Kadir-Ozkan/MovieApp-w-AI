import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
