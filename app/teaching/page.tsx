import { teachingData } from "@/lib/data";

export const metadata = {
  title: "Teaching — Sajal Chakroborty",
};

export default function TeachingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Teaching</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teachingData.map((institution) => (
          <div
            key={institution.name}
            className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {institution.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{institution.location}</p>
            <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 mb-4">
              {institution.role}
            </span>
            <ul className="space-y-2">
              {institution.courses.map((course) => (
                <li key={course.code} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-medium shrink-0">
                    {course.code}
                  </span>
                  <span>{course.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
