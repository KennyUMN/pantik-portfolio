import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  lead?: string;
  className?: string;
  id?: string;
}

export function SectionHeader({ eyebrow, heading, lead, className, id }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-14", className)}>
      {eyebrow && (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-heading text-3xl font-bold text-ink lg:text-4xl"
      >
        {heading}
      </h2>
      {lead && (
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-secondary">
          {lead}
        </p>
      )}
    </div>
  );
}
