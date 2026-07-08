import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPython,
  FaServer,
} from "react-icons/fa";
import {
  SiFastapi,
  SiGoogleanalytics,
  SiReact,
  SiScikitlearn,
} from "react-icons/si";

const resumePath = "/resume/Dhruv_Mali_Resume.pdf";

const techStack = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "FastAPI",
  "React.js",
  "SQL",
  "Power BI",
  "MongoDB",
];

const stats = [
  { value: "03+", label: "Major Projects" },
  { value: "AI/ML", label: "Career Focus" },
  { value: "M.Sc.", label: "CA & IT Student" },
];

const orbitIcons = [
  {
    icon: <FaPython />,
    className: "left-4 top-5 sm:left-6",
    delay: 0,
    label: "Python",
  },
  {
    icon: <FaBrain />,
    className: "right-4 top-5 sm:right-6",
    delay: 0.2,
    label: "AI",
  },
  {
    icon: <SiGoogleanalytics />,
    className: "bottom-5 left-4 sm:left-6",
    delay: 0.4,
    label: "Analytics",
  },
  {
    icon: <SiReact />,
    className: "bottom-5 right-4 sm:right-6",
    delay: 0.6,
    label: "React",
  },
];

const projectHighlights = [
  {
    icon: <FaDatabase />,
    title: "AI DataCleaner",
    text: "Automated preprocessing, profiling and cleaning recommendations.",
  },
  {
    icon: <FaChartLine />,
    title: "PipOpt",
    text: "AI trading analysis with prediction and strategy optimization.",
  },
  {
    icon: <FaServer />,
    title: "Service System",
    text: "Full-stack repair, sales, orders and appointment platform.",
  },
];

