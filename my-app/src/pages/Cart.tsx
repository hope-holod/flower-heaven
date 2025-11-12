
import useCart from "../hooks/useCart";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import React, { useState } from "react";
import OrderForm from "../components/OrderForm/OrderForm";

export default function CartPage({ addOrder }) { 
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart(); 
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <Layout>
       <section className="py-20 bg-black text-white">
        <SectionTitle title="КОРЗИНА" />
        <div className="flex justify-between">
      
      <div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Корзина пуста</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((product) => (
              <li key={product.id} className="flex items-center justify-between border-b pb-4 mb-4 gap-15">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title} className="w-35 object-cover rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-lg font-bold">{product.price} BYN</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(product.id, product.quantity - 1)}>➖</button>
                  <span className="mx-3 text-lg">{product.quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(product.id, product.quantity + 1)}>➕</button>
                </div>

                <p className="text-2xl font-semibold">{product.price * product.quantity} BYN</p>
                <button onClick={() => removeFromCart(product.id)}>
                  <img src="src/assets/trash.svg" alt="Удалить" className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border border-white p-10 rounded-[50px] shadow-lg self-start">
        <h2 className="text-2xl font-semibold mb-4">Итого</h2>
        <p className="text-3xl font-bold mb-4">{totalPrice} BYN</p>

        <h3 className="text-md font-bold mb-2">Товары:</h3>
        <ul className="text-sm text-gray-600 mb-4">
          {cartItems.map((product) => (
            <li key={product.id}>{product.title} x {product.quantity} — {product.price * product.quantity} BYN</li>
          ))}
        </ul>

        <Button variant="order" onClick={() => setIsOrderOpen(true)}>
          Заказать
        </Button>
      </div>
      </div>
      </section>

      <OrderForm 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
        cartItems={cartItems} 
        totalPrice={totalPrice} 
        addOrder={addOrder} 
        clearCart={clearCart}
      />
    </Layout>
  );
}

