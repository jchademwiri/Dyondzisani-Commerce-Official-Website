import ContactHero from "@/components/Hero/ContactHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Map from "@/components/Map";
import { centurion, fourWays } from "@/data/maps";
import { Metadata } from "next";
import BasicEducationEnrolmentForm from "@/forms/BasicEducationEnrolmentForm";
import HigherEducationEnrolmentForm from "@/forms/HigherEducationEnrolmentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicEducation } from "@/components/BasicEducation";

export const metadata: Metadata = {
  title: "Contact",
  description: "Dyondzisani Commerce Official Website",
  alternates: {
    canonical: `/contact`,
  },
};

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <section className="container grid max-w-7xl gap-4 py-5 md:grid-cols-2">
        <div className="grid gap-3">
          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find The nearest location for your convinience.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Centurion</CardTitle>
            </CardHeader>
            <CardContent>
              <Map
                address="Plot 88 - 285 Erasmus Ave, Raslow AH, Centurion, 0157"
                location={centurion}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sandton</CardTitle>
            </CardHeader>
            <CardContent>
              <Map
                address="Payne Rd, Bryanston, Johannesburg, 2191"
                location={fourWays}
              />
            </CardContent>
          </Card>
        </div>
        <Card id="enquire" className="bg-background/70">
          <CardHeader>
            <CardTitle>Contact Enquiry Form</CardTitle>
            <CardDescription>
              Fill in the form below to enquire about our services.
            </CardDescription>
          </CardHeader>
          {/* Contact Form  */}
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
                <BasicEducationEnrolmentForm />
              </TabsContent>
              <TabsContent value="highereducation">
                <HigherEducationEnrolmentForm />
              </TabsContent>
            </Tabs>
          </section>
        </Card>
        {/* <section className="grid gap-4 md:col-span-2 md:grid-cols-2"> */}
      </section>
    </main>
  );
};
export default Contact;

{
  /* <div className="border border-primary bg-destructive ">
<Card>
  <CardHeader>
    <CardTitle>Contact Us Today</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>
      Contact us today using the below contact details to enroll your
      student.
    </CardDescription>
  </CardContent>

  <Card>
    <CardHeader>
      <CardTitle>Raslaouw / Centurion</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        285 Erasmus Ave, Raslow AH, Centurion, 0157
      </CardDescription>
      <ContactMap />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Four Ways</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        address 2 in four ways, Centurion, 0001
      </CardDescription>
    </CardContent>
  </Card>
</Card> 
</div>
*/
}
