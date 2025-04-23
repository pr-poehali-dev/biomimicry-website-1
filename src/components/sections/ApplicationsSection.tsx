import React from "react";
import BioGallery from "../BioGallery";
import { Button } from "@/components/ui/button";
import { applications } from "@/data/biomimicryData";

const ApplicationsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">Области применения</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto text-center text-gray-700">
          Биомимикрия находит применение во множестве областей — от архитектуры и дизайна до медицины и робототехники.
        </p>
        
        <BioGallery items={applications} />
        
        <div className="text-center mt-12">
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
            Исследовать все области применения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
