import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaRocket } from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain />,
    title: "AI/ML Focus",
    text: "Building ML workflows using Python, preprocessing, training, evaluation and practical AI logic.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Thinking",
    text: "Working with datasets, SQL, analytics, dashboards and data-driven decision making.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Skills",
    text: "Creating clean React interfaces connected with APIs, backend logic and databases.",
  },
  {
    icon: <FaRocket />,
    title: "Real Projects",
    text: "Focused on useful projects like AI DataCleaner, PipOpt and service management systems.",
  },
];

const profilePoints = [
  "Problem Solving",
  "Clean UI",
  "ML Models",
  "Data Handling",
  "APIs",
  "Dashboards",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            About Me
          </p>

          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Building intelligent products with{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              AI, data and code
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I am Dhruv Mali, an AI/ML-focused Computer Applications and IT
            student from Ahmedabad. I enjoy building practical projects using
            Python, machine learning, data analytics, React, APIs and databases.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index * 0.08}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_60px_rgba(2,6,23,0.25)] backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] sm:p-6"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                {item.icon}
              </div>

              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 grid gap-7 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Profile Summary
            </p>

            <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
              I like turning complex technical ideas into simple usable
              products.
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {profilePoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              My portfolio shows how I think through a project: understanding
              the problem, handling data, building model logic, designing clean
              UI and explaining results clearly.
            </p>

            <p>
              I am improving my skills in Machine Learning, Deep Learning,
              Python, React, FastAPI, PostgreSQL, MongoDB and Power BI to become
              a strong AI/ML Engineer or Data Scientist.
            </p>

            <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-4">
              <p className="font-semibold text-cyan-100">
                Current focus: practical AI/ML projects with clean UI,
                documentation and interview-ready explanation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;