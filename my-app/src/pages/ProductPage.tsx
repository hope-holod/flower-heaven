import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { Product }  from "../types/Product.ts";
import { products } from "../data/products";
import useCart from "../hooks/useCart";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id)); 

  if (!product) {
    return <p className="text-white text-center">Товар не найден 😔</p>;
  }

  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const alreadyInFavorites = favorites.some((p) => p.id === product.id);

  if (!alreadyInFavorites) {
    localStorage.setItem("favorites", JSON.stringify([...favorites, product]));
    setIsFavorite(true);
  } else {
    localStorage.setItem("favorites", JSON.stringify(favorites.filter((p) => p.id !== product.id)));
    setIsFavorite(false);
  }
};

return (
  <Layout>
    <section className="pt-10 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">

        <div className="flex-shrink-0 flex justify-center items-center p-10 bg-white rounded-[50px] shadow-md">
          <img src={product.image} alt={product.title} className="max-w-[430px] min-w-[360px] max-h-[500px] mx-auto rounded-md" />
        </div>

        <div className="flex flex-col items-start justify-center text-left mt-2">
          <Link to="/catalog" className="text-white text-lg hover:underline mb-6 flex items-center ProductPageLink">
            <p className="">← Назад в каталог</p>
          </Link>
          <SectionTitle title={product.title} />
          <p className="mt-2 text-lg">{product.description}</p>
          <p className="mt-2 text-lg">Состав: {product.flowerTypes.join(", ")}</p>

          <div className="mt-2 max-w-[600px]">
            <h3 className="text-lg font-bold mb-1">Характеристики:</h3>
            <ul className="list-none space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-xm">
                  {feature.label}: {feature.value}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-2xl font-semibold">Цена: {product.price} BYN</p>

          <div className="mt-6 flex gap-5">
            <Button 
              variant="card" 
              onClick={() => {
                setAdded(true); 
                addToCart({ ...product, quantity:1 });
              }}
              className={`px-4 py-2 rounded-[50px] transition-colors ${added ? "bg-[#FFA6D6] text-white" :"bg-[#E6528A] text-white"}`}
            >
              {added ? "Добавлено" : "Добавить в корзину"} 
            </Button>
            <img 
              src={isFavorite ? "/src/assets/likefull.svg" : "/src/assets/like_w.svg"} 
              alt="Лайк" 
              className="cursor-pointer"
              onClick={toggleFavorite}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 p-7 border border-white rounded-[50px] w-full max-w-[900px]">
        <h3 className="text-xl font-bold mb-3">Советы по уходу:</h3>
        <ul className="list-disc list-inside space-y-2">
          {product.careTips.map((tip, index) => (
            <li key={index} className="text-lg">{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);
}