import {
  ProjectData,
  ProcessStep,
  Testimonial,
} from "@/lib/types/landing.data.types";

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure and intuitive mobile banking application with real-time transaction tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Firebase"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Web Development",
    description:
      "Content generation tool powered by advanced AI algorithms for marketing teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description:
      "Comprehensive dashboard for healthcare providers to monitor patient data and analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description:
      "Mobile application for tracking workouts, nutrition, and health metrics with social features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    description:
      "Property listing and management platform with virtual tours and agent scheduling.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description:
      "Understanding your business goals, target audience, and project requirements to create a strategic roadmap.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Creating wireframes and interactive prototypes to visualize the user experience before development begins.",
  },
  {
    title: "Development",
    description:
      "Building the solution with clean, maintainable code following industry best practices and standards.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing across devices and browsers to ensure a flawless user experience.",
  },
  {
    title: "Deployment & Support",
    description:
      "Launching your project and providing ongoing support and maintenance to ensure long-term success.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Miguel delivered our e-commerce platform ahead of schedule and exceeded our expectations in terms of functionality and design.",
    name: "Sarah Johnson",
    company: "Retail Solutions Inc.",
  },
  {
    quote:
      "Working with Miguel was a pleasure. His technical expertise and attention to detail resulted in a mobile app our users love.",
    name: "David Chen",
    company: "FinTech Innovations",
  },
  {
    quote:
      "Miguel's ability to understand our complex requirements and translate them into an intuitive user experience was impressive.",
    name: "Emily Rodriguez",
    company: "HealthTech Systems",
  },
];
