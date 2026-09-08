import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 30, className = "" }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const Kicker = ({ ch, label, tone = "" }) => (
  <div className={`kicker-row${tone ? ` ${tone}` : ""}`}>
    <span className="kicker-ch">{ch}</span>
    <span className="kicker-rule" aria-hidden="true" />
    <span className="kicker-label">{label}</span>
  </div>
);
