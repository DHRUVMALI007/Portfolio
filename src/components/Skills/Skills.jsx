import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartPie,
  FaCode,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: <FaBrain />,
    description: "Model building, preprocessing, feature engineering, and intelligent automation.",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "Deep Learning", icon: <FaBrain /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    ],
  },
  {
    title: "Data Analytics",
    icon: <FaChartPie />,
    description: "Data analysis, dashboards, SQL queries, reporting, and business insights.",
    gradient: "from-violet-400 to-purple-500",
    skills: [
      { name: "Power BI", icon: <FaChartPie /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Excel", icon: <FaChartPie /> },
      { name: "Data Visualization", icon: <FaChartPie /> },
      { name: "Statistics", icon: <FaChartPie /> },
    ],
  },
  {
    title: "Development",
    icon: <FaCode />,
    description: "Modern frontend, backend APIs, databases, Git workflow, and deployment.",
    gradient: "from-pink-400 to-violet-500",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-violet-500/5 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <FaCode className="text-cyan-300" />
            Technical Toolkit
          </div>

          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Skills Built for{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              AI, Data & Development
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A focused set of technologies I use to build AI-powered platforms,
            analytics dashboards, APIs, and modern responsive web applications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: groupIndex * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/50 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${group.gradient}`}
              />

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${group.gradient} text-2xl text-slate-950 shadow-lg`}
              >
                {group.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">{group.title}</h3>

              <p className="mt-3 min-h-[78px] text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.12 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex items-center gap-2 rounded-2xl border border-slate-700/70 bg-[#020617]/70 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]"
                  >
                    <span className="text-base text-cyan-300">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;