import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaPython,
} from "react-icons/fa";
import {
  SiFastapi,
  SiGoogleanalytics,
  SiReact,
  SiScikitlearn,
} from "react-icons/si";

const floatingIcons = [
  { icon: <FaPython />, className: "left-[7%] top-[22%]", delay: 0 },
  { icon: <FaBrain />, className: "right-[9%] top-[24%]", delay: 0.25 },
  { icon: <SiGoogleanalytics />, className: "left-[10%] bottom-[18%]", delay: 0.5 },
  { icon: <SiReact />, className: "right-[12%] bottom-[16%]", delay: 0.75 },
];

const techStack = ["Python", "Machine Learning", "React", "FastAPI", "SQL", "Power BI"];

const stats = [
  { value: "04+", label: "Major Projects" },
  { value: "AI/ML", label: "Career Focus" },
  { value: "M.Sc.", label: "CA & IT Student" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            },
          }}
          className={`pointer-events-none absolute hidden h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-900/60 text-2xl text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-xl lg:flex ${item.className}`}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.12)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.9)]" />
            Open to AI/ML, Data & Software roles
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Dhruv Mali.
            <span className="mt-3 block gradient-text">AI/ML Developer</span>
          </h1>

          <div className="mt-5 min-h-[2.25rem] text-lg font-semibold text-cyan-200 sm:text-2xl">
            <TypeAnimation
              sequence={[
                "Machine Learning Engineer",
                1600,
                "Data Analyst",
                1600,
                "Python Developer",
                1600,
                "Full Stack Developer",
                1600,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            I build intelligent products that combine clean user interfaces, data pipelines,
            machine learning workflows, APIs, and dashboards to solve real-world problems.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.32)]"
            >
              View Projects <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/Dhruv_Mali_Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 text-sm font-black text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_28px_rgba(6,182,212,0.25)]"
            >
              <FaDownload className="transition group-hover:translate-y-0.5" />
              Download CV
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/70 bg-slate-900/55 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-xl hover:border-cyan-400/40 hover:text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 sm:max-w-xl lg:max-w-none">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-700/60 bg-slate-900/45 p-4 text-center backdrop-blur-xl"
              >
                <div className="text-2xl font-black text-cyan-300 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-[31rem]"
        >
          <div className="absolute inset-4 rounded-full bg-cyan-400/20 blur-[80px]" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative overflow-hidden rounded-[2.25rem] p-4 sm:p-5"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div className="rounded-[1.75rem] border border-slate-700/60 bg-[#020617]/70 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-semibold text-slate-500">
                  ai_portfolio.py
                </span>
              </div>

              <div className="rounded-2xl bg-slate-950/80 p-4 font-mono text-xs leading-7 text-slate-300 sm:text-sm">
                <p>
                  <span className="text-violet-300">class</span>{" "}
                  <span className="text-cyan-300">DhruvMali</span>:
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">role</span> ={" "}
                  <span className="text-emerald-300">&quot;AI/ML Developer&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">focus</span> = [
                  <span className="text-emerald-300">&quot;ML&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Data&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;APIs&quot;</span>]
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">build</span>(){" "}
                  <span className="text-violet-300">-&gt;</span>{" "}
                  <span className="text-cyan-300">real_world_solutions</span>
                </p>
              </div>

              <div className="mt-5 flex h-64 items-center justify-center rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400/30"
                >
                  <div className="absolute h-28 w-28 rounded-full border border-violet-400/40" />
                  <div className="absolute h-16 w-16 rounded-full bg-cyan-400/20 blur-xl" />
                  <FaBrain className="relative text-6xl text-cyan-300" />
                </motion.div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: <FaDatabase />, text: "Data" },
                  { icon: <SiScikitlearn />, text: "Models" },
                  { icon: <SiFastapi />, text: "APIs" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-center text-cyan-200"
                  >
                    <div className="mx-auto mb-1 flex justify-center text-lg">{item.icon}</div>
                    <div className="text-xs font-bold">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/DHRUVMALI007"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/60 text-xl text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-mali-b6305027a/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/60 text-xl text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;