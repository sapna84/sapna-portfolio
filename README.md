# Sapna — Full Stack Developer Portfolio

A dark, minimal, developer-focused personal portfolio built with **React 18 + Vite + Tailwind CSS + React Router**, matching the provided design brief and mockups: black/green background, lime-green accent, rounded pill navbar, and six pages (Home, About, Projects, Skills, Experience, Contact).

## 1. Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/`.

## 3. Deploy

The `dist/` folder can be deployed to **Vercel**, **Netlify**, or any static host.

- **Vercel**: `npm i -g vercel` → `vercel` (framework preset: Vite)
- **Netlify**: drag-and-drop the `dist/` folder in the Netlify dashboard, or connect the repo (build command `npm run build`, publish directory `dist`)

If you deploy with client-side routing (React Router) to Netlify, add a `public/_redirects` file containing:
```
/*  /index.html  200
```
(Vercel handles this automatically for Vite/React apps.)

## 4. Project structure

```
src/
  components/     Navbar, Footer, Avatar, Icon, decorative elements
  pages/          Home, About, Projects, Skills, Experience, Contact, NotFound
  data/           content.js — ALL editable text/content lives here
  index.css       Tailwind base + custom utility classes (cards, glow, handwriting font)
  App.jsx         Routes
  main.jsx        Entry point
public/
  favicon.svg
```

## 5. Customizing content

Almost everything on the site (name, bio, projects, skills, experience, contact links) is defined in **`src/data/content.js`**. Edit that file to update text without touching any component markup.

## 6. Adding real photos

The hero, About and profile images currently use a lightweight SVG placeholder illustration (`src/components/Avatar.jsx`) so the project runs immediately with no binary assets.

To use real photos:
1. Add your image(s) to the `public/` folder, e.g. `public/profile.jpg`.
2. In `src/components/Avatar.jsx`, replace `<PlaceholderIllustration />` with:
   ```jsx
   <img src="/profile.jpg" alt="Sapna" className="w-full h-full object-cover" />
   ```

## 7. Adding a real resume download

Place your resume PDF at `public/resume.pdf` — the "Download Resume" buttons already point to `/resume.pdf` (see `resumeUrl` in `src/data/content.js`).

## 8. Connecting the contact form

The Contact page form (`src/pages/Contact.jsx`) currently validates input and shows a local "sent" confirmation, but does **not** send an email yet. To make it functional, pick one:

- **Formspree** (easiest, no backend): create a form at formspree.io, then change `handleSubmit` to POST to your Formspree endpoint with `fetch`.
- **EmailJS**: install `@emailjs/browser` and call `emailjs.send(...)` inside `handleSubmit`.
- **Custom API**: point `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` at your own backend.

## 9. Tech stack

- React 18 + Vite
- React Router v6 (multi-page routing)
- Tailwind CSS (all styling, no separate CSS files needed)
- lucide-react (icons)

## 10. Notes

- Fonts: Inter (body/headings) + Caveat (handwritten annotations), loaded from Google Fonts in `index.html`.
- Colors, spacing and radii live in `tailwind.config.js` under the `accent`, `bg`, `card`, `muted`, `offwhite` tokens — change them there to re-theme the whole site.
- The layout is fully responsive; the navbar collapses into a hamburger menu below the `lg` breakpoint.
