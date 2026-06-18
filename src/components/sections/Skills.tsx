import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-eyebrow">02 — Skills</span>
          <h2 className="section-title">
            Tools I use to <span className="text-gradient">design, build & analyze</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A growing toolkit across frontend, design and data.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <span className="font-mono text-xs text-primary">
                  /{String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="space-y-5">
                {group.items.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{s.name}</span>
                      <span className="font-mono text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-primary shadow-[0_0_15px_hsl(var(--primary)/0.6)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
