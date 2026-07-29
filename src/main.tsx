import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '') || '/';

if (path === '/about-us' && !window.location.hash) {
  window.history.replaceState(null, '', `/${window.location.search}#about`);
}

document.title = 'SZKL — Scientific Intelligence That Compounds';
document
  .querySelector('meta[name="description"]')
  ?.setAttribute(
    'content',
    'Shenzhen Knowledge Labs is the company behind Pulse, building trusted intelligence systems for scientific work.',
  );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
