import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "../Components/ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  // Typing Animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, []);

  // GSAP Cinematic Entrance + Parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });

      gsap.to(".parallax-bg", {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <ThreeBackground />

      {/* Animated Gradient Background */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-70" />

      {/* Floating Glow Elements */}
      <div className="absolute w-96 h-96 bg-purple-600/30 blur-3xl rounded-full -top-20 -left-20 animate-pulse" />
      <div className="absolute w-96 h-96 bg-indigo-600/30 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Title */}
        <h1 className="hero-title text-5xl md:text-4xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            ROHIT KUMAR
          </span>
        </h1>

        {/* Typing Subtitle */}
        <h2 className="hero-subtitle text-2xl md:text-3xl text-gray-300 mb-8">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Buttons */}
        <div className="hero-buttons flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-2xl">
          <a
            href="https://github.com/52525Rohit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-630475153"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
