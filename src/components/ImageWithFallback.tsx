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
    // Прелоадер изображения
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      setError(false);
      setImageSrc(src);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
      setImageSrc(fallbackSrc);
    };
    
    // Очистка
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <Skeleton className={`absolute inset-0 ${className} bg-green-100`} />
      )}
      <img
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'} w-full h-full object-cover`}
      />
    </div>
  );
};

export default ImageWithFallback;
