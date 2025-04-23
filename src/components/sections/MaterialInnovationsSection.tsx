import React from "react";
import BioImageGallery from "../BioImageGallery";
import { materialInnovations } from "@/data/biomimicryData";

const MaterialInnovationsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">Материальные инновации</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto text-center text-gray-700">
          Природа создала удивительные материалы, которые вдохновляют инженеров и ученых:
        </p>
        <BioImageGallery items={materialInnovations} columns={3} />
      </div>
    </section>
  );
};

export default MaterialInnovationsSection;
