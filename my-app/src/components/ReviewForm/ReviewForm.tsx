import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const ReviewForm = ({ isOpen, onClose, addReview }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewData, setReviewData] = useState({ name: "", description: "", pros: "", cons: "" });

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setReviewData({ name: "", description: "", pros: "", cons: "" }); 
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (reviewData.name && reviewData.description) {
      addReview({
        name: reviewData.name,
        date: new Date().toLocaleDateString(),
        description: reviewData.description,
        pros: reviewData.pros ? [reviewData.pros] : [],
        cons: reviewData.cons ? [reviewData.cons] : [],
      });
      setIsSubmitted(true);
      setTimeout(onClose, 10); 
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md duration-300">
      <div className="bg-black text-white border-2 border-gray-300 p-6 rounded-[50px] shadow-lg w-[400px] relative transition-transform duration-300 scale-95 group dark:text-black dark:bg-white ReviewForm">
        <button 
        onClick={onClose} 
        className="absolute top-6 right-8 text-gray-500 hover:text-black transition"
        >
        <img src="/src/components/ReviewForm/cross_white.svg" alt="Крестик" className="w-[30px] h-[30px] invert ReviewForm-img" />
        </button>
        <h2 className="text-3xl font-semibold my-4 mb-1 text-center" style={{ fontFamily: "'EB Garamond', serif" }}>ВАШ ОТЗЫВ</h2>
        <p className="text-sm text-gray-400 text-center mb-4">Ваш отзыв поможет нам стать лучше</p>

      <input type="text" placeholder="Ваше имя *" value={reviewData.name} onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })} className="w-full border px-5 py-2 rounded-[50px] mb-3 focus:outline-none focus:ring-2 focus:ring-[#FFA6D6]" />
      <input type="text" placeholder="Плюсы" value={reviewData.pros} onChange={(e) => setReviewData({ ...reviewData, pros: e.target.value })} className="w-full border px-5 py-2 rounded-[50px] mb-3 focus:outline-none focus:ring-2 focus:ring-[#FFA6D6]" />
      <input type="text" placeholder="Минусы" value={reviewData.cons} onChange={(e) => setReviewData({ ...reviewData, cons: e.target.value })} className="w-full border px-5 py-2 rounded-[50px] mb-3 focus:outline-none focus:ring-2 focus:ring-[#FFA6D6]" />
      <textarea placeholder="Ваш отзыв *" value={reviewData.description} onChange={(e) => setReviewData({ ...reviewData, description: e.target.value })} className="w-full border px-5 py-2 rounded-[20px] mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-[#FFA6D6]"></textarea>

            <div className="flex justify-center mt-4">
                        <Button 
                          onClick={() => {
                            handleSubmit(); 
                            setIsSubmitted(true); 
                          }} 
                          variant="review"
                        >
                          {isSubmitted ? "Отправлено" : "Отправить"}
                        </Button>
                    </div>
      <img
        src="/src/components/FlowersDecoration/flower10.png"
        alt="Цветок"
        className="absolute max-w-[100px] left-0 top-[0px] transform"/>
        <img
        src="/src/components/FlowersDecoration/flower9.png"
        alt="Цветок"
        className="absolute max-w-[100px] right-0 top-[310px] transform"/>
      </div>
    </div>
  ) : null;
};

export default ReviewForm;
