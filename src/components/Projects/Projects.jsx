import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaRobot,
  FaCode,
} from "react-icons/fa";

const projects = [
  {
    title: "DataCleaner AI",
    category: "Generative AI & Data Science",
    description:
      "AI-powered data cleaning platform that automates preprocessing, missing value handling, duplicate detection, outlier treatment, datatype conversion, and report generation.",
    details: [
      "Built a full-stack application using React, Node.js, Express, and MongoDB.",
      "Implemented automatic datatype detection and conversion.",
      "Added advanced duplicate and outlier handling.",
      "Generated downloadable cleaning reports and history tracking.",
      "Created an interactive Cleaning Studio for dataset transformation.",
      "Designed dashboard analytics and dataset statistics.",
    ],
    icon: <FaBrain />,
    tech: ["React", "Node.js", "MongoDB", "Express", "Python", "ML"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "AI Disease Prediction System",
    category: "Machine Learning",
    description:
      "Machine learning-based healthcare prediction system that analyzes symptoms and predicts possible diseases using trained models.",
    details: [
      "Collected and preprocessed healthcare datasets.",
      "Performed feature engineering and data cleaning.",
      "Trained ML models using Scikit-learn.",
      "Evaluated model performance using accuracy metrics.",
      "Built an easy-to-use prediction interface.",
    ],
    icon: <FaBrain />,
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "AI Chatbot Assistant",
    category: "Generative AI",
    description:
      "Conversational AI assistant capable of answering queries and providing structured responses using AI-powered workflows.",
    details: [
      "Designed conversational user interface.",
      "Integrated AI APIs and prompt engineering techniques.",
      "Handled user queries dynamically.",
      "Implemented response generation workflows.",
      "Created responsive frontend experience.",
    ],
    icon: <FaRobot />,
    tech: ["React", "Python", "API", "Generative AI"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
  {
    title: "AI Portfolio Website",
    category: "Frontend Development",
    description:
      "Modern responsive portfolio showcasing AI/ML projects, skills, certifications, and achievements.",
    details: [
      "Built with React and Tailwind CSS.",
      "Implemented Framer Motion animations.",
      "Created responsive layouts for all devices.",
      "Added professional AI-focused branding.",
      "Optimized performance and user experience.",
    ],
    icon: <FaCode />,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/DHRUVMALI007",
    live: "#",
  },
];

const viewportSettings = {
  once: true,
  margin: "0px 0px -40% 0px",
};

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggleProject = (index) => {
    setOpenProject((current) => (current === index ? null : index));
  };

  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Projects
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Featured <span className="gradient-text">AI & ML Projects</span>
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          Projects showcasing my experience in Machine Learning, Data Science,
          Generative AI, and Full-Stack Development.
        </p>
      </motion.div>

      <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const isOpen = openProject === index;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="glass-card group relative flex h-auto flex-col overflow-hidden rounded-[1.75rem] p-5 transition hover:-translate-y-2 hover:border-cyan-400/40 sm:p-6"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    {project.icon}
                  </div>

                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-right text-xs font-bold text-violet-200">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => handleToggleProject(index)}
                  className="mt-4 w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/15 hover:text-cyan-200"
                >
                  {isOpen ? "Hide Details" : "View Details"}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -8 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
                        <h4 className="mb-3 text-sm font-black text-white">
                          What I Did
                        </h4>

                        <ul className="space-y-2 text-sm leading-6 text-slate-300">
                          {project.details.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700/70 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;