import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: "Opening your mail app…", description: "Thanks for reaching out!" });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">06 — Contact</span>
            <h2 className="section-title">
              Let's build <span className="text-gradient">something great</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Have a role, project or idea you'd like to talk about? I'd love to hear from you.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                  <Mail className="h-5 w-5" />
                </span>
                <a href={`mailto:${profile.email}`} className="text-foreground hover:text-primary transition-colors">{profile.email}</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary border border-secondary/25">
                  <Phone className="h-5 w-5" />
                </span>
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="text-foreground hover:text-primary transition-colors">{profile.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-muted-foreground">{profile.location}</span>
              </li>
            </ul>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="space-y-5">
              <Field id="name" label="Your name" required />
              <Field id="email" type="email" label="Email" required />
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.2)] transition"
                  placeholder="Tell me a bit about what you're working on…"
                />
              </div>

              <button type="submit" disabled={sending} className="btn-hero w-full disabled:opacity-70">
                <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm mb-2 text-muted-foreground">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.2)] transition"
    />
  </div>
);
