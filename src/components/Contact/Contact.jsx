import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "dmali9786@gmail.com",
    link: "mailto:dmali9786@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    value: "dhruv-mali",
    link: "https://www.linkedin.com/in/dhruv-mali-b6305027a/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "DHRUVMALI007",
    link: "https://github.com/DHRUVMALI007",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Ahemdabad , Gujarat",
    link: "#contact",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailBody = `
Hello Dhruv,

${formData.message}

-------------------------
Sender Details:
Name: ${formData.name}
Email: ${formData.email}
-------------------------
`;

    const mailtoLink = `mailto:dmali9786@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Let&apos;s Create AI-Powered{" "}
          <span className="gradient-text">Solutions</span>
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          Interested in AI/ML projects, Generative AI solutions, internships,
          research, or collaborations? Let's connect and build impactful
          intelligent systems.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4"
        >
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              className="glass-card group flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                {item.icon}
              </div>

              <div className="min-w-0">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="truncate text-sm text-slate-400">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] p-6 sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-slate-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="AI/ML Project / Internship / Research Opportunity"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] sm:w-auto"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;