import { ExternalLink } from "lucide-react";
import { journalPapers, preprints, dissertation, msThesis } from "@/lib/data";

export const metadata = {
  title: "Publications — Sajal Chakroborty",
};

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Publications</h1>

      {/* Journal & Conference Papers */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Journal & Conference Papers
        </h2>
        <ol className="space-y-4 list-decimal list-outside pl-5">
          {journalPapers.map((pub, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-gray-500 dark:text-gray-400">{pub.authors}. </span>
              <em className="text-gray-900 dark:text-white not-italic font-medium">{pub.title}</em>
              {". "}
              <span className="text-gray-600 dark:text-gray-400">{pub.venue}</span>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                >
                  [PDF] <ExternalLink size={12} />
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Preprints */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Preprints
        </h2>
        <ol className="space-y-4 list-decimal list-outside pl-5">
          {preprints.map((pub, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-gray-500 dark:text-gray-400">{pub.authors}. </span>
              <em className="text-gray-900 dark:text-white not-italic font-medium">{pub.title}</em>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                >
                  [PDF] <ExternalLink size={12} />
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Dissertation */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Dissertation
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <em className="not-italic font-medium text-gray-900 dark:text-white">{dissertation.title}</em>
          <a
            href={dissertation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
          >
            [Link] <ExternalLink size={12} />
          </a>
        </p>
      </section>

      {/* M.S. Thesis */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          M.S. Thesis
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <em className="not-italic font-medium text-gray-900 dark:text-white">{msThesis.title}</em>
          <a
            href={msThesis.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
          >
            [Link] <ExternalLink size={12} />
          </a>
        </p>
      </section>
    </div>
  );
}
