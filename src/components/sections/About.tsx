import { motion } from "framer-motion";
import { Target, Heart, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-eyebrow">01 — About</span>
          <h2 className="section-title">
            A blend of <span className="text-gradient">design, code & data.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{profile.bio}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: "Story", body: "From sketching wireframes to shipping React components and exploring data, I treat every project like a small product — with care for the user and the detail." },
            { icon: Target, title: "Mission", body: profile.mission },
            { icon: Heart, title: "Philosophy", body: profile.philosophy },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 group hover:border-primary/40 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground mb-5 shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
