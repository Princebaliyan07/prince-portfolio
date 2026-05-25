import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

const channels = [
  { icon: Mail, label: "Email", value: "rajabaliyanraja@gmail.com", href: "mailto:rajabaliyanraja@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 89200 60656", href: "tel:+918920060656" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/princebaliyan07", href: "https://www.linkedin.com/in/princebaliyan07" },
  { icon: Github, label: "GitHub", value: "Princebaliyan07", href: "https://github.com/Princebaliyan07" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xpqnyrev", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text-primary">together</span>
            </>
          }
          description="Have an opportunity, idea, or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 glass rounded-2xl p-5 card-3d"
              >
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-[image:var(--gradient-primary)] shadow-glow group-hover:scale-110 transition">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>

                <Send className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition" />
              </a>
            ))}

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl grid place-items-center glass-strong">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  Based in
                </div>
                <div className="text-sm font-medium">India · Open to remote</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={onSubmit}
            className="glass-strong rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Subject
              </label>
              <input
                name="subject"
                required
                type="text"
                placeholder="What's this about?"
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your idea or opportunity..."
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow hover:scale-[1.02] disabled:opacity-60 transition"
            >
              {sending ? "Sending..." : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}