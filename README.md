# CipherText Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases software engineering services, projects, and products with a clean, professional design.

## Features

- **Next.js 15 App Router** - Latest Next.js with server components
- **TypeScript** - Full type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework
- **JSON-driven content** - Easy content management through JSON files
- **Responsive design** - Works on mobile, tablet, and desktop
- **SEO optimized** - Proper meta tags and Open Graph support
- **Accessible** - Semantic HTML and ARIA labels

## Project Structure

```
cipher-text-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── work/               # Projects section
│   │   ├── page.tsx        # Projects grid
│   │   └── [slug]/page.tsx # Project detail
│   ├── services/           # Services section
│   │   ├── page.tsx        # Services grid
│   │   └── [service]/page.tsx # Service detail
│   ├── products/page.tsx   # Products page
│   ├── technology/page.tsx # Technology stack page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page with form
├── components/             # Reusable components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Project card component
│   ├── ServiceCard.tsx     # Service card component
│   ├── FeatureCard.tsx     # Generic feature card
│   ├── ContactForm.tsx     # Contact form component
│   └── TechStack.tsx       # Tech stack display
├── content/                # JSON content files
│   ├── site.json           # Site configuration
│   ├── projects.json       # Project data
│   ├── services.json       # Service offerings
│   ├── products.json       # Product listings
│   ├── tech.json           # Technology stack
│   ├── about.json          # About page content
│   └── contact.json        # Contact page content
├── lib/                    # Utility functions
│   └── content.ts          # JSON loaders and types
└── public/                 # Static assets
    └── images/             # Project images
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cipher-text-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

All content is managed through JSON files in the `content/` directory. This makes it easy to update without touching the code.

### Adding a New Project

Edit `content/projects.json`:

```json
{
  "slug": "my-project",
  "title": "My New Project",
  "category": "Web Platform",
  "description": "A brief description of the project",
  "featured": true,
  "thumbnail": "/images/my-project-thumb.jpg",
  "problem": "The problem this project solves",
  "solution": "How we solved it",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "tech": ["Next.js", "PostgreSQL"],
  "status": "Live",
  "link": "https://example.com"
}
```

### Adding a New Service

Edit `content/services.json`:

```json
{
  "slug": "my-service",
  "title": "My Service",
  "icon": "code",
  "description": "Service description",
  "problem": "The problem it addresses",
  "solution": "How we approach it",
  "capabilities": ["Capability 1", "Capability 2"],
  "tech": ["Tech 1", "Tech 2"],
  "projects": ["related-project-slug"]
}
```

Available icons: `code`, `heart`, `database`, `layout`, `server`

### Updating Site Configuration

Edit `content/site.json` to change:
- Company name and tagline
- Navigation items
- Contact information
- CTA button text

## Adding Images

1. Add your images to the `public/images/` directory
2. Reference them in JSON with paths like `/images/my-image.jpg`
3. Images will be automatically optimized by Next.js

For now, the project uses placeholder divs for images. To add real images:

1. Add image files to `public/images/`
2. Update the image paths in the JSON files
3. The `ProjectCard` and other components can be updated to use `next/image` for optimization

## Customization

### Colors

The design uses Tailwind's slate color palette with blue accents. To change:

1. Update color classes in components (e.g., `bg-blue-600` to `bg-indigo-600`)
2. Or extend the theme in `tailwind.config.ts`

### Typography

The project uses Inter font via `next/font/google`. To change:

1. Update the import in `app/layout.tsx`
2. Modify the CSS variable in `tailwind.config.ts`

### Spacing

The design follows these spacing conventions:
- Sections: `py-20` to `py-32`
- Between elements: `space-y-8` to `space-y-16`
- Container: `max-w-7xl mx-auto px-6`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

The `out/` directory contains the static export if configured.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## License

This project is private and not licensed for public use.
