import {
  heAccountingLink,
  heAuditingLink,
  heFinancialManagementLink,
  heTaxationLink,
} from "./constrains";
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
    link: heAccountingLink,
    description:
      "According to companies Acts 2008, all financial statements need to be prepared in accordance with International Financial Reporting Standards. Students will be taught in depth to ensure they understand identification, recognition, initial and subsequent measurement, and presentation and disclosures of these topics.",
  },
  {
    color: "text-yellow-500",
    image: heFinancialManagement,
    title: "Financial Management",
    alt: "financial management lessons",
    link: heFinancialManagementLink,
    description:
      "Financial management consists of Corporate Finance, Management and Costing. Students will be learning the qualitative and quantitative factors in planning, controlling finances of a business. This will add to decision making and the understanding of how shareholders wealth is maximized.",
  },
  {
    color: "text-[#951110]",
    image: heAuditing,
    title: "Auditing",
    alt: "auditing lessons",
    link: heAuditingLink,
    description:
      "Auditors whether the statements under review present a fair and materially correct representation financial statements, resulting in an audit opinion. This will be incorporated with ethics and corporate governance.",
  },

  {
    color: "text-[#EFAD2B]",
    image: heTaxation,
    title: "Taxation",
    alt: "taxation lessons",
    link: heTaxationLink,
    description:
      "South African Tax Act. A legislation that governs how individuals are taxed in South Africa. Students will be exposed to the following: VAT, income tax, estate duty, antiviolence, capital gains tax, case laws employees’ tax and many other tax related topics. ",
  },
];
