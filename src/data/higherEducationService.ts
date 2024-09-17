import { accountsLink, businessLink, economicsLink } from "./constrains";
import {
  heAccounting,
  heAuditing,
  heFinancialManagement,
  heTaxation,
} from "./images";
export const higherEducationService = [
  {
    color: "text-destructive",
    image: heAccounting,
    title: "Accounting",
    alt: "accounting lessons",
    link: accountsLink,
    description:
      "Accounting is the process of recording financial transactions that take place in  a business. Learners will be taught an in-depth understanding of financial and management accounting. This will also be incorporated with auditing, ethics and corporate governance.",
  },
  {
    color: "text-primary",
    image: heAuditing,
    title: "Auditing",
    alt: "auditing lessons",
    link: businessLink,
    description:
      "Business studies is a branch of social sciences that explores factors such as finance, strategy, legislation, economics and management. Learners will be learning how these factors affect a business.",
  },
  {
    color: "text-yellow-500",
    image: heFinancialManagement,
    title: "Financial Management",
    alt: "financial management lessons",
    link: economicsLink,
    description:
      "Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The focus is analysing the choices that individuals, businesses, governments, and global economy make to allocate limited resources.",
  },
  {
    color: "text-green-500",
    image: heTaxation,
    title: "Taxation",
    alt: "taxation lessons",
    link: economicsLink,
    description:
      "Taxation is a crucial aspect of financial planning and management. This course covers various types of taxes, tax laws, and strategies for effective tax planning. Students will learn about income tax, corporate tax, and international taxation principles.",
  },
];
