import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import profile from "../assets/My Profile.jpg";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full -left-20 top-20" />
      <div className="absolute w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full right-0 bottom-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Image with Parallax */}
        <motion.div style={{ y }} className="flex justify-center">
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Optional: subtle glow behind image */}
          <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-20 -z-10"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer focused on building beautiful,
            performant, and scalable web applications. I love crafting smooth
            user experiences with modern technologies and premium UI design.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to create world-class digital experiences that feel
            elegant, interactive, and memorable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
