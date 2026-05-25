import { Code2, Globe, Database, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    icon: Brain,
    title: "Other",
    skills: ["Full Stack", "DSA", "Problem Solving", "AI/ML Basics"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              My <span className="gradient-text-primary">Skills</span>
            </>
          }
          description="Technologies and tools I am learning and working with."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 card-3d transition hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-[image:var(--gradient-primary)] shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="group relative px-3.5 py-1.5 rounded-full text-sm glass-strong hover:bg-white/10 hover:scale-105 transition cursor-default"
                  >
                    <span className="font-mono text-accent mr-1.5">›</span>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}