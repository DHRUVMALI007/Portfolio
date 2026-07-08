import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/40 px-5 py-8 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <a href="#home" className="text-2xl font-black text-white">
            Dhruv<span className="text-cyan-400">.AI</span>
          </a>

          <p className="mt-2 text-sm text-slate-500">
            © {year} Dhruv Mali. AI/ML Engineer | Generative AI Enthusiast | Building Intelligent
            Solutions.
          </p>
        </div>

        <p className="flex items-center gap-2 text-sm text-slate-500">
          Made with <FaHeart className="text-cyan-400" /> for AI Innovation & Machine Learning
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/DHRUVMALI007"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-mali-b6305027a/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
