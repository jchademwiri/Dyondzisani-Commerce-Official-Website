"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bolt, MessagesSquare } from "lucide-react";

const HomeHero = () => {
  return (
    <div className="container relative mx-auto flex min-h-[100vh] flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      <div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-20 flex flex-col items-center justify-center gap-4 px-4"
        >
          <div className="text-center text-3xl font-bold text-foreground md:text-7xl">
            Dyondzisani <span className="text-accent">Commerce</span>
          </div>
          <div className="py-4 text-base font-extralight text-foreground md:text-4xl">
            We have a heart for teaching
          </div>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex gap-4"
          >
            <Link href={"/"} className="hover:bg-destructive">
              <Button size={"lg"} className="flex gap-2">
                <MessagesSquare />
                Let&apos;s Chat Now
              </Button>
            </Link>
            <Link href={"#services"}>
              <Button
                size={"lg"}
                variant={"destructive"}
                className="flex gap-2"
              >
                <Bolt />
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
export default HomeHero;
