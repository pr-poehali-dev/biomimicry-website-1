import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  learnMoreLink?: string;
}

const BioCard = ({ title, description, imageSrc, learnMoreLink }: BioCardProps) => {
  return (
    <Card className="bio-card animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-biomimicry-text">{title}</CardTitle>
        <CardDescription>{description.substring(0, 100)}...</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description.substring(100, 300)}...</p>
      </CardContent>
      {learnMoreLink && (
        <CardFooter>
          <Button className="bg-biomimicry hover:bg-biomimicry-dark">
            Узнать больше
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default BioCard;
