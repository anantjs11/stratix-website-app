# Stratex Website

Enterprise marketing website for Stratex, a Project Management Consultant for cafe, QSR, and food retail interiors.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages Deployment

This repository is prepared for classic GitHub Pages deployment from the `docs/` folder.

1. Create a GitHub repository.
2. Push this project to the repository's `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Set `Build and deployment > Source` to `Deploy from a branch`.
5. Set branch to `main` and folder to `/docs`.
6. Save.

For a normal project repository, the site will be available at:

```text
https://<github-username>.github.io/<repository-name>/
```

For a user or organization Pages repository named `<github-username>.github.io`, it will be available at:

```text
https://<github-username>.github.io/
```

Before pushing an updated static demo, rebuild with the repository base path:

```bash
NEXT_PUBLIC_BASE_PATH=/stratix-website-app npm run build
cp -R out docs
```
