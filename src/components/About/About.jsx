import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaRocket } from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain />,
    title: "AI/ML Focus",
    text: "Learning and building machine learning workflows using Python, data preprocessing, model training, and evaluation.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Thinking",
    text: "Comfortable working with datasets, analysis, dashboards, SQL concepts, and data-driven decision making.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Skills",
    text: "Building clean web interfaces with React and connecting them with APIs, backend logic, and real project flows.",
  },
  {
    icon: <FaRocket />,
    title: "Real-World Projects",
    text: "Focused on practical projects that can be explained clearly in interviews and used inside a professional portfolio.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          About Me
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Building intelligent digital products with{" "}
          <span className="gradient-text">AI, data and code</span>
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          I am Dhruv Mali, a Computer Applications and IT student focused on AI/ML,
          data analytics, Python development, and modern web technologies. My goal is
          to create useful, clean, and scalable solutions that combine machine learning
          logic with strong user experience.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="glass-card group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-cyan-400/40"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
              {item.icon}
            </div>

            <h3 className="text-xl font-black text-white">{item.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="glass-card mt-8 grid gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Profile Summary
          </p>

          <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
            I like turning complex technical ideas into simple usable products.
          </h3>
        </div>

        <div className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
          <p>
            My portfolio is designed to show not only what I know, but also how I
            think: problem understanding, data handling, model logic, UI design,
            deployment mindset, and project explanation.
          </p>

          <p>
            I am continuously improving my skills in machine learning, Python,
            React, backend APIs, database systems, and analytics tools to become a
            strong AI/ML-focused software professional.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;