# TechX KE - Digital Agency Website

A modern, responsive website for TechX KE digital agency built with Next.js 15, TypeScript, Tailwind CSS, and Prismic CMS.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS v4
- **Content Management**: Prismic CMS for easy content updates
- **Animations**: GSAP-powered smooth animations and transitions
- **Performance**: Optimized images, lazy loading, and static generation
- **Responsive**: Mobile-first design with flexible layouts
- **SEO Ready**: Meta tags, structured data, and social media optimization

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Prismic
- **Animations**: GSAP with React integration
- **Icons**: React Icons (Heroicons)
- **Fonts**: Raleway (sans-serif), Gambarino (display)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Project detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
├── slices/                # Prismic CMS slices
└── utils/                 # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Prismic account and repository

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prototype-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your Prismic repository name and API key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Access Slice Machine** (for CMS management)
   ```bash
   npm run slicemachine
   ```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📖 Documentation

- [Architecture Overview](./documents/ARCHITECTURE.md)
- [Prismic CMS Setup](./documents/PRISMIC_SETUP.md)
- [Content Management Guide](./documents/CONTENT_GUIDE.md)
- [Deployment Guide](./documents/DEPLOYMENT.md)

## 🎨 Customization

### Content Management

All content is managed through Prismic CMS:

- **Homepage**: Hero sections, project showcases, call-to-actions
- **Projects**: Individual project pages with images and descriptions
- **About**: Company story and team information
- **Contact**: Contact information and form configuration
- **Settings**: Site-wide configuration and navigation

### Styling

The site uses Tailwind CSS with custom design tokens:

- **Colors**: Neutral palette with accent colors
- **Typography**: Raleway for body text, Gambarino for headings
- **Animations**: GSAP-powered smooth transitions
- **Layout**: Mobile-first responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms

The site is compatible with:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting service

See [Deployment Guide](./documents/DEPLOYMENT.md) for detailed instructions.

## 📝 Content Structure

### Prismic Custom Types

- **homepage**: Main landing page content
- **project**: Individual project showcase pages
- **about_page**: About/Our Story page content
- **contact_page**: Contact page content
- **settings**: Site-wide configuration

### Available Slices

- **Hero**: Full-screen hero sections
- **ProjectList**: Grid of project showcases
- **ProductFeature**: Featured project highlights
- **CallToAction**: Contact and action sections
- **ScrollText**: Animated scrolling text effects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:

- **Email**: hello@techx.ke
- **GitHub Issues**: Create an issue in this repository
- **Documentation**: Check the `/documents` folder for detailed guides

## 🔄 Updates

This project is actively maintained and updated. Check the [changelog](./CHANGELOG.md) for recent updates and improvements.