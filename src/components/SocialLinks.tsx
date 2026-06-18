import { Github, Linkedin, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";

export const SocialLinks = ({ className = "" }: { className?: string }) => {
  const items = [
    { icon: Github, href: profile.socials.github, label: "GitHub" },
    { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: Code2, href: profile.socials.leetcode, label: "LeetCode" },
  ];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-card/60 backdrop-blur-md text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};
