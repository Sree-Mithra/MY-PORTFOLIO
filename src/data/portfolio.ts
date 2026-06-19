export const profile = {
  name: "Sree Mithra",
  shortName: "Sree Mithra B N",
  title: "Frontend Developer • UI/UX Designer • Data Analyst",
  tagline: "Designing Experiences. Building Interfaces. Analyzing Data.",
  email: "sreebn2005@gmail.com",
  phone: "+91 94884 65480",
  location: "Gudalur, Tamil Nadu, India",
  bio: `I'm Sree Mithra, a Final-Year B.Tech Information Technology student at Nandha College of Technology, Anna University. I love sitting at the intersection of design, engineering and data — building interfaces that feel effortless, designing experiences that feel human, and turning raw data into stories that drive decisions.`,
  mission: `To craft digital products that are equally beautiful, usable and intelligent — where pixel-perfect UI meets meaningful insight.`,
  philosophy: `Design with empathy. Build with precision. Decide with data.`,
  socials: {
    github: "https://github.com/Sree-Mithra",
    linkedin: "https://www.linkedin.com/in/sree-mithra9102005/",
    leetcode: "https://leetcode.com/u/Sreemithra_BN/",
  },
};

export const stats = [
  { label: "Years Learning", value: "3+" },
  { label: "CGPA", value: "8.95" },
  { label: "Internships", value: "2" },
];

export type SkillCategory = "Frontend" | "UI/UX" | "Data" | "Tools";

export const skillGroups: { category: SkillCategory; items: { name: string; level: number }[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 60 },
      { name: "CSS", level: 60 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 50 },
    ],
  },
  {
    category: "UI/UX",
    items: [
      { name: "Figma", level: 80 },
      { name: "Wireframing", level: 40 },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Python", level: 50 },
      { name: "SQL", level: 50 },
      { name: "Excel", level: 80 },
      { name: "Power BI", level: 60 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 60 },
      { name: "Firebase", level: 60 },
      { name: "VS Code", level: 80 },
    ],
  },
];

export const experience = [
  {
    role: "UI/UX Design Intern",
    company: "Nitroware Technologies",
    period: "Apr 2025 — May 2025",
    description:
      "Designed user flows, wireframes and high-fidelity mockups in Figma. Collaborated with developers on design hand-off and iterated on UX based on review feedback.",
    stack: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    role: "Data Analytics Intern",
    company: "Edu Tantr",
    period: "Jan 2026 — Mar 2026",
    description:
      "Cleaned and modeled datasets, built interactive Power BI dashboards, and ran exploratory analyses in Python and SQL to surface insights for stakeholders.",
    stack: ["Excel", "SQL", "Power BI", "Python"],
  },
];

export type ProjectCategory = "Full Stack" | "AI" | "Data" | "UI/UX";

export type Project = {
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  github?: string;
  live?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Vidify",
    summary: "Full-stack music video streaming platform with curated vibes.",
    description:
      "Vidify is a full-stack music video streaming platform that lets users explore videos by mood, build playlists and enjoy a polished playback experience across devices.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Tailwind", "Lovable Cloud"],
    github: "https://github.com/Sree-Mithra/vidify-your-vibe-hub",
    live: "https://vidify-your-vibe-hub.lovable.app",
    highlights: [
      "Responsive, mobile-first video player UI",
      "Mood-based discovery and playlist management",
      "Cloud-backed authentication and storage",
    ],
  },
  {
    title: "Digital Forgetting Detector",
    summary: "AI-powered full-stack tool that flags signs of digital forgetting.",
    description:
      "An AI full-stack application that analyzes user behavior signals to detect early indicators of digital forgetting, surfacing recommendations through a clean, accessible interface.",
    category: "AI",
    tags: ["AI", "Full Stack", "Node", "React"],
    github: "https://github.com/Sree-Mithra/forgetdetector-backend",
    live: "https://beamish-nasturtium-99394c.netlify.app",
    highlights: [
      "Custom AI inference pipeline",
      "Clean, accessible UI with real-time feedback",
      "Deployed full-stack on Netlify",
    ],
  },
  {
    title: "Netflix Data Analysis",
    summary: "Exploratory analysis of the Netflix catalog with visual insights.",
    description:
      "A Python and Pandas notebook that explores the Netflix catalog — content types, genres, country distribution and release trends — and visualizes patterns with Matplotlib and Seaborn.",
    category: "Data",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/Sree-Mithra/Netflix-Data-Analysis",
    highlights: [
      "Cleaned and reshaped a 8K+ row dataset",
      "Surfaced genre, region and release-year trends",
      "Storytelling-first visualizations",
    ],
  },
  {
    title: "Sentiment Analysis of Social Media Text",
    summary: "NLP pipeline classifying social posts as positive, neutral or negative.",
    description:
      "A natural language processing project that preprocesses raw social media text and classifies sentiment using a trained model, with a clear breakdown of accuracy and confusion matrix.",
    category: "AI",
    tags: ["Python", "NLP", "Scikit-learn", "Sentiment"],
    highlights: [
      "End-to-end text preprocessing pipeline",
      "Model training and evaluation",
      "Insightful sentiment distribution reports",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology (Final Year)",
  institute: "Nandha College of Technology — Anna University",
  graduation: "Graduating 2027",
  cgpa: "8.95",
  coursework: ["Programming in Java", "Web Development", "Data Analytics"],
};
