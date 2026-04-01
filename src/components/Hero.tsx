"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import TerminalWindow from "./ui/TerminalWindow";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && text === currentTagline) {
      typingSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentTagline.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, taglineIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            className="w-full lg:w-[55%] flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent-2/10 border border-accent-2/20 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-2 animate-ping" />
              <span className="text-xs font-mono text-accent-2">⚡ Open to Opportunities</span>
            </div>

            <div className="font-mono text-accent text-sm md:text-base mb-2">
              &gt; whoami
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-text-main leading-tight mb-4 tracking-tight">
              {personalInfo.name}
            </h1>

            <div className="h-8 md:h-10 text-xl md:text-2xl font-mono text-text-muted mb-6 flex">
              <span className="text-accent-3 mr-2">{"{"}</span>
              <span className="text-text-main">{text}</span>
              <span className="inline-block w-2 bg-text-main ml-1 animate-pulse" />
              <span className="text-accent-3 ml-2">{"}"}</span>
            </div>

            <p className="text-lg text-text-muted max-w-xl mb-8 leading-relaxed">
              {personalInfo.oneLiner}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a 
                href="#projects"
                className="inline-flex items-center space-x-2 bg-accent text-surface px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="/Arpit_Khameshra.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-text-main text-text-main px-6 py-3 rounded-md font-medium hover:bg-white/5 transition-colors"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Socials & Quick Stats */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between border-t border-[--color-border-glow] pt-6 gap-4">
              <div className="flex space-x-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
                  <Github size={22} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-accent transition-colors">
                  <Mail size={22} />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-3 font-mono text-xs text-text-muted">
                {personalInfo.stats.map((stat, i) => (
                  <span key={i} className="bg-surface-2 px-2 py-1 rounded border border-[--color-border-glow]">
                    [ <span className="text-accent">{stat.value}{stat.suffix}</span> {stat.label} ]
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="w-full lg:w-[45%] relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
