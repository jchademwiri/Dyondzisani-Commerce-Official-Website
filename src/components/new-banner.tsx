import { bannerImage, graduate } from "@/data/images";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bolt, MessagesSquare } from "lucide-react";

const NewBanner = () => {
  return (
    <section className="container grid min-h-[80vh] place-content-center gap-6 py-4 md:grid-cols-2 md:py-0">
      <div className="self-center">
        <h1 className="text-4xl font-bold sm:text-5xl ">
          Personalized Tutoring for Business & Economics Success
        </h1>
        <p className=" text-xl leading-7 [&:not(:first-child)]:my-6">
          We&apos;re BCom experts, with a teacher&apos;s heart. Get one-on-one
          tutoring tailored to your child&apos;s needs and curriculum ({" "}
          <em className="font-semibold text-primary">IEB and CAPS</em> ).
        </p>
        <div className="flex gap-4">
          <Link href={"/"} className="hover:bg-destructive">
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
      <div className="h-auto">
        <Image
          src={bannerImage}
          alt="hero section image"
          className="flip h-full w-full rounded-md object-cover "
        />
      </div>
    </section>
  );
};
export default NewBanner;
