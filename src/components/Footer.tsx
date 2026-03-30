import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[--color-border-glow] py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center text-center">
        <div className="font-mono text-accent mb-6">
          &gt; echo 'Built by {personalInfo.name} &copy; {new Date().getFullYear()}'
          <span className="animate-pulse">_</span>
        </div>

        <div className="flex space-x-6 mb-8">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-accent transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="text-sm text-text-muted">
          Designed & Deployed with <span className="text-red-500">❤️</span> on Vercel
        </p>
      </div>
    </footer>
  );
}
