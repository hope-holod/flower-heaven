import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products.ts";

export default function CatalogSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-20 bg-black dark:bg-white dark:text-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="КАТАЛОГ" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-7">
          {products.slice(0, 4).map((item) => (
            <ProductCard 
              key={item.id}
              id={item.id}
              image={item.image} 
              title={item.title} 
              description={item.description} 
              quantity={item.quantity || 1}
              price={item.price}
              onClick={() => navigate(`/product/${item.id}`)}
            />
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Button onClick={() => navigate("/catalog")}>Перейти в каталог</Button>
        </div>
      </div>
    </section>
  );
}
