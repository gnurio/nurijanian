// Curiosities: a personal collection of interesting concepts

export interface ExaptationExample {
  title: string;
  description: string;
  url: string;
  domain: 'biology' | 'technology' | 'ai' | 'social' | 'pharma';
}

export const exaptationDefinition = `An exaptation is a feature that performs a useful function but was not originally shaped by natural selection (or design) for that function. The concept was coined by paleontologist Stephen Jay Gould and biologist Elisabeth Vrba in their 1982 paper "Exaptation — A Missing Term in the Science of Form". Originally a tool for evolutionary biology, it has become a powerful lens for understanding technology, AI, and how ideas spread — because the most impactful innovations often arise not from designing something new, but from repurposing something that already existed.`;

export const exaptationEtymology = `From Latin ex- ("out of, from") + adaptation — deliberately contrasted with ad- ("toward") in "adaptation". The point: adaptations are shaped toward a function; exaptations are repurposed from an earlier one.`;

export const exaptationExamples: ExaptationExample[] = [
  {
    title: "Feathers → Flight",
    description:
      "Feathers almost certainly evolved first for insulation or display — only later were they co-opted for flight. Insulation is the original adaptation; flight is the exaptation. The canonical biological example, and the one Gould & Vrba used to anchor the term.",
    url: "https://evolution.berkeley.edu/exaptations/",
    domain: "biology",
  },
  {
    title: "GPUs → Neural Networks",
    description:
      "Graphics Processing Units were engineered for rendering 3D graphics. Their massively parallel matrix-multiplication architecture turned out to be exactly what large-scale neural network training needed. No one designed GPUs for AI — the fit was discovered after the fact.",
    url: "https://kpu.pressbooks.pub/evpsych/chapter/exaptations-spandrels/",
    domain: "technology",
  },
  {
    title: "Smartphone Sensors → Everyday Computing",
    description:
      "The smartphone is a bundle of exaptations: cameras built for photography became identity verification and AR anchors; accelerometers designed for screen rotation became step counters and crash detectors; GPS built for military navigation became the backbone of ride-sharing. Each component was invented for something else, then re-stacked into a new object.",
    url: "https://everydayconcepts.io/exaptation",
    domain: "technology",
  },
  {
    title: "Drug Repurposing in Pharma",
    description:
      "Many radical pharmaceutical innovations come from discovering that an existing approved drug works for an entirely different condition — sildenafil (Viagra) was originally a cardiovascular drug; thalidomide, initially a sedative, found a new life treating certain cancers. Researchers now study exaptive reuse as a systematic source of breakthrough innovation.",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/radm.12460",
    domain: "pharma",
  },
  {
    title: "Quote-Tweets as Memetic Amplifiers",
    description:
      "The quote-tweet mechanic is an exaptation of the old 'email forward' norm. The underlying behavior — appending your commentary to someone else's message before passing it on — was repurposed from private, linear email chains into a public, recursive, social amplifier. The structure came first; the now-central memetic function emerged later.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8912947/",
    domain: "social",
  },
  {
    title: "RL Fine-Tuning → Dialogue Agents",
    description:
      "Reinforcement learning from human feedback (RLHF) exapts a generic next-token prediction system into a dialogue agent without changing the core architecture. The base model was trained to complete text; the now-central function — following instructions, refusing harmful requests, maintaining conversational tone — was layered on afterward.",
    url: "https://pubsonline.informs.org/doi/10.1287/orsc.2017.1116",
    domain: "ai",
  },
  {
    title: "Web Protocols from Telecom Infrastructure",
    description:
      "Much of the early internet was built atop telecom infrastructure designed for voice calls — phone lines, packet-switching concepts, modem protocols. The internet did not arrive as a clean-sheet design; it was an exaptation of an existing communication substrate for a radically different kind of traffic.",
    url: "https://www.edge.org/response-detail/27220",
    domain: "technology",
  },
];
