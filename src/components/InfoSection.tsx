import React from "react";
import ImageWithFallback from "./ImageWithFallback";
import { Button } from "@/components/ui/button";

interface InfoSectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonLink?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  content,
  imageSrc,
  imagePosition = "right",
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="md:w-1/2">
        <h2 className="bio-subheading mb-4">{title}</h2>
        <div className="prose prose-green max-w-none mb-6">
          <p className="text-gray-700">{content}</p>
        </div>
        {buttonText && (
          <Button className="bg-biomimicry hover:bg-biomimicry-dark">
            {buttonText}
          </Button>
        )}
      </div>
      <div className="md:w-1/2">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default InfoSection;
