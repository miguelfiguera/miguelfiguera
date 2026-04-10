export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Fullstack Development",
    shortDescription:
      "End-to-end web application development from database to user interface.",
    description:
      "Complete web application development covering every layer of the stack. From designing relational databases and building RESTful APIs to crafting responsive user interfaces, I deliver cohesive products that work seamlessly across the entire architecture.",
    iconName: "Layers",
    features: [
      "Single-page and multi-page application development",
      "RESTful and GraphQL API design",
      "Database schema design and optimization",
      "Authentication and authorization flows",
      "Deployment and CI/CD pipeline setup",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    shortDescription:
      "Robust server-side solutions with Node.js, Ruby on Rails, and Python.",
    description:
      "Server-side development focused on performance, security, and maintainability. I build scalable APIs, background job systems, and data pipelines using Node.js, Ruby on Rails, and Python, following best practices for testing and documentation.",
    iconName: "Server",
    features: [
      "Node.js and Express/Fastify APIs",
      "Ruby on Rails applications",
      "Python scripting and automation",
      "Background job processing and queues",
      "Third-party API integrations",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    shortDescription:
      "Modern, accessible interfaces with React, Next.js, and Astro.",
    description:
      "User interface development with a focus on performance, accessibility, and design fidelity. I work with React, Next.js, and Astro to build responsive, interactive experiences that look great on every device and meet WCAG accessibility standards.",
    iconName: "MonitorSmartphone",
    features: [
      "React and Next.js applications",
      "Astro static and hybrid sites",
      "Responsive and mobile-first design",
      "Component library development",
      "Performance optimization and Core Web Vitals",
    ],
  },
  {
    id: "qa-testing",
    title: "QA Testing",
    shortDescription:
      "Comprehensive testing strategies to ship with confidence.",
    description:
      "Quality assurance services covering unit, integration, and end-to-end testing. I set up testing frameworks, write test suites, and integrate automated checks into CI pipelines so every release meets reliability and correctness standards.",
    iconName: "ShieldCheck",
    features: [
      "Unit and integration test suites",
      "End-to-end testing with Playwright and Cypress",
      "Test-driven development workflows",
      "CI-integrated automated test pipelines",
      "Performance and load testing",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "Intelligent workflows powered by large language models and custom scripts.",
    description:
      "Leverage AI models and automation tooling to streamline repetitive tasks, extract insights from unstructured data, and build intelligent assistants. From prompt engineering to full agent pipelines, I integrate AI where it delivers real business value.",
    iconName: "BrainCircuit",
    features: [
      "LLM integration and prompt engineering",
      "Custom AI agent development",
      "Business process automation scripts",
      "Data extraction and transformation pipelines",
      "Chatbot and conversational interface development",
    ],
  },
  {
    id: "odoo-implementation",
    title: "Odoo Implementation",
    shortDescription:
      "ERP deployment, customization, and module development on Odoo.",
    description:
      "End-to-end Odoo ERP implementation including installation, configuration, custom module development, and data migration. I help businesses digitize their operations with tailored Odoo solutions covering sales, inventory, accounting, and more.",
    iconName: "Building2",
    features: [
      "Odoo installation and server configuration",
      "Custom module and widget development",
      "Data migration from legacy systems",
      "Workflow automation and approval chains",
      "User training and post-launch support",
    ],
  },
  {
    id: "infrastructure-db",
    title: "Infrastructure & DB",
    shortDescription:
      "Cloud infrastructure setup, database administration, and DevOps.",
    description:
      "Infrastructure and database services covering cloud server provisioning, database design and tuning, backup strategies, and monitoring. I work with PostgreSQL, MySQL, MongoDB, and cloud providers to keep your data safe and your systems running smoothly.",
    iconName: "Database",
    features: [
      "Cloud server provisioning and hardening",
      "PostgreSQL and MySQL administration",
      "MongoDB and NoSQL database design",
      "Backup, recovery, and replication strategies",
      "Monitoring, alerting, and log management",
    ],
  },
  {
    id: "callcenter-cloud",
    title: "Callcenter & Cloud",
    shortDescription:
      "Cloud-based call center solutions with VoIP and CRM integration.",
    description:
      "Design and deployment of cloud call center infrastructure using VoIP platforms. I configure IVR flows, integrate with CRMs, set up real-time dashboards, and ensure high-availability telephony so your support team can operate from anywhere.",
    iconName: "Headset",
    features: [
      "VoIP platform setup and configuration",
      "IVR and call routing design",
      "CRM and ticketing system integration",
      "Real-time reporting dashboards",
      "High-availability and failover configuration",
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    shortDescription:
      "Tailored software solutions for unique business requirements.",
    description:
      "Bespoke software development for challenges that off-the-shelf tools cannot solve. Whether it is a specialized internal tool, a complex integration between platforms, or a prototype for a new product idea, I build exactly what your business needs.",
    iconName: "Wrench",
    features: [
      "Internal tools and admin dashboards",
      "Platform-to-platform integrations",
      "Rapid prototyping and MVPs",
      "Legacy system modernization",
      "Custom reporting and analytics solutions",
    ],
  },
];
