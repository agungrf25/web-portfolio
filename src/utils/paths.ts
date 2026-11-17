/**
 * Prefix an internal path with Astro's configured base URL.
 * This keeps navigation and assets working on both a custom domain and
 * GitHub Pages project URLs such as https://user.github.io/my-repo/.
 */
export function withBase(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
