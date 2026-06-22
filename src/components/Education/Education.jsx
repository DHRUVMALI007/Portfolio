import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBrain, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "M.Sc. (CA & IT)",
    institution: "K. S. School of Business Management & Information Technology",
    duration: "2025 - 2027",
    status: "Currently Pursuing",
    focus:
      "Artificial Intelligence, Machine Learning, Data Analytics, Python Development, and Software Development",
    icon: <FaBrain />,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    degree: "B.Sc. (CA & IT)",
    institution: "K. S. School of Business Management & Information Technology",
    duration: "2022 - 2025",
    status: "Awarded First Class",
    focus:
      "Computer Applications, Information Technology, Programming, Databases, Web Development, and Data Fundamentals",
    icon: <FaAward />,
    gradient: "from-violet-400 to-purple-500",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <FaGraduationCap className="text-cyan-300" />
            Academic Background
          </div>

          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Technical Foundation
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            My academic journey has built a strong foundation in computer
            applications, information technology, programming, data analytics,
            and AI/ML-focused problem solving.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/50 p-7 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_60px_rgba(6,182,212,0.12)] sm:p-8"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${item.gradient}`}
              />

              <div className="mb-7 flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-2xl text-slate-950 shadow-lg`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-cyan-300 sm:text-base">
                    <FaUniversity className="mt-1 shrink-0" />
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-700/60 bg-[#020617]/60 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Duration
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-200">
                    {item.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-[#020617]/60 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Status
                  </p>
                  <p className="mt-2 text-lg font-bold text-cyan-300">
                    {item.status}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-[#020617]/60 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Focus Areas
                  </p>
                  <p className="mt-2 leading-7 text-slate-400">
                    {item.focus}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;