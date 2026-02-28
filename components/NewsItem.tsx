import { BookOpen, GraduationCap, Trophy, Mic } from "lucide-react";
import type { NewsItem as NewsItemType } from "@/lib/data";

const iconMap = {
  publication: BookOpen,
  course: GraduationCap,
  award: Trophy,
  talk: Mic,
};

const colorMap = {
  publication: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  course: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  award: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  talk: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const labelMap = {
  publication: "Publication",
  course: "Course",
  award: "Award",
  talk: "Talk",
};

interface Props {
  item: NewsItemType;
  index: number;
}

export function NewsItem({ item, index }: Props) {
  const Icon = iconMap[item.type];
  const colorClass = colorMap[item.type];
  const label = labelMap[item.type];

  return (
    <div
      className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${colorClass}`}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1 ${colorClass}`}>
          {label}
        </span>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
}
