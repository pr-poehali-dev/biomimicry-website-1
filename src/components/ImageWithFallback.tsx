import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/placeholder.svg",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    
    // Создаем новый экземпляр изображения для предзагрузки
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      setError(false);
      setImageSrc(src);
    };
    
    img.onerror = () => {
      console.error(`Ошибка загрузки изображения: ${src}`);
      setIsLoading(false);
      setError(true);
      setImageSrc(fallbackSrc);
      
      // Пытаемся загрузить резервное изображение
      const fallbackImg = new Image();
      fallbackImg.src = fallbackSrc;
      fallbackImg.onerror = () => {
        console.error(`Также не удалось загрузить резервное изображение: ${fallbackSrc}`);
      };
    };
    
    // Очистка
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md bg-green-50">
      {isLoading && (
        <Skeleton className={`absolute inset-0 ${className} bg-green-100 animate-pulse`} />
      )}
      <img
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        loading="eager"
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'} w-full h-full object-cover`}
        onError={() => {
          if (!error) {
            console.error(`Ошибка загрузки изображения при рендеринге: ${imageSrc}`);
            setError(true);
            setImageSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
