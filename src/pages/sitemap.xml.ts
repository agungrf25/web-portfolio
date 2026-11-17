import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { withBase } from '../utils/paths';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const domain = site.domain.replace(/\/$/, '');
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const urls = [
    `${domain}${withBase('/')}`,
    `${domain}${withBase('/articles/')}`,
    ...articles.map((article) => `${domain}${withBase(`/articles/${article.id}/`)}`),
  ];
  const entries = urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
