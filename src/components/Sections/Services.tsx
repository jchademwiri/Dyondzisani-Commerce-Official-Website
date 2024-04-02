import Image from "next/image";
import ServiceCard from "../ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { accounting, business, economics } from "@/data/images";
import Link from "next/link";
import { accountsLink, businessLink, economicsLink } from "@/data/constrains";

const Services = () => {
  return (
    <section id="services" className="container max-w-7xl py-5 ">
      <header className="my-4 grid md:place-items-center md:text-center">
        <h2 className="scroll-m-20 border-b  pb-2 text-5xl font-semibold tracking-tight first:mt-0">
          Our Services
        </h2>
        <p className="max-w-4xl text-lg leading-7 [&:not(:first-child)]:mt-6">
          Dyondzisani Commerce strive for academic excellence in commercial
          subjects for{" "}
          <em className="font-semibold text-primary">
            Grade 8-12 IEB and CAPS
          </em>
          . This will be achieved through providing classes and tutoring
          sessions to learners who wish to obtain academic excellence.
        </p>
      </header>
      <section className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          color="text-destructive"
          image={accounting}
          title="Accounting"
          alt="accounting lessons"
          link={accountsLink}
          description="Accounting is the process of recording financial transactions that take place in  a business. Learners will be taught an in-depth understanding of financial and management accounting. This will also be incorporated with auditing, ethics and corporate governance."
        />

        <ServiceCard
          color="text-primary"
          image={business}
          title="Business Studies"
          alt="business studies lessons"
          link={businessLink}
          description="Business studies is a branch of social sciences that explores factors such as finance, strategy, legislation, economics and management. Learners will be learners how these factors affect a business."
        />

        <ServiceCard
          color="text-yellow-500"
          image={economics}
          title="Economics Studies"
          alt="economics studies lessons"
          link={economicsLink}
          description="Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The focus is analysing the choices that individuals, businesses, governments, and global economy make to allocate limited resources."
        />

        <Card className="hidden sm:block lg:hidden ">
          <Image
            src={accounting}
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
            information that take place in a business. Learners will be exposed
            to an in depth understanding of financial and managerial accounting,
            the importance corporate governance, Ethics and Auditing.{" "}
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
export default Services;
