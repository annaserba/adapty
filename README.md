# Adapty React + Astro + Tailwind Project

Modern web application built with React 19, Astro 5, and Tailwind CSS 3.

## 🚀 Tech Stack

- **React 19.2.3** - Latest React with modern features
- **Astro 5.16.6** - Fast, content-focused web framework
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **TypeScript 5.9.3** - Type-safe JavaScript
- **pnpm** - Fast, disk space efficient package manager

## 📦 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features grid
│   │   ├── Pricing.tsx      # Pricing cards
│   │   └── Footer.tsx       # Footer
│   ├── pages/
│   │   └── index.astro      # Main page
│   └── styles/
│       └── global.css       # Global Tailwind styles
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `pnpm install`    | Install dependencies                         |
| `pnpm dev`        | Start dev server at `localhost:4321`         |
| `pnpm build`      | Build production site to `./dist/`           |
| `pnpm preview`    | Preview production build locally             |

## 🚦 Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:4321`

## 📝 Features

- ✅ Responsive design with mobile-first approach
- ✅ Interactive React components with Astro Islands
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Fast build times with Astro
- ✅ Optimized production builds

## 🎨 Components

All React components are located in `src/components/` and use Tailwind CSS for styling:

- **Header**: Responsive navigation with mobile menu toggle
- **Hero**: Eye-catching landing section with CTAs
- **Features**: Grid layout showcasing key features
- **Pricing**: Pricing tiers with feature lists
- **Footer**: Site footer with links

## 📄 License

MIT
