
import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import AuthForm from "../components/AuthForm/AuthForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";


interface User {
  name: string;
  email: string;
  phone: string;
}

export default function Account({ orders }) {
  const [user, setUser] = useState<User | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(storedUser);
  }, []);

  return (
    <Layout>
      <section className="pt-10 bg-black text-white">
        <div className="container mx-auto px-6">

          {!user ? (
            isRegistering ? (
              <RegisterForm onRegister={(formData) => {
                localStorage.setItem("user", JSON.stringify(formData));
                setIsRegistering(false);
                setUser(formData);
              }} setIsRegistering={setIsRegistering} />
            ) : (
              <AuthForm onLogin={(email, password) => {
                const storedUser = JSON.parse(localStorage.getItem("user") || "null");
                if (storedUser && storedUser.email === email && storedUser.password === password) {
                  setUser(storedUser);
                } else {
                  alert("Неправильный email или пароль!");
                }
              }} setIsRegistering={setIsRegistering} />
            )
          ) : (
            <>
            <SectionTitle title="Личный кабинет" />
            <div className="flex gap-6 p-6">
              <div className="flex flex-col border border-white rounded-[50px]  p-6 px-10 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-lg mt-6 font-bold"> {user.name}</p>
                  <p className="text-lg"> {user.email}</p>
                </div>
                <Button  onClick={() => { 
                  localStorage.removeItem("user"); 
                  setUser(null); 
                }}>
                  Выйти
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex gap-4 mb-6">
                  <Button className="flex-1">
                    <Link to="/cart" className="block w-full h-full text-center py-3">Корзина</Link>
                  </Button>

                  <Button className="flex-1 bg-purple-500">
                    <Link to="/favourites" className="block w-full h-full text-center py-3">Избранное</Link>
                  </Button>
                </div>

                <div className="p-2">
                      <h2 className="text-xl font-bold mb-4">Мои заказы:</h2>
                      {orders.length === 0 ? (
                        <p className="text-gray-600">У вас пока нет заказов</p>
                      ) : (
                        <ul className="space-y-4">
                          {orders.map((order) => (
                            <li key={order.id} className="border border-[#E6528A] p-7 rounded-[50px]">
                              <p className="text-lg font-semibold">🛒 Заказ #{order.id}</p>
                              <p className="text-gray-600">Дата: {order.date}</p>
                              <p className="text-gray-600">Сумма: {order.total} BYN</p>
                              <ul className="mt-2 text-sm text-gray-700">
                                {order.items.map((item) => (
                                  <li key={item.id}>
                                    {item.title} x {item.quantity} — {item.price * item.quantity} BYN
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
