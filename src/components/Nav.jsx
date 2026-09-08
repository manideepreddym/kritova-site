import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoLockup } from "./Logo";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { n: "01", label: "Mission", href: "#mission", slug: "mission" },
  { n: "02", label: "Kritova AI", href: "#kritova-ai", slug: "kritova-ai" },
  { n: "03", label: "Culture", href: "#culture", slug: "culture" },
  { n: "04", label: "How it works", href: "#how-it-works", slug: "how-it-works" },
  { n: "05", label: "Shipped", href: "#shipped", slug: "shipped" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (window.__lenis) open ? window.__lenis.stop() : window.__lenis.start();
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 250 : 0);
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} data-testid="main-nav">
        <div className="wrap nav-inner">
          <a
            href="#top"
            className="lockup-link"
            data-testid="nav-logo"
            onClick={(e) => go(e, "#top")}
            aria-label="Kritova — back to top"
          >
            <LogoLockup />
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} data-testid={`nav-link-${l.slug}`} onClick={(e) => go(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right">
            <a
              href="#join"
              className="btn btn-primary nav-cta"
              data-testid="nav-get-started-btn"
              onClick={(e) => go(e, "#join")}
            >
              Get started
            </a>
            <button
              className={`burger${open ? " open" : ""}`}
              data-testid="nav-hamburger-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mnav"
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="mnav-links" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-nav-link-${l.slug}`}
                  onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mn">{l.n}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="mnav-foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="mailto:hello@kritova.com" data-testid="mobile-nav-email-hello">hello@kritova.com</a>
              <a href="mailto:join@kritova.com" data-testid="mobile-nav-email-join">join@kritova.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
