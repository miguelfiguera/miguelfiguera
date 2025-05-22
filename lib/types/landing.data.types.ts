export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  date: string;
  link: string;
}

import { ReactNode } from 'react';

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  description: string;
  slug:string;
  excerpt:string;
  date: string;
  image?: string;
  link?: string;
}
