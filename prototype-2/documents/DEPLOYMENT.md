# Deployment Guide

## Overview

This guide covers deploying the TechX KE website to various hosting platforms. The site is built with Next.js and is compatible with most modern hosting services.

## Prerequisites

Before deploying, ensure you have:

- [ ] Completed the Prismic CMS setup
- [ ] Configured environment variables
- [ ] Tested the site locally
- [ ] Set up Prismic webhooks (optional but recommended)

## Environment Variables

Create a `.env.production` file with the following variables:

```env
# Prismic Configuration
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repository-name
PRISMIC_ACCESS_TOKEN=your-access-token

# Optional: For webhooks
PRISMIC_WEBHOOK_SECRET=your-webhook-secret
```

## Deployment Options

### Vercel (Recommended)

Vercel is the creator of Next.js and provides seamless deployment.

#### Setup Steps

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add all required environment variables

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Set Up Webhooks** (Optional)
   - Go to Prismic → Settings → Webhooks
   - Add webhook URL: `https://your-domain.vercel.app/api/revalidate`
   - Select triggers: Content published, Content unpublished

#### Automatic Deployments

Vercel automatically deploys when you push to your main branch.

### Netlify

#### Setup Steps

1. **Connect Repository**
   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Connect your repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all required variables

4. **Netlify Functions** (for webhooks)
   ```javascript
   // netlify/functions/revalidate.js
   exports.handler = async (event, context) => {
     // Handle Prismic webhook
     // Trigger rebuild if needed
   };
   ```

### Railway

#### Setup Steps

1. **Connect Repository**
   - Go to Railway Dashboard
   - Click "New Project"
   - Connect your Git repository

2. **Configure Environment**
   - Add environment variables in Railway dashboard
   - Railway will auto-detect Next.js

3. **Deploy**
   - Railway automatically builds and deploys
   - Custom domain can be configured

### DigitalOcean App Platform

#### Setup Steps

1. **Create App**
   - Go to DigitalOcean App Platform
   - Create new app from Git

2. **Configure App Spec**
   ```yaml
   name: techx-website
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/your-repo
       branch: main
     run_command: npm start
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: NEXT_PUBLIC_PRISMIC_ENVIRONMENT
       value: your-repository-name
     - key: PRISMIC_ACCESS_TOKEN
       value: your-access-token
   ```

## Build Process

### Local Build Testing

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm start

# Test the site
open http://localhost:3000
```

### Build Optimization

The build process includes:

- Static generation for all pages
- Image optimization
- CSS minification
- JavaScript bundling
- TypeScript compilation

## Prismic Webhooks

### Setup Webhooks

To automatically rebuild when content changes:

1. **Create Webhook Endpoint**
   ```javascript
   // pages/api/revalidate.js
   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ message: 'Method not allowed' });
     }

     const { secret } = req.query;
     if (secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
       return res.status(401).json({ message: 'Invalid token' });
     }

     try {
       await res.revalidate('/');
       return res.json({ revalidated: true });
     } catch (err) {
       return res.status(500).send('Error revalidating');
     }
   }
   ```

2. **Configure Prismic Webhook**
   - Go to Prismic → Settings → Webhooks
   - Add webhook URL: `https://your-domain.com/api/revalidate?secret=your-secret`
   - Select triggers: Content published, Content unpublished

## Domain Configuration

### Custom Domain Setup

1. **Purchase Domain**
   - Buy domain from registrar (Namecheap, GoDaddy, etc.)

2. **Configure DNS**
   - Add CNAME record pointing to your hosting platform
   - Or configure A records as instructed by your host

3. **SSL Certificate**
   - Most platforms provide automatic SSL
   - Verify HTTPS is working

### Subdomain Setup

For staging environments:

- `staging.techx.ke` - Staging environment
- `www.techx.ke` - Main site
- `techx.ke` - Main site (redirect from www)

## Performance Optimization

### Image Optimization

- Use Next.js Image component
- Provide multiple image sizes
- Use WebP format when possible
- Lazy load images below the fold

### Caching Strategy

- Static pages are cached at CDN level
- API responses cached for 5 minutes
- Images cached for 1 year
- CSS/JS cached with versioning

### Monitoring

Set up monitoring for:

- Uptime monitoring (UptimeRobot, Pingdom)
- Performance monitoring (Vercel Analytics, Google PageSpeed)
- Error tracking (Sentry, Bugsnag)

## Security Considerations

### Environment Variables

- Never commit sensitive data to Git
- Use platform-specific secret management
- Rotate access tokens regularly

### Content Security

- Validate all Prismic webhook requests
- Use HTTPS everywhere
- Implement proper CORS policies

### Dependencies

- Keep dependencies updated
- Use `npm audit` to check for vulnerabilities
- Consider using Snyk for dependency monitoring

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs
   npm run build
   
   # Common fixes
   npm install
   npm run lint
   ```

2. **Environment Variables Not Loading**
   - Verify variable names match exactly
   - Check platform-specific configuration
   - Ensure variables are set in production environment

3. **Images Not Loading**
   - Check Prismic image URLs
   - Verify CORS settings
   - Check image optimization settings

4. **Content Not Updating**
   - Verify webhook configuration
   - Check webhook logs
   - Manually trigger revalidation

### Debug Mode

Enable debug mode for troubleshooting:

```bash
# Set debug environment variable
DEBUG=* npm run dev

# Or for specific modules
DEBUG=prismic* npm run dev
```

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Forms work (if applicable)
- [ ] SEO meta tags are present
- [ ] Analytics tracking works
- [ ] Webhooks are configured
- [ ] SSL certificate is active
- [ ] Performance is acceptable
- [ ] Mobile responsiveness works
- [ ] Cross-browser compatibility

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review and update content
- Monitor performance metrics
- Check for security updates
- Backup content regularly

### Content Updates

- Train content editors on Prismic
- Establish content review process
- Set up content calendar
- Monitor content quality

## Support

For deployment issues:

- Check platform-specific documentation
- Review build logs for errors
- Contact hosting provider support
- Consult Next.js deployment guide
