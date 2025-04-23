import React, { useState } from "react";
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
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ImageWithFallback;
