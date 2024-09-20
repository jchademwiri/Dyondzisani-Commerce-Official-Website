import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

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
    <Card className={`flex flex-col justify-between`}>
      <div>
        <Image
          src={image}
          alt={alt}
          priority={true}
          fetchPriority="high"
          className="w-full rounded-t-lg bg-cover object-cover"
        />
        <CardHeader>
          <CardTitle>
            <Link href={link}>{title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </div>
      <CardFooter>
        <Link
          href="/enrol"
          className={`${color} transition-opacity duration-200 hover:opacity-80`}
        >
          Enrol Now
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ServiceCard;
