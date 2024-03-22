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

const subjects = [
  {
    id: "accounts",
    label: "Accounts",
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

export { grades, subjects };
