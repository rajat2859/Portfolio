import { Briefcase, Calendar, GraduationCap, Globe } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-b border-slate-200 bg-white py-20 px-6 sm:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">02 / Biography</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Background & Motivation
              </h2>
              <p className="mt-6 font-sans text-sm leading-relaxed text-slate-500 font-medium">
                {PERSONAL_INFO.aboutMe}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                <GraduationCap className="h-5 w-5 text-indigo-500" />
                Education Keynote
              </h3>
              <div className="mt-4 space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/40 p-4">
                    <p className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">{edu.duration}</p>
                    <h4 className="font-sans text-sm font-bold text-slate-900 mt-1">{edu.degree}</h4>
                    <p className="font-sans text-xs text-slate-500 font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                <Globe className="h-5 w-5 text-indigo-500" />
                Languages Spoken
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div key={idx} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/40 px-3.5 py-1.5 font-sans text-xs text-slate-700 font-semibold">
                    <span>{lang.name}</span>
                    <span className="text-slate-400 font-normal">({lang.proficiency})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="experience" className="lg:col-span-7">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">03 / Chronology</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Professional Journey
            </h2>

            <div className="mt-8 relative border-l border-slate-200 pl-6 ml-1 space-y-8">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group -ml-4 p-5 rounded-2xl hover:bg-slate-50/70 border border-transparent hover:border-slate-200 transition-all duration-150">
                  <div className="absolute -left-[18px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 bg-white group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-all duration-150 shadow-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span className="font-sans text-xs font-bold text-indigo-600 font-mono">{exp.duration.toUpperCase()}</span>
                    </div>
                  </div>

                  <h3 className="mt-2.5 font-sans text-lg font-extrabold text-slate-900 leading-snug group-hover:text-indigo-950">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">{exp.location}</p>

                  <ul className="mt-4 space-y-3">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-slate-500 hover:text-slate-900 uppercase border border-slate-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
