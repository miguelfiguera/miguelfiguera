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
  headline: "Full-Stack Web Developer",
  about:
    "Full-Stack Web Developer with a strong foundation from The Odin Project (completed both Ruby on Rails and Node.js paths). Currently pursuing a B.S. in Computer Engineering at UNETI in Venezuela. Expertise spans the full development lifecycle, from backend architecture to frontend implementation and deployment, including cloud server configuration, database administration, business process automation, API integration, and AI-assisted development.",
  location: "Venezuela",
  email: "miguelqui725@gmail.com",
  linkedin: "https://www.linkedin.com/in/miguel-quintero725/",
  whatsapp: "https://wa.me/584241727988",
  github: "https://github.com/miguelfiguera",
  website: "https://miguelfiguera.dev",
  odooPartner: true,
  shopifyExperience: true,
};
