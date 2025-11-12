// import React from "react";
// import ReviewCard from "../ReviewCard/ReviewCard";

// interface Review {
//   key: number;
//   name: string;
//   date: string;
//   description: string;
//   pros: string[];
//   cons: string[];
// }

// interface ReviewsListProps {
//   reviews: Review[];
//   deleteReview: (key: number) => void;
// }

// export default function ReviewsList({ reviews, deleteReview }: ReviewsListProps) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
//       {reviews.map((review) => (
//         <div key={review.key} className="relative group">
//           <ReviewCard {...review} onDelete={() => deleteReview(review.key)} /> {/* ✅ Передаем `deleteReview` */}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React from "react";
// import ReviewCard from "../ReviewCard/ReviewCard";

// interface ReviewsListProps {
//   reviews: { key: number; name: string; date: string; description: string; pros: string[]; cons: string[] }[];
// }

// export default function ReviewsList({ reviews = [] }: ReviewsListProps) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
//       {reviews.map((review) => (
//         <div key={review.key} className="relative group">
//           <ReviewCard {...review} />
//         </div>
//       ))}
//     </div>
//   );
// }



// import React from "react";
// import ReviewCard from "../ReviewCard/ReviewCard";

// export default function ReviewsList() {
//   const reviews = [
//     {
//       key: 1 ,
//       name: "Евгений",
//       date: "12.05.2024",
//       description: "Магазин большой и очень красивый! Хороший персонал! Заказ выполнили на отлично! Магазин очень хороший рекомендую)",
//       pros: [], cons: [],
//     },
//     {
//       key: 2,
//       name: "Светлана",
//       date: "30.01.2024",
//       description: " Заказывала букет 101 роза, забирала самовывозом. Спасибо вам огромное, мама была в шоке, букет был неописуемо красивый!",
//       pros: ["Очень приятный персонал, дали консультацию по уходу за букетом, быстро собрали заказ, бережно и надежда всё упаковали."],
//       cons: ["Несмотря на консультацию цветы простояли 4 дня, хотя все пожелания были выполнены."],
//     },
//     {
//       key: 3,
//       name: "Андрей",
//       date: "15.03.2024",
//       description: "Комнатные растения - мое хобби. Большую часть покупала в салоне Flower Haven. Все растения хорошо перенесли акклиматизацию. Еще не раз вернусь в этот цветочный рай за новым зеленым другом.",
//       pros: [], cons: [],
//     },
//     {
//       key: 4,
//       name: "Вера",
//       date: "03.04.2024",
//       description: "Отличный сервис! Доставка своевременная и красивый свежий букет, следующие цветочки буду заказывать тут. Спасибо мама осталась очень довольна!!!Вобщем обслуживание на высшем уровне! СПАСИБО ЧТО ВЫ ЕСТЬ! ВСЁ КЛАСС!СЛОВАМИ НЕ ПЕРЕДАТЬ МОЕГО СЧАСТЬЯ!!",
//       pros: [], cons: [],
//     },
//     {
//       key: 5,
//       name: "Наталья",
//       date: "31.05.2024",
//       description: "Обращалась в магазин для заказа свадебного букета и бутоньерок, в день заказа рассказали, что все будет красиво, цветы специально закажут, чтобы были максимально свежими и долго стояли, и что все будет согласовываться. В итоге только за день до свадьбы начал согласовываться букет, который оказался далёк от ожиданий, но с нескольких попыток был сделан более менее красиво. Хотя на букет невесты это было не очень похоже. Больше всего расстроил браслет из живых цветов для свидетельницы,над которым вообще не заморачивались. На ленту приклеели 3 розы, которые не додержались даже до церемонии. Очень разочарована с таким подходом и отношением. Букет простоял пару дней потом всего, остались очень недовольны. Вряд ли когда-то обратимся ещё.",
//       pros: [],
//       cons: [],
//     },
//     {
//       key: 6,
//       name: "Александр",
//       date: "07.02.2024",
//       description: "Всё великолепно! Заказывал бонсай во флорариуме, сделали все, как задумывалось.",
//       pros: ["прекрасное обслуживание и широкий ассортимент"], cons: ["Нет"],
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
//   {reviews.map((review) => (
//     <div key={review.key} className="relative group">
//       <ReviewCard {...review} />
//     </div>
//   ))}
// </div>

//   );
// }

import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

interface Review {
  id: number;
  name: string;
  date: string;
  description: string;
  pros?: string[];
  cons?: string[];
}

interface ReviewsListProps {
  reviews: Review[];
  deleteReview: (id: number) => void;
  addReview: (newReview: Review) => void; 
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, deleteReview, addReview  }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-38 mt-16 mb-12">
      {reviews.map((review) => (
        <div key={review.id} className="relative group">
      <div className="max-h-29 transition-all duration-300 group-hover:max-h-[500px]">
        <ReviewCard key={review.id} {...review} onDelete={() => deleteReview(review.id)} />
          </div>
          </div>
      ))}
    </div>
  );
};

export default ReviewsList;




    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
    //   {reviews.map((review) => (
    //     <ReviewCard {...review} key={review.key} />
    //   ))}
    // </div>


// <div className="mx-auto mt-15 text-center">
//   {reviews.map((review) => (
//     <div key={review.key} className="inline-block mx-2 text-left align-top">
//       <ReviewCard 
//         name={review.name} 
//         date={review.date} 
//         description={review.description} 
//         pros={review.pros} 
//         cons={review.cons} 
//       />
//     </div>
//   ))}
// </div>
