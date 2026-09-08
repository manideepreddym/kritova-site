import { Reveal, Kicker } from "./Reveal";

const VALUES = [
  {
    label: "Open to All",
    body: "Experienced, still learning, or just curious — your spark is enough to start.",
  },
  {
    label: "Driven by Purpose",
    body: "Contribution here is for legacy and impact, not titles or salary.",
  },
  {
    label: "Sacrifices Matter",
    body: "Discipline and dedication are the default setting, not the exception.",
  },
  {
    label: "Advanced by Design",
    body: "Working at the edge of AI, ML, and LLMs — in service of real businesses.",
  },
];

export const Culture = () => (
  <section id="culture" className="section" data-testid="culture-section">
    <div className="wrap">
      <Reveal>
        <Kicker ch="CH.03" label="Who are the Kritovians" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">
          Warriors in the <em>Kritova Zone</em>.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="lede">
          Students, professionals, interns, job aspirants, and curious minds — driven
          by one purpose: contributing skill and creativity to something bigger than a
          resume line. We call them our After-Work Soldiers: people who give up
          evenings and weekends, despite day jobs and personal commitments, to build
          something extraordinary.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote className="quote" data-testid="culture-quote">
          “Learning doesn’t make sense when you’re not digesting. Come learn &amp;
          digest in Kritova.”
        </blockquote>
      </Reveal>

      <div className="culture-grid">
        {VALUES.map((v, i) => (
          <Reveal key={v.label} delay={0.07 * i}>
            <div className="culture-cell" data-testid={`culture-value-${i}`}>
              <span>{v.label}</span>
              <p>{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
