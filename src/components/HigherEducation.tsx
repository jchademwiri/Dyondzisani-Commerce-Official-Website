import ServiceCard from "./ServiceCard";
import {
  heAccounting,
  heAuditing,
  heFinancialManagement,
  heTaxation,
} from "@/data/images";
import { accountsLink, businessLink, economicsLink } from "@/data/constrains";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { higherEducationService } from "@/data/services";

export const HigherEducation = () => {
  return (
    <section className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {higherEducationService.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}

      <Card className="hidden sm:block lg:hidden">
        <Image
          src={heAccounting}
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
