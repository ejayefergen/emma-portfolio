import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-tag-bg px-3 py-1.5 text-sm text-tag-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
