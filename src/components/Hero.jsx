import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { scrollToId } from "../lib/scroll";

const EASE = [0.16, 1, 0.3, 1];

const LINES = [
  <>AI that <em>ships</em> —</>,
  <>for real businesses,</>,
  <>built by a <em>real community</em>.</>,
];

export const Hero = () => {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 55, damping: 16 });
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 55, damping: 16 });

  const onMove = (e) => {
    if (reduce || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const im = (v) => (reduce ? false : v);
  const tr = (delay) => ({ duration: 1.1, delay, ease: EASE });

  return (
    <section className="hero" ref={heroRef} onMouseMove={onMove} data-testid="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
      </div>

      <div className="wrap hero-grid">
        <motion.div className="hero-copy" style={reduce ? undefined : { y: textY }}>
          <motion.span
            className="eyebrow"
            initial={im({ opacity: 0, y: 14 })}
            animate={{ opacity: 1, y: 0 }}
            transition={tr(0.15)}
          >
            <span className="spark" aria-hidden="true" />
            AI SOLUTIONS · BUILT BY KRITOVIANS
          </motion.span>

          <h1 data-testid="hero-headline">
            {LINES.map((line, i) => (
              <span className="mask" key={i}>
                <motion.span
                  initial={im({ y: "112%" })}
                  animate={{ y: 0 }}
                  transition={tr(0.45 + i * 0.13)}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={im({ opacity: 0, y: 22 })}
            animate={{ opacity: 1, y: 0 }}
            transition={tr(1.0)}
          >
            Kritova builds AI-driven solutions for automation, fitness, hospitality, and
            beyond — engineered by Kritovians, a community of apprentices and mentors
            who ship real, deployed products from day one.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={im({ opacity: 0, y: 22 })}
            animate={{ opacity: 1, y: 0 }}
            transition={tr(1.15)}
          >
            <a
              className="btn btn-primary"
              href="#join"
              data-testid="hero-start-project-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#join");
              }}
            >
              Start a project <span className="arr" aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn-ghost"
              href="#join"
              data-testid="hero-join-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#join");
              }}
            >
              Join as a Kritovian <span className="arr" aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-mark"
          aria-hidden="true"
          style={reduce ? undefined : { y: markY, rotateX: rX, rotateY: rY }}
        >
          <motion.img
            src="/kritova-logo.png"
            alt=""
            className="hero-mark-img"
            draggable="false"
            initial={im({ opacity: 0, scale: 0.55, rotate: -28 })}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.25, delay: 0.25, ease: EASE }}
          />
        </motion.div>
      </div>

      <motion.div
        className="wrap hero-meta"
        initial={im({ opacity: 0 })}
        animate={{ opacity: 1 }}
        transition={tr(1.45)}
      >
        <span>Troy, Michigan</span>
        <span className="scroll-cue" aria-hidden="true" />
        <span>Shipped, not promised</span>
      </motion.div>
    </section>
  );
};
