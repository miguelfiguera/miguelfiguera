export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  imageAlt: string;
}

export const categories = [
  "All",
  "ERP & Business Infrastructure",
  "Custom Development",
  "Landing Pages",
  "E-Commerce",
  "Shopify Integrations",
  "Automation & AI",
] as const;

export const products: Product[] = [
  // ERP & Business Infrastructure
  {
    id: "erpnext-implementation",
    title: "ERPNext Implementation",
    description:
      "Complete ERPNext setup for your business — accounting, inventory, CRM, HR, and project management in one platform.",
    category: "ERP & Business Infrastructure",
    features: [
      "Full ERPNext configuration and deployment",
      "Data migration from existing systems",
      "Custom workflows and reports",
      "User training and onboarding",
    ],
    imageAlt: "ERPNext dashboard",
  },
  {
    id: "odoo-implementation",
    title: "Odoo ERP Implementation",
    description:
      "End-to-end Odoo setup as a certified partner — modules for sales, inventory, accounting, and manufacturing.",
    category: "ERP & Business Infrastructure",
    features: [
      "Module selection and configuration",
      "Custom module development",
      "Third-party integrations",
      "Ongoing support and maintenance",
    ],
    imageAlt: "Odoo ERP modules",
  },
  {
    id: "business-tech-infrastructure",
    title: "Business Tech Infrastructure",
    description:
      "Complete technology stack for your business — marketing systems, CRM, accounting, inventory management, and communications.",
    category: "ERP & Business Infrastructure",
    features: [
      "CRM setup and configuration",
      "Marketing automation (email, SMS campaigns)",
      "Accounting and invoicing systems",
      "Inventory and order management",
    ],
    imageAlt: "Business infrastructure diagram",
  },

  // Custom Development
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Tailor-made web applications built with React, Next.js, Rails, or Laravel to solve your specific business challenges.",
    category: "Custom Development",
    features: [
      "Full-stack development (frontend + backend + database)",
      "API design and third-party integrations",
      "Authentication and role-based access",
      "Deployment and cloud infrastructure",
    ],
    imageAlt: "Custom web application",
  },
  {
    id: "custom-system-development",
    title: "Custom System Development",
    description:
      "Purpose-built software systems — internal tools, dashboards, data pipelines, and workflow engines designed for your operations.",
    category: "Custom Development",
    features: [
      "Requirements analysis and system design",
      "Scalable architecture planning",
      "Database design and optimization",
      "Testing, QA, and documentation",
    ],
    imageAlt: "System architecture diagram",
  },
  {
    id: "project-management",
    title: "Technical Project Management",
    description:
      "End-to-end project management for software initiatives — from planning and architecture through development and delivery.",
    category: "Custom Development",
    features: [
      "Project scoping and roadmap creation",
      "Team coordination and code review",
      "Sprint planning and delivery management",
      "Risk assessment and mitigation",
    ],
    imageAlt: "Project management workflow",
  },
  {
    id: "system-design",
    title: "System Design & Architecture",
    description:
      "Technical architecture consulting — scalable system design, infrastructure planning, and technology stack selection.",
    category: "Custom Development",
    features: [
      "Architecture diagrams and documentation",
      "Technology stack evaluation",
      "Scalability and performance planning",
      "Cloud infrastructure design",
    ],
    imageAlt: "System design blueprint",
  },

  // Landing Pages
  {
    id: "landing-page",
    title: "High-Converting Landing Page",
    description:
      "Professional landing pages optimized for conversions — fast, responsive, and SEO-ready. Built with Astro, Next.js, or static HTML.",
    category: "Landing Pages",
    features: [
      "Mobile-first responsive design",
      "SEO optimization and meta tags",
      "Analytics integration",
      "Contact forms and lead capture",
    ],
    imageAlt: "Landing page design",
  },
  {
    id: "vsl-page",
    title: "VSL & Sales Page",
    description:
      "Video Sales Letter pages and long-form sales pages designed to maximize conversions and drive revenue.",
    category: "Landing Pages",
    features: [
      "Video embed optimization",
      "Conversion-focused copywriting layout",
      "A/B testing ready structure",
      "Payment gateway integration",
    ],
    imageAlt: "VSL sales page",
  },

  // E-Commerce
  {
    id: "shopify-store",
    title: "Shopify Store Setup",
    description:
      "Complete Shopify store configuration — theme customization, product setup, payment gateways, and shipping rules.",
    category: "E-Commerce",
    features: [
      "Theme selection and customization",
      "Product catalog setup",
      "Payment and shipping configuration",
      "SEO and analytics setup",
    ],
    imageAlt: "Shopify store",
  },
  {
    id: "odoo-ecommerce",
    title: "Odoo E-Commerce",
    description:
      "Odoo-powered online store integrated directly with your ERP — synchronized inventory, pricing, and order management.",
    category: "E-Commerce",
    features: [
      "Odoo website and e-commerce module setup",
      "Real-time inventory synchronization",
      "Integrated accounting and order tracking",
      "Customer portal and self-service",
    ],
    imageAlt: "Odoo e-commerce platform",
  },
  {
    id: "custom-ecommerce",
    title: "Custom E-Commerce Platform",
    description:
      "Bespoke e-commerce solutions built with Next.js, React, or Astro — for businesses that need more than a template.",
    category: "E-Commerce",
    features: [
      "Custom product pages and checkout flow",
      "Headless commerce architecture",
      "Multi-currency and multi-language support",
      "Integration with any payment provider",
    ],
    imageAlt: "Custom e-commerce platform",
  },

  // Shopify Integrations
  {
    id: "shopify-klaviyo",
    title: "Shopify + Klaviyo Integration",
    description:
      "Connect Shopify with Klaviyo for automated email and SMS marketing — abandoned cart flows, post-purchase sequences, and segmentation.",
    category: "Shopify Integrations",
    features: [
      "Klaviyo account setup and configuration",
      "Automated email flow creation",
      "SMS campaign setup",
      "Customer segmentation and targeting",
    ],
    imageAlt: "Shopify Klaviyo integration",
  },
  {
    id: "shopify-algolia",
    title: "Shopify + Algolia Search",
    description:
      "Lightning-fast product search and discovery powered by Algolia — autocomplete, filters, and AI recommendations.",
    category: "Shopify Integrations",
    features: [
      "Algolia index configuration",
      "Custom search UI components",
      "Faceted filtering and sorting",
      "Search analytics and optimization",
    ],
    imageAlt: "Algolia search integration",
  },
  {
    id: "shopify-rebuy-yotpo",
    title: "Shopify + Rebuy & Yotpo",
    description:
      "Boost AOV with Rebuy smart recommendations and build trust with Yotpo reviews, loyalty programs, and UGC.",
    category: "Shopify Integrations",
    features: [
      "Rebuy upsell and cross-sell widgets",
      "Yotpo reviews and ratings setup",
      "Loyalty and referral programs",
      "Custom widget placement and styling",
    ],
    imageAlt: "Rebuy and Yotpo integration",
  },
  {
    id: "shopify-custom-integration",
    title: "Custom Shopify App Integration",
    description:
      "Connect Shopify with any third-party service — ERPs, CRMs, fulfillment centers, accounting software, or custom APIs.",
    category: "Shopify Integrations",
    features: [
      "Shopify API and webhook development",
      "Custom app and middleware creation",
      "Data synchronization and mapping",
      "Error handling and monitoring",
    ],
    imageAlt: "Custom Shopify API integration",
  },

  // Automation & AI
  {
    id: "ai-pipelines",
    title: "AI-Powered Development Pipelines",
    description:
      "Autonomous agent pipelines that handle development tasks, code review, testing, and deployment — with human oversight.",
    category: "Automation & AI",
    features: [
      "Multi-agent orchestration systems",
      "Automated code generation and review",
      "CI/CD pipeline integration",
      "Quality gates and adversarial testing",
    ],
    imageAlt: "AI development pipeline",
  },
  {
    id: "n8n-automation",
    title: "n8n Workflow Automation",
    description:
      "Visual workflow automation with n8n — connect your apps, automate repetitive tasks, and build complex multi-step processes.",
    category: "Automation & AI",
    features: [
      "n8n instance setup and hosting",
      "Custom workflow design and implementation",
      "Integration with 400+ apps and services",
      "Error handling and monitoring",
    ],
    imageAlt: "n8n workflow automation",
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description:
      "Automate repetitive business tasks — data entry, report generation, email sequences, inventory updates. AI optional, not always necessary.",
    category: "Automation & AI",
    features: [
      "Process analysis and optimization",
      "Script development (Python, Node.js)",
      "Scheduled task automation (cron, serverless)",
      "Monitoring and alerting",
    ],
    imageAlt: "Business automation workflow",
  },
  {
    id: "web-scraping",
    title: "Web Scraping & Data Extraction",
    description:
      "Automated data collection from any website — product prices, competitor analysis, market research, and lead generation.",
    category: "Automation & AI",
    features: [
      "Custom scrapers (Scrapy, Puppeteer)",
      "Scheduled data extraction",
      "Data cleaning and formatting",
      "API delivery or database storage",
    ],
    imageAlt: "Web scraping pipeline",
  },
];
