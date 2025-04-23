import React from "react";
import BioImageGallery from "../BioImageGallery";
import { moreExamples } from "@/data/biomimicryData";

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">Галерея биомимикрии</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto text-center text-gray-700">
          Прекрасные примеры того, как природа вдохновляет технические инновации:
        </p>
        <BioImageGallery items={moreExamples} />
      </div>
    </section>
  );
};

export default GallerySection;
