import React from "react";
import BioCard from "../BioCard";
import { biomimicryExamples } from "@/data/biomimicryData";

const ExamplesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Примеры биомимикрии</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto text-center text-gray-700">
          Вот несколько примеров того, как изучение природных механизмов привело к инновационным технологическим решениям:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {biomimicryExamples.map((example, index) => (
            <BioCard
              key={index}
              title={example.title}
              description={example.description}
              imageSrc={example.imageSrc}
              learnMoreLink="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
