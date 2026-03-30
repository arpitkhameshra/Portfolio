"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import PipelineDiagram from "./ui/PipelineDiagram";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expanded === idx) setExpanded(null);
    else setExpanded(idx);
  };

  return (
    <section id="projects" className="py-24 border-t border-[--color-border-glow] bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-accent text-xl mb-12">
            &gt; ls ./projects
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expanded === idx;
            const topBarColor = idx % 2 === 0 ? "bg-accent" : "bg-accent-2";

            return (
              <motion.div
                key={idx}
                className="bg-surface-2 rounded-xl border border-[--color-border-glow] shadow-lg overflow-hidden flex flex-col transition-all hover:border-accent/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Top Accent Bar */}
                <div className={`h-1.5 w-full ${topBarColor}`} />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-main font-heading mb-4 flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  {/* Impact Metrics Row */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className={`flex items-center px-3 py-1.5 rounded-full text-xs font-mono border ${metric.isImprovement ? 'bg-accent-3/10 border-accent-3/30 text-accent-3' : 'bg-surface border-[--color-border-glow] text-text-muted'}`}>
                        <span className="font-bold mr-1">{metric.text}</span> {metric.label}
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-surface border border-[--color-border-glow] rounded text-xs text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <button 
                      onClick={() => toggleExpand(idx)}
                      className="flex items-center space-x-2 text-text-muted hover:text-text-main transition-colors text-sm font-mono"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-[--color-border-glow]">
                          <ul className="space-y-2 mb-6 text-sm text-text-muted">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex font-sans">
                                <span className="text-accent mr-2 mt-0.5">▹</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {project.pipeline && project.pipeline.length > 0 && (
                            <div className="mt-6">
                              <div className="text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Pipeline Flow</div>
                              <PipelineDiagram steps={project.pipeline} />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
