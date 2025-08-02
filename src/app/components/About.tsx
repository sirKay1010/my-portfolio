"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const techStack = [
  "Next.js",
  "Blazor",
  "C#",
  "Firebase",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Figma",
];

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen w-full flex items-center justify-center text-white px-6 py-20"
  >
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* About Me Section - Right */}
      <div>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 [font-family:var(--font-heading)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A little about Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed whitespace-pre-line mb-6 [font-family:var(--font-body)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Note: ALL the (') here are actually the ASCII equivalents, (Copied and pasted) because ESLint warns of possible issues with using the curly quotation that way... */}
          {`I'm a creative problem solver and self-taught developer from Nigeria.
          I enjoy bringing ideas to life, whether it's a slick UI, a fun new project, or trying out a new tech tool.
          When I'm not writing code, I'm probably behind a camera lens.
          I love capturing moments through photography and videography. Feel free to `}
          <Link
            href="https://www.instagram.com/sir.kayy__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-purple-300 underline hover:text-purple-400 transition"
          >
            view my creative work on Instagram → 📸
          </Link>
          {`\nI learn best by building and I live for those "It actually works!" moments.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="#contact"
            className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl shadow transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      {/* Tech Stack Section - Right */}
      <div>
        <motion.h3
          className="text-xl font-medium mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies I’ve worked with
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
