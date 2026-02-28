export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© Sajal Chakroborty. All rights reserved.</p>
        <p className="mt-1">
          <a
            href="mailto:schakroborty@wpi.edu"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            schakroborty@wpi.edu
          </a>
          {" · "}
          <a
            href="mailto:sajal.math@yahoo.com"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            sajal.math@yahoo.com
          </a>
        </p>
      </div>
    </footer>
  );
}
