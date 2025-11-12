
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function Banner() {
  const navigate = useNavigate(); 

  return (
    <section className="banner-section bg-[#EFEFEF] text-black rounded-[50px] flex mb-[90px] items-center justify-center dark:bg-[#ffffff12] dark:text-white">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div className="flex-1 max-w-[600px]">
          <h1 className="text-5xl md:text-7xl mb-4  max-w-[600px]" style={{ fontFamily: "'EB Garamond', serif" }}>FLOWER HEAVEN</h1>
          <p className="mb-3 max-w-[600px]">— магазин цветочных композиций и комнатных растений</p>
          <p className="mb-5 max-w-[600px]">
            Это не просто магазин, это настоящий оазис для всех любителей зелени. У нас около 900 разнообразных цветочных композиций, каждая из которых готова стать украшением вашего дома.
          </p>
          <Button onClick={() => navigate("/catalog")}>Посмотреть каталог</Button>
        </div>
        <div className="w-95 md:w-96 flex-shrink-0">
          <img src="/src/components/Banner/flower1.png" alt="Цветок" className="w-full" />
        </div>
      </div>
    </section>
  );
}
