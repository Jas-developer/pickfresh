import { JustForYou, Smile } from "../components/SmallComponents";
import { HeroSection } from "./hero/Hero";

export const MainLayout = () => {
  return (
    <div className="lg:mx-28 md:mx-12 mx-6 ">
      <HeroSection />
      <Smile />
      <JustForYou />
    </div>
  );
};
