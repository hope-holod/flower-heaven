import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface FavoriteProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  removeFromFavorites: (id: number) => void;
}

export default function FavoriteProductCard({ id, image, title, description, price, removeFromFavorites }: FavoriteProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(true);

  const handleToggleFavorite = () => {
    setIsFavorite(false);
    removeFromFavorites(id);
  };

  return (
    <Link to={`/product/${id}`} className="block hover: transition">
      <div className="border border-gray-400 rounded-[50px] p-4 bg-white shadow-lg flex flex-col items-center">
        <img src={image} alt={title} className="h-[200px] object-cover rounded-md mb-4" />
        <h3 className="text-black text-lg font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
        <p className="text-black text-lg font-semibold mt-2">
          {price !== undefined ? `${price} BYN` : "Цена не указана"}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Button variant="card">Купить</Button>
        <img 
          src={isFavorite ? "/src/components/FavoriteProductCard/heartfull.svg" : "/src/components/FavoriteProductCard/heart.svg"}  
          alt="Избранное" 
          className="cursor-pointer"
          onClick={handleToggleFavorite}
        />
        </div>
      </div>
    </Link>
  );
}
