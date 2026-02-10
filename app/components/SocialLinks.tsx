import { socialLinks } from "@/lib/data";
import { Mail, LinkedIn, GitLab } from "./icons";

const iconMap = {
  mail: Mail,
  linkedin: LinkedIn,
  gitlab: GitLab,
} as const;

export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-foreground-secondary hover:text-accent transition-colors"
            aria-label={link.label}
          >
            <Icon />
            {showLabels && <span className="text-sm">{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
