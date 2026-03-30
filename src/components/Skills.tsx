"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const borderColors: Record<string, string> = {
  orange: "border-t-[#f97316] group-hover:border-[#f97316] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]",
  cyan: "border-t-[#00d4ff] group-hover:border-[#00d4ff] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]",
  green: "border-t-[#22c55e] group-hover:border-[#22c55e] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]",
  purple: "border-t-[#a855f7] group-hover:border-[#a855f7] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
  yellow: "border-t-[#eab308] group-hover:border-[#eab308] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]",
  red: "border-t-[#ef4444] group-hover:border-[#ef4444] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]",
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 border-t border-[--color-border-glow] bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-accent text-xl mb-4">
            &gt; skills --list
          </div>
          <p className="text-text-muted mb-12 max-w-2xl text-lg">
            Tools and technologies I use to build, ship, and scale.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-surface-2 border border-[--color-border-glow] rounded-xl p-6 group transition-all duration-300 hover:-translate-y-2 border-t-2 ${borderColors[skillGroup.color]}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{skillGroup.icon}</span>
                <h3 className="text-text-main font-semibold text-lg">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-surface border border-[--color-border-glow] rounded-md text-sm text-text-muted transition-colors group-hover:text-text-main"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
