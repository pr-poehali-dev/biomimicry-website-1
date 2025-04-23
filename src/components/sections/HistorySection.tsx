import React from "react";
import InfoSection from "../InfoSection";
import { localImages } from "@/data/biomimicryData";

const HistorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">История биомимикрии</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto text-center text-gray-700">
          Хотя термин "биомимикрия" появился недавно, люди наблюдали за природой и адаптировали её решения на протяжении тысячелетий.
        </p>
        
        <InfoSection 
          title="От Леонардо да Винчи до наших дней"
          content="Великие умы истории, такие как Леонардо да Винчи, черпали вдохновение из природы. Он изучал птиц, чтобы разработать концепции летательных аппаратов. Современная биомимикрия как научная дисциплина сформировалась в последние десятилетия благодаря работам Жанин Бенюс, которая популяризировала этот подход в своей книге 'Биомимикрия: Инновации, вдохновленные природой' (1997)."
          imageSrc="https://images.unsplash.com/photo-1553986782-9f6de60b51ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          imagePosition="left"
          buttonText="Узнать больше об истории"
          fallbackSrc={localImages.davinci}
        />
      </div>
    </section>
  );
};

export default HistorySection;
