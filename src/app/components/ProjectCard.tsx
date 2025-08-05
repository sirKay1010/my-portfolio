"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  liveUrl,
  codeUrl,
}: Props) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.02]"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-56 object-contain"
      />

      <div className="p-4">
        <h3 className="text-xl bg-red-600 font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-3 text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tech.map((item, i) => (
            <span key={i} className="bg-white/10 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Live
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
