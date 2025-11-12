import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import { products } from "../../data/products.ts";

interface CatalogListProps {
  category: string;
  flowerType: string;
  sortOrder: string;
  minPrice: number;
  maxPrice: number;
}

export default function CatalogList({ category, flowerType, sortOrder, minPrice, maxPrice  }: CatalogListProps) {
  const filteredProducts = products.filter(
    (product) =>
      (category === "Все" || product.categories.includes(category)) &&
      (flowerType === "Все" || product.flowerTypes.includes(flowerType)) &&
      product.price >= minPrice && product.price <= maxPrice
  );

  if (sortOrder === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "name-asc") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "name-desc") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-7">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard 
          key={product.id} 
          id={product.id}
          image={product.image} 
          title={product.title} 
          quantity={product.quantity || 1}
          description={product.description} 
          price={product.price} 
        />
        ))
      ) : (
        <p className="text-white text-center col-span-4">Нет товаров в выбранном фильтре 😔</p>
      )}
    </div>
  );
}