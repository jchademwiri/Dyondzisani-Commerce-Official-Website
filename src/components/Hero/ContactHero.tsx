import Link from "next/link";
import { Bolt, MessagesSquare } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContactDetailsCard from "../ContactDetailsCard";
import { whatsapplink } from "@/data/constrains";

const ContactHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/school-boy.webp')] bg-cover bg-center bg-no-repeat object-cover ">
      <div className="bg-background/80">
        <div className="container grid min-h-[80vh] max-w-7xl place-content-center gap-6 py-4 md:grid-cols-2 md:py-0">
          <div className="self-center">
            <h1 className="text-4xl font-bold sm:text-5xl ">Contact Hero</h1>
            <p className=" text-xl leading-7 [&:not(:first-child)]:my-6">
              We&apos;re BCom experts, with a teacher&apos;s heart. Get
              one-on-one tutoring tailored to your child&apos;s needs and
              curriculum ({" "}
              <em className="font-semibold text-primary">IEB and CAPS</em> ).
            </p>
            <div className="flex gap-4">
              <Link
                href={whatsapplink}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-destructive"
              >
                <Button className="flex gap-2">
                  <MessagesSquare />
                  Let&apos;s Chat Now
                </Button>
              </Link>
              <Link href={"#enquire"}>
                <Button variant={"destructive"} className="flex gap-2">
                  <Bolt />
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-auto">
            {/* <Image
          src={bannerImage}
          alt="hero section image"
          className="flip h-full w-full rounded-md object-cover "
        /> */}
            <Card className=" overflow-hidden bg-background/30">
              <CardHeader>
                <CardTitle>Contact Us Today</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contact us today using the below contact details to enroll
                  your student.
                </CardDescription>
                {/* Contact details Card  */}
                <ContactDetailsCard />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
