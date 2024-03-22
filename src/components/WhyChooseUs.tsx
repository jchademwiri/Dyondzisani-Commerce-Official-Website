import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import Link from "next/link";
import { Button } from "./ui/button";

const WhyChooseUs = () => {
  return (
    <div className="relative my-5 flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <h2 className={cn("relative z-20 text-xl font-semibold  md:text-4xl")}>
        Why Choose Us?
      </h2>
      <p className="relative z-20 mt-2 max-w-[1000px] text-center  leading-7 text-neutral-300">
        We firmly believe that commerce is what truly makes the world go round.
        Irrespective which career or entrepreneurial path your child chooses to
        follow, their path will land them in commerce. An early introduction of
        economics, business and accounting gives your child a distinct tool to
        start exercising daily commerce decisions at their level.
      </p>
      <div className="relative z-20 space-x-4 py-6">
        <Link href={"/about"}>
          <Button>Learn More</Button>
        </Link>
        <Link href={"/"}>
          <Button>Talk To Us</Button>
        </Link>
      </div>
    </div>
  );
};
export default WhyChooseUs;
