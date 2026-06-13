import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React.js", "Next.js", "Python", "SEO", "PostgreSQL"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter) || p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()));

  return (
    <section id="projects" className="border-b border-slate-200 bg-slate-50/40 py-20 px-6 sm:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
          <div className="max-w-2xl">
            <header className="flex justify-between items-end mb-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">01 / Selected Works</h2>
              <div className="text-xs text-slate-400 italic">{PROJECTS.length} Total Entries</div>
            </header>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Latest Work & Client Projects
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed text-sm font-medium">
              Below is a selection of full stack applications, performance optimization platforms, and script workflows designed and executed by Rajat.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 select-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded border px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider transition-all select-none cursor-pointer ${
                  activeFilter === filter
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center rounded-xl border border-slate-200 bg-white p-12">
            <p className="font-sans text-sm text-slate-500 font-semibold">No results found for active filter tag.</p>
          </div>
        )}
      </div>
    </section>
  );
}
