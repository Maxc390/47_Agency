// Content type definitions for file-based CMS

export interface Image {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Link {
  text: string;
  url: string;
  target?: string;
  variant?: 'Primary' | 'Secondary';
}

export interface NavigationLink {
  text: string;
  url: string;
  target?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

// Site Settings
export interface Settings {
  site_title: string;
  site_tagline?: string;
  contact_email?: string;
  meta_description?: string;
  fallback_og_image?: Image;
  navigation_link: NavigationLink[];
  social_links?: SocialLink[];
}

// Rich Text Types
export interface RichTextBlock {
  type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'list-item' | 'o-list-item';
  content: {
    text: string;
    spans?: Array<{
      start: number;
      end: number;
      type: 'strong' | 'em' | 'hyperlink';
      data?: {
        url?: string;
        target?: string;
      };
    }>;
  };
  direction: 'ltr';
}

// Slice Types
export interface HeroSlice {
  slice_type: 'hero';
  variation: 'default';
  primary: {
    heading: RichTextBlock[];
    body: RichTextBlock[];
    button: Link[];
    image: Image;
  };
}

export interface ProjectListSlice {
  slice_type: 'project_list';
  variation: 'default';
  primary: {
    eyebrow: string;
    heading: RichTextBlock[];
    body: RichTextBlock[];
    projects: Array<{
      project: {
        id: string;
        uid: string;
        title: string;
        category?: string;
        image: Image;
        description: RichTextBlock[];
        technologies?: string[];
        live_link?: Link;
      };
    }>;
  };
}

export interface CallToActionSlice {
  slice_type: 'call_to_action';
  variation: 'default';
  primary: {
    eyebrow: string;
    heading: RichTextBlock[];
    body: RichTextBlock[];
    button: Link[];
  };
}

export interface ProductFeatureSlice {
  slice_type: 'product_feature';
  variation: 'default';
  primary: {
    heading: RichTextBlock[];
    description: RichTextBlock[];
    image: Image;
    project?: {
      id: string;
      uid: string;
      title: string;
    };
  };
}

export interface ScrollTextSlice {
  slice_type: 'scroll_text';
  variation: 'default';
  primary: {
    eyebrow: string;
    text: RichTextBlock[];
  };
}

export type Slice = HeroSlice | ProjectListSlice | CallToActionSlice | ProductFeatureSlice | ScrollTextSlice;

export type SliceType = Slice['slice_type'];

// Page Types
export interface Homepage {
  meta_title: string;
  meta_description?: string;
  meta_image?: Image;
  slices: Slice[];
}

export interface Project {
  uid: string;
  title: string;
  project_image: Image;
  hero_image?: Image;
  description: RichTextBlock[];
  category?: string;
  live_link?: Link;
  technologies?: string[];
  meta_image?: Image;
}

export interface TeamMember {
  name: string;
  role: string;
  image: Image;
}

export interface AboutPage {
  title: RichTextBlock[];
  hero_image: Image;
  content: RichTextBlock[];
  team_section?: {
    section_title: string;
    section_description: RichTextBlock[];
  };
  team_members: TeamMember[];
  meta_title?: string;
  meta_description?: string;
  meta_image?: Image;
  slices?: Slice[];
}

export interface ContactPage {
  title: RichTextBlock[];
  hero_image: Image;
  content: RichTextBlock[];
  form?: {
    name_placeholder: string;
    email_placeholder: string;
    project_placeholder: string;
    submit_text: string;
  };
  meta_title?: string;
  meta_description?: string;
  meta_image?: Image;
  slices?: Slice[];
}
