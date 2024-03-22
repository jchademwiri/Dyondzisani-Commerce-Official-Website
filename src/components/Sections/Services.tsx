"use client";
import Image from "next/image";
import ServiceCard from "../ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { accounting, business, economics } from "@/data/images";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="container max-w-6xl py-5 ">
      <motion.header
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mx-auto my-4 grid place-items-center text-center lg:w-2/3"
      >
        <motion.h2
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="scroll-m-20 border-b  pb-2 text-5xl font-semibold tracking-tight first:mt-0"
        >
          Our Services
        </motion.h2>
        <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
          Dyondzisani Commerce strive for academic excellence in commercial
          subjects for Grade 8-12 IEB and CAPS. This will be achieved through
          providing classes and tutoring sessions to learners who wish to obtain
          academic excellence.
        </p>
      </motion.header>
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ServiceCard
          color="text-destructive"
          image={accounting}
          title="Accounting"
          alt="accounting lessons"
          link="/accounting"
          description="Accounting is the process of recording financial transactions and information that take place in a business. Learners will be exposed to an in depth understanding of financial and managerial accounting, the importance corporate governance, Ethics and Auditing."
        />

        <ServiceCard
          color="text-primary"
          image={business}
          title="Business Studies"
          alt="business studies lessons"
          link="/business"
          description="Business studies is board study that focuses on various aspects of running a business. It combines economics and accounting with more emphasis on management and creative strategy."
        />

        <ServiceCard
          color="text-yellow-500"
          image={economics}
          title="Economics Studies"
          alt="economics studies lessons"
          link="/economics"
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
      </motion.section>
    </section>
  );
};
export default Services;
