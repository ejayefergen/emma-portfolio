import { socialLinks } from "@/lib/data";
import { Mail, LinkedIn, GitLab } from "./icons";

const iconMap = {
  mail: Mail,
  linkedin: LinkedIn,
  gitlab: GitLab,
} as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <p className="mt-3 max-w-[600px] text-base leading-relaxed text-foreground-secondary">
          I&apos;m always open to connecting with other curious humans. Feel free to reach out.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background-secondary px-4 py-2.5 text-sm font-medium text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Icon />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
