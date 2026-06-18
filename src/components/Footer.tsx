import { profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-10 mt-10">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">Sree Mithra</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} {profile.name}. Crafted with React, Tailwind & care.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};
