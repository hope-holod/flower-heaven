
import { Routes, Route } from "react-router-dom";
import { Product } from "../types/Product";
import Home from "../pages/Home";
import About from "../pages/About";
import Reviews from "../pages/Reviews";
import Contacts from "../pages/Contacts";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Favourites from "../pages/Favourites";
import ProductPage from "../pages/ProductPage";
import { useState} from "react";
import { Order } from "../types/Order";

export default function AppRoutes() { 
  const [orders, setOrders] = useState<Order[]>([]);
  const addOrder = (newOrder: Order) => {
  setOrders([...orders, newOrder]);
  localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));
};
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/account" element={<Account orders={orders} />} />
        <Route path="/favourites" element={<Favourites />} /> 
        <Route path="/cart" element={<Cart addOrder={addOrder} />} />
        <Route path="/product/:id" element={<ProductPage />} /> 
      </Routes>
  );
}