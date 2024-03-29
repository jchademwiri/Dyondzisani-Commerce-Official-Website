import CallToAction from "@/components/CallToAction";
import { HomeHero } from "@/components/Hero";
import { Services } from "@/components/Sections";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <Services />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
};
export default Home;
