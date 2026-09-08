import { Reveal, Kicker } from "./Reveal";

const VERTICALS = [
  {
    label: "Automation",
    body: "Systems that take over repetitive operational work — reporting, data entry, routing — so people do the parts of the job that need judgment.",
  },
  {
    label: "Fitness",
    body: "AI-driven tools for tracking progress, personalizing programs, and keeping members engaged between visits.",
  },
  {
    label: "Hospitality",
    body: "Smarter booking, service, and back-of-house workflows built around how hospitality teams actually operate.",
  },
  {
    label: "+ Beyond",
    body: "Every new client problem is a candidate for a new pod — the list of industries grows as Kritovians take on new work.",
  },
];

export const Verticals = () => (
  <section id="verticals" className="section" data-testid="verticals-section">
    <div className="wrap">
      <Reveal>
        <Kicker ch="CH.05" label="What we build" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">
          Real industry problems, <em>not generic AI demos</em>.
        </h2>
      </Reveal>

      <div className="verticals">
        {VERTICALS.map((v, i) => (
          <Reveal key={v.label} delay={0.07 * i}>
            <div className="vertical" data-testid={`vertical-${i}`}>
              <span className="v-num" aria-hidden="true">{`0${i + 1}`}</span>
              <span className="v-label">{v.label}</span>
              <p>{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
