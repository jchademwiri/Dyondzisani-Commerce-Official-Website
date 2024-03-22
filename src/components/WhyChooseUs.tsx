"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import Link from "next/link";
import { Button } from "./ui/button";
import { MessagesSquare } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="container relative my-5 flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
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
      <div className="relative z-20 flex gap-4 py-6">
        <Link href={"/"}>
          <Button variant={"destructive"} className="flex gap-2">
            <MessagesSquare /> Talk To Us
          </Button>
        </Link>
        <Link href={"/about"}>
          <Button className="flex gap-2">Learn More</Button>
        </Link>
      </div>
    </motion.div>
  );
};
export default WhyChooseUs;