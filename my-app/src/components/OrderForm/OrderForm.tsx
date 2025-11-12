import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const OrderForm = ({ isOpen, onClose, cartItems, totalPrice, addOrder, clearCart }) => {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen && !isSubmitted) {
      setDeliveryMethod("pickup");
      setAddress("");
      setPaymentMethod("card");
    }
  }, [isOpen, isSubmitted]);

  const handleSubmit = () => {
    if (deliveryMethod === "delivery" && !address.trim()) {
      alert("Введите адрес доставки!");
      return;
    }

    addOrder({
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: totalPrice,
      deliveryMethod,
      address: deliveryMethod === "pickup" ? "Адрес магазина" : address,
      paymentMethod,
    });

  setIsSubmitted(true);
  setTimeout(() => { 
    onClose(); 
    clearCart();
    setIsSubmitted(false);
  }, 1000);
};

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md duration-300">
      <div className="bg-black text-white border-2 border-gray-300 p-6 text-center rounded-[50px] shadow-lg w-[450px] relative transition-transform duration-300 scale-95 group orderform">
        <button onClick={onClose} className="absolute top-6 right-8 hover:text-black transition">
          <img src="/src/components/OrderForm/cross_white.svg" alt="Закрыть" className="w-[30px] h-[30px]" />
        </button>
        <h2 className="text-3xl font-semibold my-8 mb-3 text-center">Оформление заказа</h2>
        <p className="text-sm text-center mb-2">Выберите способ доставки:</p>
        <div className="flex justify-center gap-4 mb-3">
          <label>
            <input type="radio" name="delivery" value="pickup" className="mx-1" checked={deliveryMethod === "pickup"} onChange={() => setDeliveryMethod("pickup")} />
            Самовывоз
          </label>
          <label>
            <input type="radio" name="delivery" value="delivery" className="mx-1" checked={deliveryMethod === "delivery"} onChange={() => setDeliveryMethod("delivery")} />
            Доставка
          </label>
        </div>
        {deliveryMethod === "delivery" && (
          <input type="text" placeholder="Введите адрес" value={address}  onChange={(e) => setAddress(e.target.value)}
            className="w-full border px-5 py-2 rounded-[50px] mb-3" />
        )}
        <p className="text-sm text-center mb-2">Выберите способ оплаты:</p>
        <div className="flex justify-center gap-4 mb-3">
          <label>
            <input type="radio" name="payment" value="card" className="mx-1" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
            Карта
          </label>
          <label>
            <input type="radio" name="payment" value="cash" className="mx-1" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} />
            Наличные
          </label>
        </div>
        <p className="text-lg font-semibold text-center mb-3">Сумма: {totalPrice} BYN</p>
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-white dark:text-black dark:bg-white dark:border-white text-sm mb-3 ordershortlist">
          {cartItems.map((item) => (
            <p key={item.id}>{item.title} x {item.quantity} — {item.price * item.quantity} BYN</p>
          ))}
        </div>
        <Button onClick={handleSubmit} variant="order">
          {isSubmitted ? "Оформлено" : "Оформить заказ"}
        </Button>
      </div>
    </div>
  ) : null;
};

export default OrderForm;
