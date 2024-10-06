import ContactHero from "@/components/Hero/ContactHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Map from "@/components/Map";
import { fourWays } from "@/data/maps";
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
      <section className="container my-6 grid max-w-7xl">
        {/* <div className="grid gap-3"> */}
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
        {/* </div> */}
      </section>
    </main>
  );
};
export default Contact;
