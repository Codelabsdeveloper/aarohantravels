# Aarohan Travels Website

Production-ready React website for Aarohan Travels — customized tours across India.

## Tech stack

- React 19
- Vite
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy to GoDaddy

1. Run `npm run build`.
2. Upload the contents of the `dist/` folder to your GoDaddy hosting public root (often `public_html`).
3. Ensure `index.html` is at the domain root.
4. Update the canonical URL and Open Graph URLs in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`, to match your live domain.
5. Because Vite is configured with `base: './'`, relative asset paths work well on shared hosting.

### Optional GoDaddy rewrite note

For a single-page app on Apache hosting, you can add an `.htaccess` file in `public/` (it will be copied into `dist/`):

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## WhatsApp & contact

Configured in `src/data/whatsapp.js`:

- Phone: Tejus — 70900 38519
- WhatsApp: https://wa.me/917090038519

## Content updates

- Destinations: `src/data/destinations.js`
- Testimonials: `src/data/testimonials.js`
- Gallery / tour types / why-us / how-it-works: `src/data/gallery.js`

## Enquiry form

The contact form validates input and is structured for a future backend/email service. It does not pretend to send data until that integration is added. WhatsApp and phone remain the primary enquiry channels.
