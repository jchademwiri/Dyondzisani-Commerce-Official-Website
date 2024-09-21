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
import { ContactForm } from "@/forms";

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
          {/* <Card>
            <CardHeader>
              <CardTitle>Centurion</CardTitle>
            </CardHeader>
            <CardContent>
              <Map
                address="Plot 88 - 285 Erasmus Ave, Raslow AH, Centurion, 0157"
                location={centurion}
              />
            </CardContent>
          </Card> */}
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
          <section className="">
            <ContactForm />
          </section>
        </Card>
      </section>
    </main>
  );
};
export default Contact;
