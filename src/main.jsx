import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

const isGitHubPages = process.env.NODE_ENV === 'production'; // Check environment
const basename = isGitHubPages ? '/habot-assignment' : ''; // Use basename only on production

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
