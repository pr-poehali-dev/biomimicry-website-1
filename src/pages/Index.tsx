import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import GallerySection from "@/components/sections/GallerySection";
import DesignPrinciplesSection from "@/components/sections/DesignPrinciplesSection";
import HistorySection from "@/components/sections/HistorySection";
import MaterialInnovationsSection from "@/components/sections/MaterialInnovationsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import FutureSection from "@/components/sections/FutureSection";
import BioImagePreloader from "@/components/BioImagePreloader";

const Index: React.FC = () => {
  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = "Биомимикрия - Вдохновение от природы";
    
    // Дополнительный код для проверки загрузки изображений
    window.addEventListener('load', () => {
      console.log('Страница и все ресурсы полностью загружены');
    });
    
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Компонент предзагрузки изображений */}
      <BioImagePreloader />
      
      {/* Навигация */}
      <Navbar />
      
      {/* Герой-секция */}
      <Hero 
        title="Биомимикрия"
        subtitle="Наука о заимствовании идей у природы"
        description="Открывайте инновационные технологии, вдохновлённые совершенством природы"
        imageSrc="https://images.unsplash.com/photo-1581289011663-127f5a2213ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      {/* Основное содержимое */}
      <main>
        <IntroSection />
        <HistorySection />
        <ExamplesSection />
        <PrinciplesSection />
        <GallerySection />
        <DesignPrinciplesSection />
        <MaterialInnovationsSection />
        <ApplicationsSection />
        <FutureSection />
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
};

export default Index;
