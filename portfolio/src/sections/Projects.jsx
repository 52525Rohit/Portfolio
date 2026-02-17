import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Modern SaaS Dashboard",
    description: "Premium admin dashboard with analytics & animations.",
    image: "https://via.placeholder.com/600x400",
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack eCommerce with Stripe integration.",
    image: "https://via.placeholder.com/600x400",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 relative overflow-hidden"
    >
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full top-20 left-0" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group perspective"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transform transition duration-500 group-hover:rotate-2 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl max-w-lg w-full border border-white/20"
          >
            <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>

            <p className="text-gray-300 mb-6">{activeProject.description}</p>

            <div className="flex gap-6">
              <a
                href={activeProject.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={activeProject.live}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>

            <button
              onClick={() => setActiveProject(null)}
              className="mt-8 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
