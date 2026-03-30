"use client";

import { motion } from "framer-motion";

interface PipelineDiagramProps {
  steps: string[];
}

export default function PipelineDiagram({ steps }: PipelineDiagramProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center mt-4 gap-2 text-xs font-mono">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="px-2 py-1 bg-surface-2 border border-border-glow rounded text-text-main"
          >
            {step}
          </motion.div>
          {idx < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.1 }}
              className="w-4 h-px bg-accent mx-2 origin-left"
            >
              <div className="w-1.5 h-1.5 border-t border-r border-accent transform rotate-45 translate-x-3 -translate-y-[2.5px]" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
