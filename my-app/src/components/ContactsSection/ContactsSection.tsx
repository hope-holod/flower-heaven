import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function ContactsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-5 bg-black text-center dark:bg-white dark:text-black">
      <SectionTitle title="КОНТАКТЫ" />
      <div className="flex justify-center items-center gap-5">
        <div className="flex-shrink-0">
          <img src="/src/components/Contactssection/карта.png" alt="Карта" className="w-full h-auto rounded-[50px] shadow-lg" />
        </div>
        <div className="max-w-[300px] text-left">
          <p className="mb-4">Адрес:<br/>Минск, ул. Неманская, 25</p>
          <p className="mb-4">Время работы: <br/>Пн-Пт с 9 до 20, <br/>Сб-Вс с 10 до 20</p>
          <p className="mb-4">Телефон: <br/>+375 (29) 640-93-57</p>
          <p className="mb-6">E-mail: <br/>flowerheaven@gmail.com</p>
          <Button onClick={() => navigate("/contacts")}>Наши соцсети</Button>
        </div>
      </div>
    </section>
  );
}