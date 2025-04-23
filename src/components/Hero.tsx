import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const Hero = ({ title, subtitle, imageSrc }: HeroProps) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Биомимикрия в природе"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-biomimicry-dark/90 to-biomimicry-dark/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-biomimicry-dark hover:bg-gray-100 text-lg py-6 px-8">
              Узнать больше
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8">
              Примеры проектов
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
