"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: "dev" | "design";
  level: string;
}

const SKILLS: Skill[] = [
  // Web Dev
  { name: "Next.js", category: "dev", level: "App Router / SSR" },
  { name: "TypeScript", category: "dev", level: "Strict Mode" },
  { name: "Tailwind CSS", category: "dev", level: "Custom Configs" },
  { name: "Framer Motion", category: "dev", level: "Orchestration" },
  { name: "React", category: "dev", level: "Hooks & State" },
  { name: "Node.js", category: "dev", level: "API Routes" },

  // Graphic Design
  { name: "Figma", category: "design", level: "Systems & Auto-Layout" },
  { name: "Illustrator", category: "design", level: "Vector & Branding" },
  { name: "Photoshop", category: "design", level: "Asset Composition" },
  { name: "InDesign", category: "design", level: "Editorial Layouts" },
  { name: "Typography", category: "design", level: "Hierarchy & Grids" },
  { name: "Brand Identity", category: "design", level: "Guidelines & Specs" },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 md:px-16 bg-canvas-dark border-t border-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-1">
            Toolkit & Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Web Development Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase text-pastel-mint tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pastel-mint" />
              Development Stack
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.filter((s) => s.category === "dev").map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-pastel-mint/50 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <p className="font-semibold text-zinc-200 group-hover:text-pastel-mint transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Design Toolkit */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase text-pastel-lavender tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pastel-lavender" />
              Design Toolkit
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {SKILLS.filter((s) => s.category === "design").map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-pastel-lavender/50 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <p className="font-semibold text-zinc-200 group-hover:text-pastel-lavender transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}