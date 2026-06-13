import { MouseEvent } from "react";
import { ArrowDown, Mail, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero() {
  const scrollToId = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[85vh] flex-col justify-center bg-white py-20 md:py-28 border-b border-slate-200 px-6 sm:px-10 overflow-hidden select-none">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
      
      {/* Soft Violet Radial Orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3.5 py-1.5 font-mono text-[9px] font-bold tracking-widest uppercase text-slate-500 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>STATUS: OPEN FOR WORK CONTRACTS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
          className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Building high-performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-900">digital architectures</span> with razor-sharp precision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-slate-500 max-w-2xl font-medium"
        >
          Hi, I'm <strong className="font-bold text-slate-900">{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => scrollToId(e, "projects")}
            className="group inline-flex items-center gap-3 rounded bg-slate-900 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-white hover:bg-slate-850 transition-all focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 shadow-md cursor-pointer"
          >
            Selected Works
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToId(e, "contact")}
            className="inline-flex items-center gap-3 rounded border border-slate-205 bg-white/50 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-slate-900 hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 cursor-pointer"
          >
            Start Conversation
            <Mail className="h-4 w-4 text-indigo-600" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.25 }}
        className="relative mt-20 border-t border-slate-200/80 pt-8 w-full max-w-4xl z-10"
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="border-l-2 border-indigo-600/20 pl-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">Current Base</p>
            <p className="mt-1 font-sans text-xs font-bold text-slate-900">Gurgaon, Haryana, India</p>
          </div>
          <div className="border-l-2 border-indigo-600/20 pl-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">Latest Affiliation</p>
            <p className="mt-1 font-sans text-xs font-bold text-slate-900">Digital Web Solutions</p>
          </div>
          <div className="border-l-2 border-indigo-600/20 pl-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">Focus Core</p>
            <p className="mt-1 font-sans text-xs font-bold text-slate-900">React, Python, SEO</p>
          </div>
          <div className="border-l-2 border-indigo-600 pl-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">Global Bookings</p>
            <p className="mt-1 font-sans text-xs font-bold text-indigo-600">Open for Contracts</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
