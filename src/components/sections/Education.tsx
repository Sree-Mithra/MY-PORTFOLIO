import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export const Education = () => {
  return (
    <section id="education" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-eyebrow">05 — Education</span>
          <h2 className="section-title">
            Academic <span className="text-gradient">foundation</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card p-8 md:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold">{education.degree}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/15 text-secondary border border-secondary/30">
                  CGPA {education.cgpa}
                </span>
              </div>
              <div className="text-primary font-medium mt-1">{education.institute}</div>
              <div className="text-muted-foreground mt-1">{education.graduation}</div>

              <div className="mt-6">
                <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-foreground border border-primary/20">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
