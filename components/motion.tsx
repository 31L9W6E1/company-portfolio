"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStat({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
