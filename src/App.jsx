import { MainLayout } from "./layouts/MainLayout";
import { Navbar } from "./layouts/header/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <MainLayout />
      </div>
    </>
  );
};
