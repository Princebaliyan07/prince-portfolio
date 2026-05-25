import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Prince Baliyan — Crafted with{" "}
          <span className="gradient-text-primary font-semibold">React</span> &{" "}
          <span className="gradient-text-primary font-semibold">caffeine</span>.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Princebaliyan07" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/princebaliyan07" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:rajabaliyanraja@gmail.com" className="hover:text-foreground transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
