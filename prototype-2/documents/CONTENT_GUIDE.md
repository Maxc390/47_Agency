# Content Management Guide

## Overview

This guide helps content editors manage the TechX KE website through Prismic CMS. Learn how to add projects, update content, and maintain the site.

## Getting Started

### Accessing Prismic

1. Go to your Prismic dashboard
2. Select the TechX KE repository
3. Navigate to "Documents" to see all content

### Basic Navigation

- **Documents**: All content pages
- **Custom Types**: Content structure templates
- **Media Library**: Images and files
- **Settings**: Repository configuration

## Managing Content

### Homepage

The homepage is the main landing page. To edit:

1. Go to Documents → Homepage
2. Update the following sections:

#### SEO & Metadata
- **Meta Title**: Page title for search engines (e.g., "TechX KE - Digital Agency")
- **Meta Description**: Brief description for search results
- **Meta Image**: Social media preview image

#### Main Content
- **Slices**: Add and arrange content sections
  - Hero section with main headline
  - Project list showcasing featured work
  - Call-to-action section

### Projects

Projects are individual showcase pages. To add a new project:

1. Go to Documents → Create new → Project
2. Fill in the required fields:

#### Main Information
- **UID**: URL-friendly identifier (e.g., "ecommerce-platform")
- **Title**: Project name (e.g., "E-commerce Platform")
- **Category**: Project type (e.g., "Web Application", "Mobile App")

#### Content
- **Description**: Detailed project overview
- **Project Image**: Main project screenshot
- **Hero Image**: Large background image for project page

#### Links & Technologies
- **Live Link**: URL to live project (if available)
- **Technologies**: List of technologies used (e.g., "React", "Next.js", "TypeScript")

#### SEO
- **Meta Image**: Social media preview image

### About Page

Manage company information and team details:

1. Go to Documents → About Page

#### Main Content
- **Title**: Page headline
- **Hero Image**: Background image
- **Content**: Main about text

#### Team Section
- **Section Title**: "Our Team" or similar
- **Section Description**: Brief team overview
- **Team Members**: Add team members with:
  - Name
  - Role
  - Profile image

### Contact Page

Update contact information and form settings:

1. Go to Documents → Contact Page

#### Contact Information
- **Email**: Primary contact email
- **Phone**: Contact phone number
- **Address**: Office address

#### Form Configuration
- **Name Placeholder**: "Your name"
- **Email Placeholder**: "Your email"
- **Project Placeholder**: "Tell us about your project"
- **Submit Text**: "Send message"

### Settings

Site-wide configuration:

1. Go to Documents → Settings

#### Site Information
- **Site Title**: "TechX KE"
- **Site Tagline**: "Building Web Products & Designs That Matter"
- **Contact Email**: Primary email address

#### Navigation
- **Navigation Links**: Add main menu items
  - Home (/)
  - About (/about)
  - Projects (/projects)
  - Contact (/contact)

#### Social Media
- **Social Links**: Add social media profiles
  - Platform name (e.g., "LinkedIn")
  - URL to profile

## Working with Slices

### Adding Slices

1. In any document, click "Add a new slice"
2. Choose from available slice types:
   - **Hero**: Full-screen section with image and text
   - **Project List**: Grid of projects
   - **Call to Action**: Contact/action sections
   - **Scroll Text**: Animated text effects

### Slice Types

#### Hero Slice
- **Image**: Background image
- **Heading**: Main headline
- **Body**: Subheading/description
- **Button**: Call-to-action link

#### Project List Slice
- **Eyebrow**: Small text above heading
- **Heading**: Section title
- **Body**: Description text
- **Projects**: Select projects to showcase

#### Call to Action Slice
- **Eyebrow**: Small introductory text
- **Heading**: Main message
- **Body**: Supporting text
- **Button**: Action link

## Image Guidelines

### Recommended Specifications

- **Hero Images**: 1920x1080px minimum
- **Project Images**: 1200x800px minimum
- **Profile Images**: 400x400px square
- **Format**: JPEG or PNG
- **File Size**: Under 2MB for optimal loading

### Uploading Images

1. Go to Media Library
2. Click "Add a new media"
3. Upload your image
4. Add descriptive alt text
5. Use the image in your content

## Best Practices

### Content Writing

- **Headlines**: Keep them concise and impactful
- **Descriptions**: Write in clear, professional language
- **Keywords**: Use relevant terms naturally
- **Length**: Aim for 2-3 sentences for descriptions

### SEO Optimization

- **Meta Titles**: 50-60 characters
- **Meta Descriptions**: 150-160 characters
- **Alt Text**: Describe images clearly
- **URLs**: Use descriptive, keyword-rich UIDs

### Consistency

- **Tone**: Professional but approachable
- **Terminology**: Use consistent terms (e.g., "Web Application" not "Web App")
- **Formatting**: Follow established patterns
- **Images**: Use consistent style and quality

## Common Tasks

### Adding a New Project

1. Create new Project document
2. Add UID (e.g., "project-name")
3. Fill in title, category, description
4. Upload project and hero images
5. Add technologies and live link
6. Save and publish

### Updating Team Information

1. Go to About Page document
2. Edit team section
3. Add/remove team members
4. Update roles and images
5. Save changes

### Changing Contact Information

1. Go to Settings document
2. Update contact email
3. Go to Contact Page document
4. Update contact details
5. Save both documents

## Troubleshooting

### Content Not Appearing

- Check if document is published
- Verify all required fields are filled
- Clear browser cache
- Check for webhook issues

### Images Not Loading

- Verify image URLs in Prismic
- Check image file size and format
- Ensure images are published
- Test image links directly

### Build Errors

- Check for missing required fields
- Verify relationships are properly set
- Ensure UIDs are unique and URL-friendly
- Check for special characters in content

## Getting Help

For technical issues:
- Check the browser console for errors
- Verify all required fields are completed
- Contact the development team

For content questions:
- Refer to this guide
- Check existing content for examples
- Contact the content team lead
