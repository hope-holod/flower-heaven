
import { useState, useEffect, useCallback } from "react";
import { Product } from "../types/Product";

export default function useCart() {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product: Product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      const updatedCart = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCart);
    }
  }, [cartItems]);

  const removeFromCart = useCallback((id: number) => {
    setCartItems(cartItems.filter((product) => product.id !== id));
  }, [cartItems]);

  const updateQuantity = useCallback((id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map((product) => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCartItems(updatedCart);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem("cart");
  }, []); 

  return { cartItems, addToCart, removeFromCart, updateQuantity, clearCart };
}
