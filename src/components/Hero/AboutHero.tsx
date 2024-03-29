import { bannerImage, graduate } from "@/data/images";
import Image from "next/image";

import Link from "next/link";
import { Button } from "../ui/button";

const AboutHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/glasses-bg.jpg')] bg-cover bg-no-repeat object-cover ">
      <div className="bg-background/80">
        <div className="container  flex min-h-[80vh] max-w-7xl  items-center gap-6  py-4 md:py-0">
          <div className="max-w-4xl  ">
            <h1 className="text-4xl font-bold sm:text-5xl ">
              Who is <em className="text-primary"> Dyondzisani Commerce</em> ?
            </h1>
            <p className=" text-xl leading-7 [&:not(:first-child)]:my-6">
              Dyondzisani is a Xitsonga word that addresses a group of people to
              teach. The company was founded by Teleni Mellisah Chauke, an
              accountant, in 2022 while providing extra accounting lessons to
              learner from Grade 8-12. The company grew in providing all
              commerce subjects Accounting, Business Studies and Economics for{" "}
              <em className="font-semibold text-primary"> IEB and CAPS</em>.
            </p>
            <div className="flex gap-4">
              <Link href={"#whychooseus"} className="hover:bg-destructive">
                <Button className="flex gap-2">Why Choose Us?</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"destructive"} className="flex gap-2">
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="h-auto">
            <Image
              src={bannerImage}
              alt="hero section image"
              className="flip h-full w-full rounded-md object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
