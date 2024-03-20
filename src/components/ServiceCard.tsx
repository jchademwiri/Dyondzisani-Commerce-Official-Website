"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

type ServiceCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  link: string;
  description: string;
};

const ServiceCard = ({
  image,
  alt,
  title,
  link,
  description,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <Card className="">
        <Image
          src={image}
          alt={alt}
          className="w-full rounded-t-lg bg-cover object-cover"
        />
        <CardHeader>
          <CardTitle className="hover:text-primary">
            <Link href={link}>{title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </motion.div>
  );
};
export default ServiceCard;
