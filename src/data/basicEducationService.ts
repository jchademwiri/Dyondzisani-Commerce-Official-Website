import {
  beAccountingLink,
  beBusinessLink,
  beEconomicsLink,
} from "./constrains";
import { beAccounting, beBusiness, beEconomics } from "./images";

export const basicEducationService = [
  {
    color: "text-destructive",
    image: beAccounting,
    title: "Accounting",
    alt: "accounting lessons",
    link: beAccountingLink,
    description:
      "Accounting is the process of recording financial transactions that take place in  a business. Learners will be taught an in-depth understanding of financial and management accounting. This will also be incorporated with auditing, ethics and corporate governance.",
  },
  {
    color: "text-primary",
    image: beBusiness,
    title: "Business Studies",
    alt: "business studies lessons",
    link: beBusinessLink,
    description:
      "Business studies is a branch of social sciences that explores factors such as finance, strategy, legislation, economics and management. Learners will be learning how these factors affect a business.",
  },
  {
    color: "text-yellow-500",
    image: beEconomics,
    title: "Economics Studies",
    alt: "economics studies lessons",
    link: beEconomicsLink,
    description:
      "Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The focus is analysing the choices that individuals, businesses, governments, and global economy make to allocate limited resources.",
  },
];
