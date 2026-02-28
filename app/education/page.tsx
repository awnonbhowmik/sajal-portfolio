import { educationData, jobData } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "Education & Job Experience — Sajal Chakroborty",
};

export default function EducationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
        Education & Job Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            <GraduationCap size={22} />
            Education
          </h2>
          <div className="space-y-4">
            {educationData.map((entry, i) => (
              <div
                key={i}
                className="relative pl-5 border-l-2 border-indigo-200 dark:border-indigo-800"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <p className="font-semibold text-gray-900 dark:text-white">{entry.degree}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{entry.institution}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">{entry.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Experience */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            <Briefcase size={22} />
            Job Experience
          </h2>
          <div className="space-y-4">
            {jobData.map((entry, i) => (
              <div
                key={i}
                className="relative pl-5 border-l-2 border-indigo-200 dark:border-indigo-800"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <p className="font-semibold text-gray-900 dark:text-white">{entry.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{entry.institution}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">{entry.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
