import ContactHero from "@/components/Hero/ContactHero";
import Map from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { centurion, fourWays } from "@/data/maps";
import { Metadata } from "next";

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
          <CardContent className="grid gap-3 md:grid-cols-2">
            <Map
              address="Payne Rd, Bryanston, Johannesburg, 2191"
              location={fourWays}
            />
            <Map
              address="285 Erasmus Ave, Raslouw AH, Centurion, 0157"
              location={centurion}
            />
          </CardContent>
        </Card>
        {/* </div> */}
      </section>
    </main>
  );
};
export default Contact;
