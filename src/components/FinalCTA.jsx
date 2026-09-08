import { Reveal } from "./Reveal";

export const FinalCTA = () => (
  <section id="join" className="section cta" data-testid="cta-section">
    <div className="wrap">
      <Reveal>
        <h2>
          Ready to <em>zone in</em>?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p>
          Whether you’re bringing a real problem to solve or your evenings and
          weekends to solve one — this is where it starts.
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="cta-actions">
          <a
            className="btn btn-primary"
            href="mailto:hello@kritova.com?subject=Project%20inquiry"
            data-testid="cta-start-project-btn"
          >
            Start a project <span className="arr" aria-hidden="true">→</span>
          </a>
          <a
            className="btn btn-ghost"
            href="mailto:join@kritova.com?subject=Kritovian%20application"
            data-testid="cta-apply-btn"
          >
            Apply as a Kritovian <span className="arr" aria-hidden="true">→</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
