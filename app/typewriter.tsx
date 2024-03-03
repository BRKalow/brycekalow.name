"use client";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export function Typewriter({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const value = useMotionValue(0);
  const roundedValue = useTransform(value, (x) => Math.round(x));
  const textToRender = useTransform(roundedValue, (max) => text.slice(0, max));

  useEffect(() => {
    const control = animate(value, text.length, {
      duration: text.length * 0.15,
      delay: 0.5,
    });

    return control.stop;
  });

  return <motion.span className={className}>{textToRender}</motion.span>;
}
