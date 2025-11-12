import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-black dark:bg-white dark:text-black"> 
      <SectionTitle title="О НАС" />
      <div className="container mx-auto grid md:grid-cols-2 gap-[130px] items-center">
        <div>
          <img src="/src/components/AboutSection/секция2.png" alt="Флорист" className="rounded-[50px]" />
        </div>
        <div>
          <h2 className="text-4xl mb-1" style={{ fontFamily: "'EB Garamond', serif" }}>FLOWER HEAVEN</h2>
          <p className="mb-4">— это новый уголок красоты в вашем доме:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 max-w-[500px]">
            <li> 300 квадратных метров цветочного рая, где можно обнаружить все виды цветов - от изысканных роз и лилий до экзотических орхидей и тимьянов</li>
            <li>Мини поляны с лесными цветами</li>
            <li>Доставка букетов и комнатных растений</li>
            <li>Консультации флористов по уходу за растениями</li>
            <li>Украшение праздничных мероприятий</li>
          </ul>
          <Button onClick={() => navigate("/about")}>Узнать больше</Button>
        </div>
      </div>
    </section>
  );
}
