import { motion } from "framer-motion";
import {
  FaCode,
  FaChartLine,
  FaBrain,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    title: "Full Stack Development",
    tag: "Web Applications",
    description:
      "Built full-stack platforms using React, Node.js, Express.js, MongoDB, Tailwind CSS, authentication, appointment scheduling, order tracking, payments, and email notification features.",
    highlights: ["React.js", "Node.js", "MongoDB", "Razorpay"],
    icon: <FaCode />,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    year: "2025",
    title: "Data Analytics & Power BI",
    tag: "Business Intelligence",
    description:
      "Worked on analytics-focused projects involving data cleaning, KPI monitoring, SQL-based analysis, Excel reporting, Power BI dashboards, and business intelligence visualizations.",
    highlights: ["Power BI", "SQL", "Excel", "Data Visualization"],
    icon: <FaChartLine />,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    year: "2026",
    title: "AI & Machine Learning",
    tag: "Intelligent Systems",
    description:
      "Focused on AI/ML projects such as AI DataCleaner and PipOpt, applying Python, machine learning, preprocessing, feature engineering, model evaluation, and predictive analytics.",
    highlights: ["Python", "Machine Learning", "FastAPI", "Scikit-Learn"],
    icon: <FaBrain />,
    gradient: "from-pink-400 to-violet-500",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <FaRocket className="text-cyan-300" />
            Professional Growth
          </div>

          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            My Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A timeline of how I developed my skills across full-stack
            development, data analytics, business intelligence, and AI/ML
            project building.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-violet-500/0 md:block" />

          {/* Mobile Left Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-violet-500/0 md:hidden" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative mb-12 flex md:mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#020617] bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] md:left-1/2">
                {item.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group ml-12 w-full rounded-[2rem] border border-slate-700/60 bg-slate-900/50 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_55px_rgba(6,182,212,0.12)] sm:p-8 md:ml-0 md:w-[46%]`}
              >
                <div
                  className={`mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.gradient} px-4 py-2 text-sm font-black text-slate-950`}
                >
                  {item.year}
                  <span className="h-1 w-1 rounded-full bg-slate-950" />
                  {item.tag}
                </div>

                <h3 className="text-2xl font-black text-white transition group-hover:text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
                    >
                      <FaCheckCircle className="text-cyan-300" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;