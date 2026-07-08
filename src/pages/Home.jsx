// src/pages/Home.jsx
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const BackgroundEffects = () => {
  const nodes = [
    "left-[8%] top-[18%]",
    "left-[18%] top-[64%]",
    "left-[36%] top-[28%]",
    "left-[62%] top-[72%]",
    "left-[78%] top-[22%]",
    "left-[88%] top-[58%]",
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deep base glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%),linear-gradient(to_bottom,#020617_0%,#020617_48%,#030712_100%)]" />

      {/* Aurora AI orbs */}
      <div
        className="ai-orb absolute -left-44 -top-44 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl sm:h-[32rem] sm:w-[32rem]"
        style={{ "--move-x": "38px", "--move-y": "44px" }}
      />
      <div
        className="ai-orb absolute -right-48 top-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl sm:h-[36rem] sm:w-[36rem]"
        style={{
          "--move-x": "-42px",
          "--move-y": "36px",
          animationDelay: "-4s",
        }}
      />
      <div
        className="ai-orb absolute bottom-[-14rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl sm:h-[38rem] sm:w-[38rem]"
        style={{
          "--move-x": "30px",
          "--move-y": "-34px",
          animationDelay: "-8s",
        }}
      />

      {/* Neural grid */}
      <div className="ai-grid absolute inset-0 opacity-80" />

      {/* Soft scanner light */}
      <div className="ai-scanline absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-300/10 via-cyan-300/5 to-transparent" />

      {/* Small neural nodes */}
      <div className="hidden md:block">
        {nodes.map((position, index) => (
          <span
            key={position}
            className={`ai-node absolute ${position} h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_22px_rgba(103,232,249,0.75)]`}
            style={{ animationDelay: `${index * 0.55}s` }}
          />
        ))}
      </div>

      {/* Noise + readability layers */}
      <div className="ai-noise absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/50 to-slate-950" />
    </div>
  );
};

const Home = () => {
  return (
    <main
      id="home"
      className="portfolio-home relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-50"
    >
      <style>{`
        .portfolio-home {
          isolation: isolate;
          scroll-behavior: smooth;
        }

        @keyframes aiFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(var(--move-x), var(--move-y), 0) scale(1.06);
          }
        }

        @keyframes aiGridShift {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 64px 64px;
          }
        }

        @keyframes aiScan {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          35% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }

        @keyframes aiPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.45);
          }
        }

        @keyframes pageReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-orb {
          animation: aiFloat 15s ease-in-out infinite;
          will-change: transform;
        }

        .ai-grid {
          background-image:
            linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px);
          background-size: 64px 64px;
          animation: aiGridShift 22s linear infinite;
          mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
        }

        .ai-scanline {
          animation: aiScan 9s linear infinite;
        }

        .ai-node {
          animation: aiPulse 3.2s ease-in-out infinite;
        }

        .ai-noise {
          background-image: radial-gradient(rgba(255,255,255,0.16) 0.7px, transparent 0.7px);
          background-size: 18px 18px;
          opacity: 0.045;
        }

        .page-reveal {
          animation: pageReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-home {
            scroll-behavior: auto;
          }

          .ai-orb,
          .ai-grid,
          .ai-scanline,
          .ai-node,
          .page-reveal {
            animation: none !important;
          }
        }
      `}</style>

      {/* Accessibility skip link */}
      <a
        href="#about"
        className="sr-only z-50 rounded-full border border-cyan-300/30 bg-slate-950 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-2xl shadow-cyan-950/40 outline-none transition focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <BackgroundEffects />

      {/* Page Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="page-reveal mx-auto w-full flex-1">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Home;