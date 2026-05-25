import { Brain, Target, Code2, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Pursuing B.Tech in Computer Science Engineering.",
  },
  {
    icon: Code2,
    title: "Technical Skills",
    text: "Focused on Full Stack Development and DSA.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    text: "Enjoy solving problems through logic and coding.",
  },
  {
    icon: Target,
    title: "Current Status",
    text: "2nd Year Computer Science Student.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              About <span className="gradient-text-primary">Me</span>
            </>
          }
          description="Computer Science student focused on learning and building."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative glass rounded-2xl p-6 card-3d gradient-border transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-[image:var(--gradient-primary)] shadow-glow mb-4 transition-transform duration-500 hover:rotate-6 hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}