import { ExternalLink } from "lucide-react";
import { socialLinks, bioText, recentNews } from "@/lib/data";
import { NewsItem } from "@/components/NewsItem";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        {/* Left: Avatar + social links */}
        <div className="flex flex-col items-center gap-6">
          {/* Avatar placeholder */}
          <div className="w-40 h-40 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white select-none">SC</span>
          </div>
          <div className="w-full space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>{link.label}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Bio text */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Sajal Chakroborty
          </h1>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
            Postdoctoral Scholar · Department of Mathematical Sciences · WPI
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {bioText}
          </p>
        </div>
      </section>

      {/* Recent News */}
      <section className="animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full inline-block" />
          Recent News
        </h2>
        <div className="space-y-3">
          {recentNews.map((item, i) => (
            <NewsItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
