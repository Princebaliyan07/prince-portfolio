import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              Academic <span className="gradient-text-primary">Journey</span>
            </>
          }
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">

            {/* Class 12 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-2 h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="glass-strong rounded-2xl p-6 card-3d">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-accent uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> Completed
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Ghaziabad
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Class 12 (Senior Secondary)
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Vidhaan Public School
                </p>

               <p className="mt-4 text-sm text-muted-foreground">
                 Completed Class 12 with 90% in PCM.
                  </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["90%", "Science", "Analytical Thinking"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full glass text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B.Tech */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-2 h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="glass-strong rounded-2xl p-6 card-3d">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-accent uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> Expected 2028
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Greater Noida
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  B.Tech in Computer Science Engineering
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Noida Institute of Engineering and Technology
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                 Focused on DSA, web development, and AI fundamentals.
                  </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "DSA",
                    "OOP",
                    "DBMS",
                    "Operating Systems",
                    "Web Development",
                    "AI/ML Basics",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full glass text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}