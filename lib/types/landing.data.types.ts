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

import { ReactNode } from "react";

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
