import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { Project, ProjectCategory, projects } from "@/data/portfolio";

const filters: ("All" | ProjectCategory)[] = ["All", "Full Stack", "AI", "Data", "UI/UX"];

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">04 — Projects</span>
            <h2 className="section-title">
              Selected <span className="text-gradient">work & experiments</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A mix of full-stack apps, AI tools and data stories.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded-full transition-all border ${
                  filter === f
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
                    : "bg-card/40 text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActive(p)}
                className="group glass-card p-7 cursor-pointer relative overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-secondary uppercase tracking-widest">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold group-hover:text-gradient transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                <p className="mt-3 text-muted-foreground">{p.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted/60 text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center rounded-full bg-muted/60 hover:bg-primary/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs text-secondary uppercase tracking-widest">{active.category}</span>
              <h3 className="mt-1 text-3xl font-bold">{active.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{active.description}</p>

              <h4 className="mt-6 text-sm uppercase tracking-widest text-primary font-mono">Highlights</h4>
              <ul className="mt-3 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted/60 border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {active.live && (
                  <a href={active.live} target="_blank" rel="noopener noreferrer" className="btn-hero text-sm !py-2.5 !px-5">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
                {active.github && (
                  <a href={active.github} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-sm !py-2.5 !px-5">
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
