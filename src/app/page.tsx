import CallToAction from "@/components/CallToAction";
import { HomeHero } from "@/components/Hero";
import { Services } from "@/components/Sections";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <Services />
      <CallToAction />
    </main>
  );
};
export default Home;
