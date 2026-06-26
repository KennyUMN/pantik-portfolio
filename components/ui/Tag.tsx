import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
  variant?: "default" | "amber" | "teal";
}

const tagVariants = {
  default: "bg-line-dark/60 text-muted-dark",
  amber: "bg-amber/15 text-amber",
  teal: "bg-teal/20 text-teal border border-teal/30",
};

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-medium",
        tagVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
