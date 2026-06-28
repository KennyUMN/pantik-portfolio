import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
  variant?: "default" | "amber" | "teal" | "primary";
}

const tagVariants = {
  default: "bg-paper text-muted-dark border border-line",
  amber: "bg-accent-tint text-amber border border-amber/30",
  teal: "bg-primary-tint text-primary border border-primary/20",
  primary: "bg-primary-tint text-primary border border-primary/20",
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
