export type WorkItem = {
  org: string;
  title: string;
  role: string;
  description: string;
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
  icon: "mail" | "linkedin" | "gitlab";
};

export const workItems: WorkItem[] = [
  {
    org: "Onit",
    title: "AI Household Operating System",
    role: "Founder & Product Lead",
    description:
      "Designing and actively building the earliest version of an AI-native household operating system to reduce mental load and bring clarity to modern home life. Onit is grounded in a simple belief: our smartest technology should give people their time back. I’m leading product strategy, interaction design, and early development while exploring how intelligent systems can coordinate the invisible labor that keeps a household running.",
    tags: ["AI-Native", "0→1", "Systems Thinking", "Consumer"],
    inProgress: true,
  },
  {
    org: "GitLab",
    title: "Growth, AI, and Product Analytics",
    role: "Senior Product Analyst → Staff Product Analyst → Product Manager",
    description:
      "Promoted multiple times while helping shape how GitLab understands user behavior, product value, and AI adoption. Built the analytics foundation for the company’s AI platform, partnering with engineering, data, and product to define meaningful usage metrics and executive reporting. Later transitioned into product management to lead growth initiatives across the self-serve journey — simplifying acquisition and upgrade paths, reducing friction, and driving measurable improvements in acquisition, activation and conversion. My work has consistently focused on using data to reduce ambiguity and help teams invest where it matters most.",
    tags: ["Promotion Path", "AI", "Growth", "Analytics", "DevTools"],
  },
  {
    org: "JumpCloud",
    title: "Identity Platform",
    role: "Growth Product Analytics",
    description:
      "Supported product strategy for directory and authentication experiences by translating complex behavioral data into clear opportunities. Focused on improving administrator workflows, strengthening adoption, and helping evolve the platform into a more cohesive system for IT teams.",
    tags: ["Identity", "Platform Thinking", "Enterprise", "Security"],
  },
  {
    org: "AeroGarden",
    title: "Connected Consumer IoT",
    role: "Product Development Scientist (Product Management Role)",
    description:
      "Led the connected experience for smart indoor gardens — aligning hardware and software development to create a product that made growing food at home intuitive, accessible and delightful. This work sparked my long-term interest in products that quietly improve everyday life.",
    tags: ["IoT", "Consumer", "Mobile", "Cross-Functional Leadership"],
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

At GitLab, I was promoted multiple times while helping establish the analytics foundation for the company’s AI platform and later leading growth initiatives across the self-serve journey. My focus has always been the same: help teams see where products are genuinely creating value — and where they aren’t — so they can invest with clarity.

Outside of my day job, I’m building Onit, an AI-native household operating system inspired by a belief that our most powerful technology should solve real-world problems, not create more noise.

I live in the mountains of Colorado, where you’ll usually find me skiing, hiking, or mountain biking with my husband Ryan and dog Bear. I care deeply about building products that give people their time back — because time is the one resource we don’t get more of.`;

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
];
