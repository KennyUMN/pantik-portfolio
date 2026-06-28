import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:border-line-dark hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
