# Item 7 Go — React + TypeScript Website

Clean export of the Item 7 Go marketing site, built with **React 18 + TypeScript + Vite**, using **vanilla external CSS** (no Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  assets/              # Images & logo
  components/          # Reusable UI: Navbar, Footer, WhatsAppButton, MenuCard
  pages/               # Route pages: Home, Menu, About, Contact
  styles/              # Vanilla CSS modules (one file per concern)
    variables.css      # Design tokens (colors, fonts, shadows)
    global.css         # Reset + base typography
    layout.css         # Container, grid utilities
    navbar.css
    footer.css
    hero.css
    home.css
    menu.css
    about.css
    contact.css
    whatsapp.css
  App.tsx              # Router + layout shell
  main.tsx             # Entry
```

## Features

- Fully responsive (mobile, tablet, desktop)
- Hamburger navbar on mobile
- Floating WhatsApp button
- Hover transitions and animations preserved
- Accessible semantic HTML
