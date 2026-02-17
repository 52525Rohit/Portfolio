import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import useLenis from "./hooks/useLenis";
import Projects from "./sections/Projects";
import Loader from "./Components/Loader";
import { motion } from "framer-motion";
import MouseGlow from "./Components/MouseGlow";
import SkillsSection from "./sections/Skills";
import ExperienceSection from "./sections/Experience";
import ContactSection from "./sections/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  useLenis();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Loader />
        <MouseGlow />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </motion.div>
      <Toaster />
    </>
  );
}

export default App;