const cardSkills = [
  { icon: <FaDatabase />, text: "Data" },
  { icon: <SiScikitlearn />, text: "Models" },
  { icon: <SiFastapi />, text: "APIs" },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  const handleAnchorClick = (event, targetId) => {
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const offset = 88;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetTop,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });

    window.history.pushState(null, "", targetId);
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-14 lg:px-8 lg:pt-32"
    >
      {/* Hero local glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px] sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
        <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-100 shadow-[0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-xl sm:text-sm"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">
              Seeking AI/ML Engineer & Data Scientist opportunities
            </span>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mb-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-400 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/55 px-3 py-1.5 backdrop-blur-xl">
              <FaMapMarkerAlt className="text-cyan-300" />
              Ahmedabad, Gujarat
            </span>

            <span className="rounded-full border border-slate-700/70 bg-slate-900/55 px-3 py-1.5 backdrop-blur-xl">
              Python • ML • Data Analytics
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="mx-auto max-w-5xl text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:mx-0 lg:text-7xl xl:text-8xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              Dhruv
              <span className="absolute -bottom-1 left-1/2 h-2 w-[92%] -translate-x-1/2 rounded-full bg-cyan-400/25 blur-sm" />
            </span>
            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI/ML Developer
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUpVariants}
            className="mt-5 min-h-[2.2rem] text-base font-bold text-cyan-200 sm:min-h-[2.5rem] sm:text-2xl"
          >
            {shouldReduceMotion ? (
              <span>Machine Learning Engineer</span>
            ) : (
              <TypeAnimation
                sequence={[
                  "Machine Learning Engineer",
                  1600,
                  "Data Scientist",
                  1600,
                  "Python Developer",
                  1600,
                  "Full Stack AI Builder",
                  1600,
                ]}
                speed={45}
                repeat={Infinity}
              />
            )}
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
          >
            I build intelligent data-driven products using machine learning,
            data preprocessing, model evaluation, APIs, dashboards and clean
            interfaces. My work includes AI DataCleaner, PipOpt, and full-stack
            service management systems.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start"
          >
            <a
              href="#projects"
              onClick={(event) => handleAnchorClick(event, "#projects")}
              className="group inline-flex w-[min(100%,18rem)] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 text-sm font-black text-white shadow-[0_14px_38px_rgba(37,99,235,0.28)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(6,182,212,0.32)] focus-visible:ring-2 focus-visible:ring-cyan-200 sm:w-auto"
            >
              View Projects
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href={resumePath}
              download="Dhruv_Mali_Resume.pdf"
              className="group inline-flex w-[min(100%,18rem)] items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 text-sm font-black text-cyan-200 outline-none transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_28px_rgba(6,182,212,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-200 sm:w-auto"
            >
              <FaDownload className="transition group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mt-6 flex items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="https://github.com/DHRUVMALI007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/60 text-xl text-slate-300 outline-none transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(6,182,212,0.18)] focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-mali-b6305027a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/60 text-xl text-slate-300 outline-none transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(6,182,212,0.18)] focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#contact"
              onClick={(event) => handleAnchorClick(event, "#contact")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm font-bold text-slate-300 outline-none transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-3 lg:mx-0 lg:justify-start"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/70 bg-slate-900/55 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-9 grid max-w-xl grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:grid-cols-3 lg:mx-0 lg:max-w-none"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 text-center shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.075]"
              >
                <div className="text-2xl font-black text-cyan-300 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, x: 50, scale: 0.96 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
          className="relative z-10 mx-auto w-full max-w-[32rem]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full bg-cyan-400/20 blur-[70px] sm:blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl"
          />

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_28px_90px_rgba(2,6,23,0.42)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-5"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

            <div className="rounded-[1.55rem] border border-slate-700/60 bg-[#020617]/75 p-4 sm:rounded-[1.75rem] sm:p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 truncate text-xs font-semibold text-slate-500 sm:ml-3">
                  dhruv_mali_ai.py
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/85 p-4 font-mono text-[0.72rem] leading-7 text-slate-300 shadow-inner sm:text-sm">
                <p>
                  <span className="text-violet-300">class</span>{" "}
                  <span className="text-cyan-300">DhruvMali</span>:
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">role</span> ={" "}
                  <span className="text-emerald-300">
                    &quot;AI/ML Developer&quot;
                  </span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">skills</span> = [
                  <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;ML&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Data&quot;</span>]
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">projects</span> = [
                  <span className="text-emerald-300">
                    &quot;DataCleaner&quot;
                  </span>
                  ,{" "}
                  <span className="text-emerald-300">&quot;PipOpt&quot;</span>]
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">build</span>(){" "}
                  <span className="text-violet-300">-&gt;</span>{" "}
                  <span className="text-cyan-300">real_world_solutions</span>
                </p>
              </div>

              {/* AI visual area */}
              <div className="relative mt-5 flex h-60 items-center justify-center overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 sm:h-72">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_35%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-6 rounded-full border border-cyan-400/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-12 rounded-full border border-violet-400/10"
                />

                {orbitIcons.map((item) => (
                  <motion.div
                    key={item.label}
                    aria-label={item.label}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, scale: 0.75 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, scale: [1, 1.08, 1], y: [0, -8, 0] }
                    }
                    transition={{
                      opacity: { duration: 0.5, delay: item.delay },
                      scale: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                      },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                      },
                    }}
                    className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/70 text-xl text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:h-12 sm:w-12 ${item.className}`}
                  >
                    {item.icon}
                  </motion.div>
                ))}

                <motion.div
                  animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 sm:h-44 sm:w-44"
                >
                  <div className="absolute h-24 w-24 rounded-full border border-violet-400/40 sm:h-28 sm:w-28" />
                  <div className="absolute h-14 w-14 rounded-full bg-cyan-400/20 blur-xl sm:h-16 sm:w-16" />

                  <motion.div
                    animate={
                      shouldReduceMotion ? undefined : { rotate: -360 }
                    }
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaBrain className="relative text-5xl text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,0.35)] sm:text-6xl" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {cardSkills.map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-center text-cyan-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <div className="mx-auto mb-1 flex justify-center text-lg">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold">{item.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {projectHighlights.map((project) => (
                  <div
                    key={project.title}
                    className="group rounded-2xl border border-slate-800/80 bg-slate-950/55 p-3 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105">
                        {project.icon}
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {project.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;