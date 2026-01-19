// Shared data for all design variants
// This file re-exports from source files to provide a single import point

import { writingItems, WritingItem } from './writing';
import { appearances } from './appearances';

export interface Project {
  title: string;
  description: string;
  url: string;
  type: 'app' | 'tool' | 'business';
  tags?: string[];
}

export type { WritingItem };

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export const profile = {
  name: "George Nurijanian",
  title: "Product Manager",
  location: "online",
  status: "available",
  bio: "product leader | builder | mentor | 'genuine pleasure to work with'"
};

export const projects: Project[] = [
  {
    title: "prodmgmt.world",
    description: "Making a system for Product Management without so much guesswork. Community and resources for product managers navigating the AI era.",
    url: "https://prodmgmt.world",
    type: "business",
    tags: ["Community", "Product Management", "AI"]
  },
  {
    title: "lockinfocus.app",
    description: "Science-backed focus timer using Andrew Huberman's visual focus training protocol. 5-minute structured exercises designed specifically for ADHD brains, students, and deep work.",
    url: "https://lockinfocus.app",
    type: "tool",
    tags: ["Neuroscience", "ADHD", "Productivity", "Focus Training"]
  }
];

// Re-export writing items (filter out appearances as they're shown separately)
export const writing = writingItems.filter(item => item.type !== 'appearance');

export const quickLinks = [
  {
    label: "Resume",
    url: "https://docs.google.com/document/d/1nPU6ZuTTpvXnb-qhURQr2-1Xla1dc6w1ViKQvdu1g7U/edit?usp=sharing",
    description: "CV"
  },
  {
    label: "Weekly insights",
    url: "https://nurijanian.substack.com/",
    description: "newsletter"
  },
  {
    label: "Long-form writing",
    url: "https://x.com/nurijanian/articles",
    description: "essays and articles"
  }
];

export { appearances };

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/g-nurijanian/",
    handle: "g-nurijanian"
  },
  {
    name: "Twitter",
    url: "https://x.com/nurijanian",
    handle: "@nurijanian"
  }
];
