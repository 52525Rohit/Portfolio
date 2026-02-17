import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold tracking-widest text-purple-500"
      >
        ROHIT KUMAR'S PORTFOLIO
      </motion.h1>
    </motion.div>
  );
}
