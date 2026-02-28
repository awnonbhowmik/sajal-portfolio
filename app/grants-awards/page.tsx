import { grantsAwards } from "@/lib/data";
import { Award } from "lucide-react";

export const metadata = {
  title: "Grants & Awards — Sajal Chakroborty",
};

export default function GrantsAwardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Grants & Awards</h1>

      <ol className="space-y-4">
        {grantsAwards.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300">
              <Award size={16} />
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
