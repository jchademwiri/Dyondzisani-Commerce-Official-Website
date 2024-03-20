import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { accounting } from "@/data/images";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <Card className="">
      <Image
        src={accounting}
        alt="Accounting-lessons"
        className="w-full rounded-t-lg bg-cover object-cover"
      />
      <CardHeader>
        <CardTitle className="hover:text-primary">
          <Link href={"/"}>Accounting</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        Accounting is the process of recording financial transactions and
        information that take place in a business. Learners will be exposed to
        an in depth understanding of financial and managerial accounting, the
        importance corporate governance, Ethics and Auditing.{" "}
      </CardContent>
    </Card>
  );
};
export default ServiceCard;
