import { IconType } from "react-icons";
import { Card } from "./ui/card";
import GlassCard from "./MyComponents/GlassCard";

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
    <div className="cursor-default">
      <GlassCard className="bg-zinc-950 min-h-[130px] rounded-md text-background border-none hover:bg-zinc-900">
        <div className="flex flex-col items-center justify-center space-y-1 p-2">
          <Icon size={iconSize} />
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground text-sm text-center line-clamp-2">
            {description}
          </p>
        </div>
      </GlassCard>
    </div>
  );
};

export default AboutCard;
