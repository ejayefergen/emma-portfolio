import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="animate-fade-in px-6 pb-16 pt-24 md:pt-32">
      <div className="mx-auto flex max-w-[900px] flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Emma Fergen
          </h1>
          <p className="mt-3 text-xl text-accent md:text-2xl">
            Product Manager — AI, Growth & Analytics
          </p>
          <p className="mt-4 max-w-[600px] text-base leading-relaxed text-foreground-secondary md:text-lg">
            I build easy to use products that solve complex problems.
            Currently co-founding Onit, an AI household operating system.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <Image
          src="/avatar.jpg"
          alt="Emma Fergen"
          width={180}
          height={180}
          priority
          className="shrink-0 rounded-full border-2 border-border object-cover shadow-sm"
        />
      </div>
    </section>
  );
}
