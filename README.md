# DevShowcase

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://devshowcase.vercel.app)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

A single‑page developer portfolio built with **Vite + React**. It auto‑pulls your GitHub projects, showcases your skills & about section, and includes a **contact form** powered by **Formspree**.

## ✨ Features
- Smooth single‑page navigation (Hero, Projects, Skills, About, Contact)
- GitHub repo fetching by username (set once in `src/lib/config.js` or override with `?u=<user>`)
- Clean, responsive layout with dark‑friendly styles
- Contact form using Formspree (no backend)
- Easy to customize sections & theme

## 🛠 Tech Stack
- Frontend: React, Vite, CSS
- Integrations: GitHub REST API, Formspree
- Hosting: Vercel (no server required)

## 🔧 Setup
```bash
npm install
npm run dev
```

### Configure
- Edit **`src/lib/config.js`** → set your GitHub username
- Create a form at **formspree.io** and set **`FORMSPREE_ID`** in `src/sections/Contact.jsx`

## 🌐 Deploy (Vercel)
1. Push to GitHub
2. Import the repo in **Vercel**
3. Build command: `npm run build` • Output dir: `dist`
4. No environment variables required

## 📸 Screenshots
Add screenshots in `/public` and reference them here.

## 🗺 Roadmap
- Project pinning & custom ordering
- Theme toggle (dark/light)
- PDF export of resume + portfolio

## 📄 License
MIT — add a `LICENSE` file if you plan to open‑source this template.
