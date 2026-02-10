import { bio } from "@/lib/data";

export function About() {
  const paragraphs = bio.split("\n\n");

  return (
    <section id="about" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-2xl font-bold text-foreground">About</h2>
        <div className="mt-6 max-w-[700px] space-y-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-foreground-secondary"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
