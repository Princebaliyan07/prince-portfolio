import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prince Baliyan — Full Stack Developer & CSE Student" },
      {
        name: "description",
        content:
          "Portfolio of Prince Baliyan — B.Tech CSE student, full stack developer, and aspiring software engineer building modern web and AI/ML projects.",
      },
      { property: "og:title", content: "Prince Baliyan — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "B.Tech CSE student passionate about full stack development, problem solving, and building efficient digital solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
