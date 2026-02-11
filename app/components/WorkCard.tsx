import type { WorkItem } from "@/lib/data";
import { ExternalLink } from "./icons";

export function WorkCard({ item }: { item: WorkItem }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-accent">{item.org}</span>
        <div className="flex items-center gap-2">
          {item.inProgress && (
            <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
              In Progress
            </span>
          )}
          {item.link && (
            <ExternalLink className="shrink-0 text-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100" />
          )}
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-foreground">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-foreground-secondary">{item.role}</p>
      <ul className="mt-3 space-y-1.5">
        {item.highlights.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm leading-relaxed text-foreground-secondary"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
            {point}
          </li>
        ))}
      </ul>
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
    </>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl border border-border bg-background-secondary p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group rounded-xl border border-border bg-background-secondary p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {content}
    </div>
  );
}
