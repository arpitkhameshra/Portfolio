"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { TimelineDot } from "./ui/TimelineDot";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[--color-border-glow] bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-accent text-xl mb-16 text-center md:text-left">
            &gt; git log --experience
          </div>
        </motion.div>

        <div className="relative">
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[--color-border-glow] via-accent to-[--color-border-glow] shadow-[0_0_8px_rgba(0,212,255,0.5)] transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <TimelineDot active={exp.current} />
                  </div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="md:hidden absolute left-4 transform -translate-x-1/2 z-10 top-8">
                    <TimelineDot active={exp.current} />
                  </div>

                  <motion.div 
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <div className={`bg-surface-2 p-6 rounded-xl border border-[--color-border-glow] shadow-lg relative overflow-hidden group hover:border-accent/50 transition-colors ${exp.current ? 'border-l-4 border-l-accent-3' : 'border-l-4 border-l-accent'}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex flex-col mb-4">
                        <span className="text-accent font-mono text-sm mb-1">{exp.period}</span>
                        <h3 className="text-xl font-bold text-text-main">{exp.role}</h3>
                        <div className={`text-text-muted mt-1 ${isEven ? 'md:justify-end' : ''} flex items-center`}>
                          <span className="mr-2">🏢 {exp.company}</span>
                          <span className="text-sm">📍 {exp.location}</span>
                        </div>
                      </div>

                      <ul className={`space-y-3 text-text-muted text-sm leading-relaxed ${isEven ? 'md:text-left' : ''}`}>
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">▹</span>
                            <span className="text-left">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-6 flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-surface border border-[--color-border-glow] rounded text-xs text-text-muted">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
