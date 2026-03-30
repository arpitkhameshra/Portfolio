"use client";

import { motion } from "framer-motion";
import { aboutParagraphs, personalInfo, cloudPlatforms } from "@/lib/data";
import StatCounter from "./ui/StatCounter";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[--color-border-glow] bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-accent text-xl mb-12">
            &gt; about.sh
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Bio Column */}
          <motion.div 
            className="w-full lg:w-[55%] space-y-6 text-text-muted text-base leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            {aboutParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>

          {/* Cards Column */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {/* Impact Numbers */}
            <motion.div 
              className="bg-surface-2 rounded-xl border border-[--color-border-glow] p-8 hover:border-accent transition-colors shadow-lg group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-text-main font-mono text-lg mb-6 border-b border-[--color-border-glow] pb-4">
                Card 1 — "Impact Numbers"
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <StatCounter value={40} suffix="%" label="↓ Deploy Time" />
                <StatCounter value={99.9} suffix="%" label="Uptime Achieved" />
                <StatCounter value={35} suffix="%" label="↓ Detect Time" />
                <StatCounter value={50} suffix="%" label="↓ Env Bugs" />
              </div>
            </motion.div>

            {/* Cloud Platforms */}
            <motion.div 
              className="bg-surface-2 rounded-xl border border-[--color-border-glow] p-8 hover:border-[#f97316] transition-colors shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-text-main font-mono text-lg mb-6 flex items-center justify-between border-b border-[--color-border-glow] pb-4">
                <span>Card 2 — "Cloud Platforms"</span>
                <div className="flex space-x-2">
                  <span className="bg-[#f97316]/20 text-[#f97316] text-xs px-2 py-1 rounded">AWS</span>
                  <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">GCP</span>
                </div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cloudPlatforms.map(platform => (
                  <span key={platform} className="px-3 py-1 bg-surface border border-[--color-border-glow] rounded text-sm text-text-muted hover:text-text-main transition-colors hover:border-text-muted">
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Currently */}
            <motion.div 
              className="bg-surface-2 rounded-xl border border-[--color-border-glow] p-8 hover:border-accent-3 transition-colors shadow-lg group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5 }}
            >
               <h3 className="text-text-main font-mono text-lg mb-6 border-b border-[--color-border-glow] pb-4">
                Card 3 — "Currently"
              </h3>
              <ul className="space-y-4 text-sm text-text-muted font-mono">
                <li className="flex items-center space-x-3">
                  <span>🏢</span>
                  <span className="text-text-main">Webledger Solution Pvt. Ltd</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>Jaipur, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>💼</span>
                  <span>DevOps Engineer (Aug 2025–Present)</span>
                </li>
                <li className="flex items-center space-x-3 text-accent-3 mt-6 pt-4 border-t border-[--color-border-glow]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-3 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-3"></span>
                  </span>
                  <span>Available for new opportunities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
