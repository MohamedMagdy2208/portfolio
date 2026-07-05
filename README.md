# Mohamed Magdy Portfolio

A modern, responsive single-page portfolio built with Vite, React, and Tailwind CSS.

Live domain: **https://mohamedmagdy.site**

## Stack

- Vite for local development and production builds
- React 18 for the UI
- Tailwind CSS compiled locally
- Custom CSS for the neural dark theme, animations, preloader, and canvas backdrop
- Static assets served from `public/`

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Page shell, SEO/Open Graph metadata, favicon, preloader root |
| `src/main.jsx` | React entrypoint |
| `src/App.jsx` | Portfolio content, components, and canvas behavior |
| `src/styles.css` | Tailwind layers plus custom theme styles |
| `public/profile.jpg` | Hero photo |
| `public/Mohamed_Magdy_CV.pdf` | Downloadable CV |
| `public/robots.txt` | Search-engine crawl rules |
| `public/sitemap.xml` | Sitemap for indexing |
| `public/CNAME` | Custom domain for GitHub Pages |

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production-ready static files are generated in:

```bash
dist/
```

Upload or deploy the contents of `dist/` to your host.

## Preview Production Build

```bash
npm run preview
```

## Deployment Notes

- GitHub Pages, Netlify, Vercel, Hostinger static hosting, cPanel static hosting, and similar providers can all serve the built `dist/` output.
- The site does not need a backend server or database.
- The CV link points to the bundled local PDF at `/Mohamed_Magdy_CV.pdf`.
