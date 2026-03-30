"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Define typing for Event correctly using React.FormEvent
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactOptions = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: personalInfo.location, href: null },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/arpit-khameshra", href: personalInfo.linkedin }
  ];

  return (
    <section id="contact" className="py-24 border-t border-[--color-border-glow] bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <div className="font-mono text-accent text-xl mb-4">
            &gt; contact --reach-out
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-main mb-6">
            Let's Build Something<br className="hidden md:block" /> Resilient Together
          </h2>
          <p className="text-text-muted max-w-xl text-lg">
            Open to full-time DevOps roles, consulting, and infrastructure audits.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Cards */}
          <motion.div 
            className="w-full lg:w-[40%] grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactOptions.map((opt, idx) => {
              const content = (
                <div className="flex items-center p-6 bg-surface-2 border border-[--color-border-glow] rounded-xl hover:border-accent hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-lg text-text-muted group-hover:text-accent transition-colors mr-4">
                    {opt.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-text-muted mb-1">{opt.label}</h4>
                    <p className="text-text-main font-medium">{opt.value}</p>
                  </div>
                </div>
              );

              if (opt.href) {
                return (
                  <a key={idx} href={opt.href} target={opt.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {content}
                  </a>
                );
              }
              return <div key={idx}>{content}</div>;
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="bg-surface-2 p-8 border border-[--color-border-glow] rounded-xl relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-surface-2/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-accent-3 mb-4 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
                    <p className="text-text-muted font-mono">Status: 200 OK. I'll get back to you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-text-muted mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-surface border border-[--color-border-glow] rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-sans"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-text-muted mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-surface border border-[--color-border-glow] rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-sans"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-mono text-text-muted mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-surface border border-[--color-border-glow] rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer font-sans"
                >
                  <option>Job Opportunity</option>
                  <option>Freelance</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-mono text-text-muted mb-2">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-surface border border-[--color-border-glow] rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all resize-y font-sans"
                  placeholder="How can we help you scale?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-surface font-bold py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all font-mono"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
