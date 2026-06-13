import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, ArrowUpRight, Github, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../../data/portfolioData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Projects", href: "#projects", num: "01" },
    { name: "Experience", href: "#experience", num: "02" },
    { name: "Skills", href: "#skills", num: "03" },
    { name: "About", href: "#about", num: "04" },
    { name: "Contact", href: "#contact", num: "05" },
  ];

  useEffect(() => {
    const sectionIds = ["hero", "projects", "experience", "skills", "about", "contact"];
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const activeEntry = entries.find(entry => entry.isIntersecting);
      if (activeEntry) {
        setActiveSection(activeEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0.1
    });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(targetId);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Permanent Desktop Sidebar: Visible only on lg (1024px) screen sizes and larger */}
      <aside className="hidden lg:flex w-80 shrink-0 border-r border-slate-200 bg-white flex-col p-10 h-screen sticky top-0 justify-between select-none">
        <div>
          <div className="w-14 h-14 bg-slate-900 rounded-xl mb-6 flex items-center justify-center text-white font-display font-bold text-xl shadow-sm">
            RV
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-indigo-600 mt-1 font-mono text-xs uppercase tracking-wider font-semibold">
            {PERSONAL_INFO.shortTitle}
          </p>
          <p className="text-slate-400 text-[10px] uppercase font-mono mt-0.5 tracking-widest">
            Digital Web Solutions
          </p>
        </div>

        <nav className="my-8 flex-grow flex flex-col justify-center space-y-6">
          {navItems.map((item) => {
            const normalizedHref = item.href.replace("#", "");
            const isCurrent = activeSection === normalizedHref;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center text-sm transition-all duration-150 group ${
                  isCurrent
                    ? "text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-900 font-medium"
                }`}
              >
                <span
                  className={`transition-all duration-150 mr-4 ${
                    isCurrent
                      ? "w-8 h-[2px] bg-slate-950"
                      : "w-4 h-[1px] bg-slate-200 group-hover:w-8 group-hover:h-[2px] group-hover:bg-slate-950"
                  }`}
                />
                <span className="font-mono text-[10px] mr-2 text-slate-300 group-hover:text-slate-500">
                  {item.num}
                </span>
                {item.name}
              </a>
            );
          })}
        </nav>

        <div>
          <div className="flex space-x-3 mb-6">
            <a
              href={PERSONAL_INFO.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-xs font-semibold"
              title="GitHub Profile"
            >
              Gh
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-xs font-semibold"
              title="Direct Mail"
            >
              Ml
            </a>
            <a
              href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-xs font-semibold"
              title="Call"
            >
              Ph
            </a>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed font-mono">
            © {new Date().getFullYear()} / Built with Precision
          </p>
        </div>
      </aside>

      {/* Mobile & Tablet Header: Sticky top header with action drawer */}
      <header className="lg:hidden sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm">
                RV
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-extrabold tracking-tight text-slate-900 uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-indigo-600 uppercase font-semibold">
                  {PERSONAL_INFO.shortTitle}
                </span>
              </div>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded p-2 text-slate-650 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 36 }}
              style={{ overflow: "hidden" }}
              className="border-b border-slate-200 bg-white"
            >
              <div className="space-y-1.5 px-4 pt-2 pb-6 border-t border-slate-100">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block rounded px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span className="font-mono text-xs text-slate-400 mr-2">{item.num}</span>
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100 px-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">CONNECT SECURELY</span>
                  <div className="flex space-x-3">
                    <a
                      href={PERSONAL_INFO.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

