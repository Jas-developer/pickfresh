import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Footer } from "./layouts/footer/Footer";
import Navbar from "./layouts/header/Navbar";

import { About } from "./layouts/about/About";
import { Products } from "./layouts/ocassion/Products";
import { OrderStatus } from "./layouts/orderstatus/OrderStatus";
import { BuyInfo } from "./components/pInfo/BuyInfo";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="About" element={<About />} />
        <Route path="order" element={<OrderStatus />} />
        <Route path="product" element={<Products />} />
        <Route path="buyinfo" element={<BuyInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
