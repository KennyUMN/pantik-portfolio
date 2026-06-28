import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  subtle?: boolean;
}

export function Section({ id, children, className, subtle }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-28",
        subtle && "bg-bg-subtle",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
