"use client";

import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  category: "dev" | "design" | "hybrid";
  summary: string;
  tags: string[];
  image: string;
  details: {
    role: string;
    year: string;
    overview: string;
    highlights: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  // Alternate rotations slightly to mimic a messy scrapbook desk
  const rotationClass = index % 2 === 0 ? "-rotate-2" : "rotate-2";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(project)}
      className={`
        group relative cursor-pointer bg-[#FAFAFA] border-2 border-black 
        shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000]
        hover:-translate-y-2 transition-all duration-300 p-3 flex flex-col 
        ${rotationClass} hover:rotate-0 z-10 hover:z-20
      `}
    >
      {/* Tape Graphic Detail */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border border-zinc-200 backdrop-blur-sm -rotate-3 z-20 shadow-sm" />

      {/* Polaroid Image */}
      <div className="h-48 w-full border-2 border-black overflow-hidden relative bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Card Text Content */}
      <div className="pt-4 pb-2 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-black font-sans leading-tight">
          {project.title}
        </h3>
        
        {/* Sticker Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-[family-name:var(--font-pixel)] uppercase px-2 py-1 bg-white border border-black shadow-[2px_2px_0px_0px_#000] text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}