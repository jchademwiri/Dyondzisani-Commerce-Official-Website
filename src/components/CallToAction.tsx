import { email, emailLink, phoneLink, phoneNumber } from "@/data/constrains";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="w-full bg-primary/70 py-12">
      <div className="container max-w-7xl justify-between gap-4 text-white lg:flex lg:grid-cols-2 lg:items-center ">
        <div className="py-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Emphasizing Personalized Learning
          </h3>
          <p className="leading-7">
            Discover How We Can Help Your Child Succeed
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <Link href={phoneLink} className="rounded bg-background/30 px-6 py-2">
            <p className="border-b border-primary py-1 text-lg  font-medium">
              Call Us Now
            </p>
            <span>{phoneNumber}</span>
          </Link>
          <Link href={emailLink} className="rounded bg-background/30 px-6 py-2">
            <p className="border-b border-primary py-1 text-lg font-medium ">
              Email Us Now
            </p>
            <span>{email}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
