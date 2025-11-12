
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import ReviewCard from "../ReviewCard/ReviewCard";
import Button from "../Button/Button";

export default function ReviewsSection() {
  const navigate = useNavigate();
  const reviews = [
    {
      key: 1 ,
      name: "Евгений",
      date: "12.05.2024",
      description: "Магазин большой и очень красивый! Хороший персонал! Заказ выполнили на отлично! Магазин очень хороший рекомендую)",
      pros: [], cons: [],
    },
    {
      key: 2,
      name: "Светлана",
      date: "30.01.2024",
      description: " Заказывала букет 101 роза, забирала самовывозом. Спасибо вам огромное, мама была в шоке, букет был неописуемо красивый!",
      pros: ["Очень приятный персонал, дали консультацию по уходу за букетом, быстро собрали заказ, бережно и надежда всё упаковали."],
      cons: ["Несмотря на консультацию цветы простояли 4 дня, хотя все пожелания были выполнены."],
    },
    {
      key: 3,
      name: "Андрей",
      date: "15.03.2024",
      description: "Комнатные растения - мое хобби. Большую часть покупала в салоне Flower Haven. Все растения хорошо перенесли акклиматизацию. Еще не раз вернусь в этот цветочный рай за новым зеленым другом.",
      pros: [], cons: [],
    },
  ];

  return (
    <section className="py-20 bg-black dark:bg-white dark:text-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="ОТЗЫВЫ" />
      <div className="mx-auto mt-15 text-center">
        {reviews.map((review) => (
       <div key={review.key} className="inline-block mx-2 text-left">
      <ReviewCard 
        name={review.name} 
        date={review.date} 
        description={review.description} 
        pros={review.pros} 
        cons={review.cons} 
      />
    </div>
    ))}
      </div>
        <div className="text-center mt-8">
          <Button onClick={() => navigate("/reviews")}>Посмотреть еще отзывы</Button>
        </div>
      </div>
    </section>
  );
}

