import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { withBase } from '../utils/paths';

export const GET: APIRoute = () => {
  const domain = site.domain.replace(/\/$/, '');
  const body = `User-agent: *\nAllow: ${withBase('/')}\nSitemap: ${domain}${withBase('/sitemap.xml')}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
