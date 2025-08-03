"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black/80 to-transparent border-t border-white/10 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-8 left-12 w-1.5 h-1.5 bg-blue-400/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-16 right-20 w-2 h-2 bg-purple-400/40 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Kayode Kolawole
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer passionate about creating elegant, modern web
              applications that make a difference.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>With a passion</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for Art and Creativity.</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white">
              Let&apos;s Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:sirkay1001@gmail.com"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform">
                  sirkay1001@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/sirKay1010"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500/20 group-hover:bg-gray-500/30 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/kayode-kolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform">
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Kayode Kolawole. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 
                     rounded-full border border-white/20 backdrop-blur-sm hover:border-white/30 
                     transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Back to top
            </span>
            <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
