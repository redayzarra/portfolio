import { IconType } from "react-icons";
import { Card } from "./ui/card";

interface Props {
  href: string;
  icon: IconType;
  iconSize?: number;
  title: string;
  description: string;
}

const AboutCard = ({
  href,
  icon: Icon,
  iconSize = 30,
  title,
  description,
}: Props) => {
  return (
    <a href={href} className="h-fit">
      <Card className="bg-foreground text-background border-none hover:bg-accent/10">
        <div className="flex flex-col items-center justify-center space-y-1 p-2">
          <Icon size={iconSize} />
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground text-sm text-center line-clamp-2">
            {description}
          </p>
        </div>
      </Card>
    </a>
  );
};

export default AboutCard;
