import React from "react";
import ImageWithFallback from "../ImageWithFallback";
import { localImages } from "@/data/biomimicryData";

const PrinciplesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Принципы биомимикрии</h2>
            <p className="mb-6 text-gray-700">
              Жанин Бенюс, одна из основоположниц биомимикрии, выделила несколько принципов, которыми природа руководствуется в своем "дизайне":
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа использует только энергию, которую ей необходимо, и полагается на энергию солнца</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа приспосабливает форму к функции</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа перерабатывает все</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа поощряет кооперацию</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа полагается на разнообразие</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Природа требует локальной экспертизы</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="h-full">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                alt="Природная структура" 
                className="w-full h-full object-cover"
                fallbackSrc={localImages.principles}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
