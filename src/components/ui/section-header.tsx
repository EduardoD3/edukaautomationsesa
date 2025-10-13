import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ 
  kicker, 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "space-y-4 mb-12",
      align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {kicker && (
        <div className="inline-block px-4 py-1.5 bg-purple-accent/10 border border-purple-accent/20 rounded-full">
          <span className="text-sm font-semibold text-gradient uppercase tracking-wide">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
