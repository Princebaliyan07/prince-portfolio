import { Github, ExternalLink, Mic, Cpu, Waves } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              My <span className="gradient-text-primary">Projects</span>
            </>
          }
          description="Projects that showcase my skills and practical work."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Project */}
          <article className="glass rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center">
                <Mic className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-accent">
                Featured Project
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              Voice Emotion Recognition
            </h3>

            <p className="mt-3 text-muted-foreground">
              An AI/ML project for detecting emotions from voice inputs using machine learning.
            </p>

            {/* Real Animated Waveform */}
            <div className="mt-5 glass rounded-xl p-4 flex items-end gap-1 h-20 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => {
                const h = 25 + Math.abs(Math.sin(i * 0.5) * 55);
                return (
                  <span
                    key={i}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                    className="flex-1 rounded-full bg-[image:var(--gradient-primary)] opacity-80 animate-float"
                  />
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Python",
                "Machine Learning",
                "Audio Processing",
                "NumPy",
                "scikit-learn",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full glass"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Princebaliyan07/Voice-Emotion-Recognition-"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground text-sm hover:opacity-90 transition"
              >
                <Github className="h-4 w-4" /> View Code
              </a>

              <a
                href=""
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm hover:bg-white/10 transition"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </div>
          </article>

          {/* Side Cards */}
          <div className="grid gap-6">
            <div className="glass rounded-2xl p-6 hover:shadow-lg transition">
              <Cpu className="h-8 w-8 text-accent" />
              <h4 className="mt-4 text-lg font-semibold">More Projects</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Building full-stack applications and learning new technologies.
              </p>

              <a
                href="https://github.com/Princebaliyan07"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                View GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-lg transition">
              <Waves className="h-8 w-8 text-primary" />
              <h4 className="mt-4 text-lg font-semibold">Open to Collaborate</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships and collaboration.
              </p>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                Get in Touch <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}