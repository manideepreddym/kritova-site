import { Fragment } from "react";

const ITEMS = [
  "Automation",
  "Fitness",
  "Hospitality",
  "+ Beyond",
  "AI that ships",
  "Built by Kritovians",
];

const Group = ({ hidden }) => (
  <div className="mq-group" aria-hidden={hidden || undefined}>
    {ITEMS.map((item) => (
      <Fragment key={item}>
        <span className="mq-item">{item}</span>
        <span className="mq-dot" />
      </Fragment>
    ))}
  </div>
);

export const Marquee = () => (
  <div className="marquee" data-testid="marquee" aria-hidden="true">
    <div className="mq-track">
      <Group />
      <Group hidden />
    </div>
  </div>
);
