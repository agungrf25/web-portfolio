(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js-enabled');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const yearNode = document.querySelector('[data-current-year]');

  const getPreferredTheme = () => {
    try {
      const saved = window.localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (_) {
      // Storage may be disabled; continue with the system preference.
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeButton) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      themeButton.setAttribute('aria-label', `Ganti ke tema ${nextTheme === 'dark' ? 'gelap' : 'terang'}`);
      themeButton.setAttribute('title', `Ganti ke tema ${nextTheme === 'dark' ? 'gelap' : 'terang'}`);
    }
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch (_) {
      // Theme still works for this visit when storage is unavailable.
    }
  };

  setTheme(getPreferredTheme());

  themeButton?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu');
    nav.classList.remove('is-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Buka menu' : 'Tutup menu');
    nav?.classList.toggle('is-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  // Dynamic active navigation
  const navLinks = nav
    ? Array.from(nav.querySelectorAll('[data-nav-id]'))
    : [];

  const trackedIds = new Set(['about', 'focus', 'contact']);

  const setActiveNav = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.navId === id;

      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  // Update when navigation is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.dataset.navId;
      if (trackedIds.has(id)) setActiveNav(id);
    });
  });

  // Update when URL hash changes
  const syncFromHash = () => {
    const id = window.location.hash.slice(1);

    if (trackedIds.has(id) && document.getElementById(id)) {
      setActiveNav(id);
    }
  };

  window.addEventListener('hashchange', syncFromHash);

  // Update based on the section visible while scrolling
  const sections = [...trackedIds]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveNav(visible.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  syncFromHash();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
