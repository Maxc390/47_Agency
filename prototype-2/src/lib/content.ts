import { promises as fs } from 'fs';
import path from 'path';
import { Settings, Homepage, AboutPage, ContactPage, Project, RichTextBlock } from '@/types/content';

// Cache for content in production
const contentCache = new Map<string, unknown>();

/**
 * Read and parse JSON file from public/content directory
 */
async function readContentFile<T>(filePath: string): Promise<T> {
  const fullPath = path.join(process.cwd(), 'public', 'content', filePath);
  
  // Check cache first in production
  if (process.env.NODE_ENV === 'production' && contentCache.has(filePath)) {
    return contentCache.get(filePath);
  }

  try {
    const fileContent = await fs.readFile(fullPath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Cache in production
    if (process.env.NODE_ENV === 'production') {
      contentCache.set(filePath, data);
    }
    
    return data;
  } catch (error) {
    console.error(`Error reading content file ${filePath}:`, error);
    throw new Error(`Failed to load content: ${filePath}`);
  }
}

/**
 * Get site settings
 */
export async function getSettings(): Promise<Settings> {
  return readContentFile<Settings>('settings.json');
}

/**
 * Get homepage content with slices
 */
export async function getHomepage(): Promise<Homepage> {
  return readContentFile<Homepage>('homepage.json');
}

/**
 * Get about page content
 */
export async function getAboutPage(): Promise<AboutPage> {
  return readContentFile<AboutPage>('about.json');
}

/**
 * Get contact page content
 */
export async function getContactPage(): Promise<ContactPage> {
  return readContentFile<ContactPage>('contact.json');
}

/**
 * Get all projects
 */
export async function getAllProjects(): Promise<Project[]> {
  const projectsDir = path.join(process.cwd(), 'public', 'content', 'projects');
  
  try {
    const files = await fs.readdir(projectsDir);
    const projectFiles = files.filter(file => file.endsWith('.json'));
    
    const projects = await Promise.all(
      projectFiles.map(async (file) => {
        const project = await readContentFile<Project>(`projects/${file}`);
        return project;
      })
    );
    
    return projects;
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

/**
 * Get a single project by UID/slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const project = await readContentFile<Project>(`projects/${slug}.json`);
    return project;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get all project UIDs for static generation
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map(project => project.uid);
}

/**
 * Helper function to extract text from rich text blocks
 */
export function asText(richText: RichTextBlock[]): string {
  if (!richText || !Array.isArray(richText)) {
    return '';
  }
  
  return richText
    .map(block => {
      if (block.content && block.content.text) {
        return block.content.text;
      }
      return '';
    })
    .join(' ')
    .trim();
}

/**
 * Helper function to get image source URL
 */
export function asImageSrc(image: unknown): string | null {
  if (!image || typeof image !== 'object') {
    return null;
  }
  
  return (image as { url?: string }).url || null;
}
