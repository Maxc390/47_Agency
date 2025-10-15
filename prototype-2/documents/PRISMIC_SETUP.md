# Prismic CMS Setup Guide

## Overview

This project uses Prismic CMS for content management. This guide covers the setup and configuration of the CMS for the TechX KE website.

## Repository Configuration

### Custom Types

The following custom types are configured:

#### 1. homepage
- **Purpose**: Main landing page content
- **Fields**:
  - Meta title, description, image
  - Slice zone for flexible content sections

#### 2. project
- **Purpose**: Individual project showcase pages
- **Fields**:
  - Title (StructuredText)
  - Project image
  - Hero image
  - Description (StructuredText)
  - Category (Text)
  - Live link (Link)
  - Technologies (Repeatable Text)
  - Meta image

#### 3. about_page
- **Purpose**: About/Our Story page
- **Fields**:
  - Title, content (StructuredText)
  - Hero image
  - Team section configuration
  - Team members (repeatable group)
  - Slice zone for additional content

#### 4. contact_page
- **Purpose**: Contact page
- **Fields**:
  - Title, subtitle (StructuredText)
  - Hero image
  - Contact information (group)
  - Form configuration (group)
  - Slice zone for additional content

#### 5. settings
- **Purpose**: Site-wide configuration
- **Fields**:
  - Site title, tagline
  - Contact email
  - Meta description
  - Fallback OG image
  - Navigation links
  - Social media links

### Slices

#### Available Slices

1. **Hero**
   - Full-screen hero section
   - Image background
   - Heading and body text
   - Call-to-action buttons

2. **ProjectList**
   - Grid of project showcases
   - Eyebrow text
   - Main heading
   - Body description
   - Project relationships

3. **ProductFeature**
   - Featured project showcase
   - Large image display
   - Project relationship
   - Heading and description

4. **CallToAction**
   - Contact/action sections
   - Background image
   - Eyebrow, heading, body text
   - Action buttons

5. **ScrollText**
   - Animated scrolling text
   - Eyebrow text
   - Main text content
   - Background effects

## Setup Instructions

### 1. Create Prismic Repository

1. Go to [prismic.io](https://prismic.io) and create a new repository
2. Choose "Custom Types" setup
3. Import the custom type JSON files from `/customtypes/`

### 2. Configure Custom Types

Import each custom type:

```bash
# Navigate to your Prismic dashboard
# Go to Custom Types → Create new
# Copy and paste the JSON content from:
# - customtypes/homepage/index.json
# - customtypes/project/index.json
# - customtypes/about_page/index.json
# - customtypes/contact_page/index.json
# - customtypes/settings/index.json
```

### 3. Create Slices

For each slice in `/src/slices/`:

1. Go to Slice Machine in your Prismic dashboard
2. Create new slice
3. Copy the model from the slice's `model.json` file
4. Configure the slice fields as defined

### 4. Environment Variables

Add to your `.env.local`:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repository-name
PRISMIC_ACCESS_TOKEN=your-access-token
```

### 5. Webhooks (Optional)

Set up webhooks for automatic rebuilds:

1. Go to Settings → Webhooks in Prismic
2. Add webhook URL: `https://your-domain.com/api/revalidate`
3. Select triggers: Content published, Content unpublished

## Content Structure

### Homepage Content

The homepage should include:

1. **Hero Section**
   - Compelling headline about TechX KE
   - Subheading about services
   - Call-to-action button

2. **Project List**
   - Showcase of featured projects
   - Brief descriptions
   - Links to project pages

3. **Call to Action**
   - Contact information
   - Service offerings
   - Contact form or button

### Project Content

Each project should have:

- **Title**: Clear, descriptive project name
- **Category**: Web Application, Mobile App, Design System, etc.
- **Description**: Detailed project overview
- **Images**: High-quality project screenshots
- **Live Link**: URL to live project (if available)
- **Technologies**: List of tech stack used

### About Page Content

Include:

- **Hero**: Company story and mission
- **Team Section**: Team members with photos and roles
- **Values**: Company values and approach
- **Additional Content**: Any other relevant information

### Contact Page Content

Should contain:

- **Contact Information**: Email, phone, address
- **Form Configuration**: Placeholder texts and submit button text
- **Additional Sections**: Any other contact-related content

## Best Practices

### Images
- Use high-quality images (minimum 1200px width)
- Optimize file sizes for web
- Use consistent aspect ratios
- Provide alt text descriptions

### Content
- Keep headlines concise and impactful
- Use structured text for better formatting
- Write descriptive meta descriptions
- Use consistent terminology

### SEO
- Fill out meta titles and descriptions
- Use relevant keywords naturally
- Provide alt text for all images
- Structure content with proper headings

## Troubleshooting

### Common Issues

1. **Content not updating**
   - Check webhook configuration
   - Verify environment variables
   - Clear Next.js cache

2. **Images not loading**
   - Check image URLs in Prismic
   - Verify image optimization settings
   - Check CORS configuration

3. **Build errors**
   - Ensure all required fields are filled
   - Check for missing relationships
   - Verify custom type configurations

### Support

For Prismic-specific issues:
- [Prismic Documentation](https://prismic.io/docs)
- [Prismic Community](https://community.prismic.io)
- [Support Portal](https://prismic.io/support)
