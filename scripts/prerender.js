// Renders every route to static HTML after `vite build`, so search engines and link previews
// get the full page content and per-page meta without running JavaScript. Also writes sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, routes, notFoundRoute, SITE } = await import(pathToFileURL(serverEntry).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder.');
}

const writePage = (route, outFile) => {
  const { html, head } = render(route);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  console.log(`  prerendered ${path.relative(distDir, outFile)}`);
};

for (const route of routes) {
  writePage(route, path.join(distDir, route.path, 'index.html'));
}
// Netlify serves 404.html with a real 404 status for unknown URLs.
writePage(notFoundRoute, path.join(distDir, '404.html'));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((route) => !route.noindex)
  .map(
    (route) => `  <url>
    <loc>${SITE.url}${route.path}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <priority>${route.priority || '0.5'}</priority>
  </url>`
  )
  .join('\n');

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`  wrote sitemap.xml (${routes.filter((r) => !r.noindex).length} URLs)`);
