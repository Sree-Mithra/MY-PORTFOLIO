import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-eyebrow">03 — Experience</span>
          <h2 className="section-title">
            Where I've <span className="text-gradient">learned & built</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" aria-hidden />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-gradient-primary shadow-[0_0_20px_hsl(var(--primary)/0.7)] ring-4 ring-background" aria-hidden />

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card p-6 inline-block w-full">
                      <div className={`flex items-center gap-2 mb-2 ${left ? "md:justify-end" : ""}`}>
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <div className="text-primary font-medium mb-3">{item.company}</div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                        {item.stack.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
