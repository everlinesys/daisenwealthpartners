# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Hero image and WhatsApp community

- Add the hero image at `public/hero.png`.
- The hero insurance slide is ready and uses the same WhatsApp contact flow as the site's other CTAs.
- To make the "Join Our WhatsApp Community" button a true WhatsApp Community invite, replace its `wa.me` URL in `src/components/Hero.jsx` with the actual `https://chat.whatsapp.com/...` invite URL. No community invite URL was supplied in the request, so a broken placeholder was intentionally not introduced.
