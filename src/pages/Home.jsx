import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-[-14rem] top-[10rem] h-[34rem] w-[34rem] rounded-full bg-violet-500/20 blur-[150px]" />
        <div className="absolute bottom-[-12rem] left-[25%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="noise-layer floating-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/70 to-[#020617]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;