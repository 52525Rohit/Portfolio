import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
