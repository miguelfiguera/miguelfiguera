export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
}

export const education: Education[] = [
  {
    institution: "UNETI",
    degree: "Associate Degree in Computer Science (Técnico Superior Universitario)",
    startDate: "2023-09",
    endDate: "2028-12",
    ongoing: true,
  },
  {
    institution: "UPEL",
    degree: "Diploma in Technopedagogy",
    startDate: "2020-09",
    endDate: "2020-12",
    ongoing: false,
  },
];
