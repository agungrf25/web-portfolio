import { defineConfig } from 'astro/config';

// GitHub Pages uses /<repository>/ for project sites and / for user/org sites.
// These values are detected automatically by GitHub Actions. For local builds,
// the site falls back to a placeholder URL and the root path.
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isUserOrOrgSite = Boolean(owner && repo && repo.toLowerCase() === `${owner}.github.io`.toLowerCase());
const defaultSite = owner ? `https://${owner}.github.io` : 'https://yourdomain.com';
const site = process.env.SITE_URL || defaultSite;
const base = process.env.BASE_PATH || (
  process.env.SITE_URL ? '/' : (repo && !isUserOrOrgSite ? `/${repo}` : '/')
);

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
