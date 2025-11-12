import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Layout from "../components/Layout/Layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";

export default function Contacts() {
  return (
  <>
    <Layout>
        <section className="pt-10 bg-black text-white">
        <div className="container mx-auto">
            <SectionTitle title="КОНТАКТЫ" />
            <div className="flex justify-between items-start w-full pb-5">
              <SocialLinks /> 
              <div className=" w-1/2">
                <h2 className="text-xl mb-2">Как добраться:</h2>
                <ul className="pl-3 max-w-[465px]">
                  <li>— Ст. м. «Каменная горка», первый вагон (выход на сторону ТЦ GreenCity)</li>
                  <li>— Можно подъехать одну остановку на авт. №159, 36, 41 или пройти пешком порядка 600 м. (7 мин. пути)</li>
                  <li>— Если вы едете к нам на автомобиле, есть бесплатная парковка</li>
                  <li>— Вход находится со стороны ул. Притыцкого. Дверь открывается на себя</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex-shrink-0 ">
                <img src="/src/components/ContactsSection/карта.png" alt="Карта" className="max-w-[590px] h-auto rounded-lg shadow-lg" />
              </div>
              <div className="flex-shrink-0  max-w-[590px]">
                <img src="/src/components/ContactsSection/магазин.png" alt="Карта" className="max-w-[590px] h-auto rounded-lg shadow-lg" />
              </div>
            </div>
        </div>
        </section>
    </Layout>
        <img
        src="/src/components/FlowersDecoration/flower10.png"
        alt="Цветок"
        className="absolute left-0 top-[430px] transform max-w-[250px]"/>
    <img
          src="/src/components/FlowersDecoration/flower9.png"
          alt="Цветок"
          className="absolute right-0 top-[0px] transform"/>
  </>
  );
}
