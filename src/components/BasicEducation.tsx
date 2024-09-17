import ServiceCard from "./ServiceCard";
import { beAccounting, beBusiness, beEconomics } from "@/data/images";
import { accountsLink, businessLink, economicsLink } from "@/data/constrains";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    color: "text-destructive",
    image: beAccounting,
    title: "Accounting",
    alt: "accounting lessons",
    link: accountsLink,
    description:
      "Accounting is the process of recording financial transactions that take place in  a business. Learners will be taught an in-depth understanding of financial and management accounting. This will also be incorporated with auditing, ethics and corporate governance.",
  },
  {
    color: "text-primary",
    image: beBusiness,
    title: "Business Studies",
    alt: "business studies lessons",
    link: businessLink,
    description:
      "Business studies is a branch of social sciences that explores factors such as finance, strategy, legislation, economics and management. Learners will be learning how these factors affect a business.",
  },
  {
    color: "text-yellow-500",
    image: beEconomics,
    title: "Economics Studies",
    alt: "economics studies lessons",
    link: economicsLink,
    description:
      "Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The focus is analysing the choices that individuals, businesses, governments, and global economy make to allocate limited resources.",
  },
];

export const BasicEducation = () => {
  return (
    <section className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCards.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}

      <Card className="hidden sm:block lg:hidden">
        <Image
          src={beAccounting}
          alt="Accounting-lessons"
          className="w-full rounded-t-lg bg-cover object-cover"
        />
        <CardHeader>
          <CardTitle className="hover:text-primary">
            <Link href={"/"}>Accounting</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          Accounting is the process of recording financial transactions and
          information that take place in a business. Learners will be exposed to
          an in depth understanding of financial and managerial accounting, the
          importance corporate governance, Ethics and Auditing.{" "}
        </CardContent>
      </Card>
    </section>
  );
};
