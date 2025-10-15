import { ReactNode } from 'react';
import { RichTextBlock } from '@/types/content';

interface RichTextProps {
  field: RichTextBlock[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function RichText({ field, className = '', as: Component = 'div' }: RichTextProps) {
  const ComponentElement = Component as React.ElementType;
  if (!field || !Array.isArray(field)) {
    return null;
  }

  const renderBlock = (block: RichTextBlock, index: number): ReactNode => {
    const { type, content } = block;
    
    if (!content || !content.text) {
      return null;
    }

    // Process spans and create React elements
    const processSpans = (text: string, spans: Array<{ start: number; end: number; type: string; data?: { url?: string; target?: string } }>): ReactNode[] => {
      if (!spans || spans.length === 0) {
        return [text];
      }

      // Sort spans by start position
      const sortedSpans = [...spans].sort((a, b) => a.start - b.start);
      const elements: ReactNode[] = [];
      let lastIndex = 0;

      sortedSpans.forEach((span, spanIndex) => {
        // Add text before the span
        if (span.start > lastIndex) {
          elements.push(text.substring(lastIndex, span.start));
        }

        // Add the formatted span
        const spanText = text.substring(span.start, span.end);
        let wrappedText: ReactNode = spanText;

        switch (span.type) {
          case 'strong':
            wrappedText = <strong key={`${index}-${spanIndex}`}>{spanText}</strong>;
            break;
          case 'em':
            wrappedText = <em key={`${index}-${spanIndex}`}>{spanText}</em>;
            break;
          case 'hyperlink':
            const url = span.data?.url || '#';
            const target = span.data?.target || '_self';
            wrappedText = (
              <a 
                key={`${index}-${spanIndex}`}
                href={url} 
                target={target}
                className="text-blue-400 hover:text-blue-300 underline"
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {spanText}
              </a>
            );
            break;
        }

        elements.push(wrappedText);
        lastIndex = span.end;
      });

      // Add remaining text after the last span
      if (lastIndex < text.length) {
        elements.push(text.substring(lastIndex));
      }

      return elements;
    };

    const textElements = processSpans(content.text, content.spans || []);

    // Determine the appropriate HTML element
    const getElement = () => {
      switch (type) {
        case 'heading1':
          return <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{textElements}</h1>;
        case 'heading2':
          return <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{textElements}</h2>;
        case 'heading3':
          return <h3 className="text-2xl md:text-3xl font-bold mb-2">{textElements}</h3>;
        case 'heading4':
          return <h4 className="text-xl md:text-2xl font-bold mb-2">{textElements}</h4>;
        case 'heading5':
          return <h5 className="text-lg md:text-xl font-bold mb-2">{textElements}</h5>;
        case 'heading6':
          return <h6 className="text-base md:text-lg font-bold mb-2">{textElements}</h6>;
        case 'list-item':
          return <li className="mb-1">{textElements}</li>;
        case 'o-list-item':
          return <li className="mb-1">{textElements}</li>;
        case 'paragraph':
        default:
          return <p className="mb-4 leading-relaxed">{textElements}</p>;
      }
    };

    return (
      <div key={index}>
        {getElement()}
      </div>
    );
  };

  // Group consecutive list items
  const groupedBlocks: (RichTextBlock | RichTextBlock[])[] = [];
  let currentList: RichTextBlock[] = [];

  field.forEach((block) => {
    if (block.type === 'list-item' || block.type === 'o-list-item') {
      currentList.push(block);
    } else {
      if (currentList.length > 0) {
        groupedBlocks.push(currentList);
        currentList = [];
      }
      groupedBlocks.push(block);
    }
  });

  if (currentList.length > 0) {
    groupedBlocks.push(currentList);
  }

  return (
    <ComponentElement className={className}>
      {groupedBlocks.map((blockOrGroup, index) => {
        if (Array.isArray(blockOrGroup)) {
          // Render as list
          const isOrdered = blockOrGroup[0]?.type === 'o-list-item';
          const ListComponent = isOrdered ? 'ol' : 'ul';
          const listClassName = isOrdered 
            ? 'list-decimal list-inside mb-4 space-y-1' 
            : 'list-disc list-inside mb-4 space-y-1';
          
          return (
            <ListComponent key={`list-${index}`} className={listClassName}>
              {blockOrGroup.map((item, itemIndex) => renderBlock(item, itemIndex))}
            </ListComponent>
          );
        } else {
          return renderBlock(blockOrGroup, index);
        }
      })}
    </ComponentElement>
  );
}

// Helper component for simple text rendering
export function PrismicText({ field, fallback = '', className = '' }: { 
  field: RichTextBlock[]; 
  fallback?: string; 
  className?: string;
}) {
  if (!field || !Array.isArray(field) || field.length === 0) {
    return <span className={className}>{fallback}</span>;
  }

  const text = field
    .map(block => block.content?.text || '')
    .join(' ')
    .trim();

  return <span className={className}>{text || fallback}</span>;
}
