"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Blazor",
  "C#",
];

const AboutSection = () => (
  <section
    id="about"
    className="h-screen w-full flex items-center justify-center text-white px-6"
  >
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Text Content */}
      <div>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          I&#39;m Kayode — a developer with a passion for creating clean and
          modern web apps. I build with technologies like Next.js, Blazor, and
          Firebase. I love solving real-world problems through code and
          continuously learning new tools and patterns.
        </motion.p>

        {/* Tech Stack Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

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
  </section>
);

export default AboutSection;
