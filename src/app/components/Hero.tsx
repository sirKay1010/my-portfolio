"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center px-6  text-white"
    >
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi there, I'm Kayode Kolawole
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I am a developer passionate about building elegant, modern web
            applications.
          </p>
          <a
            href="#projects"
            className="inline-block px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          {/* Image Section */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Background blob */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:right-0
             w-72 h-72 md:w-80 md:h-80 -z-10 rounded-full bg-purple-400/30 blur-3xl animate-pulse"
            />

            {/* Profile image */}
            <Image
              src="/profile-icon2.jpg"
              alt="Kayode"
              width={250}
              height={250}
              className="rounded-full object-cover shadow-lg border-2 border-white/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
