import { BookMarked } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { teachingData } from "../../lib/data";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <PageHeader index="02" title="Teaching" description="More than five years of university teaching, from foundational calculus and statistics to advanced mathematical statistics and probability." />

      <div className="mt-20 grid gap-5 md:mt-28 md:grid-cols-2">
        {teachingData.map((institution, index) => (
          <article key={institution.name} className="panel group p-6 transition-colors hover:border-[#414741] sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <BookMarked className="text-signal" size={24} strokeWidth={1.5} />
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
            </div>
            <h2 className="font-display mt-10 text-3xl leading-tight text-paper sm:text-4xl">{institution.name}</h2>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              <span className="text-signal">{institution.role}</span>
              <span className="text-muted">{institution.location}</span>
            </div>
            <ul className="mt-8 border-t border-line">
              {institution.courses.map((course) => (
                <li key={course.code} className="grid grid-cols-[6.2rem_1fr] gap-4 border-b border-line py-3.5 text-sm leading-6">
                  <span className="font-mono text-xs font-bold text-signal">{course.code}</span>
                  <span className="text-[#c6c9c3]">{course.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
