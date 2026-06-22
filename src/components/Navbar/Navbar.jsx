import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Journey", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/DHRUVMALI007", label: "GitHub" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/dhruv-mali-b6305027a/", label: "LinkedIn" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed left-0 top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "border-b border-cyan-400/10 bg-[#020617]/82 shadow-[0_12px_50px_rgba(2,6,23,.45)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" onClick={() => setMenuOpen(false)} className="group flex min-w-0 items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
            <span className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-md transition group-hover:bg-cyan-400/20" />
            <span className="relative text-lg font-black text-cyan-300">DM</span>
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-xl font-black tracking-wide text-white sm:text-2xl">
              Dhruv<span className="text-cyan-400">.AI</span>
            </span>
            <span className="hidden text-xs font-medium tracking-[0.25em] text-slate-400 sm:block">
              AI / ML PORTFOLIO
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="group relative text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(6,182,212,0.25)]"
            >
              {item.icon}
            </a>
          ))}

          <a
            href="/Dhruv_Mali_Resume.pdf"
            download
            className="group ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
          >
            <HiOutlineDocumentDownload className="text-lg transition group-hover:translate-y-0.5" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/70 text-xl text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="mx-4 mb-5 rounded-3xl border border-cyan-400/10 bg-slate-950/95 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="grid gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>

                <a
                  href="/Dhruv_Mali_Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-black text-slate-950"
                >
                  <HiOutlineDocumentDownload className="text-lg" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;