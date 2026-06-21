# Mohamed Magdy — AI Engineer Portfolio

A modern, responsive single-page portfolio built with **React + Tailwind CSS**.
Theme: "Neural Dark" — deep charcoal with an electric cyan→violet gradient, plus a
live animated neural-network background.

🌐 Live domain: **https://mohamedmagdy.site**

---

## 📁 Files

| File                    | Purpose                                              |
|-------------------------|------------------------------------------------------|
| `index.html`            | Page shell, SEO/Open-Graph meta, favicon, preloader  |
| `styles.css`            | Theme, animations, scrollbar, responsive helpers     |
| `app.js`                | All React components + the neural-canvas script      |
| `profile.jpg`           | Hero photo (640×640)                                 |
| `Mohamed_Magdy_CV.pdf`  | CV (linked from the Download-CV buttons)             |
| `robots.txt`            | Search-engine crawl rules                            |
| `sitemap.xml`           | Sitemap for Google indexing                          |
| `CNAME`                 | Custom domain for GitHub Pages                       |

No build step required — it runs straight from these static files.

---

## 🚀 Deploy

### Option A — Netlify (easiest)
1. Go to https://app.netlify.com → log in.
2. Drag this whole folder onto the deploy area → it goes live instantly.
3. **Site settings → Domain management → Add custom domain** → `mohamedmagdy.site`.
4. Add the DNS records Netlify shows you at your registrar (see below).

### Option B — Vercel
1. https://vercel.com → New Project → import/upload this folder.
2. Framework preset: **Other** (it's static). Deploy.
3. **Settings → Domains** → add `mohamedmagdy.site`.

### Option C — GitHub Pages
1. Create a repo and upload all these files (the included `CNAME` sets your domain).
2. **Settings → Pages** → Source: `main` branch, root.
3. Wait for the green check → site is live on your domain.

### DNS (at your domain registrar)
| Type    | Name  | Value                                  |
|---------|-------|----------------------------------------|
| `A`     | `@`   | (the IP your host gives you)           |
| `CNAME` | `www` | (your host target, e.g. `*.netlify.app`)|

Propagation takes 5 min–24 h. HTTPS is auto-issued by the host.

---

## ✏️ Customizing

- **Edit content:** open `app.js` — all data lives in the `LINKS`, `SKILLS`,
  `PROJECTS`, `EXPERIENCE`, and `CERTS` arrays near the top.
- **Self-host the CV (optional):** the Download-CV buttons currently point to a
  hosted URL. To serve the bundled PDF instead, set in `app.js`:
  `cv: "Mohamed_Magdy_CV.pdf"` (the file is already in this folder).
- **Colors:** tweak the `cyan.glow` / `violet.glow` values in the `tailwind.config`
  block inside `index.html`.

---

Built with ❤️ — React 18, Tailwind CSS, vanilla canvas animation.
