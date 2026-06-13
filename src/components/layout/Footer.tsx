import { ArrowUp, Github } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    // If inside scroll container (desktop), scroll the wrapper
    const scrollContainer = document.querySelector(".lg\\:overflow-y-auto");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6 sm:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display text-sm font-extrabold tracking-wider text-slate-900 uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-sans text-xs text-slate-400 mt-1 font-medium">
              &copy; {currentYear} &bull; Architected with Precision in React & Tailwind CSS.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] font-bold text-slate-500 hover:text-slate-900 uppercase inline-flex items-center gap-1.5 tracking-wider"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="font-mono text-[10px] font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider"
            >
              Email Setup
            </a>
            <button
              onClick={handleScrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50 text-slate-650 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
