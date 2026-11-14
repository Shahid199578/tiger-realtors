import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { routes, notFoundRoute } from './routes';
import { buildHead } from './seo';

export { routes, notFoundRoute };
export { SITE } from './data/site';

export function render(route) {
  return {
    html: renderToString(
      <React.StrictMode>
        <App route={route} />
      </React.StrictMode>
    ),
    head: buildHead(route),
  };
}
