import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-foreground-secondary">
          &copy; {new Date().getFullYear()} Emma Fergen
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
