"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Text */}
        <p className="text-sm">&copy; {currentYear} Grey Brain. All Rights Reserved.</p>

        {/* Right Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="#"
            className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
