"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./projectcard";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-xl bg-zinc-950 border-l border-zinc-800 z-50 p-8 overflow-y-auto flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-mono uppercase text-zinc-500">
                  {project.details.year} • {project.details.role}
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-zinc-100 text-sm font-mono"
                >
                  [CLOSE ✕]
                </button>
              </div>

              <h2 className="text-3xl font-bold">{project.title}</h2>

              <div className="rounded-xl overflow-hidden border border-zinc-800 max-h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Overview</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.details.overview}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Key Deliverables</h4>
                <ul className="space-y-2">
                  {project.details.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pastel-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 flex items-center gap-4">
              {project.details.liveUrl && (
                <a
                  href={project.details.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-lg bg-pastel-peach text-zinc-950 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Live Site
                </a>
              )}
              {project.details.githubUrl && (
                <a
                  href={project.details.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-lg border border-zinc-800 text-zinc-200 text-sm font-medium hover:bg-zinc-900 transition-colors"
                >
                  View Source
                </a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}