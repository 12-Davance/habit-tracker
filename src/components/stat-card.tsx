import { cn } from "../lib/utils.ts";
import { statStyles } from "../data/statStyles.ts";
import type { StatCardProps } from "../types/stat.ts";

const StatCard = ({ label, value }: StatCardProps) => {
  const Icon = statStyles[label].icon;

  return (
    <div
      key={label}
      className={cn(
        "flex items-start justify-between p-6 rounded-xl border-text border-2 bg-surface gap-4",
        statStyles[label].className,
      )}
    >
      <div className="flex flex-col justify-between flex-1 gap-2">
        <span className="text-xl">{label}</span>
        <span className="text-5xl font-bold">{value}</span>
      </div>
      <Icon size="60" />
    </div>
  );
};

export default StatCard;
