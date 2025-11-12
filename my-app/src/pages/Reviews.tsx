import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Layout from "../components/Layout/Layout";
import ReviewsList from "../components/ReviewsList/ReviewsList";
import ReviewForm from "../components/ReviewForm/ReviewForm";

interface Review {
  id: number;
  name: string;
  date: string;
  description: string;
  pros?: string[];
  cons?: string[];
}

const initialReviews: Review[] = [
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

useEffect(() => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews") || "[]") as Review[];
  
  const uniqueReviews = Array.from(new Map(savedReviews.map(review => [review.id, review])).values());

  setReviews([...initialReviews, ...uniqueReviews]);
  localStorage.setItem("reviews", JSON.stringify(uniqueReviews)); 
}, []);


const addReview = (newReview: Review) => {
  const updatedReviews = [...reviews, { ...newReview, id: Date.now() }];
  setReviews(updatedReviews);
  localStorage.setItem("reviews", JSON.stringify(updatedReviews));
};
const deleteReview = (id: number) => {
  const updatedReviews = reviews.filter((review) => review.id !== id);
  setReviews(updatedReviews);
  localStorage.setItem("reviews", JSON.stringify(updatedReviews));
};



  return (
    <>
    <Layout>
      <section className="pt-10 bg-black text-white">
        <div className="container mx-auto">
          <SectionTitle title="ОТЗЫВЫ" />
          <ReviewsList reviews={reviews} addReview={addReview} deleteReview={deleteReview} />
          <div className="text-center mt-35">
            <Button onClick={() => setIsFormOpen(true)}>Оставить отзыв</Button>
          </div>
          <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} addReview={addReview} />
        </div>
      </section>
    </Layout>
        <img
        src="/src/components/FlowersDecoration/flower7.png"
        alt="Цветок"
        className="absolute left-0 top-0 transform max-w-[200px]"/>
    <img
          src="/src/components/FlowersDecoration/flower8.png"
          alt="Цветок"
          className="absolute right-0 top-[640px] transform max-w-[200px]"/>
  </>
  );
}
