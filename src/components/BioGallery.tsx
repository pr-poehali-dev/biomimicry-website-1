import React from "react";
import ImageWithFallback from "./ImageWithFallback";

interface GalleryItem {
  title: string;
  imageSrc: string;
  description: string;
}

interface BioGalleryProps {
  items: GalleryItem[];
}

const BioGallery: React.FC<BioGalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="group overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300"
        >
          <div className="overflow-hidden h-64">
            <ImageWithFallback
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-biomimicry-text mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BioGallery;
