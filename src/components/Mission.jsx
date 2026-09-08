import { Reveal, Kicker } from "./Reveal";

export const Mission = () => (
  <section id="mission" className="section" data-testid="mission-section">
    <div className="wrap">
      <Reveal>
        <Kicker ch="CH.01" label="Our Mission" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">
          Powerful AI-driven solutions for <em>automation, fitness, hospitality, and
          beyond</em> — solving real industry problems through innovation, discipline,
          and purpose.
        </h2>
      </Reveal>

      <div className="split">
        <Reveal delay={0.1}>
          <div className="path" data-testid="mission-business-card">
            <span className="role-tag">For Businesses</span>
            <h3>Work with Kritova</h3>
            <p>
              Bring us a real problem in your operations, customer experience, or
              workflow. We scope it, build it, and ship a working solution — not a
              slide deck.
            </p>
            <a
              className="go"
              href="mailto:hello@kritova.com?subject=Project%20inquiry"
              data-testid="mission-business-cta"
            >
              Start a project <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="path" data-testid="mission-kritovian-card">
            <span className="role-tag">For Kritovians</span>
            <h3>Join as a Kritovian</h3>
            <p>
              Give your evenings and weekends to build something real, mentored by an
              experienced engineer, on a project that reaches actual users.
            </p>
            <a
              className="go"
              href="mailto:join@kritova.com?subject=Kritovian%20application"
              data-testid="mission-kritovian-cta"
            >
              Apply to a pod <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
