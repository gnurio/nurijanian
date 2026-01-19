export interface AppearanceItem {
  title: string;
  description: string;
  url: string;
  date: string;
  platform: string;
}

export const appearances: AppearanceItem[] = [
  {
    title: "The Ultimate Guide: Design Systems",
    description: "Partnered with Aakash Gupta to create a comprehensive guide addressing unique design system challenges—quantifying impact and communicating importance to leadership.",
    url: "https://www.news.aakashg.com/p/the-ultimate-guide-design-systems",
    date: "2023-05-29",
    platform: "Product Growth Newsletter",
  },
  {
    title: "Navigating the World of Product Management",
    description: "Interview discussing the journey from pricing analyst to product manager, working in regulated environments, building product culture, and the future of product management.",
    url: "https://www.youtube.com/watch?v=3PLK5HQunfs",
    date: "2021-10-11",
    platform: "One Knight in Product Podcast",
  },
  {
    title: "Examples and Templates of 1-Pagers and PRDs",
    description: "Shout out from Lenny Rachitsky for great problem framing. Featured example of problem-oriented product documentation with clear success criteria and directional solutions, showcasing best practices for product specs.",
    url: "https://www.lennysnewsletter.com/i/40530838/examples-of-1-pagersprds",
    date: "2021-09-01",
    platform: "Lenny's Newsletter",
  },
];
