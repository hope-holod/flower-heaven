import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 dark:bg-white dark:text-black">
      <div className="container mx-auto flex flex-row items-center space-y-4">
        <img 
          src="/src/components/Footer/Логотип.svg" 
          alt="Flower Heaven" 
          className="mr-6 footer-logo-dark"
        />
        <img 
          src="/src/components/Footer/Логотип_b.svg" 
          alt="Flower Heaven" 
          className="mr-6 footer-logo-light "
        />
        <p className="text-sm">© Flowerheaven — 2024. Все права защищены</p>
      </div>
    </footer>
  );
}
