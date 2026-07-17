import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './AboutPage';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const Page = path === '/about-us' ? AboutPage : App;

if (path === '/about-us') {
  document.title = 'About SZKL — Shenzhen Knowledge Labs';
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      'Meet Shenzhen Knowledge Labs, the company behind Pulse and a builder of trusted intelligence infrastructure for scientific work.',
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
