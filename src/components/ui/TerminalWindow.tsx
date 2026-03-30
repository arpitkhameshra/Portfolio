"use client";

import { useState, useEffect } from "react";
import { heroTerminalCommands } from "@/lib/data";

export default function TerminalWindow() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentCommand = heroTerminalCommands[commandIndex];
    let typingSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && text === currentCommand) {
      typingSpeed = 2000; // pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setCommandIndex((prev) => (prev + 1) % heroTerminalCommands.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentCommand.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, commandIndex]);

  return (
    <div className="rounded-xl overflow-hidden bg-surface-2 border border-[--color-border-glow] shadow-2xl relative">
      <div className="flex items-center px-4 py-3 bg-[--color-surface] border-b border-[--color-border-glow]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto text-xs text-text-muted font-mono">
          arpit@devops:~$
        </div>
      </div>
      <div className="p-6 font-mono text-sm sm:text-base text-text-main h-48 flex items-start">
        <p>
          <span className="text-accent-3">arpit@devops</span>
          <span className="text-text-muted">:</span>
          <span className="text-accent">~</span>
          <span className="text-text-muted">$ </span>
          {/* We strip out the leading "$ " from the command texts for cleaner markup if they contain it */}
          {text.startsWith("$ ") ? text.substring(2) : text}
          <span className="inline-block w-2 bg-text-main ml-1 animate-pulse h-5 align-middle" />
        </p>
      </div>
    </div>
  );
}
