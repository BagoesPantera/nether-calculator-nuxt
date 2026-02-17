# Nether Calculator

Nether Calculator is a small web app that helps you link portals between the Overworld and the Nether in Minecraft.  
You type your Overworld portal coordinates, and the app instantly shows the correct Nether coordinates (and the other way around).

The UI is built with Nuxt and styled with a minimal, Minecraft‑inspired theme.

## Features

- Convert Overworld → Nether coordinates (X and Z divided by 8)
- Convert Nether → Overworld coordinates (X and Z multiplied by 8)
- Keep Y coordinate unchanged between worlds
- Clear, step‑by‑step instructions for building correctly linked portals
- Responsive layout, works nicely on desktop and mobile

## Tech Stack

- [Nuxt 4](https://nuxt.com) (Vue 3, Vite, Nitro)
- TypeScript configuration
- Vanilla CSS with a custom Minecraft‑styled theme

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Using the Calculator

1. Build a portal frame in the Overworld, but do not light it yet.
2. Stand inside the frame, press `F3`, and note the X/Y/Z coordinates.
3. Enter those coordinates in the **Overworld** panel.
4. Read the generated **Nether** coordinates on the right.
5. Light the Overworld portal and go through to the Nether.
6. In the Nether, walk to the generated coordinates and place an obsidian block there.
7. Build a new portal around that block and light it.
8. Disable the original Overworld portal so the link always stays consistent.

You can also reverse the process by typing coordinates into the Nether panel and letting the app calculate the matching Overworld position.

## Production Build

Build the application for production:

```bash
npm run build
```

Locally preview the production build:

```bash
npm run preview
```

## Deploy

This project is configured to deploy the static output (from `.output/public`) to GitHub Pages:

```bash
npm run deploy
```

Make sure you have your repository and GitHub Pages configured before running the deploy script.
