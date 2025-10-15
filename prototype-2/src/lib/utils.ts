import { RichTextBlock } from '@/types/content';

/**
 * Helper function to extract text from rich text blocks (client-safe)
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
 * Helper function to get image source URL (client-safe)
 */
export function asImageSrc(image: unknown): string | null {
  if (!image || typeof image !== 'object') {
    return null;
  }
  
  return (image as { url?: string }).url || null;
}
