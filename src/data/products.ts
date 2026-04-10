export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageAlt: string;
}

export const categories = [
  "All",
  "Web Applications",
  "E-Commerce",
  "Automation",
  "Templates",
] as const;

export const products: Product[] = [
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Tailor-made web applications built with modern frameworks to solve your specific business challenges.",
    category: "Web Applications",
    imageAlt: "Custom web application screenshot",
  },
  {
    id: "ecommerce-storefront",
    title: "E-Commerce Storefront",
    description:
      "Full-featured online stores with inventory management, payment processing, and order tracking.",
    category: "E-Commerce",
    imageAlt: "E-commerce storefront preview",
  },
  {
    id: "business-automation",
    title: "Business Automation Suite",
    description:
      "Streamline repetitive tasks with custom automation workflows that integrate with your existing tools.",
    category: "Automation",
    imageAlt: "Business automation dashboard",
  },
  {
    id: "landing-page-kit",
    title: "Landing Page Kit",
    description:
      "High-converting landing page templates optimized for performance and SEO.",
    category: "Templates",
    imageAlt: "Landing page template preview",
  },
  {
    id: "erp-integration",
    title: "ERP Integration Module",
    description:
      "Connect your web presence directly to ERPNext for real-time inventory, pricing, and order sync.",
    category: "Web Applications",
    imageAlt: "ERP integration diagram",
  },
  {
    id: "pos-online-store",
    title: "POS-Connected Online Store",
    description:
      "Unified commerce solution that syncs your physical point-of-sale with your online catalog.",
    category: "E-Commerce",
    imageAlt: "POS connected store interface",
  },
];
