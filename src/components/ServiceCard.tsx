import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

type ServiceCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  link: string;
  description: string;
  color?: string;
};

const ServiceCard = ({
  image,
  alt,
  title,
  link,
  description,
  color,
}: ServiceCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <Image
          src={image}
          alt={alt}
          priority={true}
          fetchPriority="high"
          className="w-full rounded-t-lg bg-cover object-cover"
        />
        <CardHeader>
          <CardTitle className="hover:text-primary">
            <Link href={link}>{title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </div>
      <CardFooter>
        <Link href={link} className={`${color}`}>
          <Button variant={"link"}>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ServiceCard;
