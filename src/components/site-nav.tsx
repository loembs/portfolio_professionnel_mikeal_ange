import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Mikael Ange<span className="not-italic font-sans font-light">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono-label text-foreground/70">
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            À propos
          </Link>
          <Link to="/services" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/work" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            Créations
          </Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono-label"
          aria-label="Menu"
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-8 gap-6 font-display text-3xl">
            <Link to="/about" onClick={() => setOpen(false)}>À propos</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/work" onClick={() => setOpen(false)}>Créations</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
