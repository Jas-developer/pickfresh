import { JustForYou, Smile } from "../components/SmallComponents";
import { HeroSection } from "./hero/Hero";

export const MainLayout = () => {
  return (
    <div className="lg:mx-28 md:mx-12 mx-6 ">
      <HeroSection say="The freshiest choice for love ones." />
      <Smile
        text="BRIGHTEN UP HER SMILE"
        say="  Say it with flowers: The perfect way to show you care."
      />
      <JustForYou say="JUST FOR YOU" />
    </div>
  );
};
