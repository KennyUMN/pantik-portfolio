import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ id, children, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-32", className)}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 lg:mb-16">
            {title && (
              <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-muted-dark max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
