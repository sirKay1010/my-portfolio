"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "JusGiveaway",
    description:
      "A fun game-based giveaway platform with live coin balances, custom modals, and Firebase backend.",
    tech: ["Blazor", "Firebase", "Tailwind CSS"],
    image: "/jusGiveaway-project-image.webp",
    liveUrl: "https://jusgiveaway.com",
    codeUrl: "https://github.com/kayode/jusgiveaway",
  },
  {
    title: "David Bukola Foundation",
    description:
      "A charity organization website built to showcase causes, share impact stories, and provide donation and contact access.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/davidBukolaFoundation-project-image.webp",
    liveUrl: "https://davidbukolafoundation.org",
    codeUrl: "https://github.com/kayode/davidbukolafoundation",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — designed with Next.js, TypeScript, and Tailwind for a clean, responsive look.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/images/portfolio.png",
    liveUrl: "https://kayode.vercel.app",
    codeUrl: "https://github.com/kayode/portfolio",
  },
  {
    title: "Beepr App",
    description:
      "A social productivity app that helps users stay accountable and connected while working — built as part of my CS50 final project.",
    tech: ["Flask", "SQLite", "Bootstrap", "Python"],
    image: "/images/beepr.png",
    liveUrl: "https://youtu.be/YOUR_BEEPR_DEMO", // replace with real link
    codeUrl: "https://github.com/kayode/beepr",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const projectsRef = useRef<HTMLElement | null>(null);
  const [isProjectsInView, setIsProjectsInView] = useState(false);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[0].children[index] as HTMLDivElement;
      if (child) {
        child.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest", // Prevent vertical scroll
        });
      }
    }
  };

  const handleScroll = useCallback(
    (direction: "left" | "right") => {
      const nextIndex =
        direction === "left"
          ? (activeIndex - 1 + projects.length) % projects.length
          : (activeIndex + 1) % projects.length;

      setActiveIndex(nextIndex);
      scrollToIndex(nextIndex);
    },
    [activeIndex]
  );

  useEffect(() => {
    if (isHovered || !isProjectsInView) return;

    const interval = setInterval(() => {
      handleScroll("right");
    }, 2500);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, isProjectsInView, handleScroll]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsProjectsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = projectsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full px-6 py-20 text-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => handleScroll("left")}
          className="bg-white/10 p-2 rounded-full hover:bg-white/20"
        >
          <ChevronLeft className="text-white" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => handleScroll("right")}
          className="bg-white/10 p-2 rounded-full hover:bg-white/20"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* Scrollable Carousel */}
      <section id="projects" ref={projectsRef}>
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 px-2 w-max">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="snap-start min-w-[300px] sm:min-w-[400px] md:min-w-[500px] shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === idx ? "bg-white" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
