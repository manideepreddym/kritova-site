import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal, Kicker } from "./Reveal";

const STEPS = [
  { t: "User query", d: "natural language input" },
  { t: "Hybrid retrieval", d: "keyword + semantic search" },
  { t: "Reranking", d: "relevance & context scoring" },
  { t: "Grounded generation", d: "response tied to retrieved context" },
];

const FEATURES = [
  {
    title: "Memory & context",
    body: "Keeps track of a session's context so follow-up questions don't need to be re-explained from scratch.",
    points: ["Short-term session history", "Longer-term stated preferences"],
    icon: (
      <>
        <rect x="6" y="6" width="22" height="7" rx="1.5" />
        <rect x="6" y="16" width="22" height="7" rx="1.5" />
        <rect x="6" y="26" width="14" height="4" rx="1.5" />
      </>
    ),
  },
  {
    title: "Evaluation-driven quality",
    body: "Every response path is built to be checked, not assumed — accuracy, relevance, and faithfulness to source material are things we test for, not claim.",
    points: ["Structured evaluation pipeline", "Source-grounded answers over invention"],
    icon: (
      <>
        <circle cx="17" cy="17" r="11" />
        <path d="M11.5 17.2l4 4 7.5-8.4" />
      </>
    ),
  },
  {
    title: "Built to adapt",
    body: "Designed to learn from feedback over time rather than shipping as a static, one-size-fits-all model.",
    points: ["Feedback tracking, explicit & implicit", "Personalization as usage grows"],
    icon: (
      <>
        <path d="M8 17a9 9 0 0 1 15-6.7M8 10v4h4" />
        <path d="M26 17a9 9 0 0 1-15 6.7M26 24v-4h-4" />
      </>
    ),
  },
];

let resumeTimer;

export const KritovaAI = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 1800);
    return () => clearInterval(id);
  }, [reduce, paused]);

  useEffect(() => () => clearTimeout(resumeTimer), []);

  const inspect = (i) => {
    setActive(i);
    setPaused(true);
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => setPaused(false), 6000);
  };

  return (
    <section id="kritova-ai" className="section ai-section" data-testid="ai-section">
      <div className="wrap">
        <Reveal>
          <Kicker ch="CH.02" label="The Product" tone="tech" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            Kritova AI — an assistant built on <em className="tech-em">retrieval</em>,
            not guesswork.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="ai-lede">
            <span className="badge tech" data-testid="ai-status-badge">
              <span className="bdot" aria-hidden="true" />
              In active development
            </span>
            <p>
              A Kritovian-built AI assistant designed around retrieval-augmented
              generation — so answers are grounded in real source material instead of
              invented from a prompt.
            </p>
          </div>
        </Reveal>

        <div className="ai-grid">
          <Reveal delay={0.1}>
            <div className="ai-copy">
              <h3>Hybrid retrieval, end to end</h3>
              <p>
                Rather than relying on a single search method, Kritova AI combines
                keyword matching with semantic understanding, then ranks and refines
                what it finds before generating a response — the same pattern serious
                production RAG systems use.
              </p>
              <p>
                No invented benchmarks here: capabilities are described qualitatively
                until measured production numbers exist to replace them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="flow"
              data-testid="rag-flow"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {STEPS.map((s, i) => (
                <div className="flow-unit" key={s.t}>
                  {i > 0 && (
                    <span
                      className={`flow-connector${active > i - 1 ? " fill" : ""}`}
                      aria-hidden="true"
                    >
                      <span />
                    </span>
                  )}
                  <button
                    type="button"
                    className={`flow-step${i === active ? " active" : ""}${i < active ? " done" : ""}`}
                    data-testid={`rag-step-${i}`}
                    aria-label={`Step ${i + 1}: ${s.t}`}
                    onClick={() => inspect(i)}
                  >
                    <span className="idx">{i + 1}</span>
                    <div className="t">{s.t}</div>
                    <div className="d">{s.d}</div>
                  </button>
                </div>
              ))}
            </div>
            <p className="flow-hint" data-testid="rag-hint">
              {paused
                ? "Cycle paused — resumes in a few seconds"
                : "Hover or tap a step to inspect — auto-cycling"}
            </p>
          </Reveal>
        </div>

        <div className="ai-features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="ai-feature" data-testid={`ai-feature-${i}`}>
                <svg
                  className="icon"
                  viewBox="0 0 34 34"
                  fill="none"
                  stroke="var(--tech)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
                <ul>
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
