import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"; 
import React, { useState, useEffect } from "react";

export default function Header() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme); 
}, [theme]);

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme); 
  setTheme(newTheme);
};

  return (
<header className=" p-4 flex justify-between items-center bg-white text-black  dark:bg-black dark:text-white">
       <Link to="/"><img src={theme === "light" ? "/src/components/Header/Логотип_b.svg" : "/src/components/Header/Логотип.svg"} alt="Главная"  /></Link> {/*w-65 h-61 */}
      <nav className="space-x-6 text-sm md:text-base z-50">
        <Link to="/about" className="hover:text-pink-400 transition">О нас</Link>
        <Link to="/catalog" className="hover:text-pink-400 transition">Каталог</Link>
        <Link to="/reviews" className="hover:text-pink-400 transition">Отзывы</Link>
        <Link to="/contacts" className="hover:text-pink-400 transition">Контакты</Link>
      </nav>
      <SearchBar />
      <nav className="flex flex-row items-center space-x-6 text-sm md:text-base">
      <img 
        src={theme === "light" ? "/src/components/Header/moon.svg" : "/src/components/Header/sun.svg"} 
        alt="Переключить тему" 
        className="cursor-pointer pointer-events-auto" 
        onClick={toggleTheme}
      />
      <Link to="/favourites"><img src={theme === "light" ? "/src/components/Header/like_b.svg" : "/src/components/Header/like_w.svg"} className="w-[30px] " alt="Сердце"/></Link>
        <Link to="/cart"><img src={theme === "light" ? "/src/components/Header/shopping-cart_b.svg" : "/src/components/Header/shopping-cart.svg"} alt="Корзина"/></Link>
        <Link to="/account"><img src={theme === "light" ? "/src/components/Header/user_b.svg" : "/src/components/Header/user.svg"} alt="Профиль"/></Link>
      </nav>
    </header>
  );
}