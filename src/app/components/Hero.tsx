"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <div className="text-center lg:text-left order-1 lg:order-1">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                     rounded-full border border-blue-500/20 mb-6 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Available for work</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block">Hi there, I&apos;m</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Kayode Kolawole
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            A{" "}
            <span className="text-blue-400 font-semibold">
              full-stack developer
            </span>{" "}
            who blends creativity with code to build modern meaningful
            applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                       text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 
                       transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 
                       text-white font-medium rounded-lg hover:bg-white/20 hover:border-white/30 
                       transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: Enhanced Image Section */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={floatingVariants}
            whileInView="animate"
          >
            {/* Gradient background blobs */}
            <div className="absolute inset-0 -z-20">
              <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 -z-10">
              <div className="w-80 h-80 rounded-full border-2 border-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 animate-spin-slow" />
            </div>

            {/* Profile image container */}
            <div className="relative z-10 p-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20">
              <Image
                src="/profile-icon2.jpg"
                alt="Kayode Kolawole - Full Stack Developer"
                width={280}
                height={280}
                className="rounded-full object-cover shadow-2xl border-4 border-white/10"
                priority
              />

              {/* Status indicator */}
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse" />
            </div>

            {/* Floating skill badges */}
            <motion.div
              className="absolute -top-4 -left-4 px-3 py-2 bg-blue-500/90 backdrop-blur-sm rounded-lg text-sm font-medium shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              React
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-3 py-2 bg-purple-500/90 backdrop-blur-sm rounded-lg text-sm font-medium shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              Next.js
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 px-3 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-lg text-sm font-medium shadow-lg"
              animate={{
                x: [-3, 3, -3],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              TypeScript
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex md:absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
