import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { findRoute } from './routes';
import './index.css';

const route = findRoute(window.location.pathname);
const rootEl = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App route={route} />
  </React.StrictMode>
);

// Production pages are prerendered (see scripts/prerender.js), so hydrate them.
// The dev server serves an empty shell, so render from scratch there.
if (rootEl.firstElementChild) {
  ReactDOM.hydrateRoot(rootEl, app);
} else {
  document.title = route.title;
  ReactDOM.createRoot(rootEl).render(app);
}
