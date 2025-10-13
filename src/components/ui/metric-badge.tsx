import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  value: string;
  label: string;
  variant?: "success" | "primary" | "accent";
  className?: string;
}

export const MetricBadge = ({ value, label, variant = "primary", className }: MetricBadgeProps) => {
  const variantStyles = {
    success: "bg-green-neon/10 border-green-neon/30 text-green-neon",
    primary: "bg-blue-light/10 border-blue-light/30 text-blue-light",
    accent: "bg-purple-accent/10 border-purple-accent/30 text-purple-accent",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm",
      variantStyles[variant],
      className
    )}>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm font-medium opacity-90">{label}</span>
    </div>
  );
};
