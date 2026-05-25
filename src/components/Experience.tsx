import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              My <span className="gradient-text-primary">Journey</span>
            </>
          }
        />

        <div className="max-w-3xl mx-auto space-y-6">

          {/* Current Status Card */}
          <div className="relative glass-strong rounded-3xl p-8 card-3d overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl animate-pulse" />

            <div className="relative z-10 flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-glow shrink-0 transition-transform duration-500 hover:rotate-6 hover:scale-110">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Open to Opportunities
                </div>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Fresher — Aspiring Software Engineer
                </h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                 Passionate about software development and open to learning opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* CodSoft Internship Card */}
          <div className="relative glass-strong rounded-3xl p-8 card-3d overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-pulse" />

            <div className="relative z-10 flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-glow shrink-0 transition-transform duration-500 hover:rotate-6 hover:scale-110">
                <Briefcase className="h-7 w-7 text-primary-foreground" />
              </div>

              <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent">
                 Internship Experience
               </div>

            <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    Python Programming Intern at Codsoft
                    </h3>
              
                <p className="mt-3 text-muted-foreground leading-relaxed">
                 Developed Python projects and strengthened coding skills.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}