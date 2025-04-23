import React from "react";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "../ImageWithFallback";
import { localImages } from "@/data/biomimicryData";

const FutureSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Будущее биомимикрии</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Устойчивое развитие</h3>
            <p className="text-gray-700 mb-6">
              Биомимикрия играет ключевую роль в создании устойчивых технологий и материалов. Подражая природным процессам, мы можем разрабатывать системы, которые не истощают ресурсы планеты и минимизируют отходы.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                alt="Устойчивое развитие" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                fallbackSrc={localImages.sustainability}
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Решение глобальных проблем</h3>
            <p className="text-gray-700 mb-6">
              От очистки океанов от пластика до борьбы с изменением климата — биомимикрия предлагает инновационные подходы к решению многих глобальных проблем. Изучая экосистемы и организмы, мы можем найти ответы на самые сложные вызовы современности.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1569163139599-0f3532132114?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                alt="Решение глобальных проблем" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                fallbackSrc={localImages.globalChallenges}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Изучайте природу и открывайте инновации</h3>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Биомимикрия предлагает уникальный подход к инновациям, основанный на миллиардах лет эволюционного опыта. Вместо того чтобы изобретать решения с нуля, мы можем учиться у самого успешного инженера на Земле — самой природы.
          </p>
          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
              Присоединиться к исследованиям
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
