export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "rr-advisor",
    title: "R&R Advisor",
    description:
      "Complete website redesign for a financial advisory firm, resulting in a 120% increase in conversions.",
    category: "Web",
    url: "https://rradvisor.net",
    imageAlt: "R&R Advisor landing page",
  },
  {
    id: "alpha-computer",
    title: "AlphaComputer",
    description:
      "E-commerce proposal for computer products and tech services, featuring product catalog and shopping cart.",
    category: "Web",
    url: "https://alphacomputer.netlify.app",
    imageAlt: "AlphaComputer e-commerce proposal",
  },
  {
    id: "dv-enterprise",
    title: "DV Enterprise",
    description:
      "Complete corporate identity development for a backoffice startup, including logo, branding guidelines, and web presence.",
    category: "Branding",
    url: "https://dventerprise.net",
    imageAlt: "DV Enterprise corporate identity",
  },
  {
    id: "impacto-20x",
    title: "Impacto20x",
    description:
      "VSL (Video Sales Letter) landing page designed for Luis Fonten, optimized for mobile conversions and lead generation.",
    category: "Web",
    url: "https://impacto20x.com",
    imageAlt: "Impacto20x sales page",
  },
  {
    id: "claro-de-luna",
    title: "Claro De Luna",
    description:
      "Branding and e-learning platform development for a music school, including course content management and student evaluations.",
    category: "Branding",
    imageAlt: "Claro De Luna e-learning platform",
  },
  {
    id: "dulzura-natural-social",
    title: "Dulzura Natural — Social Media",
    description:
      "Social media campaign featuring product photography to increase follower engagement and build regional customer loyalty.",
    category: "Social Media",
    imageAlt: "Dulzura Natural social media campaign",
  },
  {
    id: "dulzura-natural-ecommerce",
    title: "Dulzura Natural — E-commerce Redesign",
    description:
      "E-commerce redesign proposal to refresh the brand's online store with a modern look and improved user experience.",
    category: "Web",
    url: "https://propuesta-dulzura-natural.netlify.app",
    imageAlt: "Dulzura Natural e-commerce redesign",
  },
  {
    id: "tabay-commerce",
    title: "TabayCommerce",
    description:
      "Tech-focused e-commerce mockup built for dropshipping, with product listings, filtering, and a streamlined checkout flow.",
    category: "Web",
    url: "https://techsmart725.netlify.app",
    imageAlt: "TabayCommerce tech e-commerce",
  },
  {
    id: "eureka",
    title: "Eureka",
    description:
      "Real estate web app template for property listing, rental, and sales with search and filtering capabilities.",
    category: "Web",
    url: "https://realstate-template.netlify.app",
    imageAlt: "Eureka real estate template",
  },
];
