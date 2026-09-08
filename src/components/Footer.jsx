import { LogoLockup } from "./Logo";
import { scrollToId } from "../lib/scroll";

export const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div className="wrap footer-inner">
      <a
        href="#top"
        className="lockup-link"
        data-testid="footer-logo"
        aria-label="Kritova — back to top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("#top");
        }}
      >
        <LogoLockup size={26} />
      </a>
      <div className="footer-meta">
        <span>Troy, Michigan</span>
        <span>© 2026 KRITOVA</span>
        <button
          className="to-top"
          data-testid="back-to-top-btn"
          aria-label="Back to top"
          onClick={() => scrollToId("#top")}
        >
          ↑
        </button>
      </div>
    </div>
  </footer>
);
