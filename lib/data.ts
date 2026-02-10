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
    role: "Co-Founder & Product Lead",
    description:
      "Building an AI-powered platform that helps households manage tasks, schedules, and coordination — turning everyday chaos into calm.",
    tags: ["AI/ML", "0→1 Product", "Consumer", "React Native"],
    inProgress: true,
  },
  {
    org: "GitLab",
    title: "Growth & Monetization",
    role: "Senior Product Manager, Growth",
    description:
      "Led growth experimentation across the self-serve funnel, driving improvements in trial activation, conversion, and expansion revenue through data-driven product changes.",
    tags: ["Growth", "Experimentation", "PLG", "B2B SaaS"],
  },
  {
    org: "GitLab",
    title: "AI-Powered Analytics",
    role: "Product Manager, Analytics",
    description:
      "Shipped analytics features that gave engineering leaders visibility into DORA metrics, value stream performance, and AI-generated insights for software delivery.",
    tags: ["Analytics", "AI/ML", "DevOps", "Data Visualization"],
  },
  {
    org: "JumpCloud",
    title: "Identity & Access Management",
    role: "Product Manager",
    description:
      "Drove product strategy for directory and authentication features, improving admin experience and expanding platform capabilities for IT teams.",
    tags: ["Identity", "Security", "Enterprise", "Platform"],
  },
  {
    org: "AeroGarden",
    title: "IoT Connected Garden",
    role: "Product Manager",
    description:
      "Led the connected product experience for smart indoor gardens, bridging hardware, firmware, and app teams to deliver a seamless growing experience.",
    tags: ["IoT", "Consumer Hardware", "Mobile App", "Agile"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Product",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "A/B Testing",
      "PRDs & Specs",
      "Go-to-Market",
      "Stakeholder Management",
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      "SQL",
      "Amplitude",
      "Looker",
      "Sisense",
      "Google Analytics",
      "Funnel Analysis",
      "Experimentation Design",
    ],
  },
  {
    name: "AI & ML",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "AI Product Design",
      "ML Metrics",
      "RAG Pipelines",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Figma",
      "Jira",
      "GitLab",
      "GitHub",
      "Notion",
      "Linear",
      "Productboard",
    ],
  },
];

export const bio = `I'm a product manager who loves building things that make people's lives easier. Over the past several years, I've worked across growth, analytics, AI, and IoT — always at the intersection of user needs and technical possibility.

At GitLab, I led growth experimentation that moved real revenue numbers and shipped AI-powered analytics that helped engineering teams understand their delivery performance. Before that, I worked on identity management at JumpCloud and connected hardware at AeroGarden.

Now I'm building Onit, an AI household operating system, because I believe the hardest coordination problems aren't always at work — sometimes they're at home.

Outside of product, you'll find me hiking Colorado trails, experimenting with new recipes, or diving into the latest AI research papers.`;

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:emma.j.fergen@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emma-fergen/",
    icon: "linkedin",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/efergen",
    icon: "gitlab",
  },
];
