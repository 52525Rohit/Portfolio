"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import toast from "react-hot-toast";
import { API } from "../Components/Context/Context";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      console.log("Response:", data);

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-40 px-6 md:px-16 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20 blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-20 contact-animate">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Let’s Work Together
        </h2>
        <p className="text-gray-400 mt-6 text-lg">
          Have a project or idea? Let’s build something extraordinary.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto contact-animate">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl space-y-8"
        >
          <div>
            <label className="block mb-2 text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-105 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message "}
          </button>
        </form>
      </div>

      {/* Social Links */}
      {/* <div className="text-center mt-20 contact-animate">
        <p className="text-gray-400 mb-6">Or connect with me</p>
        <div className="flex justify-center gap-8 text-xl">
          <a
            href="https://www.linkedin.com/in/rohit-kumar-630475153"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/52525Rohit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
        </div>
      </div> */}
    </section>
  );
}
