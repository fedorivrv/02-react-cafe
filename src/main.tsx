import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from './components/app/App';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
