import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const StatsCard = ({
  icon: Icon,
  description,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  description: string;
  label: string;
  hasBorder?: boolean;
}) => {
  return (
    <div
      className={cn(
        "space-y-2 ",
        hasBorder && "border-x border-border-border/50"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <div>
          <Icon className="size-5 text-primary/70" />
        </div>
        <div className="text-3xl sm:text-4xl font-bold">{label}</div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default StatsCard;
