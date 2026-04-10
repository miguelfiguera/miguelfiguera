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
      "Financial advisory platform providing personalized investment guidance and portfolio management tools.",
    category: "Web",
    url: "https://rradvisor.net",
    imageAlt: "R&R Advisor website screenshot",
  },
  {
    id: "alpha-computer",
    title: "AlphaComputer",
    description:
      "Computer retail and services website showcasing products, repairs, and tech support offerings.",
    category: "Web",
    url: "https://alphacomputer.netlify.app",
    imageAlt: "AlphaComputer website screenshot",
  },
  {
    id: "dv-enterprise",
    title: "DV Enterprise",
    description:
      "Complete brand identity design including logo, color palette, and visual guidelines for a professional enterprise.",
    category: "Branding",
    url: "https://dventerprise.net",
    imageAlt: "DV Enterprise branding showcase",
  },
  {
    id: "impacto-20x",
    title: "Impacto20x",
    description:
      "Business coaching and consulting website designed to drive growth and maximize impact for entrepreneurs.",
    category: "Web",
    url: "https://impacto20x.com",
    imageAlt: "Impacto20x website screenshot",
  },
  {
    id: "claro-de-luna",
    title: "Claro De Luna",
    description:
      "Brand identity and visual design project delivering a cohesive aesthetic across all brand touchpoints.",
    category: "Branding",
    imageAlt: "Claro De Luna branding showcase",
  },
  {
    id: "dulzura-natural-social",
    title: "Dulzura Natural Social Media",
    description:
      "Social media strategy and content creation for a natural products brand, boosting engagement and brand awareness.",
    category: "Social Media",
    imageAlt: "Dulzura Natural social media campaign",
  },
  {
    id: "dulzura-natural-ecommerce",
    title: "Dulzura Natural E-commerce",
    description:
      "Online store for natural products featuring a product catalog, shopping cart, and seamless checkout experience.",
    category: "Web",
    url: "https://propuesta-dulzura-natural.netlify.app",
    imageAlt: "Dulzura Natural e-commerce website screenshot",
  },
  {
    id: "tabay-commerce",
    title: "TabayCommerce",
    description:
      "E-commerce platform with product listings, filtering, and a modern shopping experience built for performance.",
    category: "Web",
    url: "https://techsmart725.netlify.app",
    imageAlt: "TabayCommerce website screenshot",
  },
  {
    id: "eureka",
    title: "Eureka",
    description:
      "Real estate listing platform with property search, filtering, and detailed property pages for buyers and agents.",
    category: "Web",
    url: "https://realstate-template.netlify.app",
    imageAlt: "Eureka real estate website screenshot",
  },
];
