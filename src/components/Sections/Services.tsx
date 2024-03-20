import Image from "next/image";
import ServiceCard from "../ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { accounting } from "@/data/images";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="mx-auto  min-h-[50vh] w-[80%] max-w-6xl ">
      <header className="mx-auto my-4 grid w-2/3 place-items-center text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Our Services
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Dyondzisani Commerce strive for academic excellence in commercial
          subjects for Grade 8-12 IEB and CAPS. This will be achieved through
          providing classes and tutoring sessions to learners who wish to obtain
          academic excellence.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
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
      </div>
    </section>
  );
};
export default Services;
