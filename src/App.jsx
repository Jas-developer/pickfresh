import { MainLayout } from "./layouts/MainLayout";
import { Footer } from "./layouts/footer/Footer";
import { Navbar } from "./layouts/header/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <MainLayout />
      </div>
      <Footer />
    </>
  );
};
