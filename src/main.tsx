import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// If Identity emails land on the site root with a token in the hash,
// forward the user to /admin so Decap CMS can complete invite/recovery.
const h = window.location.hash || "";
if (h.includes("invite_token=") || h.includes("recovery_token=") || (h.includes("token=") && h.includes("type="))) {
  // Preserve the full hash exactly
  window.location.replace(`/admin/${h}`);
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
