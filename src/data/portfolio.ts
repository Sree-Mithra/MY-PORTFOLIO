export const profile = {
  name: "Sree Mithra",
  shortName: "Sree Mithra B N",
  title: "Data Analyst • Frontend Developer • UI/UX Designer",
  tagline: "Designing Experiences. Building Interfaces. Analyzing Data.",
  email: "sreebn2005@gmail.com",
  phone: "+91 94884 65480",
  location: "Gudalur, Tamil Nadu, India",
  bio: `I'm Sree Mithra, a Final-Year B.Tech Information Technology student at Nandha College of Technology, Anna University, with practical exposure to data analytics through internships and projects. Skilled in Java, SQL and Python, with experience in data cleaning, exploratory analysis and visualization using Pandas and NumPy — plus hands-on web development and React. I love using technology and data to solve real-world problems and support data-driven decisions.`,
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
  { label: "Internships", value: "3" },
  { label: "Sem IV CGPA", value: "9.54" },
];

export type SkillCategory = "Data & Programming" | "Web Technologies" | "Data Analysis" | "Tools & Platforms";

export const skillGroups: { category: SkillCategory; items: { name: string; level: number }[] }[] = [
  {
    category: "Data & Programming",
    items: [
      { name: "Java", level: 65 },
      { name: "Python", level: 60 },
      { name: "SQL", level: 60 },
      { name: "Data Structures & Algorithms", level: 55 },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", level: 65 },
      { name: "CSS", level: 60 },
      { name: "React", level: 50 },
    ],
  },
  {
    category: "Data Analysis",
    items: [
      { name: "Pandas & NumPy", level: 60 },
      { name: "Matplotlib & Seaborn", level: 55 },
      { name: "Excel", level: 80 },
      { name: "Power BI", level: 60 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 60 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 80 },
      { name: "Eclipse", level: 55 },
    ],
  },
];

export const experience = [
  {
    role: "Data Analytics Intern",
    company: "Edu Tantr — Bangalore, Karnataka",
    period: "Jan 2026 — Mar 2026",
    description:
      "Wrote SQL queries using joins and subqueries to analyze structured datasets. Performed data cleaning and validation to improve data quality, and generated reports while gaining hands-on experience in data analytics workflows.",
    stack: ["SQL", "Excel", "Data Cleaning", "Reporting"],
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "Training Trains — Erode, Tamil Nadu",
    period: "Jun 2025 — Jul 2025",
    description:
      "Built responsive web pages using HTML, CSS and JavaScript. Gained practical exposure to frontend, backend and database concepts, and strengthened debugging and software development fundamentals.",
    stack: ["HTML", "CSS", "JavaScript", "Databases"],
  },
  {
    role: "UI/UX Intern",
    company: "Nitroware Technologies Pvt. Ltd. — Coimbatore, Tamil Nadu",
    period: "Apr 2025 — May 2025",
    description:
      "Designed wireframes and UI prototypes using Figma. Collaborated with team members to improve interface usability and refined designs based on feedback during review sessions.",
    stack: ["Figma", "Wireframing", "Prototyping"],
  },
];

export const leadership = {
  role: "Student Coordinator & Technical Support",
  org: "Department of Information Technology, Nandha College of Technology",
  period: "2026",
  description:
    "Coordinated the successful execution of a departmental hackathon by supporting event planning and participant management. Provided on-site technical support and collaborated with faculty and volunteers to ensure smooth event operations.",
};

export const certifications = [
  { name: "Programming in Java", issuer: "NPTEL" },
  { name: "Oracle Certified AI Foundations Associate", issuer: "Oracle" },
  { name: "Power BI", issuer: "UniAthena" },
  { name: "Python", issuer: "HackerRank" },
  { name: "SQL", issuer: "HackerRank" },
];

export const achievements = [
  {
    title: "Semester Topper",
    org: "Nandha College of Technology",
    period: "2025",
    description: "Secured a CGPA of 9.54 in Semester IV, B.Tech Information Technology.",
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
    title: "Netflix Data Analysis & Visualization",
    summary: "Exploratory analysis of the Netflix catalog with visual insights.",
    description:
      "Performed exploratory data analysis on Netflix's global content dataset using Python, Pandas and NumPy. Cleaned and analyzed the data to identify trends in genres, ratings and release years, and created visualizations with Matplotlib and Seaborn for analytical reporting.",
    category: "Data",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/Sree-Mithra/Netflix-Data-Analysis",
    highlights: [
      "Cleaned and analyzed Netflix's global content dataset",
      "Surfaced trends in genres, ratings and release years",
      "Effective Matplotlib visualizations for key insights",
    ],
  },
  {
    title: "Nebula Synth — AI Generative Music Experience",
    summary: "Browser-based sci-fi generative music powered by Gemini AI.",
    description:
      "A browser-based sci-fi generative music experience built with React and the Web Audio API. Engineered a real-time audio synthesis engine using oscillators and filters — zero audio libraries or pre-recorded files — with Gemini AI generating unique melody sequences from natural-language mood prompts.",
    category: "AI",
    tags: ["React", "Web Audio API", "Gemini AI", "Canvas API", "Vite"],
    highlights: [
      "Real-time audio synthesis engine — no audio libraries",
      "Gemini AI melody generation from mood prompts",
      "XY control pad morphing filter frequency and delay feedback live",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology (Final Year)",
  institute: "Nandha College of Technology — Anna University",
  duration: "Sep 2023 — May 2027",
  graduation: "Graduating 2027",
  cgpa: "8.95",
  coursework: ["Programming in Java", "Web Development", "Data Analytics", "Data Structures & Algorithms"],
};
