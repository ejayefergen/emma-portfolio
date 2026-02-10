import { workItems } from "@/lib/data";
import { WorkCard } from "./WorkCard";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-2xl font-bold text-foreground">Selected Work</h2>
        <p className="mt-2 text-foreground-secondary">
          Products I&apos;ve built and shipped across AI, growth, and IoT.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {workItems.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
