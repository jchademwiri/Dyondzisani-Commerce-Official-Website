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
  );
};
export default ServiceCard;
