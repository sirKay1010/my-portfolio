"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pulseVariant = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.6, 1, 0.6],
  },
  transition: {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut",
  },
};

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0F2027] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <div className="flex space-x-4 text-white text-3xl md:text-5xl font-semibold">
            <motion.span
              {...pulseVariant}
              transition={{ ...pulseVariant.transition, delay: 0 }}
            >
              Build.
            </motion.span>
            <motion.span
              {...pulseVariant}
              transition={{ ...pulseVariant.transition, delay: 0.3 }}
            >
              Develop.
            </motion.span>
            <motion.span
              {...pulseVariant}
              transition={{ ...pulseVariant.transition, delay: 0.6 }}
            >
              Create.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
