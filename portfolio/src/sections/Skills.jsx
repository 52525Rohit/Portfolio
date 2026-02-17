"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

// ----------------- GodBackground Component -----------------
function AnimatedSphere() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.001;
  });

  return (
    <Sphere args={[2, 100, 200]} ref={mesh} scale={1.5}>
      <MeshDistortMaterial
        color="#00ffff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

function GodBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}

// ----------------- Skills Data -----------------
const allSkills = [
  // Frontend
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 93, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 88, category: "Frontend" },
  { name: "Material UI", level: 85, category: "Frontend" },
  { name: "DaisyUI", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 94, category: "Frontend" },
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 92, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 88, category: "Backend" },
  { name: "Multer", level: 80, category: "Backend" },
  { name: "Nodemailer", level: 82, category: "Backend" },
  { name: "Socket.IO", level: 78, category: "Backend" },
  { name: "RESTFUll API", level: 85, category: "Backend" },

  // Database
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "MySQL", level: 87, category: "Database" },

  { name: "GSAP", level: 80, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
  { name: "Thunder Client", level: 85, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

// ----------------- SkillsSection Component -----------------
export default function SkillsSection() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);

  const filtered =
    active === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === active);

  // Animate skill cards and progress bars
  useEffect(() => {
    // gsap.from(".skill-card", {
    //   opacity: 0,
    //   y: 40,
    //   duration: 0.2,
    //   stagger: 0.1,
    //   ease: "power3.out",
    // });

    filtered.forEach((skill, index) => {
      gsap.fromTo(
        `.skill-bar-${index}`,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.skill-card:nth-child(${index + 1})`,
            start: "top 80%",
          },
        },
      );
    });
  }, [active, filtered]);

  // Tilt effect
  const handleTilt = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = (el) => {
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 md:px-16 bg-[#0f0f0f] text-white overflow-hidden"
    >
      <GodBackground />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 border ${
              active === cat
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black border-transparent"
                : "border-white/20 hover:border-cyan-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((skill, index) => (
          <div
            key={index}
            onMouseMove={(e) => handleTilt(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
            className="skill-card relative p-[1px] rounded-2xl transition-transform duration-300"
          >
            {/* Neon Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-spin-slow blur opacity-30"></div>

            {/* Glass Inner Card */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex justify-between mb-4 text-sm font-medium">
                <span>{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 skill-bar-${index}`}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
