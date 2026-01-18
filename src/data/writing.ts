export interface WritingItem {
  title: string;
  description: string;
  url: string;
  date: string;
  type: 'newsletter' | 'twitter' | 'appearance';
  platform?: string; // For appearances: "Podcast Name" or "Newsletter Name"
}

export const writingItems: WritingItem[] = [
  // Newsletter
  {
    title: "I Built 3 Claude Code Commands to 10x My PM Productivity",
    description: "How to create custom Claude Code commands for personal knowledge management and convert 180+ AI prompts into reusable skills—building a custom operating system for product management work.",
    url: "https://nurijanian.substack.com/p/i-built-3-claude-code-commands-to",
    date: "2026-01-09",
    type: "newsletter",
  },
  {
    title: "How To Use Claude Code for Product Managers",
    description: "A practical guide showing how PMs can leverage Claude Code to build applications, featuring actionable tips and browser interaction capabilities through the example of creating an ADHD Focus App.",
    url: "https://nurijanian.substack.com/p/how-to-use-claude-code-for-product",
    date: "2025-12-26",
    type: "newsletter",
  },
  {
    title: "How To Use NotebookLM for Product Managers",
    description: "Eight practical use cases for NotebookLM tailored to PMs, emphasizing innovation through input, prompt, and output differentiation to extract novel insights.",
    url: "https://nurijanian.substack.com/p/how-to-use-notebooklm-for-product",
    date: "2025-12-19",
    type: "newsletter",
  },

  // Twitter
  {
    title: "Creativity Is Contrarian Investing In Ideas",
    description: "Exploring creativity as market behavior through the investment theory—buying low and selling high in ideas. Examines antimemetic problems, AI's impact on synthesis and analysis, and why courage is creativity's true bottleneck.",
    url: "https://x.com/nurijanian/article/2010564473812304306",
    date: "2026-01-12",
    type: "twitter",
  },
  {
    title: "A Product Manager Is a Founder With Training Wheels",
    description: "Why product management is fundamentally entrepreneurial work with organizational support. PMs must think like founders—vision, execution, resource allocation—while learning in a safer environment.",
    url: "https://x.com/nurijanian/article/2009547930668269632",
    date: "2026-01-09",
    type: "twitter",
  },
  {
    title: "On Finding Meaning",
    description: "Meaning only emerges in the present moment during action. Avoid the traps of over-analysis and deferral—look for meaning while moving, not while sitting still.",
    url: "https://x.com/nurijanian/article/2009108907004973282",
    date: "2026-01-08",
    type: "twitter",
  },
  {
    title: "Strategy Is Scaffolding Not the Building",
    description: "Strategy isn't a deliverable—it's a story you test through experiments. Understanding the situation is 90% of strategic work; tactics are bets that validate or disprove your narrative.",
    url: "https://x.com/nurijanian/article/2006297601956794417",
    date: "2025-12-31",
    type: "twitter",
  },
  {
    title: "Insights Products Are a Tarpit",
    description: "Why analytics products consistently fail: they exist outside workflow, demand arrives sporadically with infinite variation, and insights don't do work themselves—they're merely inputs to action.",
    url: "https://x.com/nurijanian/article/2005917216408265153",
    date: "2025-12-30",
    type: "twitter",
  },
  {
    title: "Curiosity Is Compound Interest for Your Brain",
    description: "How distraction fragments attention and creativity. Curiosity requires sustained focus to compound into genuine creative output, while AI tools risk extracting satisfaction without building neural networks.",
    url: "https://x.com/nurijanian/article/2005464379660411217",
    date: "2025-12-29",
    type: "twitter",
  },

  // Appearances
  {
    title: "The Ultimate Guide: Design Systems",
    description: "Partnered with Aakash Gupta to create a comprehensive guide addressing unique design system challenges—quantifying impact and communicating importance to leadership.",
    url: "https://www.news.aakashg.com/p/the-ultimate-guide-design-systems",
    date: "2023-05-29",
    type: "appearance",
    platform: "Product Growth Newsletter",
  },
  {
    title: "Navigating the World of Product Management",
    description: "Interview discussing the journey from pricing analyst to product manager, working in regulated environments, building product culture, and the future of product management.",
    url: "https://www.youtube.com/watch?v=3PLK5HQunfs",
    date: "2021-10-11",
    type: "appearance",
    platform: "One Knight in Product Podcast",
  },
  {
    title: "Examples and Templates of 1-Pagers and PRDs",
    description: "Featured example of problem-oriented product documentation with clear success criteria and directional solutions, showcasing best practices for product specs.",
    url: "https://www.lennysnewsletter.com/i/40530838/examples-of-1-pagersprds",
    date: "2021-09-01",
    type: "appearance",
    platform: "Lenny's Newsletter",
  },
];
