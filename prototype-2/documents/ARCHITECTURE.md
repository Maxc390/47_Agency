# TechX KE Website Architecture

## Overview

This is a Next.js 15 application built with TypeScript, Tailwind CSS, and Prismic CMS. The site showcases TechX KE's digital agency portfolio with a focus on modern web applications, automation, and creative design.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Prismic
- **Animations**: GSAP with React integration
- **Icons**: React Icons (Heroicons)
- **Fonts**: Raleway (sans-serif), Gambarino (display)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Project detail pages
│   │   └── [uid]/         # Dynamic project routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Bounded.tsx        # Layout wrapper
│   ├── ButtonLink.tsx     # Styled link buttons
│   ├── FadeIn.tsx         # Animation component
│   ├── Footer.tsx         # Site footer
│   ├── Lazy.tsx           # Lazy loading wrapper
│   ├── NavBar.tsx         # Navigation header
│   ├── ProjectMeta.tsx    # Project metadata display
│   ├── RelatedProjects.tsx # Related projects component
│   ├── RevealText.tsx     # Text animation component
│   └── TransitionLink.tsx # Page transition links
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── slices/                # Prismic CMS slices (components)
│   ├── CallToAction/      # CTA section
│   ├── Hero/              # Hero section
│   ├── ProductFeature/    # Featured project section
│   ├── ProjectList/       # Project listing
│   └── ScrollText/        # Scrolling text animation
└── utils/                 # Utility functions
    └── formatters.ts      # Data formatting helpers
```

## Prismic CMS Structure

### Content Types

1. **homepage** - Main landing page content
2. **project** - Individual project showcase pages
3. **about_page** - About/Our Story page content
4. **contact_page** - Contact page content
5. **settings** - Site-wide configuration

### Slices

- **Hero** - Full-screen hero section with image and text
- **ProjectList** - Grid/list of projects
- **ProductFeature** - Featured project showcase
- **CallToAction** - Contact/action sections
- **ScrollText** - Animated scrolling text

## Key Features

### Animations
- GSAP-powered animations for smooth page transitions
- Scroll-triggered animations for content reveals
- View transitions for seamless navigation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized images with Next.js Image component
- Flexible grid layouts

### Performance
- Static site generation where possible
- Lazy loading for images and components
- Optimized font loading with Next.js

## Development

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Add your Prismic repository name and API key
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Access Slice Machine for CMS management:
   ```bash
   npm run slicemachine
   ```

### Building for Production

```bash
npm run build
npm start
```

## Deployment

The site is configured for deployment on platforms like Vercel, Netlify, or similar. Make sure to:

1. Set up Prismic webhooks for content updates
2. Configure environment variables
3. Set up proper redirects if needed

## Content Management

All content is managed through Prismic CMS. Content editors can:

1. Update homepage content and sections
2. Add/edit projects with images and descriptions
3. Manage about page and team information
4. Update contact information
5. Configure site-wide settings

See `CONTENT_GUIDE.md` for detailed content management instructions.
