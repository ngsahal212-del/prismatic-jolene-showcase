import { useRef, type ReactNode } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SLOPE = 130; // px of angled drop on the right edge

/**
 * A section whose top edge starts as a diagonal slope and smoothly levels out
 * as it rises over the previous section on scroll.
 */
export function SlopedSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 32,
    damping: 30,
    mass: 1.2,
    restDelta: 0.0005,
  });

  const clipPath = useTransform(
    smooth,
    [0, 1],
    [
      `polygon(0% 0px, 100% ${SLOPE}px, 100% 100%, 0% 100%)`,
      `polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)`,
    ],
  );
  const y = useTransform(smooth, [0, 1], [SLOPE, 0]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ clipPath, y, marginTop: -SLOPE, willChange: "clip-path, transform" }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
