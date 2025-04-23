import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";

// Импортируем разделы
import IntroSection from "@/components/sections/IntroSection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import GallerySection from "@/components/sections/GallerySection";
import DesignPrinciplesSection from "@/components/sections/DesignPrinciplesSection";
import HistorySection from "@/components/sections/HistorySection";
import MaterialInnovationsSection from "@/components/sections/MaterialInnovationsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import FutureSection from "@/components/sections/FutureSection";

/**
 * Главная страница сайта о биомимикрии
 * Включает в себя все секции контента, разделенные по компонентам
 */
const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок и основное изображение */}
        <Hero 
          title="Биомимикрия: Инновации, вдохновленные природой"
          subtitle="Наука, изучающая лучшие идеи природы и адаптирующая их для решения человеческих проблем"
          imageSrc="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />
        
        {/* Вводная секция */}
        <IntroSection />
        
        <Separator className="border-green-200" />
        
        {/* Секция с примерами биомимикрии */}
        <ExamplesSection />
        
        {/* Принципы биомимикрии */}
        <PrinciplesSection />

        {/* Галерея примеров */}
        <GallerySection />

        {/* Принципы природного дизайна */}
        <DesignPrinciplesSection />

        {/* История биомимикрии */}
        <HistorySection />

        {/* Материальные инновации */}
        <MaterialInnovationsSection />

        {/* Области применения */}
        <ApplicationsSection />
        
        {/* Будущее биомимикрии */}
        <FutureSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
