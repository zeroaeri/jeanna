"use client";

import { useState } from "react";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@domain.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 md:px-16 bg-cream border-t-4 border-ink text-ink relative overflow-hidden">
      
      {/* Decorative Washi Tape Element */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-pink/80 border border-ink shadow-sm -rotate-2 z-0 mix-blend-multiply" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Call to Action */}
        <div className="space-y-6">
          <span className="inline-block text-xs font-pixel uppercase tracking-widest text-tea bg-yellow px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] -rotate-2">
            Let&apos;s Connect
          </span>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-ink">
            Let&apos;s build something <br />
            {/* The sweeping editorial script accent */}
            <span className="font-script text-7xl sm:text-8xl md:text-9xl text-pink lowercase tracking-normal -ml-2">
              crisp together.
            </span>
          </h2>
          
          <p className="text-ink/80 max-w-lg text-lg font-medium leading-relaxed">
            Have a brand that needs refining or a digital platform that needs building? My inbox is always open.
          </p>
        </div>

        {/* Tactile Copy Email Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4">
          
          <div className="flex-1 px-5 py-4 bg-white border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] font-pixel text-sm text-ink flex items-center justify-between transform rotate-1">
            <span className="lowercase">{email}</span>
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-1.5 bg-yellow border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_var(--color-ink)] text-ink transition-all uppercase"
            >
              {copied ? "Copied! ✨" : "Copy Email"}
            </button>
          </div>

          <a
            href={`mailto:${email}`}
            className="px-8 py-5 bg-pink text-white border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] font-pixel text-sm uppercase text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all transform -rotate-1"
          >
            Send Direct Mail
          </a>
        </div>

        {/* Footer Bottom Links */}
        <div className="pt-16 border-t-2 border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-pixel uppercase text-ink/60">
          <p>© {new Date().getFullYear()} — Designed & Coded in Next.js</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-tea transition-colors">
              LinkedIn
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              Dribbble
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}