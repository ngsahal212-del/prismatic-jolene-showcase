import { useEffect, useRef, useState, type ReactNode } from "react";

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

  // The panel is pulled up by SLOPE px, so scroll progress is already past 0
  // at rest; start the animation from that offset to keep the first frame clean.
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const startAt = vh ? Math.min(SLOPE / vh, 0.4) : 0.15;

  const clipPath = useTransform(
    smooth,
    [startAt, 1],
    [
      `polygon(0% 0px, 100% ${SLOPE}px, 100% 100%, 0% 100%)`,
      `polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)`,
    ],
  );
  const y = useTransform(smooth, [startAt, 1], [SLOPE, 0]);

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
