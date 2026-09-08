import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Reveal, Kicker } from "./Reveal";

const STAGES = [
  {
    n: "01 · Discover",
    title: "Define a real problem, before writing code",
    body: "Every pod scopes the problem directly with the business or user it's solving for — automation, fitness, hospitality, or otherwise.",
  },
  {
    n: "02 · Build",
    title: "Sprint under a Master's direction",
    body: "Short sprints, real code review at every boundary, AI tooling used deliberately as part of the craft, not a shortcut around it.",
  },
  {
    n: "03 · Deploy",
    title: "Reach a live, working environment",
    body: "A designated deployment owner makes sure the project actually ships to the people it was built for.",
  },
  {
    n: "04 · Iterate",
    title: "Learn from real usage",
    body: "Feedback from actual use drives the next sprint — not guesses, not “looks good in review.”",
  },
];

const Stage = ({ stage, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });
  return (
    <div ref={ref} className={`stage${inView ? " lit" : ""}`} data-testid={`stage-${index}`}>
      <span className="stage-dot" aria-hidden="true" />
      <Reveal y={26}>
        <span className="n">{stage.n}</span>
        <h3>{stage.title}</h3>
        <p>{stage.body}</p>
      </Reveal>
    </div>
  );
};

export const HowItWorks = () => {
  const reduce = useReducedMotion();
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.72", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="how-it-works" className="section" data-testid="how-it-works-section">
      <div className="wrap">
        <Reveal>
          <Kicker ch="CH.04" label="How a project moves" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            One rule, no exceptions: it has to <em>reach real users</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede">
            Each pod pairs an experienced Master with a small group of Kritovians and
            follows the same pipeline, whatever the industry.
          </p>
        </Reveal>

        <div className="stages" ref={listRef} data-testid="timeline">
          <div className="spine" aria-hidden="true">
            {reduce ? (
              <div className="spine-fill" style={{ transform: "scaleY(1)" }} />
            ) : (
              <motion.div className="spine-fill" style={{ scaleY }} />
            )}
          </div>
          {STAGES.map((s, i) => (
            <Stage key={s.n} stage={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
