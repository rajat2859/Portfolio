import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Dynamically assign theme styles from Professional Polish selected works template
  // Card 1 (index 0): Slate-100, bold dark badge, dark text
  // Card 2 (index 1): White, high contrast indigo accent badge
  // Card 3 (index 2): Slate-900 dark theme, high contrast white badge
  const isDark = index % 3 === 2;
  const isLightGray = index % 3 === 0;

  let cardStyle = "";
  let badgeStyle = "";
  let titleStyle = "";
  let descStyle = "";
  let borderStyle = "";
  let buttonStyle = "";

  if (isDark) {
    cardStyle = "bg-slate-900 border border-slate-900 text-white p-8 flex flex-col justify-between";
    badgeStyle = "bg-white text-slate-900 font-extrabold";
    titleStyle = "text-xl font-extrabold font-display text-white";
    descStyle = "text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed";
    borderStyle = "border-slate-800";
    buttonStyle = "border-slate-800 bg-slate-800 text-white hover:bg-slate-750";
  } else if (isLightGray) {
    cardStyle = "bg-slate-150 border border-slate-205 text-slate-800 p-8 flex flex-col justify-between";
    badgeStyle = "bg-slate-900 text-white font-extrabold";
    titleStyle = "text-xl font-extrabold font-display text-slate-900";
    descStyle = "text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed";
    borderStyle = "border-slate-200/60";
    buttonStyle = "border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100";
  } else {
    cardStyle = "bg-white border border-slate-205 text-slate-800 p-8 flex flex-col justify-between";
    badgeStyle = "bg-indigo-600 text-white font-extrabold";
    titleStyle = "text-xl font-extrabold font-display text-slate-900";
    descStyle = "text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed";
    borderStyle = "border-slate-200/60";
    buttonStyle = "border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100";
  }

  return (
    <div className={`rounded-xl shadow-xs transition-all duration-150 hover:scale-[1.015] hover:shadow-md ${cardStyle}`}>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] px-2.5 py-1 tracking-wider uppercase font-mono font-bold ${badgeStyle}`}>
            {project.role.split(" ")[0].toUpperCase()}
          </span>
          <span className={`font-mono text-[10px] ${isDark ? "text-slate-400" : "text-slate-400"}`}>
            {project.duration}
          </span>
        </div>

        <h3 className={titleStyle}>
          {project.title}
        </h3>

        <p className={descStyle}>
          {project.description}
        </p>

        {project.client && (
          <div className={`mt-4 flex items-center justify-between border-t border-b py-2.5 ${borderStyle}`}>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Context</span>
            <span className={`font-sans text-xs font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>
              {project.client}
            </span>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-wide uppercase border ${
                isDark 
                  ? "bg-slate-800/50 text-slate-300 border-slate-700/60" 
                  : "bg-slate-50 text-slate-600 border-slate-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Dynamic Architect Metrics for Greater Visual Polish */}
        {project.id === "project-1" && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Response Offset</div>
              <div className={`text-sm font-black font-display mt-0.5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>42ms Latency</div>
            </div>
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Cache Efficacy</div>
              <div className="text-sm font-black font-display mt-0.5 text-emerald-500">92% Hitrate</div>
            </div>
          </div>
        )}

        {project.id === "project-2" && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Core Web Vitals</div>
              <div className={`text-sm font-black font-display mt-0.5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>99 / 100 Score</div>
            </div>
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Organic Traffic Boost</div>
              <div className="text-sm font-black font-display mt-0.5 text-emerald-500">+40.2% Gain</div>
            </div>
          </div>
        )}

        {project.id === "project-3" && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Trigger Reliability</div>
              <div className="text-sm font-black font-display mt-0.5 text-emerald-500">99.99% Uptime</div>
            </div>
            <div className={`p-2.5 rounded-lg border ${isDark ? "bg-slate-850 border-slate-800" : "bg-white border-slate-200/80 shadow-xs"}`}>
              <div className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Data Synchronization</div>
              <div className="text-sm font-black font-display mt-0.5 text-slate-700">12.5k Actions/Day</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`mt-6 flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-semibold select-none cursor-pointer transition-colors ${buttonStyle}`}
        >
          {showDetails ? (
            <>
              Hide Technical Details <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              View Technical Details <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <AnimatePresence initial={false}>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 30 }}
              style={{ overflow: "hidden" }}
              className={`mt-4 rounded-lg border p-4 ${
                isDark 
                  ? "bg-slate-850 border-slate-800" 
                  : "bg-slate-50/50 border-slate-150"
              }`}
            >
              <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-display mb-3 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                <span>Implemented Features</span>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-xs leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    <span className={isDark ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`mt-6 flex items-center justify-between border-t pt-5 ${borderStyle}`}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-sans text-xs font-bold transition-colors ${
                isDark ? "text-slate-200 hover:text-white" : "text-slate-750 hover:text-slate-950"
              }`}
            >
              <Github className="h-4 w-4" /> Code Source
            </a>
          ) : (
            <span className="text-slate-400 text-xs">Proprietary Source</span>
          )}

          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 font-mono text-xs font-bold hover:underline ${
                isDark ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-750"
              }`}
            >
              Demo Hub <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">Doc Only</span>
          )}
        </div>
      </div>
    </div>
  );
}
