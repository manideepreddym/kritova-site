import { Reveal, Kicker } from "./Reveal";
import { SHIPPED_ROWS } from "../data/shipped";

export const Shipped = () => (
  <section id="shipped" className="section" data-testid="shipped-section">
    <div className="wrap">
      <Reveal>
        <Kicker ch="CH.06" label="Proof of work" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">
          Projects shipped, <em>not projects promised</em>.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="lede">
          Shown small and real rather than padded — entries here are live deployments
          only.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="ship-list">
          {SHIPPED_ROWS.map((r, i) => (
            <div className="ship-row" key={r.title} data-testid={`ship-row-${i}`}>
              <div>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </div>
              <span className={`badge ${r.badge}`} data-testid={`ship-badge-${i}`}>
                <span className="bdot" aria-hidden="true" />
                {r.badgeText}
              </span>
              <span className="ship-meta">{r.meta}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="ship-note" data-testid="ship-note">
          No fabricated user counts or metrics shown here — real entries replace these
          placeholders as pods actually ship.
        </p>
      </Reveal>
    </div>
  </section>
);
