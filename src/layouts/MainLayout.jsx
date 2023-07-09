import {
  JustForYou,
  SaleProducts,
  SaleSection,
  Smile,
} from "../components/SmallComponents";
import { HeroSection } from "./hero/Hero";

export const MainLayout = () => {
  return (
    <section>
      <div className="lg:mx-28 md:mx-12 mx-6">
        <HeroSection say="The freshiest choice for love ones." />
        <SaleSection
          title="DEAL OF THE DAY"
          say="We are currently on sale and our local florist will create
          one-of-a-kind arrangement using the freshiest seasonal flowers
          available."
        />
        <SaleProducts season=" SEASONAL FLOWERS .." />
        <Smile
          text="BRIGHTEN UP HER SMILE"
          say="  Say it with flowers: The perfect way to show you care."
        />
        <JustForYou say="JUST FOR YOU" />
      </div>
    </section>
  );
};
