import Image from "next/image";
import { team, type TeamMember } from "@/content/team";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const roleStyle: Record<string, { badge: string; monogram: string }> = {
  "PM / Business Strategist": {
    badge: "bg-accent-tint text-amber border border-amber/30",
    monogram: "bg-accent-tint text-amber",
  },
  "Fullstack Developer": {
    badge: "bg-bg-subtle text-ink border border-line",
    monogram: "bg-bg-subtle text-ink",
  },
  "AI Engineer": {
    badge: "bg-primary-tint text-primary border border-primary/20",
    monogram: "bg-primary-tint text-primary",
  },
};

function getInitials(name: string): string {
  const clean = name.replace(/\[.*?\]/g, "").trim();
  if (!clean) return "?";
  return clean
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function isPlaceholder(value: string) {
  return !value || value.startsWith("[") || value === "";
}

function MemberAvatar({ member }: { member: TeamMember }) {
  const style = roleStyle[member.role] ?? roleStyle["Fullstack Developer"];
  if (!isPlaceholder(member.photo)) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-line">
        <Image src={member.photo} alt={member.name} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold ring-2 ring-line",
        style.monogram
      )}
    >
      {getInitials(member.name)}
    </div>
  );
}

export function Team() {
  return (
    <Section id="team">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-3">
          Komposisi yang sengaja dirancang.
        </h2>
        <p className="text-[17px] text-secondary max-w-2xl mb-12 leading-relaxed">
          Kemudi bisnis dan kedalaman teknis berada dalam satu tim. Itulah yang diminta kriteria lomba, dan itulah yang kami miliki.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => {
          const style = roleStyle[member.role] ?? roleStyle["Fullstack Developer"];
          return (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <MemberAvatar member={member} />
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="font-heading font-semibold text-ink leading-tight">
                      {member.name}
                    </h3>
                    <span
                      className={cn(
                        "mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        style.badge
                      )}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">{member.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.skills.filter((s) => !isPlaceholder(s)).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-line">
                  {!isPlaceholder(member.github) && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink size={12} />
                      GitHub
                    </a>
                  )}
                  {!isPlaceholder(member.linkedin) && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink size={12} />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
