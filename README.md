# uchakin.github.io

Personal website for **Dmitry Uchakin** — Security Automation & Detection Engineer.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).
Editorial, content-first, light/dark, no tracking. Deploys to GitHub Pages on
every push to `main`.

## Local development

Requires Node.js 18.20+, 20.3+, or 22+.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server (`localhost:4321`) |
| `npm run build`   | Build the production site to `./dist`        |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Nav.astro          # fixed nav + theme toggle
│   ├── layouts/
│   │   └── Layout.astro       # <head>, SEO, fonts, footer, no-FOUC theme script
│   ├── pages/
│   │   └── index.astro        # all page content + projects data
│   └── styles/
│       └── global.css         # Tailwind + color palette / fonts
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## Editing content

All content lives in data arrays at the top of
[`src/pages/index.astro`](src/pages/index.astro) — edit a row, commit, push.

- **Add a project:** append an object to the `projects` array.
- **Add a job:** append to the `experience` array (`highlights` is the bullet
  list, `stack` is the tag row).
- **Skills / Education / Certifications:** edit the `skills`, `education`,
  `certifications`, and `languages` arrays.
- **Tweak About / Writing:** edit the matching section markup.
- **Colors & fonts:** edit the tokens in `src/styles/global.css`.

## CV download

The "Download CV" button serves [`public/Dmitry-Uchakin-CV.pdf`](public/Dmitry-Uchakin-CV.pdf).
To update it, replace that file (keep the filename) and push.

## Contact form

The form posts to [Formspree](https://formspree.io) (free tier, no backend
needed for a static site). Until it's configured it shows a "please email me
directly" message instead of failing silently.

To activate it:

1. Create a free account at <https://formspree.io> and add a new form.
2. Copy the form's endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In [`src/pages/index.astro`](src/pages/index.astro), set `FORM_ENDPOINT` to
   that URL (replacing `YOUR_FORM_ID`).
4. Commit and push. Submissions arrive by email; the page shows an inline
   success message via a small fetch-based handler (it still works without JS,
   falling back to a normal POST).

Prefer a different service (Web3Forms, Getform, etc.)? They use the same
pattern — just swap `FORM_ENDPOINT` and the hidden fields they require.

## Deployment

Deployment is automatic via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

One-time setup on GitHub:

1. Push this repository to `https://github.com/uchakin/uchakin.github.io`.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.
4. The site goes live at <https://uchakin.github.io/> within a couple of minutes.

### Custom domain (optional)

1. Add a `public/CNAME` file containing your domain (e.g. `dmitryuchakin.com`).
2. Point your DNS at GitHub Pages
   ([docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Update `site` in [`astro.config.mjs`](astro.config.mjs) to the new URL.

## Adding a blog later

Astro supports Markdown/MDX out of the box. Add an `src/pages/blog/` directory
and write posts as `.md`/`.mdx` files, or wire up a content collection.
