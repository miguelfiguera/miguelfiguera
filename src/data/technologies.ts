export interface Technology {
  name: string;
  iconName: string;
}

export interface TechnologyCategory {
  category: string;
  items: Technology[];
}

export const technologies: TechnologyCategory[] = [
  {
    category: "Preferred LLMs",
    items: [
      { name: "Claude", iconName: "Bot" },
      { name: "Codex", iconName: "Bot" },
      { name: "Gemini", iconName: "Bot" },
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      { name: "React", iconName: "React" },
      { name: "Next.js", iconName: "Nextjs" },
      { name: "Rails", iconName: "Rails" },
      { name: "Laravel", iconName: "Laravel" },
      { name: "Express", iconName: "Express" },
      { name: "NestJS", iconName: "NestJS" },
      { name: "Inertia.js", iconName: "InertiaJS" },
    ],
  },
  {
    category: "Python",
    items: [
      { name: "Scrapy", iconName: "Scrapy" },
      { name: "Odoo", iconName: "Odoo" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", iconName: "PostgreSQL" },
      { name: "MySQL", iconName: "MySQL" },
      { name: "SQLite", iconName: "SQLite" },
      { name: "Firebase", iconName: "Firebase" },
      { name: "MongoDB", iconName: "MongoDB" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", iconName: "Docker" },
      { name: "DigitalOcean", iconName: "DigitalOcean" },
      { name: "Heroku", iconName: "Heroku" },
      { name: "Netlify", iconName: "Netlify" },
      { name: "Vercel", iconName: "Vercel" },
      { name: "Ubuntu", iconName: "Ubuntu" },
    ],
  },
];
