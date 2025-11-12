import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products.ts";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectProduct = (id) => {
    setSearch("");
    navigate(`/product/${id}`);
  };

  return (
    <div className="relative w-full max-w-xs ">
      <input
        type="text"
        placeholder="Поиск..."
        className="search border border-white bg-[#E6528A]  rounded-full text-white p-2 pl-5 pr-10 dark:bg-black focus:outline-none w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img
        src="/src/components/Header/search.svg"
        alt="Лупа"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />

      {search && (
        <ul className="absolute top-10 left-0 w-full bg-[#E6528A] border border-white rounded-lg shadow-md mt-2 z-50 search-ul dark:bg-black">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                onClick={() => handleSelectProduct(product.id)}
              >
                {product.title}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 ">Ничего не найдено</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
