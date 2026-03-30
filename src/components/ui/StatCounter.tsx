"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ value, label, prefix = "", suffix = "", duration = 2000 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16); // 60fps
    const handle = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(handle);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [value, duration, isInView]);

  return (
    <div ref={ref} className="text-center md:text-left flex flex-col items-center md:items-start space-y-1">
      <div className="text-3xl lg:text-4xl font-mono font-bold text-accent">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}
