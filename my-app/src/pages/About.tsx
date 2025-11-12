import React from "react";
import { useNavigate } from "react-router-dom";
import AboutText from "../components/AboutText/AboutText";
import Button from "../components/Button/Button";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Layout from "../components/Layout/Layout";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
    <Layout>
      <section className="pt-10 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="О НАС" />
          <div className="flex flex-wrap justify-between items-center my-10">
            <div>
              <img src="/src/components/AboutSection/секция2.png" alt="Флорист" className="rounded-lg" />
            </div>
            <div>
              <AboutText text="FLOWER HEAVEN — это новый уголок красоты в вашем доме." />
              <AboutText text="Наш магазин предлагает более 300 квадратных метров цветочного рая, мини поляны с лесными цветами и доставку уникальных букетов." />
              <AboutText text="300 квадратных метров цветочного рая, где можно обнаружить все виды цветов от изысканных роз и лилий до экзотических орхидей и тимьянов. 
                Мини поляны с лесными цветами 
                Доставка букетов и комнатных растений Консультации флористов по уходу за растениями 
                Украшение праздничных мероприятий " />
              <div className="text-center mt-10">
                <Button onClick={() => navigate("/catalog")}>Перейти в каталог</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center my-10">
            <div>
              <AboutText text="Каждый любит получать профессиональные советы при выборе мебели или техники. В магазине FLOWER HEAVEN мы следуем тому же принципу, когда дело касается выбора цветочных букетов. Здесь вы не будете блуждать между разнообразием цветов наугад." />              
              <AboutText text="Наши флористы помогут вам с подробной консультацией по каждому букету, представленному в магазине, и помогут подобрать именно тот, который подарит радость именно вам или вашим близким. Кроме того, вы всегда можете обратиться к нам за советом по уходу за вашими покупками, вне зависимости от времени прошедшего с момента приобретения " />
            </div>
            <div>
              <img src="/src/assets/команда2.png" alt="Флорист" className="rounded-lg" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center my-10">
            <div>
              <img src="/src/assets/команда3.png" alt="Флорист" className="rounded-lg max-w-[570px]" />
            </div>
            <div>
              <AboutText text="Почему именно FLOWER HEAVEN?" />
              <AboutText text="Все самое свежее, модное и удивительное первым появляется в FLOWER HAVEN 
              Прямые поставки цветов и комнатных растений из Европы всегда широкий и уникальный ассортимент 
              Самый большой флористический шоурум в городе, где вживую можно выбрать из 900 разнообразных цветочных композиций. " />
            </div>
          </div>
        </div>
      </section>
    </Layout>
    <img
        src="/src/components/FlowersDecoration/flower6.png"
        alt="Цветок"
        className="absolute left-0 top-[800px] transform"/>
    <img
          src="/src/components/FlowersDecoration/flower5.png"
          alt="Цветок"
          className="absolute right-0 top-[50px] transform max-w-[300px]"/>
    </>
  );
}
