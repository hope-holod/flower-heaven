import React, { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Layout from "../components/Layout/Layout";
import FavoriteProductCard from "../components/FavoriteProductCard/FavoriteProductCard";


interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function Favourites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites: Product[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter(product => product.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Layout>
      <section className="pt-10 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="ИЗБРАННОЕ" />
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {favorites.map(product => (
                <FavoriteProductCard key={product.id} {...product} removeFromFavorites={removeFromFavorites} />
              ))}
            </div>
          ) : (
            <p className="text-center mt-6 text-gray-400">Нет избранных товаров</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
