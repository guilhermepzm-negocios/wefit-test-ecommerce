import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import NotFound from "../pages/NotFound";

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/:scrollRefId" element={<Cart />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RootRoutes;
