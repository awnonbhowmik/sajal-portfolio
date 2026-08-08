# Sajal Chakroborty — Academic Portfolio

A dark, editorial academic portfolio for Sajal Chakroborty, Postdoctoral Scholar in Mathematical Sciences at Worcester Polytechnic Institute.

## Stack

- Next.js 16.3 with the App Router
- React 19.2
- Tailwind CSS 4.3
- TypeScript 7 native compiler
- ESLint 9 with the Next.js flat configuration
- Lucide icons

TypeScript 7 does not yet expose the programmatic compiler API used by Next.js and typescript-eslint. The project therefore follows Microsoft's side-by-side transition pattern: `@typescript/native` runs the TypeScript 7 CLI for project checks, while TypeScript 6 is present only as a temporary tooling compatibility dependency.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

The production build runs the TypeScript 7 checker first and then uses Next.js's webpack build path. The webpack fallback is configured because some restricted CI and container environments prevent Turbopack's PostCSS worker from opening its internal loopback port.

## Deployment

The site is deployed to [sajal-chakroborty.netlify.app](https://sajal-chakroborty.netlify.app).

GitHub Actions validates every pull request to `main` with a clean install, TypeScript check, ESLint run, and production build. Every push to `main` runs the same quality gate and then publishes that exact commit to the production Netlify site. The workflow can also be started manually from the Actions tab.

The deployment uses these encrypted GitHub Actions secrets:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

## Routes

| Route | Content |
| --- | --- |
| `/` | Biography, research focus, profile links, and recent news |
| `/publications` | Journal papers, conference papers, preprints, dissertation, and thesis |
| `/teaching` | Institutions, roles, and courses taught |
| `/education` | Education and academic appointments |
| `/grants-awards` | Grants, fellowships, and awards |
| `/service` | Peer review and departmental service |

Academic content is maintained in `lib/data.ts`. The portrait is stored locally at `public/images/sajal-chakroborty.jpg`.
