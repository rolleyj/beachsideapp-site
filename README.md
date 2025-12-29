# Beachside App - Beach Treat Locator

A modern, high-converting landing page for the Beachside hyperlocal beach delivery marketplace.

## Features

- 🏖️ Clean, airy beachside aesthetic
- 📱 Fully responsive mobile-first design
- ⚡ Built with Next.js 14 (App Router)
- 🎨 Tailwind CSS with custom brand colours
- ✨ Framer Motion animations
- 🎯 shadcn/ui components

## Brand Colours

Extracted from the Beachside logo:
- **Primary Teal**: `#4A9B9B`
- **Dark Teal**: `#2D6A6A`
- **Light Teal**: `#6BB5B5`
- **Sand**: `#F5F3EF`
- **Ocean**: `#3A8B8B`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your logo files to the `public/` directory:
   - `logo-with-text.png` (the full Beachside logo with text)
   - `logo-compass.png` (the compass icon only)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
beachsideapp-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Sticky navigation
│   ├── hero-section.tsx    # Hero with CTAs
│   ├── features-section.tsx # Features grid
│   ├── cta-section.tsx     # Onboarding section
│   └── footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

For Vercel:
```bash
vercel
```

## Licence

Proprietary - Beachside App

