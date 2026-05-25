import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // Glass effect on scroll
      setScrolled(currentScrollY > 24);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <header
        className={`fixed top-0 inset-x-0 z-50 transform transition-all duration-700 ease-in-out ${
          scrolled ? "py-3" : "py-5"
        } ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-card backdrop-blur-xl" : "glass"
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative h-9 w-9 rounded-xl grid place-items-center bg-[image:var(--gradient-primary)] shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>

              <span className="font-semibold tracking-tight">
                Prince Baliyan
              </span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow hover:scale-[1.05] transition-all duration-300"
            >
              Let's Talk
            </a>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              open
                ? "max-h-96 opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="glass-strong rounded-2xl p-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-all duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}