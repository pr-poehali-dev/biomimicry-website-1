import React, { useEffect } from 'react';
import { localImages } from '@/data/biomimicryData';

/**
 * Компонент для предварительной загрузки изображений
 * Загружает все изображения из массива, чтобы они были доступны в кэше браузера
 */
const BioImagePreloader: React.FC = () => {
  useEffect(() => {
    // Массив всех изображений для предзагрузки
    const imageUrls = [
      // Примеры биомимикрии
      "https://images.unsplash.com/photo-1617178090037-52723a3b8142",
      "https://images.unsplash.com/photo-1474557157379-8aa74a6ef541",
      "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae",
      
      // Галерея
      "https://images.unsplash.com/photo-1621736583408-4df3cdc273a4",
      "https://images.unsplash.com/photo-1551522266-1967cb35d2bc",
      "https://images.unsplash.com/photo-1602871271747-188cc5e21a93",
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5",
      "https://images.unsplash.com/photo-1635962047786-9a3da1805a7c",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
      
      // Области применения
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1553293491-c3f89a5d097e",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      
      // Принципы природного дизайна
      "https://images.unsplash.com/photo-1500829243541-74b677fecc30",
      "https://images.unsplash.com/photo-1506126279646-a697353d3166",
      "https://images.unsplash.com/photo-1535090042247-30387644aec5",
      
      // Материальные инновации
      "https://images.unsplash.com/photo-1540126034813-121d8f67b6c1",
      "https://images.unsplash.com/photo-1595389581784-e7e6104cf325",
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
      
      // Резервные локальные
      ...Object.values(localImages),
    ];
    
    // Функция для предзагрузки одного изображения
    const preloadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn(`Не удалось предзагрузить: ${url}`);
          resolve(); // Все равно продолжаем, даже если одно изображение не загрузилось
        };
      });
    };
    
    // Загрузка всех изображений параллельно
    const preloadAllImages = async () => {
      console.log("Запуск предзагрузки изображений...");
      const preloadPromises = imageUrls.map(url => preloadImage(url));
      try {
        await Promise.all(preloadPromises);
        console.log("Все изображения успешно предзагружены");
      } catch (error) {
        console.error("Ошибка при предзагрузке изображений:", error);
      }
    };
    
    // Запускаем предзагрузку
    preloadAllImages();
    
  }, []);
  
  // Этот компонент не рендерит ничего видимого
  return null;
};

export default BioImagePreloader;
