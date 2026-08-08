import { ArrowUpRight } from "lucide-react";
import type { NewsItem as NewsItemType } from "../lib/data";

const labels = {
  publication: "Publication",
  course: "Teaching",
  award: "Recognition",
  talk: "Speaking",
};

export function NewsItem({ item, index }: { item: NewsItemType; index: number }) {
  const separator = item.text.indexOf(":");
  const text = separator > -1 ? item.text.slice(separator + 1).trim() : item.text;

  return (
    <article className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-white/[0.025] sm:grid-cols-[3.5rem_8rem_1fr_auto] sm:items-start sm:gap-5 sm:px-3">
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-signal">{labels[item.type]}</span>
      <p className="max-w-4xl text-sm leading-6 text-[#c5c8c3] sm:text-base sm:leading-7">{text}</p>
      <ArrowUpRight size={16} className="hidden text-muted transition-colors group-hover:text-signal sm:block" />
    </article>
  );
}
