import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicEducation } from "../BasicEducation";
import { HigherEducation } from "../HigherEducation";

const Services = () => {
  return (
    <section id="services" className="container mx-auto max-w-7xl py-5">
      <header className="my-4 grid md:place-items-center md:text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0">
          Our Services
        </h2>
        <p className="max-w-4xl text-lg leading-7 [&:not(:first-child)]:mt-6">
          Dyondzisani Commerce strive for academic excellence in commercial
          subjects for{" "}
          <em className="font-semibold text-primary">
            Grade 8-12 IEB and CAPS
          </em>
          . This will be achieved through providing classes and tutoring
          sessions to learners who wish to obtain academic excellence.
        </p>
      </header>
      <section className="grid place-items-center">
        <Tabs defaultValue="basiceducation" className="max-w-5xl">
          <TabsList className="grid w-full grid-cols-2">
            {/* bg-primary/20 */}
            <TabsTrigger value="basiceducation" className="font-semibold">
              Basic Education
            </TabsTrigger>
            <TabsTrigger value="highereducation" className="font-semibold">
              Higher Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="basiceducation">
            <BasicEducation />
          </TabsContent>
          <TabsContent value="highereducation">
            <HigherEducation />
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
};
export default Services;
