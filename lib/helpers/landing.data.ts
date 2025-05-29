import {
  Benefit,
  Certification,
  BlogPost,
  Project,
  WhyChooseMeContent,
  CTAContent,
} from "@/lib/types/landing.data.types";

export const ctaSectionContent: CTAContent = {
  title: "Ready to Transform Your Business?",
  description:
    "Let's collaborate to create innovative solutions that drive your business forward. Contact me today to discuss your project requirements.",
  primaryButtonText: "Schedule a Consultation",
  secondaryButtonText: "View My Work",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/ecommerce", // Replace with actual link
    github: "https://github.com/user/ecommerce", // Replace with actual GitHub repo
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure and intuitive mobile banking application with real-time transaction tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Firebase"],
    link: "https://example.com/banking", // Replace with actual link
    github: "https://github.com/user/banking", // Replace with actual GitHub repo
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Machine Learning",
    description:
      "Content generation tool powered by advanced AI algorithms for marketing teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "AWS"],
    link: "https://example.com/ai", // Replace with actual link
    github: "https://github.com/user/ai", // Replace with actual GitHub repo
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description:
      "Expertise in designing distributed systems on AWS infrastructure.",
    date: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    description:
      "Advanced skills in building scalable applications on Google Cloud Platform.",
    date: "2022",
    link: "#",
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    description:
      "Proficiency in developing solutions using Azure services and technologies.",
    date: "2022",
    link: "#",
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    description:
      "Expert knowledge in deploying and managing Kubernetes clusters.",
    date: "2021",
    link: "#",
  },
  {
    id: 5,
    title: "React Advanced Certification",
    issuer: "Meta",
    description: "Advanced techniques for building complex React applications.",
    date: "2021",
    link: "#",
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    issuer: "Udacity",
    description: "Comprehensive training in modern full-stack web development.",
    date: "2020",
    link: "#",
  },
] satisfies Certification[];

export const benefits = [
  {
    id: 1,
    title: "Clean, Maintainable Code",
    description: "Well-structured code that's easy to maintain and extend.",
    iconName: "Code",
  },
  {
    id: 2,
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your business needs.",
    iconName: "Layers",
  },

  {
    id: 3,
    title: "Responsive Design",
    description: "Applications that work flawlessly on all devices.",
    iconName: "Layout", // Assuming 'Layout' is more appropriate for responsive design
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Fast-loading applications with optimized performance.",
    iconName: "Cpu", // Assuming 'Cpu' or another icon might be more fitting for performance
  },
] satisfies Benefit[];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Node.js",
    slug: "building-scalable-web-applications",
    excerpt:
      "Learn how to architect and implement scalable web applications using React and Node.js with best practices for performance and maintainability.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Development",
    date: "April 15, 2023",
  },
  {
    id: 2,
    title: "Implementing Authentication with JWT in Modern Applications",
    slug: "implementing-authentication-jwt",
    excerpt:
      "A comprehensive guide to implementing secure authentication using JSON Web Tokens in modern web and mobile applications.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Security",
    date: "March 22, 2023",
  },
  {
    id: 3,
    title: "Optimizing Database Performance in High-Traffic Applications",
    slug: "optimizing-database-performance",
    excerpt:
      "Strategies and techniques for optimizing database performance to handle high traffic loads without compromising user experience.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Database",
    date: "February 10, 2023",
  },
] satisfies Omit<BlogPost, "text">[];

export const content: WhyChooseMeContent = {
  badgeText: "Why Choose Me",
  title: "Delivering Excellence in Every Project",
  description:
    "With a proven track record of successful projects and satisfied clients, I bring technical expertise and creative problem-solving to every challenge.",
};
