import { Routes, Route } from "react-router-dom";
import { About, Contact, Orders } from "../pages";
import { MainLayout } from "../layout/MainLayout";
import { ProductList } from "../components/ProductList";

export const PageRoutes = () => {
  return (
    <section>
      <MainLayout />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/about/contact/orders" element={<Orders />} />
      </Routes>
    </section>
  );
};
