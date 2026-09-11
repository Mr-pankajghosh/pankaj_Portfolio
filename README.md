# Pankaj Ghosh — Portfolio

A modern, responsive portfolio built with React + Vite.

## 1. Install

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## 2. Personal links

Edit:

`src/data.js`

Replace:

- `YOUR_GITHUB_USERNAME`
- `YOUR_LINKEDIN_USERNAME`
- Project GitHub URLs
- Project live URLs

## 3. Resume

Put your actual PDF here:

`public/resume.pdf`

The Resume button will automatically open it.

## 4. Build

```bash
npm run build
npm run preview
```

## 5. GitHub Pages

If the repository is `username.github.io`, keep:

```js
base: "/"
```

If the repository is `portfolio`, change Vite config to:

```js
base: "/portfolio/"
```

Then push to GitHub and use GitHub Pages with GitHub Actions.

## 6. Deploy on Vercel / Netlify

Push this repository to GitHub, import it into your hosting provider, and use:

- Build command: `npm run build`
- Output directory: `dist`

The project is a static Vite app and needs no backend server for the portfolio itself.

## Certificates

The project includes the four uploaded certificate visuals under:

`public/certificates/`

They are displayed in an auto-advancing carousel. The contact form opens the visitor's email client with a prefilled message; it does not require a backend.

## Important

The certificate images are based on the documents supplied for this portfolio. The CodeBeat certificate confirms MERN Stack internship completion from 25 June 2024 to 25 July 2024; the Syllogistek certificate confirms React Native mobile application development training from 4 June 2025 to 26 June 2025; and the Ingenious-TechWorld certificate records Generative AI for Android training from 25 May 2026 to 1 July 2026.
