import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { Render } from 'sku';

import App from './App/App';

export default {
  renderApp: ({ SkuProvider, route }) => {
    return renderToString(
      <SkuProvider>
        <StaticRouter location={route}>
          <App />
        </StaticRouter>
      </SkuProvider>,
    );
  },

  renderDocument: ({ app, bodyTags, headTags }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>hello-world</title>
          ${headTags}
        </head>
        <body>
          <div id="app">${app}</div>
          ${bodyTags}
        </body>
      </html>
    `;
  },
} satisfies Render;
