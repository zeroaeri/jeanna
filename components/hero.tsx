"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      
      {/* 
        Whimsical Background Element 
        Replaced the tech-glow with a warm, soft ambient gradient using your new palette
      */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] pointer-events-none opacity-40 bg-gradient-to-tr from-pink via-yellow to-tea" 
      />

      <div className="max-w-5xl z-10 space-y-6 relative">
        
        {/* Availability Sticker Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] text-xs font-pixel uppercase tracking-widest text-ink transform -rotate-2"
        >
          <span className="w-2 h-2 rounded-full bg-pink animate-bounce" />
          <span>Available for projects</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col leading-[0.9]"
        >
          {/* The Editorial Cursive */}
          <span className="font-script text-6xl sm:text-7xl md:text-9xl text-tea lowercase -mb-4 z-10">
            visual precision.
          </span>
          {/* The Bold High-Contrast Sans */}
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ink uppercase">
            Engineered Code.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-ink/80 max-w-2xl font-medium leading-relaxed"
        >
          I&apos;m a <span className="text-tea font-bold bg-yellow/40 px-1">Graphic Designer</span> and{" "}
          <span className="text-pink font-bold bg-pink/10 px-1">Web Developer</span> building clean visual identities and high-performance digital experiences.
        </motion.p>

        {/* Tactile Button Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 pt-6 font-pixel uppercase text-sm"
        >
          <a
            href="#work"
            className="px-6 py-3 bg-pink text-white border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all duration-200"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-cream text-ink border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:bg-yellow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}