import { useState } from "react";

export const KritovaMark = ({ size = 30, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    className={`kmark ${className}`}
    aria-hidden="true"
  >
    <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <line x1="14" y1="7" x2="14" y2="33" className="mk-line mk-1" />
      <line x1="14" y1="19" x2="29" y2="7" className="mk-line mk-2" />
      <line x1="14" y1="21" x2="29" y2="33" className="mk-line mk-3" />
    </g>
    <circle cx="14" cy="20" r="2.8" fill="var(--brass)" className="mk-dot" />
  </svg>
);

export const LogoLockup = ({ size = 30 }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <span className="lockup">
      {imgFailed ? (
        <KritovaMark size={size} />
      ) : (
        <img
          src="/kritova-logo.png"
          alt=""
          aria-hidden="true"
          className="lockup-img"
          style={{ height: size + 4, width: "auto" }}
          onError={() => setImgFailed(true)}
        />
      )}
      <span className="wordmark">Kritova</span>
    </span>
  );
};
