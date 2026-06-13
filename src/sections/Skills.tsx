import { CheckCircle } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function Skills() {
  const accentBorders = [
    "border-t-indigo-600",
    "border-t-slate-900",
    "border-t-emerald-500",
    "border-t-sky-500",
  ];

  const accentIcons = [
    "text-indigo-650",
    "text-slate-800",
    "text-emerald-500",
    "text-sky-500",
  ];

  return (
    <section id="skills" className="border-b border-slate-200 bg-slate-50/40 py-20 px-6 sm:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">04 / Technical Matrix</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hard Skills & Capabilities
          </h2>
          <p className="mt-4 text-slate-500 font-medium text-sm leading-relaxed">
            A comprehensive overview of my tech stack, frameworks, database systems, and development processes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, idx) => {
            const borderTheme = accentBorders[idx % accentBorders.length];
            const iconTheme = accentIcons[idx % accentIcons.length];
            return (
              <div
                key={idx}
                className={`rounded-xl border border-slate-200 border-t-3 ${borderTheme} bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-xs hover:border-slate-350`}
              >
                <h3 className="font-display text-xs font-extrabold uppercase tracking-widest text-slate-905 pb-3 border-b border-slate-100">
                  {category.title}
                </h3>
                
                <ul className="mt-6 space-y-3.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <CheckCircle className={`h-4 w-4 shrink-0 ${iconTheme}`} />
                      <span className="font-sans text-xs font-semibold text-slate-750">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
