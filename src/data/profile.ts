export interface Profile {
  name: string;
  headline: string;
  about: string;
  location: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  github: string;
  website: string;
  odooPartner: boolean;
  shopifyExperience: boolean;
}

export const profile: Profile = {
  name: "Miguel Figuera Quintero",
  headline: "Full-Stack Developer | Odoo Partner | Shopify Integrations",
  about:
    "Full-Stack Developer with 4+ years of experience building robust and efficient web solutions. Specialized in Ruby on Rails, React, Next.js, Laravel, and Express.js. Odoo Partner with expertise in ERP implementation. Experienced integrating Shopify with Klaviyo, Algolia, Rebuy, Yotpo, and other e-commerce platforms. Proficient in serverless architectures, cloud functions, and cloud server administration. Skilled in AI-powered development — from building autonomous pipelines and agent orchestration systems to leveraging AI for code generation, testing, and workflow automation.",
  location: "Venezuela",
  email: "miguelqui725@gmail.com",
  linkedin: "https://www.linkedin.com/in/miguel-quintero725/",
  whatsapp: "https://wa.me/584241727988",
  github: "https://github.com/miguelfiguera",
  website: "https://miguelfiguera.dev",
  odooPartner: true,
  shopifyExperience: true,
};
