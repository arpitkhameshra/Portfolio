"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-[--color-border-glow] bg-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-accent text-xl mb-16 text-center md:text-left">
            &gt; cat education.log
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-surface-2 rounded-xl border border-[--color-border-glow] p-8 md:p-10 hover:border-accent/50 transition-all shadow-lg group relative overflow-hidden">
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3 rounded-t-xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-main font-heading mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-text-muted text-lg">{education.college}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[--color-border-glow]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-lg">
                    <Building2 className="w-5 h-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider">University</p>
                    <p className="text-text-main text-sm font-medium">{education.university}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-lg">
                    <Calendar className="w-5 h-5 text-accent-3" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider">Graduated</p>
                    <p className="text-text-main text-sm font-medium">{education.graduation}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider">GPA</p>
                    <p className="text-text-main text-sm font-medium">{education.gpa}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
