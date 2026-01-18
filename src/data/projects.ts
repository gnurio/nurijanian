export interface Project {
  title: string;
  description: string;
  url: string;
  type: 'app' | 'tool' | 'business';
  tags?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "prodmgmt.world",
    description: "Community and resources for product managers navigating the AI era. Curated tools, frameworks, and insights for modern product thinking.",
    url: "https://prodmgmt.world",
    type: "business",
    tags: ["Community", "Product Management", "AI"]
  },
  {
    title: "Example App",
    description: "Placeholder for your first app project. Replace with your actual project details.",
    url: "https://example.com",
    type: "app",
    tags: ["React", "TypeScript"]
  },
  {
    title: "lockinfocus.app",
    description: "Science-backed focus timer using Andrew Huberman's visual focus training protocol. 5-minute structured exercises designed specifically for ADHD brains, students, and deep work. Combines neuroscience research with practical productivity to help you enter flow state faster.",
    url: "https://lockinfocus.app",
    type: "tool",
    tags: ["Neuroscience", "ADHD", "Productivity", "Focus Training"]
  }
];
