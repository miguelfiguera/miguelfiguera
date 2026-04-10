export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "2024-03",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2023-05",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
  },
  {
    name: "The Odin Project — Ruby on Rails Path",
    issuer: "The Odin Project",
  },
  {
    name: "The Odin Project — Node.js Path",
    issuer: "The Odin Project",
  },
];
