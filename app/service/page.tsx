import { reviewerJournals } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Service — Sajal Chakroborty",
};

export default function ServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in space-y-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Service</h1>

      {/* Journal & Conference Reviewer */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Journal & Conference Reviewer
        </h2>
        <ul className="space-y-2">
          {reviewerJournals.map((journal) => (
            <li
              key={journal.name}
              className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0" />
              {journal.url ? (
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                >
                  {journal.name} <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-sm text-gray-700 dark:text-gray-300">{journal.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Others */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Others
        </h2>
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Organizer, Departmental Colloquium, Department of Mathematical and Physical Sciences,
            East West University, Dhaka, Bangladesh (Academic year: 2017-18).
          </p>
        </div>
      </section>
    </div>
  );
}
