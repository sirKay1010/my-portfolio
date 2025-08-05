"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  Calendar,
  Star,
  Grid3X3,
  List,
  X,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

// 🎓 TYPESCRIPT LESSON 1: Interfaces
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
  date: string;
  featured?: boolean;
  category?: string;
  details?: string[]; // New field for detailed accomplishments
}

type ViewMode = "grid" | "masonry" | "featured";
type FilterType = "all" | "web" | "mobile" | "featured";

// 🎓 TYPESCRIPT LESSON 3: Enhanced project data with categories
const projects: Project[] = [
  {
    title: "JusGiveaway",
    description:
      "A fun game-based giveaway platform with real-time interactions, user authentication, and in-game currency features.",
    tech: ["C#", "Blazor", "Firebase", "Tailwind CSS"],
    image: "/jusGiveaway-project-image.webp",
    liveUrl: "https://jusgiveaway.com",
    codeUrl: "https://github.com/KoladTech/JusGiveawayWeb",
    date: "2025-08",
    featured: true,
    category: "web",
    details: [
      "Built with Blazor and C#, integrating Firebase Realtime Database for real-time interactions",
      "Implemented a user friendly and responsive UI/UX experience with Tailwind CSS",
      "Design dynamic onboarding with Shepherd.js",
      "Integrated multi-environment Google Analytics support",
      "Optimized for mobile-first experience with progressive web app capabilities",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — designed with Next.js, TypeScript, framer-motion and Tailwind for a clean, responsive look with advanced animations.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "node.js"],
    image: "/my-portfolio-project-image.webp",
    liveUrl: "https://my-portfolio-gray-beta-41.vercel.app/",
    codeUrl: "https://github.com/sirKay1010/my-portfolio",
    date: "2025-06",
    category: "web",
    details: [
      "Built with Next.js 14 and TypeScript for type-safe development",
      "Built responsive design system with Tailwind CSS.",
      "Implemented advanced animations using Framer Motion.",
      "Optimized for performance with image optimization.",
      "Deployed on Vercel with automatic CI/CD pipeline.",
    ],
  },
  {
    title: "David Bukola Foundation",
    description:
      "A charity organization website built with a mission to transform lives and empower hope.",
    tech: ["Next.js", "JavaScript", "Firebase", "TailwindCSS", "Docker"],
    image: "/davidBukolaFoundation-project-image.webp",
    liveUrl: "https://davidbukolafoundation.org",
    codeUrl: "https://github.com/KoladTech/david-bukola-foundation",
    date: "2024-11",
    category: "web",
    details: [
      "Designed and built with Next.js, Tailwind CSS, and JavaScript for simplicity and accessibility.",
      "Integrated firebase' firestore database for real-time data management.",
      "Implemented vanilla JavaScript for interactive features and form handling",
      "Optimized images and assets for fast loading and Hosted on Hostinger VPS.",
      "Built contact forms with client and server side validation for a smooth user experience",
      "Containerized and deployed with Docker on Hostinger VPS, ensuring scalability and reliability.",
    ],
  },
  {
    title: "BeepR",
    description:
      "A simple userfriendly chat app — built as my final project for Havards CS50x course.",
    tech: ["Flask", "SQLite", "Bootstrap", "Python"],
    image: "/beepr-project-image.webp",
    liveUrl: "https://youtu.be/5zUFL6MJngc",
    codeUrl: "https://github.com/sirKay1010/Final_Project-Beepr",
    date: "2022-05",
    category: "web",
    details: [
      "Integrated Flask - SocketIO library and Python for real time chat functionality.",
      "Designed SQLite database schema with proper relationships and data integrity.",
      "Implemented user authentication and session management with secure password hashing.",
      "Designed UI with Bootstrap and custom JavaScript interactions",
    ],
  },
];

// 🎓 FRAMER MOTION: Enhanced animation variants
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
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  idle: {
    scale: 1,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.03,
    rotateY: 3,
    z: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
};

