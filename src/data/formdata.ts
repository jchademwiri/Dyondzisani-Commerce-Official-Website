const basicEducationGrades = [
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

const higherEducationModules = [
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

const higherEducationYearsOfStudy = [
  {
    id: "firstYear",
    label: "1st Year",
  },
  {
    id: "secondYear",
    label: "2nd Year",
  },
  {
    id: "thirdYear",
    label: "3rd Year",
  },
  {
    id: "fourthYear",
    label: "4th Year",
  },
] as const;

export {
  basicEducationGrades,
  basicEducationSubjects,
  higherEducationModules,
  higherEducationYearsOfStudy,
};
