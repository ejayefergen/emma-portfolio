export type WorkItem = {
  org: string;
  title: string;
  role: string;
  highlights: string[];
  tags: string[];
  inProgress?: boolean;
  link?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "linkedin" | "gitlab" | "github";
};

export const workItems: WorkItem[] = [
  {
    org: "Onit",
    title: "AI Household Operating System",
    role: "Founder & Product Lead",
    highlights: [
      "Designing and building an AI-native household OS to reduce mental load and bring clarity to modern home life",
      "Leading product strategy, interaction design, and early development",
      "Exploring how intelligent systems can coordinate the invisible labor that keeps a household running",
    ],
    tags: ["AI-Native", "0→1", "Systems Thinking", "Consumer"],
    inProgress: true,
    link: "https://onit-life.app",
  },
  {
    org: "GitLab",
    title: "Growth, AI, and Product Analytics",
    role: "Senior Product Analyst → Staff Product Analyst → Product Manager",
    highlights: [
      "Promoted multiple times while shaping how GitLab understands user behavior, product value, and AI adoption",
      "Built the analytics foundation for the company's AI platform, defining meaningful usage metrics and executive reporting",
      "Transitioned into product management to lead growth across the self-serve journey — improving acquisition, activation, and conversion",
      "Consistently used data to reduce ambiguity and help teams invest where it matters most",
    ],
    tags: ["AI", "Growth", "Analytics", "DevTools"],
    link: "https://about.gitlab.com",
  },
  {
    org: "JumpCloud",
    title: "Identity Platform",
    role: "Growth Product Analytics",
    highlights: [
      "Translated complex behavioral data into clear product opportunities for directory and authentication experiences",
      "Improved administrator workflows and strengthened platform adoption",
      "Helped evolve the platform into a more cohesive system for IT teams",
    ],
    tags: ["Identity", "Platform Thinking", "Enterprise", "Security"],
    link: "https://www.jumpcloud.com",
  },
  {
    org: "AeroGarden",
    title: "Connected Consumer IoT",
    role: "Product Development Scientist (Product Management Role)",
    highlights: [
      "Led the connected experience for smart indoor gardens, aligning hardware and software development",
      "Created a product that made growing food at home intuitive, accessible, and delightful",
      "Sparked a long-term interest in products that quietly improve everyday life",
    ],
    tags: ["IoT", "Consumer", "Mobile", "Cross-Functional Leadership"],
    link: "https://scottsmiraclegro.com/en-us/aerogarden.html",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Product Leadership",
    skills: [
      "Product Strategy",
      "0→1 Development",
      "Systems Thinking",
      "Growth & PLG",
      "Experimentation",
      "Cross-Functional Leadership",
    ],
  },
  {
    name: "Data Fluency",
    skills: [
      "SQL",
      "Python",
      "Product Analytics",
      "Behavioral Analysis",
      "Experiment Design",
      "Analytics Engineering",
      "Data Science",
    ],
  },
  {
    name: "AI Product Development",
    skills: [
      "AI-Native Product Design",
      "LLM Applications",
      "Prompt Engineering",
      "Usage & Value Metrics",
      "Human-in-the-Loop Systems",
    ],
  },
  {
    name: "Builder Toolkit",
    skills: [
      "Figma",
      "GitLab",
      "dbt",
      "Tableau",
      "Notion",
      "Developer Tooling",
    ],
  },
];

export const bio = `I’m a product leader who builds technology that makes life and work feel simpler.

My career has lived at the intersection of product, data, and emerging technology — from connected hardware to developer platforms to AI. I’m particularly energized by ambiguous problem spaces and products that require both analytical depth and product intuition.

Outside of my day job, I’m building Onit, an AI-native household operating system inspired by a belief that our most powerful technology should solve real-world problems, not create more noise.

I live in the mountains of Colorado, where you’ll usually find me skiing, hiking, or mountain biking with my husband Ryan and dog Bear - my joys in life. 

I care deeply about building products that give people their time back — because time is the one resource we don’t get more of.`;

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:emma.j.fergen@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmajfergen/",
    icon: "linkedin",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/efergen",
    icon: "gitlab",
  },
  {
    label: "GitHub",
    href: "https://github.com/ejayefergen",
    icon: "github",
  },
];