const ProjectsSection = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: true,
  });

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    return project.category === filter;
  });

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  // Get grid layout classes based on view mode
  const getGridClasses = () => {
    switch (viewMode) {
      case "masonry":
        return "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6";
      case "featured":
        return "grid grid-cols-1 lg:grid-cols-2 gap-8";
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 right-12 w-2 h-2 bg-blue-400/60 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400/60 rounded-full"
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
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
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
        className="max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8 max-w-md mx-auto" />

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12"
          variants={itemVariants}
        >
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
            {[
              { mode: "grid" as ViewMode, icon: Grid3X3, label: "Grid" },
              { mode: "masonry" as ViewMode, icon: List, label: "Masonry" },
              { mode: "featured" as ViewMode, icon: Star, label: "Featured" },
            ].map(({ mode, icon: Icon, label }) => (
              <motion.button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === mode
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-2 p-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
            {[
              { filter: "all" as FilterType, label: "All" },
              { filter: "featured" as FilterType, label: "Featured" },
              { filter: "web" as FilterType, label: "Web" },
            ].map(({ filter: filterType, label }) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === filterType
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${filter}`}
            className={getGridClasses()}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className={`${
                  viewMode === "masonry" ? "break-inside-avoid mb-6" : ""
                }`}
                variants={itemVariants}
                layout
              >
                <motion.div
                  className={`group relative bg-gradient-to-br from-white/5 to-white/10 
                              rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden
                              hover:border-purple-400/40 transition-all duration-500 ${
                                viewMode === "featured"
                                  ? "h-[500px]"
                                  : "h-[450px]"
                              }`}
                  variants={cardVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Header with badges */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
                    <div className="flex gap-2">
                      {project.featured && (
                        <motion.div
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/90 to-blue-500/90 
                                   rounded-full text-xs font-medium backdrop-blur-sm"
                          initial={{ scale: 0, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          <Star className="w-3 h-3 inline mr-1" />
                          Latest
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <motion.div
                    className={`relative overflow-hidden ${
                      viewMode === "featured" ? "h-56" : "h-48"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>

                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-600/90 to-gray-700/90 
                               rounded-full text-xs font-medium backdrop-blur-sm border border-gray-200/30"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Calendar className="w-3 h-3" />
                          {formatDate(project.date)}
                        </motion.div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   rounded-full border border-blue-500/30 text-blue-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 group flex items-center justify-center gap-2 px-4 py-2.5 text-sm
                                 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium 
                                 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.a>

                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm
                                 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium 
                                 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          className="flex justify-center mt-16 gap-8"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {projects.length}
            </div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {projects.filter((p) => p.featured).length}
            </div>
            <div className="text-sm text-gray-400">Featured</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {new Set(projects.flatMap((p) => p.tech)).size}
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-black/95 
                         backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center
                           bg-white/10 backdrop-blur-sm border border-white/20 rounded-full
                           hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                {/* Header Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-16">
                    <div className="flex items-center gap-3 mb-3">
                      {selectedProject.featured && (
                        <div
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/90 to-blue-500/90 
                                      rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          <Star className="w-3 h-3 inline mr-1" />
                          Featured
                        </div>
                      )}
                      <div
                        className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-600/90 to-gray-700/90 
                                    rounded-full text-xs font-medium backdrop-blur-sm border border-gray-200/30"
                      >
                        <Calendar className="w-3 h-3" />
                        {formatDate(selectedProject.date)}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-200 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   rounded-full border border-blue-500/30 text-blue-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  {selectedProject.details && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        What I Built
                      </h3>
                      <div className="space-y-3">
                        {selectedProject.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                            <p className="text-gray-300 leading-relaxed">
                              {detail}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group flex items-center justify-center gap-3 px-6 py-3
                               bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium 
                               rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>

                    <motion.a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3
                               bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium 
                               rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
