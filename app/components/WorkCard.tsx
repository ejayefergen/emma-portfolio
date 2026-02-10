import type { WorkItem } from "@/lib/data";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="group rounded-xl border border-border bg-background-secondary p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-accent">{item.org}</span>
        {item.inProgress && (
          <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
            In Progress
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-foreground">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-foreground-secondary">{item.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-tag-bg px-2.5 py-1 text-xs font-medium text-tag-text"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
