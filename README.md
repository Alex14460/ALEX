# alexandreroussel.com

Source of my personal portfolio site: professional experience, projects, and writing on crypto, fintech, customer support and AI-assisted workflows.

Live at [alexandreroussel.com](https://alexandreroussel.com).

## Stack

- [Astro](https://astro.build) 4 (static build) + Tailwind CSS + a small amount of SolidJS for the searchable listings
- Based on the open-source [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) theme (MIT) by Mark Horn
- Content collections (`src/content/`): `work`, `projects`, `blog`, `legal` — all frontmatter dates in ISO `YYYY-MM-DD`
- Deployed on Cloudflare Pages

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Type-check (`astro check`) and build to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Notes

- The CV served at `/Alexandre_Roussel_CV_EN.pdf` and `/Alexandre_Roussel_CV_FR.pdf` lives in `public/` (generated from `tools/cv/cv_en.html` / `cv_fr.html`) — keep it in sync with the latest version.
- `/cv` redirects to the PDF (`public/_redirects`).
