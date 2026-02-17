"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Meraaquii D&C Private Limited",
    period: "2025 - Present",
    description:
      "Developed and maintained full-stack web applications using React, Next.js, Node.js, and MongoDB. Built responsive, high-performance UIs and robust backend APIs while ensuring seamless integration between frontend and backend. Optimized database queries, improved page load speeds by 30%, and implemented secure authentication and authorization workflows. Collaborated in Agile teams, contributing to code quality, scalable architecture, and modern development best practices to deliver production-ready features efficiently.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards
      gsap.from(".exp-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate vertical progress line
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-black text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-gray-400 mt-4">
          Engineering growth through innovation & execution.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Background Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/10 h-full rounded-full"></div>

        {/* Animated Progress Line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
          style={{ height: "0%" }}
        ></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`exp-card relative mb-24 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-[45%] relative">
              {/* Glow Dot */}
              <div className="absolute top-6 -right-6 md:-right-8 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_25px_#00ffff] animate-pulse"></div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl transition duration-500 hover:scale-105 hover:border-cyan-400">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <h4 className="text-lg mt-1">{exp.company}</h4>
                <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                <p className="text-gray-300 mt-4">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
