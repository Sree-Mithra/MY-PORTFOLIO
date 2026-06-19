import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import profileAsset from "@/assets/profile.jpg.asset.json";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { useTypingEffect } from "@/hooks/use-typing";

export const Hero = () => {
  const typed = useTypingEffect(
    ["Frontend Developer.", "UI/UX Designer.", "Data Analyst.", "Problem Solver."],
    70,
    1500
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-[140px]" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />

      <div className="container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Available for opportunities · 2026
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2 className="mt-5 text-xl sm:text-2xl text-muted-foreground font-mono min-h-[2.5rem]">
            I'm a <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 align-middle bg-primary animate-blink" />
          </h2>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-hero">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="/Sree_Mithra_CV.pdf"
              download
              className="btn-outline-glow"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-40 blur-2xl animate-glow-pulse" aria-hidden />
            <div className="relative glass rounded-[2rem] p-2 animate-float">
              <img
                src={profileAsset.url}
                alt={`Portrait of ${profile.name}`}
                width={520}
                height={620}
                className="h-[420px] w-[340px] sm:h-[520px] sm:w-[420px] object-cover rounded-[1.6rem]"
              />
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 text-sm">
                <div className="font-mono text-xs text-primary">{"</>"} currently</div>
                <div className="text-foreground font-medium">Crafting in React + Figma</div>
              </div>
              <div className="absolute -top-4 -right-4 glass-card px-4 py-3 text-sm">
                <div className="font-mono text-xs text-secondary">CGPA</div>
                <div className="text-foreground font-medium">8.95 / 10</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
