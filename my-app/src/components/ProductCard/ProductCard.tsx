
import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useCallback } from "react";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
  quantity: number;
}


const ProductCard: React.FC<ProductCardProps> = React.memo(({ id, image, title, description, price, quantity, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const toggleFavorite = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const alreadyInFavorites = favorites.some((product) => product.id === id);

    if (!alreadyInFavorites) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, { id, image, title, description, price }]));
      setIsFavorite(true);
    } else {
      localStorage.setItem("favorites", JSON.stringify(favorites.filter(product => product.id !== id)));
      setIsFavorite(false);
    }
  }, [id, image, title, description, price]);

  return (
    <Link to={`/product/${id}`} className="block hover: transition">
      <div className="border border-gray-400 rounded-[50px] p-4 bg-white shadow-lg flex flex-col items-center max-w-[350px] cursor-pointer" onClick={onClick}>
        <img src={image} alt={title} className="h-[200px] object-cover rounded-md mb-4" />
        <h3 className="text-black text-lg font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
        <p className="text-black text-lg font-semibold mt-2">
          {price !== undefined ? `${price} BYN` : "Цена не указана"}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Button variant="card" onClick={() => addToCart({ id, image, title, description, price,  categories: [], 
  flowerTypes: [], features: [], careTips: [], quantity })}>Купить</Button>
          <img 
            src={isFavorite ? "/src/components/ProductCard/heartfull.svg" : "/src/components/ProductCard/heart.svg"} 
            alt="Лайк" 
            className="cursor-pointer" 
            onClick={(e) => {
              e.preventDefault(); 
              toggleFavorite();
            }}
          />
        </div>
      </div>
    </Link>
  );
}
);

export default ProductCard;
