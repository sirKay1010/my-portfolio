"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Code2, Brain, ExternalLink } from "lucide-react";

const techStack = [
  "Next.js",
  "C#",
  "Blazor",
  "Firebase",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Figma",
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2.5,
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* About Me Section - Left */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                <Brain className="w-4 h-4 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                A little about me
              </h2>
            </div>

            <div className="h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent mb-8" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I&apos;m a creative problem solver and self-taught developer from
              Nigeria. I enjoy bringing ideas to life, whether it&apos;s a slick
              UI, a fun new project, or trying out new tech.
            </p>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Camera className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not writing code, I&apos;m probably behind a
                  camera lens. I love capturing moments through photography and
                  videography.
                </p>
                <Link
                  href="https://www.instagram.com/sir.kayy__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Feel free to View my creative work on Instagram</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I learn best by doing and I live for those{" "}
              <span className="text-purple-400 font-semibold">
                &quot;It actually works!&quot;
              </span>{" "}
              moments.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 
                       text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 
                       transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Let&apos;s Connect</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Tech Stack Section - Right */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Technologies I&apos;ve worked with
              </h3>
            </div>

            <div className="h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-transparent mb-8" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                variants={techVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden p-2 bg-gradient-to-br from-white/5 to-white/10 
                         rounded-xl border border-white/20 backdrop-blur-sm hover:border-purple-400/40 
                         transition-all duration-300 cursor-default"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 
                              group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"
                />

                <span className="relative text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {tech}
                </span>

                {/* Subtle glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r 
                              from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-xl transition-opacity duration-300 -z-10"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional decorative element */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
                     rounded-xl border border-blue-500/20 backdrop-blur-sm"
          >
            <p className="text-gray-300 text-center italic">
              &quot;Always learning, always building, always growing.&quot;
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
