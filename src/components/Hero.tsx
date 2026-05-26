import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/prince-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 animate-glow-pulse" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 animate-glow-pulse" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Available for opportunities
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
              <span className="gradient-text-primary">Hello,</span>{" "}
              <span className="text-foreground">I'm</span>
              <br />
              <span className="gradient-text">Prince Baliyan</span>
            </h1>

            <p className="mt-5 font-mono text-sm md:text-base text-muted-foreground">
              <span className="text-accent">{" "}</span>
              B.Tech CSE Student • Full Stack Developer • Aspiring Software Engineer
              <span className="text-accent">{" "}</span>
            </p>

            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed text-balance">
              <span className="text-accent">{" ''' "}</span>
              B.Tech CSE student with a strong interest in Full Stack Development and
              critical problem-solving. Committed to building efficient digital
              solutions and continuous professional growth.
              <span className="text-accent">{" ''' "}</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow hover:scale-[1.03] transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass-strong hover:bg-white/10 transition"
              >
                Contact Me
              </a>
              <a
                 href="/My_Resume.docx"
                download="Prince_Baliyan_Resume.docx"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-muted-foreground">
              <a href="https://github.com/Princebaliyan07" target="_blank" rel="noreferrer" className="hover:text-foreground transition flex items-center gap-2 text-sm">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/princebaliyan07" target="_blank" rel="noreferrer" className="hover:text-foreground transition flex items-center gap-2 text-sm">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md animate-reveal" style={{ animationDelay: "120ms" }}>
            <div className="relative aspect-square">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,oklch(0.72_0.19_285),oklch(0.78_0.16_200),oklch(0.72_0.19_285))] animate-spin-slow opacity-80 blur-[2px]" />
              <div className="absolute inset-2 rounded-full bg-background" />

              {/* Glow blob behind */}
              <div className="absolute -inset-6 bg-[image:var(--gradient-primary)] opacity-40 animate-blob blur-3xl" />

              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass-strong shadow-glow">
                <img
                  src={portrait}
                  alt="Prince Baliyan portrait"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating chips */}
              <div className="absolute -top-2 -left-2 glass-strong rounded-2xl px-3 py-2 text-xs font-mono animate-float">
                <span className="text-accent">const</span> dev = <span className="gradient-text-primary">"Prince"</span>
              </div>
              <div className="absolute bottom-6 -right-4 glass-strong rounded-2xl px-3 py-2 text-xs animate-float-slow shadow-glow-cyan">
                <span className="font-mono text-accent">{"{ "}</span>React • Node • MongoDB<span className="font-mono text-accent">{" }"}</span>
              </div>
              <div className="absolute top-1/2 -right-6 glass-strong rounded-full h-12 w-12 grid place-items-center animate-float">
                <span className="font-mono text-primary">JS</span>
              </div>
              <div className="absolute -bottom-2 left-8 glass-strong rounded-full h-12 w-12 grid place-items-center animate-float-slow">
                <span className="font-mono text-accent">C++</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats marquee */}
<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    { k: "2028", v: "Graduation" },
    { k: "10+", v: "Technologies" },
    { k: "1+", v: "AI ML Projects" },
    { k: "2+", v: "Web Dev Projects" },
    { k: "150+", v: "DSA Problems" },
  ].map((s) => (
    <div
      key={s.v}
      className="glass rounded-2xl p-5 card-3d transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
    >
      <div className="text-3xl font-bold gradient-text-primary">
        {s.k}
      </div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        {s.v}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
