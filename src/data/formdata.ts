const grades = [
  {
    id: "Grade8",
    label: "Grade 8",
  },
  {
    id: "Grade9",
    label: "Grade 9",
  },
  {
    id: "Grade10",
    label: "Grade 10",
  },
  {
    id: "Grade11",
    label: "Grade 11",
  },
  {
    id: "Grade12",
    label: "Grade 12",
  },
] as const;

const basicEducationSubjects = [
  {
    id: "accounting",
    label: "Accounting",
  },
  {
    id: "businessStudies",
    label: "Business Studies",
  },
  {
    id: "ecomomics",
    label: "Economics",
  },
] as const;

const higherEducationSubjects = [
  {
    id: "accounting",
    label: "Accounting",
  },
  {
    id: "financialManagement",
    label: "Financial Management",
  },
  {
    id: "auditing",
    label: "Auditing",
  },
  {
    id: "taxation",
    label: "Taxation",
  },
] as const;

export { grades, basicEducationSubjects, higherEducationSubjects };
