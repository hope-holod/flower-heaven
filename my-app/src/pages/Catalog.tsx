import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Layout from "../components/Layout/Layout";
import CatalogFilters from "../components/CatalogFilters/CatalogFilters";
import CatalogList from "../components/CatalogList/CatalogList";

export default function Catalog() {
  const [category, setCategory] = useState("Все");
  const [flowerType, setFlowerType] = useState("Все");
  const [sortOrder, setSortOrder] = useState("price-asc");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  return (
    <Layout>
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="КАТАЛОГ" />
          <CatalogFilters category={category} setCategory={setCategory} flowerType={flowerType} setFlowerType={setFlowerType} sortOrder={sortOrder} setSortOrder={setSortOrder} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      <CatalogList category={category} flowerType={flowerType} sortOrder={sortOrder} minPrice={minPrice} maxPrice={maxPrice} />
        </div>
      </section>
    </Layout>
  );
}