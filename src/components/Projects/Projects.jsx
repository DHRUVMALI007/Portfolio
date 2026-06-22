import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaRobot, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "AI Disease Prediction System",
    category: "Machine Learning",
    description:
      "A machine learning based healthcare prediction project that processes symptoms/data and gives predictive output using trained ML models.",
    icon: <FaBrain />,
    tech: ["Python", "ML", "Pandas", "Scikit-learn"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "Data Analytics Dashboard",
    category: "Data Analytics",
    description:
      "Interactive dashboard concept for analyzing business or student data using charts, insights, KPIs, and clean visual reporting.",
    icon: <FaChartLine />,
    tech: ["Power BI", "Excel", "SQL", "Analytics"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "AI Chatbot Assistant",
    category: "AI Application",
    description:
      "A smart chatbot-style application concept focused on natural interaction, structured responses, and user-friendly AI interface design.",
    icon: <FaRobot />,
    tech: ["React", "Python", "API", "AI"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "Modern Developer Portfolio",
    category: "Frontend",
    description:
      "A responsive animated portfolio built with React, Tailwind CSS, Framer Motion, and real-world UI/UX structure.",
    icon: <FaCode />,
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Projects
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Real-world style projects for an{" "}
          <span className="gradient-text">AI/ML portfolio</span>
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          These projects are presented with a professional structure: problem,
          technology, implementation idea, and clear outcome.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="glass-card group relative overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 sm:p-7"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-cyan-400/10 text-3xl text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                  {project.icon}
                </div>

                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-200">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">{project.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/70 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  Preview
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;