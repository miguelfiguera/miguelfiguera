export interface Experience {
  company: string;
  title: string;
  type: "full-time" | "part-time" | "freelance";
  startDate: string;
  endDate: string;
  location: string;
  remote: boolean;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Simple-C Bookeeping Software",
    title: "FullStack Developer",
    type: "full-time",
    startDate: "2025-06",
    endDate: "present",
    location: "Arizona, US",
    remote: true,
    description: [
      "Building and maintaining full-stack features with Laravel and React",
      "Developing RESTful APIs and interactive UI components",
      "Collaborating with the team on bookkeeping software solutions",
    ],
  },
  {
    company: "Freelance",
    title: "Full Stack Developer",
    type: "freelance",
    startDate: "2025-04",
    endDate: "present",
    location: "Remote",
    remote: true,
    description: [
      "Developing automation scripts and tools with Python",
      "Systems management and server administration",
      "Delivering custom web solutions for diverse clients",
      "AI-powered development pipelines and agent orchestration",
    ],
  },
  {
    company: "Digital Lab",
    title: "Full Stack Developer",
    type: "full-time",
    startDate: "2023-03",
    endDate: "2025-04",
    location: "Aragua, VE",
    remote: true,
    description: [
      "Built e-commerce applications with Next.js and React",
      "Integrated Shopify API with Klaviyo, Algolia, Rebuy, Yotpo, and other platforms",
      "Migrated UI framework from Bootstrap to Tailwind CSS",
      "Implemented Firebase services including Firestore, Cloud Functions, and Authentication",
      "Developed serverless architectures and cloud functions for scalable backends",
      "Automated recurring tasks to improve team productivity",
    ],
  },
  {
    company: "R&R Advisor",
    title: "CTO",
    type: "part-time",
    startDate: "2024-10",
    endDate: "2025-03",
    location: "Puerto Rico",
    remote: true,
    description: [
      "Led SaaS product development and architecture decisions",
      "Managed cloud server infrastructure and administration",
      "Integrated third-party APIs for business process automation",
      "Conducted code reviews and managed project delivery",
    ],
  },
  {
    company: "Towerware",
    title: "CTO",
    type: "part-time",
    startDate: "2024-07",
    endDate: "2025-01",
    location: "Delray Beach, FL",
    remote: false,
    description: [
      "Optimized database performance and implemented security measures",
      "Automated business processes to reduce manual workload",
      "Established QA workflows and testing standards",
      "Integrated AI tools and Telnyx API for SMS campaign automation",
      "Managed 3CX phone system configuration",
    ],
  },
  {
    company: "Towerware",
    title: "Ruby on Rails Full Stack Developer",
    type: "full-time",
    startDate: "2024-05",
    endDate: "2024-07",
    location: "Delray Beach, FL",
    remote: false,
    description: [
      "Maintained and upgraded legacy Ruby on Rails applications",
      "Wrote comprehensive tests with Minitest, RSpec, Capybara, and Selenium",
      "Performed application upgrades and dependency updates",
    ],
  },
];
