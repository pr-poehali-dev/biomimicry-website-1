import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

const App: React.FC = () => {
  // Использование предзагрузки изображений на уровне приложения
  React.useEffect(() => {
    // Функция для преобразования URL изображения для оптимизированного кэширования
    const optimizeImageUrl = (url: string, width = 600, quality = 80) => {
      // Если это URL с Unsplash, добавляем параметры оптимизации
      if (url.includes('unsplash.com')) {
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}auto=format&fit=crop&w=${width}&q=${quality}`;
      }
      return url;
    };

    // Список изображений для предзагрузки
    const criticalImages = [
      "https://images.unsplash.com/photo-1581289011663-127f5a2213ef", // Hero
      "https://images.unsplash.com/photo-1617178090037-52723a3b8142", // Velcro
      "https://images.unsplash.com/photo-1474557157379-8aa74a6ef541", // Lotus
      "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae"  // Shark
    ];

    // Предзагрузка критических изображений
    criticalImages.forEach(url => {
      const optimizedUrl = optimizeImageUrl(url);
      const img = new Image();
      img.src = optimizedUrl;
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
