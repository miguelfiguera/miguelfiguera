export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  date: string;
  link: string;
}

export type LucideIconName =
  | "Layers"
  | "Server"
  | "Layout"
  | "CheckSquare"
  | "Cpu"
  | "Globe"
  | "Headphones"
  | "Code"
  | "Database";

export interface Benefit {
  id: number;
  title: string;
  description: string;
  iconName: LucideIconName;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  text: string;
  slug: string;
  excerpt: string;
  date: string;
  image?: string;
  link?: string;
}

export interface WhyChooseMeContent {
  badgeText: string;
  title: string;
  description: string;
}

export interface CTAContent {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface WorkProcessStep {
  title: string;
  description: string;
  id: number;
}

export interface ServiceItem {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  iconName: LucideIconName;
  features: string[];
}

export interface ServiceListIntro {
  badge: string;
  title: string;
  description: string;
}

export interface TechnologyItem {
  id: number;
  name: string;
  iconName: LucideIconName;
}

export interface TechnologiesIntro {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
}

// I should create an index based on the slug+id or something like that
// for a friendlier seo on /blog/slug instead of /blog/id
export interface BlogPostPreview
  extends Pick<
    BlogPost,
    "id" | "title" | "slug" | "excerpt" | "image" | "category" | "date"
  > {}

export interface ProjectData
  extends Pick<
    Project,
    "id" | "title" | "category" | "description" | "image" | "technologies"
  > {}

export interface ProcessStep {
  title: string;
  description: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}
