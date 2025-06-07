import { z } from "zod";

// LucideIconName type as a Zod enum
export const lucideIconNameSchema = z.enum([
  "Layers",
  "Server",
  "Layout",
  "CheckSquare",
  "Cpu",
  "Globe",
  "Headphones",
  "Code",
  "Database",
]);

// Project schema
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  link: z.string(),
  github: z.string(),
});

// Certification schema
export const certificationSchema = z.object({
  id: z.number(),
  title: z.string(),
  issuer: z.string(),
  description: z.string(),
  date: z.string(),
  link: z.string(),
});

// Benefit schema
export const benefitSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  iconName: lucideIconNameSchema,
});

// BlogPost schema
export const blogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  text: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  date: z.string(),
  image: z.string().optional(),
  link: z.string().optional(),
});

// BlogPostPreview schema (using Pick)
export const blogPostPreviewSchema = blogPostSchema.pick({
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  image: true,
  category: true,
  date: true,
});

// WhyChooseMeContent schema
export const whyChooseMeContentSchema = z.object({
  badgeText: z.string(),
  title: z.string(),
  description: z.string(),
});

// CTAContent schema
export const ctaContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  primaryButtonText: z.string(),
  secondaryButtonText: z.string(),
});

// WorkProcessStep schema
export const workProcessStepSchema = z.object({
  title: z.string(),
  description: z.string(),
  id: z.number(),
});

// ServiceItem schema
export const serviceItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  iconName: lucideIconNameSchema,
  features: z.array(z.string()),
});

// ServiceListIntro schema
export const serviceListIntroSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
});

// TechnologyItem schema
export const technologyItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  iconName: lucideIconNameSchema,
});

// TechnologiesIntro schema
export const technologiesIntroSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  buttonText: z.string(),
});

// ProjectData schema (using Pick)
export const projectDataSchema = projectSchema.pick({
  id: true,
  title: true,
  category: true,
  description: true,
  image: true,
  technologies: true,
});

// ProcessStep schema
export const processStepSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// Testimonial schema
export const testimonialSchema = z.object({
  quote: z.string(),
  name: z.string(),
  company: z.string(),
});

// Export types derived from schemas
export type ProjectSchema = z.infer<typeof projectSchema>;
export type CertificationSchema = z.infer<typeof certificationSchema>;
export type BenefitSchema = z.infer<typeof benefitSchema>;
export type BlogPostSchema = z.infer<typeof blogPostSchema>;
export type BlogPostPreviewSchema = z.infer<typeof blogPostPreviewSchema>;
export type WhyChooseMeContentSchema = z.infer<typeof whyChooseMeContentSchema>;
export type CTAContentSchema = z.infer<typeof ctaContentSchema>;
export type WorkProcessStepSchema = z.infer<typeof workProcessStepSchema>;
export type ServiceItemSchema = z.infer<typeof serviceItemSchema>;
export type ServiceListIntroSchema = z.infer<typeof serviceListIntroSchema>;
export type TechnologyItemSchema = z.infer<typeof technologyItemSchema>;
export type TechnologiesIntroSchema = z.infer<typeof technologiesIntroSchema>;
export type ProjectDataSchema = z.infer<typeof projectDataSchema>;
export type ProcessStepSchema = z.infer<typeof processStepSchema>;
export type TestimonialSchema = z.infer<typeof testimonialSchema>;
