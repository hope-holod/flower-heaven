import React from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  description: string;
  pros?: string[];
  cons?: string[];
  onDelete?: () => void;
}

export default function ReviewCard({ name, date, description, pros = [], cons = [], onDelete }: ReviewCardProps) {
  return (
    <div className="relative bg-white text-black p-6 rounded-[20px] shadow-xl w-[365px] flex flex-col group">
      <img
        src="/src/assets/кавычки.svg"
        alt="Кавычки"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-16 max-h-16"
      />
      <div className="text-center mt-6">
        <p>{name}, {date}</p>
      </div>

      <div className="overflow-hidden max-h-32 transition-all duration-300 group-hover:max-h-[500px]">
        <p className="mt-2 relative">
          {description}
        </p>

        {pros.length > 0 && (
          <div className="mt-2">
            <strong>Плюсы:</strong> {pros.join(", ")}
          </div>
        )}

        {cons.length > 0 && (
          <div className="mt-2">
            <strong>Минусы:</strong> {cons.join(", ")}
          </div>
        )}
      </div>
      <button 
        onClick={onDelete}
        className="absolute right-14 top-10 px-2 py-1">
        <img
        src="/src/components/ReviewCard/trash-2.svg"
        alt="Мусорка"
        className="opacity-10 max-w-[25px]"/>
      </button>
    </div>
  );
}
