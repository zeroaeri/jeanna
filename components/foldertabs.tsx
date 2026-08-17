"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "./projectcard";
import ProjectDrawer from "./projectdrawer";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Aura Design System",
    category: "design",
    summary: "Minimalist brand identity and editorial UI design guidelines.",
    tags: ["Branding", "UI/UX", "Figma"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    details: {
      role: "Lead Visual Designer",
      year: "2025",
      overview: "Crafted a complete visual identity and design system focused on stark typography and deliberate color accents.",
      highlights: ["Custom grid framework", "Comprehensive typography guide", "Interactive component spec"],
    },
  },
  {
    id: "2",
    title: "Kinetix Engine",
    category: "dev",
    summary: "High-performance web dashboard with real-time analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    details: {
      role: "Full-Stack Developer",
      year: "2026",
      overview: "Built a lightning-fast dynamic analytics interface leveraging Next.js App Router and edge caching.",
      highlights: ["Sub-100ms load times", "Custom data visualizations", "Full keyboard navigation support"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  },
  {
    id: "3",
    title: "Monolith Editorial",
    category: "hybrid",
    summary: "Interactive digital publication with custom web design & full code implementation.",
    tags: ["Next.js", "Framer Motion", "Branding"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    details: {
      role: "Designer & Developer",
      year: "2026",
      overview: "End-to-end creation of a web magazine featuring custom typography layouts and page transitions.",
      highlights: ["Seamless page routing", "Custom webGL effects", "Optimized asset pipeline"],
      liveUrl: "https://example.com",
    },
  },
];

// 🎀 Updated to use your new custom whimsical colors!
const TABS = [
  { id: "design", label: "graphic design", color: "bg-pink text-white" },
  { id: "dev", label: "web development", color: "bg-yellow text-ink" },
  { id: "hybrid", label: "hybrid works", color: "bg-cream text-ink" },
] as const;

export default function FolderTabs() {
  const [activeTab, setActiveTab] = useState<"design" | "dev" | "hybrid">("design");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const activeColor = TABS.find((t) => t.id === activeTab)?.color;
  const filteredProjects = PROJECTS.filter((project) => 
    activeTab === "hybrid" ? project.category === "hybrid" : project.category === activeTab || project.category === "hybrid"
  );

  return (
    <section id="work" className="py-24 px-6 md:px-16 w-full max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="font-script text-7xl md:text-9xl text-tea mb-0 lowercase -ml-2">
          selected works
        </h2>
        <div className="inline-block px-3 py-1 bg-yellow border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] transform -rotate-1 mt-2">
          <p className="font-pixel text-xs text-ink uppercase tracking-widest">
            Browse the archives
          </p>
        </div>
      </div>

      {/* The Folder UI */}
      <div className="relative">
        
        {/* Folder Tabs (Top Row) */}
        <div className="flex items-end gap-2 px-4 relative z-10 -mb-1 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                relative px-6 py-3 rounded-t-xl border-2 border-ink font-pixel text-sm uppercase transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? `${tab.color} pb-5 pt-4 z-20 translate-y-1 shadow-[-4px_0_0_0_var(--color-ink)]` 
                  : `bg-cream/60 text-ink/50 hover:bg-cream hover:text-ink pb-3 z-0 hover:-translate-y-1`}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Folder Body */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`
            relative z-10 w-full min-h-[500px] border-2 border-ink shadow-[8px_8px_0px_0px_var(--color-ink)] rounded-b-2xl rounded-tr-2xl p-8 md:p-12
            ${activeColor?.split(' ')[0]} 
          `}
        >
          {/* Inner Grid for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Slide-out Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}