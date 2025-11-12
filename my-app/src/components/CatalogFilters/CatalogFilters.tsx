
import React from "react";

interface CatalogFiltersProps {
  category: string;
  setCategory: (category: string) => void;
  flowerType: string;
  setFlowerType: (flowerType: string) => void;
  sortOrder: string;
  setSortOrder: (sortOrder: string) => void;
  minPrice: number;
  setMinPrice: (price: number) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = React.memo(({ category, setCategory, flowerType, setFlowerType, sortOrder, setSortOrder, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex flex-col">
        <span className="mb-3">Категория</span>
        <div className="relative">          
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 pr-9 py-2  rounded-[50px]  appearance-none bg-white text-black border border-black dark:text-white dark:bg-black dark:border-white">
          <option value="Все">Все</option>
            <option value="Монобукеты">Монобукеты</option>
            <option value="Авторские букеты">Авторские букеты</option>
            <option value="Свадебный букет">Свадебный букет</option>
            <option value="Комнатные растения">Комнатные растения</option>
            <option value="Бонсай">Бонсай</option>
            <option value="Цветы поштучно">Цветы поштучно</option>
        </select>
        <img src="/src/components/Catalogfilters/стрелка.svg" alt="Стрелка" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none invert"/>
         </div>
      </div>

      <div className="flex flex-col">
        <span className="mb-3">Тип цветка</span>
        <div className="relative"> 
        <select value={flowerType} onChange={(e) => setFlowerType(e.target.value)} className="px-3 pr-9 py-2 rounded-[50px] appearance-none bg-white text-black border border-black dark:text-white dark:bg-black dark:border-white">
          <option value="Все">Все</option>
            <option value="Ромашка">Ромашка</option>
            <option value="Роза">Роза</option>
            <option value="Латирус">Латирус</option>
            <option value="Подсолнух">Подсолнух</option>
            <option value="Эустома">Эустома</option>
            <option value="Гвоздика">Гвоздика</option>
            <option value="Пионы">Пионы</option>
            <option value="Ранункулюс">Ранункулюс</option>
            <option value="Гортензия">Гортензия</option>
            <option value="Хризантема">Хризантема</option>
        </select>
        <img src="/src/components/Catalogfilters/стрелка.svg" alt="Стрелка" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none invert"/>
         </div>
      </div>

      <div className="flex flex-col">
        <span className="mb-3">Сортировка</span>
        <div className="relative"> 
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="px-3 py-2 pr-9 rounded-[50px] appearance-none bg-white text-black border border-black dark:text-white dark:bg-black dark:border-white">
<option value="default">По умолчанию</option>
            <option value="price-asc">По цене (дешевле)</option>
            <option value="price-desc">По цене (дороже)</option>
            <option value="name-asc">От А-Я</option>
            <option value="name-desc">От Я-А</option>
        </select>
        <img src="/src/components/Catalogfilters/стрелка.svg" alt="Стрелка" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none invert"/>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="mb-3">Мин. цена</span>
        <input type="number" min="0" max="10000" value={minPrice} onChange={(e) => setMinPrice(+e.target.value)} className="w-32 px-3 py-2 rounded-[50px]  border text-center bg-white text-black border border-black dark:text-white dark:bg-black dark:border-white" placeholder="Мин. цена" />
      </div>

      <div className="flex flex-col">
        <span className="mb-3">Макс. цена</span>
        <input type="number" min="0" max="10000" value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-32 px-3 py-2 rounded-[50px] border text-center bg-white text-black border border-black dark:text-white dark:bg-black dark:border-white" placeholder="Макс. цена" />
      </div>
    </div>
 );
});

export default CatalogFilters;