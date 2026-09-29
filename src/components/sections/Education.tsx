import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck, Users } from "lucide-react";
import { education, certifications, achievements, leadership } from "@/data/portfolio";

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
              <div className="text-muted-foreground mt-1">{education.duration}</div>

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

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-foreground font-medium">{c.name}</span>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((a) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="glass-card p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">{a.period}</span>
                </div>
                <div className="text-primary text-sm font-medium mb-1">{a.org}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{leadership.role}</h3>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{leadership.period}</span>
              </div>
              <div className="text-primary text-sm font-medium mb-1">{leadership.org}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{leadership.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
