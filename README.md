# clgerhardt.github.io

Personal site: home, games, art, and experience. Astro + React islands + shadcn/ui + Tailwind CSS v4, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Develop

Requires Node >= 22.12 (`nvm use`).

```bash
npm install
npm run dev
```

## Content

- Games: `src/data/games.ts`
- Experience: `src/data/experience.ts`
- Art: drop images into `src/assets/art/`; they show up on `/art` automatically
- Theme tokens: `src/styles/global.css`
