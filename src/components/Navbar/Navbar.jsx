import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  {
    icon: <FaGithub />,
    link: "https://github.com/DHRUVMALI007",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/dhruv-mali-b6305027a/",
    label: "LinkedIn",
  },
];

const resumePath = "/resume/Dhruv_Mali_Resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, link) => {
    const target = document.querySelector(link);

    if (!target) return;

    event.preventDefault();
    closeMenu();

    const offset = 88;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetTop,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });

    window.history.pushState(null, "", link);
    setActiveSection(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.link))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }

        if (window.scrollY < 120) {
          setActiveSection("#home");
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-cyan-400/10 bg-slate-950/85 shadow-[0_18px_60px_rgba(2,6,23,0.62)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Go to home section"
          className="group flex min-w-0 items-center gap-3 outline-none"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_25px_rgba(6,182,212,0.25)] transition duration-300 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.34)] group-focus-visible:ring-2 group-focus-visible:ring-cyan-300/70">
            <span className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-md transition group-hover:bg-cyan-400/20" />
            <span className="absolute -left-8 top-0 h-full w-8 rotate-12 bg-white/20 transition duration-700 group-hover:left-16" />
            <span className="relative text-lg font-black text-cyan-300">
              DM
            </span>
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-xl font-black tracking-wide text-white sm:text-2xl">
              Dhruv<span className="text-cyan-400">.AI</span>
            </span>
            <span className="hidden text-xs font-semibold tracking-[0.25em] text-slate-400 sm:block">
              AI / ML ENGINEER
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/45 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.link;

            return (
              <a
                key={item.name}
                href={item.link}
                onClick={(event) => handleNavClick(event, item.link)}
                className={`group relative rounded-full px-4 py-2 text-sm font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60 ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.10)]"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-cyan-300"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-1 left-1/2 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 ${
                    isActive
                      ? "w-6 -translate-x-1/2 opacity-100"
                      : "w-0 -translate-x-1/2 opacity-0 group-hover:w-5 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-300 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(6,182,212,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              {item.icon}
            </a>
          ))}

          <a
            href={resumePath}
            download="Dhruv_Mali_Resume.pdf"
            className="group ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-black text-white shadow-[0_12px_34px_rgba(37,99,235,0.28)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(6,182,212,0.35)] focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            <HiOutlineDocumentDownload className="text-lg transition group-hover:translate-y-0.5" />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/75 text-xl text-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.35)] outline-none transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18 }}
              >
                <FaTimes />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={shouldReduceMotion ? false : { rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18 }}
              >
                <FaBars />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: -18, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-50 lg:hidden"
            >
              <div className="mx-4 mb-5 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-cyan-400/10 bg-slate-950/95 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                <div className="relative mb-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />

                  <p className="relative text-sm font-bold text-white">
                    Dhruv Mali
                  </p>
                  <p className="relative mt-1 text-xs leading-relaxed text-slate-400">
                    AI/ML Engineer portfolio with machine learning, data science,
                    analytics and full-stack AI projects.
                  </p>
                </div>

                <div className="grid gap-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.link;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.link}
                        onClick={(event) => handleNavClick(event, item.link)}
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: shouldReduceMotion ? 0 : index * 0.035 }}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60 ${
                          isActive
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isActive
                              ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                              : "bg-slate-700"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 outline-none transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>

                  <a
                    href={resumePath}
                    download="Dhruv_Mali_Resume.pdf"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-black text-white shadow-[0_12px_34px_rgba(37,99,235,0.28)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-200"
                  >
                    <HiOutlineDocumentDownload className="text-lg" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;