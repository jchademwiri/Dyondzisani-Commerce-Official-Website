import Link from "next/link";
import { Bolt, MessagesSquare } from "lucide-react";
import { Button } from "../ui/button";
import { whatsapplink } from "@/data/constrains";
// import { BackgroundBeams } from "../ui/background-beams";

const HomeHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/school-boy.webp')] bg-cover bg-center bg-no-repeat object-cover ">
      <div className="bg-background/80">
        <div className="container flex min-h-[80vh] max-w-7xl  items-center gap-6  py-4 md:py-0">
          <div className="md:max-w-3xl">
            <h1 className="text-3xl font-bold sm:text-5xl ">
              Personalized Tutoring for Business & Economics Success
            </h1>
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
              <Link href={"#services"}>
                <Button variant={"destructive"} className="flex gap-2">
                  <Bolt />
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          {/* <BackgroundBeams /> */}
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
