import { Button } from "@/components/ui/button";
import { whatsapplink } from "@/data/constrains";
import { Bolt, MessagesSquare } from "lucide-react";
import Link from "next/link";
// import { BackgroundBeams } from "../ui/background-beams";

const HomeHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/school-boy.webp')] bg-cover bg-center bg-no-repeat object-cover">
      <div className="bg-background/80">
        <div className="container flex min-h-[80vh] max-w-7xl items-center gap-6 py-4 md:py-0">
          <div className="md:max-w-3xl">
            <h1 className="text-2xl font-bold sm:text-5xl">
              Dyondzisani Commerce
              <br />
              <span className="text-xl font-normal sm:text-2xl">
                BCom Experts, Yet Teachers at heart
              </span>
            </h1>

            <p className="text-xl leading-7 [&:not(:first-child)]:my-6">
              Dyondzisani Commerce <b>(DC)</b> is an educational organization
              that focuses on providing tutorial services and extra classes. We
              specialize in teaching commercial subjects from{" "}
              <span className="font-semibold text-primary">
                {" "}
                Basic Education{" "}
              </span>{" "}
              (IEB and CAPS) to{" "}
              <span className="font-semibold text-primary">
                {" "}
                Higher education{" "}
              </span>{" "}
              (All commerce related modules).
            </p>

            {/* TODO: Update screen size  */}
            <div className="flex flex-col gap-4 xs:flex-row">
              <Link
                href={whatsapplink}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <Button className="flex w-full gap-2">
                  <MessagesSquare />
                  Let&apos;s Chat Now
                </Button>
              </Link>
              <Link href={"#services"}>
                <Button variant={"destructive"} className="flex w-full gap-2">
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
