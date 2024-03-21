"use client";
import { motion } from "framer-motion";
import HomeHero from "@/components/HomeHero";
import { Services } from "@/components/Sections";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { accounting } from "@/data/images";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <Services />
    </main>
  );
};
export default Home;
