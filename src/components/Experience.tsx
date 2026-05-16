"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Building2, MapPin, ChevronDown } from "lucide-react";

/**
 * Parse **bold** markers in text and render as JSX with accent color.
 */
function renderBullet(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[#1D9E75] font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 border-t border-[--color-border-glow] bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-main">
            Experience
          </h2>
          <div className="font-mono text-text-muted text-sm sm:mb-1">
            // {experiences.length} roles · 1.5 years
          </div>
        </motion.div>

        <div className="flex flex-col gap-0.5">
          {experiences.map((exp, idx) => {
            const isOpen = activeTab === idx;
            const indexStr = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={!isOpen ? { y: -2 } : {}}
                className={`border rounded-xl bg-surface-2 overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-[#1D9E75]" : "border-[--color-border-glow] hover:border-text-muted/30"
                }`}
              >
                {/* Top Row / Header */}
                <button
                  onClick={() => toggleTab(idx)}
                  className="w-full flex items-center p-4 md:p-6 text-left focus:outline-none bg-transparent"
                >
                  {/* Zone 1: Index */}
                  <div
                    className={`w-10 md:w-14 flex-shrink-0 font-mono text-2xl md:text-3xl font-bold transition-colors ${
                      isOpen ? "text-[#1D9E75]" : "text-text-muted/40"
                    }`}
                  >
                    {indexStr}
                  </div>

                  {/* Zone 2: Title & Company */}
                  <div className="flex-grow pr-4">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-text-main">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] sm:text-xs font-semibold bg-[#E1F5EE] text-[#0F6E56] px-2.5 py-1 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-text-muted text-xs md:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={14} className={isOpen ? "text-[#1D9E75]" : "text-text-muted"} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className={isOpen ? "text-[#1D9E75]" : "text-text-muted"} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Zone 3: Date & Progress */}
                  <div className="hidden sm:flex flex-col w-32 md:w-40 flex-shrink-0 pr-6 justify-center">
                    <div className="font-mono text-[11px] text-text-muted text-right mb-2">
                      {exp.period}
                    </div>
                    <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#1D9E75] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isOpen ? `${(exp as any).tenurePercent || 50}%` : "0%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Zone 4: Chevron */}
                  <div className="flex-shrink-0 flex items-center justify-center text-text-muted">
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#1D9E75]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Body (CSS Grid Animation) */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`p-4 md:p-6 border-t border-[--color-border-glow] bg-surface/20 transition-all duration-300 delay-50 ${
                      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}>
                      
                      {/* Stat Strip */}
                      {exp.stats && exp.stats.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
                          {exp.stats.map((stat, i) => (
                            <div key={i} className="bg-surface rounded-lg p-3 md:p-4 border border-[--color-border-glow] flex flex-col items-center justify-center text-center shadow-sm">
                              <motion.div 
                                className="text-xl md:text-2xl font-bold text-[#1D9E75] mb-1"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                {stat.value}
                              </motion.div>
                              <div className="text-[10px] md:text-xs text-text-muted capitalize">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bullets */}
                      <ul className="space-y-3 md:space-y-4 text-text-muted text-sm leading-relaxed mb-8">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -6 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                            transition={{ delay: i * 0.07 + 0.1 }}
                          >
                            <span className="text-[#1D9E75] mr-3 mt-0.5 font-bold">▹</span>
                            <span className="text-left">{renderBullet(bullet)}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Skill Tags */}
                      <div className="pt-5 border-t border-[--color-border-glow]">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className="px-2.5 py-1 bg-surface border border-[--color-border-glow] rounded-md text-[11px] font-mono text-text-muted inline-block cursor-default"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                              transition={{ delay: i * 0.03 + 0.28 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
