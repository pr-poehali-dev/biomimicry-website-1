import React from "react";
import { Card } from "@/components/ui/card";
import ImageWithFallback from "./ImageWithFallback";

interface GalleryItem {
  title: string;
  imageSrc: string;
  description: string;
}

interface BioImageGalleryProps {
  items: GalleryItem[];
  columns?: number;
}

const BioImageGallery: React.FC<BioImageGalleryProps> = ({ 
  items, 
  columns = 3 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {items.map((item, index) => (
        <Card 
          key={index} 
          className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-green-200"
        >
          <div className="relative aspect-video">
            <ImageWithFallback
              src={item.imageSrc}
              alt={item.title}
              className="group-hover:scale-105 transition-transform duration-500"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BioImageGallery;
