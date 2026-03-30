"use client";

import { motion } from "framer-motion";

export function TimelineDot({ active }: { active?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`w-4 h-4 rounded-full border-2 bg-surface z-10 
        ${active ? 'border-accent-3 shadow-[0_0_10px_#22c55e]' : 'border-accent'}`}
    >
      {active && (
        <span className="absolute w-2 h-2 rounded-full bg-accent-3 top-0.5 left-0.5 animate-ping opacity-75"></span>
      )}
    </motion.div>
  );
}
