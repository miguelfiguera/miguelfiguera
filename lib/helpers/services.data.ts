import {
  Benefit,
  CTAContent,
  WhyChooseMeContent,
  ServiceListIntro,
  WorkProcessStep,
  ServiceItem,
  TechnologyItem,
  TechnologiesIntro,
} from "@/lib/types/landing.data.types";

export const ctaContent: CTAContent = {
  title: "Ready to Transform Your Business?",
  description:
    "Let's collaborate to create innovative solutions that drive your business forward. Contact me today to discuss your project requirements.",
  primaryButtonText: "Schedule a Consultation",
  secondaryButtonText: "View My Work",
};

export const serviceListIntroData: ServiceListIntro = {
  badge: "Professional Services",
  title: "Expert Solutions for Your Business",
  description:
    "Comprehensive development and technology services to help your business thrive in the digital landscape.",
};

export const servicesData: ServiceItem[] = [
  {
    id: 16,
    title: "Fullstack Development",
    shortDescription: "End-to-end web application development",
    description:
      "Comprehensive development services covering both frontend and backend aspects of your application, ensuring a seamless user experience and robust functionality.",
    iconName: "Layers",
    features: [
      "Custom web application development",
      "API design and integration",
      "Database architecture",
      "Responsive UI/UX implementation",
      "Performance optimization",
    ],
  },
  {
    id: 17,
    title: "Backend Development",
    shortDescription: "Robust server-side solutions",
    description:
      "Powerful backend systems built with modern technologies to handle your business logic, data processing, and API needs.",
    iconName: "Server",
    features: [
      "Ruby on Rails development",
      "Express.js applications",
      "NestJS enterprise solutions",
      "RESTful and GraphQL APIs",
      "Microservices architecture",
    ],
  },
  {
    id: 18,
    title: "Frontend Development",
    shortDescription: "Engaging user interfaces",
    description:
      "Modern, responsive, and intuitive user interfaces that provide exceptional user experiences across all devices and platforms.",
    iconName: "Layout",
    features: [
      "React single-page applications",
      "Next.js for server-side rendering",
      "Tailwind CSS for modern styling",
      "Inertia.js for monolithic applications",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    id: 19,
    title: "QA Testing",
    shortDescription: "Comprehensive quality assurance",
    description:
      "Thorough testing methodologies to ensure your applications are bug-free, secure, and perform optimally under all conditions.",
    iconName: "CheckSquare",
    features: [
      "Automated testing frameworks",
      "Manual testing procedures",
      "Performance testing",
      "Security vulnerability assessment",
      "Cross-browser and device compatibility",
    ],
  },
  {
    id: 20,
    title: "AI & Automation",
    shortDescription: "Intelligent automation solutions",
    description:
      "Leverage the power of artificial intelligence and automation to streamline processes, reduce costs, and enhance decision-making.",
    iconName: "Cpu",
    features: [
      "AI-powered business solutions",
      "Workflow automation",
      "Server automation and DevOps",
      "Machine learning integration",
      "Predictive analytics",
    ],
  },
  {
    id: 21,
    title: "Odoo Implementation",
    shortDescription: "Enterprise resource planning",
    description:
      "Customized Odoo ERP solutions to streamline your business operations, from inventory management to customer relationships.",
    iconName: "Globe",
    features: [
      "Odoo installation and configuration",
      "Custom module development",
      "Integration with existing systems",
      "User training and support",
      "Ongoing maintenance",
    ],
  },
  {
    id: 22,
    title: "Infrastructure & Database",
    shortDescription: "Scalable technical foundations",
    description:
      "Expert design and management of your technical infrastructure and databases to ensure reliability, security, and performance.",
    iconName: "Database",
    features: [
      "Cloud infrastructure setup",
      "Database design and optimization",
      "Data migration and integration",
      "Backup and disaster recovery",
      "Performance monitoring",
    ],
  },
  {
    id: 23,
    title: "Callcenter & Cloud Solutions",
    shortDescription: "Enterprise communication systems",
    description:
      "Modern cloud-based call center and communication solutions to enhance customer service and internal collaboration.",
    iconName: "Headphones",
    features: [
      "Cloud-based call center setup",
      "VoIP implementation",
      "CRM integration",
      "Call analytics and reporting",
      "Team collaboration tools",
    ],
  },
  {
    id: 24,
    title: "Custom Development",
    shortDescription: "Tailored software solutions",
    description:
      "Bespoke software development services designed to address your unique business challenges and requirements.",
    iconName: "Code",
    features: [
      "Requirements analysis",
      "Custom software architecture",
      "Agile development process",
      "Ongoing support and maintenance",
      "Scalable solutions",
    ],
  },
];

export const whyChooseMeContent: WhyChooseMeContent = {
  badgeText: "Why Choose Me",
  title: "Expertise That Delivers Results",
  description:
    "With years of experience across multiple technologies and industries, I bring a comprehensive approach to every project. My services are tailored to meet your specific needs and business goals.",
};

export const benefits = [
  {
    id: 5,
    title: "Technical Expertise",
    description: "Deep knowledge across multiple technologies and frameworks.",
    iconName: "Code",
  },
  {
    id: 6,
    title: "Proven Track Record",
    description: "Successful projects delivered for clients across industries.",
    iconName: "CheckSquare",
  },
  {
    id: 7,
    title: "Agile Methodology",
    description: "Flexible, iterative approach to project management.",
    iconName: "Layers",
  },
  {
    id: 8,
    title: "Ongoing Support",
    description:
      "Continued assistance and maintenance after project completion.",
    iconName: "Headphones",
  },
] satisfies Benefit[];

export const workProcess: WorkProcessStep[] = [
  {
    title: "Discovery",
    description: "Understanding your business goals and project requirements.",
    id: 10,
  },
  {
    title: "Planning",
    description: "Creating a detailed roadmap and technical architecture.",
    id: 11,
  },
  {
    title: "Development",
    description: "Building your solution with regular updates and feedback.",
    id: 12,
  },
  {
    title: "Delivery",
    description: "Thorough testing, deployment, and knowledge transfer.",
    id: 13,
  },
];

export const technologiesIntroData: TechnologiesIntro = {
  badge: "Technologies",
  title: "Cutting-Edge Tools & Technologies",
  description:
    "I stay up-to-date with the latest technologies and tools to deliver modern, efficient, and scalable solutions for your business.",
  buttonText: "Discuss Your Project",
};

export const technologiesData: TechnologyItem[] = [
  { id: 1, name: "React", iconName: "Code" },
  { id: 2, name: "Next.js", iconName: "Code" },
  {
    id: 3,
    name: "Ruby on Rails",
    iconName: "Code",
  },
  { id: 4, name: "Express.js", iconName: "Code" },
  { id: 5, name: "NestJS", iconName: "Code" },
  {
    id: 6,
    name: "Tailwind CSS",
    iconName: "Code",
  },
  {
    id: 7,
    name: "PostgreSQL",
    iconName: "Database",
  },
  {
    id: 8,
    name: "MongoDB",
    iconName: "Database",
  },
  { id: 9, name: "AWS", iconName: "Server" },
  { id: 10, name: "Docker", iconName: "Server" },
  { id: 11, name: "Odoo", iconName: "Globe" },
  { id: 12, name: "AI/ML", iconName: "Cpu" },
];
