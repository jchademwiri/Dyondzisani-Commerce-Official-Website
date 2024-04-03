import Link from "next/link";
import { Button } from "../ui/button";

const AboutHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/glasses-bg.jpg')] bg-cover bg-center bg-no-repeat object-cover">
      <div className="bg-background/80">
        <div className="container flex min-h-[80vh] max-w-7xl items-center gap-6  py-4 md:py-0">
          <div className="md:max-w-3xl">
            <h1 className="text-4xl font-bold sm:text-5xl ">
              Who is <em className="text-primary"> Dyondzisani Commerce</em>?
            </h1>
            <p className=" text-xl leading-7 [&:not(:first-child)]:my-6">
              Dyondzisani meaning{" "}
              <em className="font-semibold text-primary">Teach</em> in Xitsonga,
              has been transforming learning for high school learners (
              <em className="font-semibold text-primary">IEB and CAPS</em>)
              since 2022. Our educational service is commerce centered by
              providing accounting , business studies and economics teaching
              services. With personalized and practical learning at our core, we
              empower learners to understand and excel.{" "}
              <Link
                href={"/contact#enquire"}
                className="font-semibold text-primary hover:text-destructive"
              >
                Join us on the journey of theoretical and practical commerce
                success!
              </Link>
            </p>
            <div className="flex  flex-col gap-4 xs:flex-row">
              <Link href={"#whychooseus"} className="hover:bg-destructive">
                <Button className="flex w-full gap-2">Why Choose Us?</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"destructive"} className="flex w-full gap-2">
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
