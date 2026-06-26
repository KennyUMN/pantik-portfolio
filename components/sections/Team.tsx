import Image from "next/image";
import { team, type TeamMember } from "@/content/team";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const roleStyle: Record<TeamMember["role"], { badge: string; dot: string }> = {
  "PM / Business Strategist": {
    badge: "bg-amber/15 text-amber border border-amber/25",
    dot: "bg-amber",
  },
  "Fullstack Developer": {
    badge: "bg-ember/15 text-ember border border-ember/25",
    dot: "bg-ember",
  },
  "AI Engineer / Designer": {
    badge: "bg-teal/20 text-teal border border-teal/30",
    dot: "bg-teal",
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
  return value.startsWith("[") || value === "";
}

function MemberAvatar({ member }: { member: TeamMember }) {
  const style = roleStyle[member.role];
  if (!isPlaceholder(member.photo)) {
    return (
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-line-dark">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold ring-2 ring-line-dark",
        style.badge
      )}
    >
      {getInitials(member.name)}
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  if (isPlaceholder(href)) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 text-xs text-muted-dark hover:text-amber transition-colors"
    >
      <ExternalLink size={12} />
      {label}
    </a>
  );
}

export function Team() {
  return (
    <Section id="team" className="bg-surface/30">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">Tim</p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-4">
          Komposisi yang sengaja dirancang.
        </h2>
        <p className="text-muted-dark max-w-2xl mb-16">
          Kemudi bisnis dan kedalaman teknis dalam satu tim — itulah yang kriteria lomba minta, dan itulah yang kami miliki.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => {
          const style = roleStyle[member.role];
          return (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line-dark bg-surface p-6 transition-colors hover:border-amber/40">
                <div className="flex items-start gap-4 mb-5">
                  <MemberAvatar member={member} />
                  <div className="min-w-0 flex-1 pt-1">
                    <p className="font-heading font-semibold text-text-dark truncate">
                      {member.name}
                    </p>
                    <span
                      className={cn(
                        "mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                        style.badge
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", style.dot)} />
                      {member.role}
                    </span>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm text-muted-dark leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {member.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-line-dark">
                  <SocialLink href={member.github} label="GitHub" />
                  <SocialLink href={member.linkedin} label="LinkedIn" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
