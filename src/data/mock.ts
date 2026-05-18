import type { Article, Author, Comment, NotificationItem } from "@/types";

export const authors: Author[] = [
  {
    id: "alex",
    name: "Alex Morgan",
    username: "alex-morgan",
    title: "Writer",
    location: "New York, NY, USA",
    memberSince: "Member since Oct 12, 2022",
    bio: "Environmental scientist and blog writer sharing insights on sustainability, biodiversity, and conservation efforts.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "julia",
    name: "Julia Simmons",
    username: "julia-simmons",
    title: "Researcher",
    location: "Denver, CO, USA",
    memberSince: "Member since Jan 4, 2023",
    bio: "Writes about species migration, field studies, and scientific communication.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
];

export const articles: Article[] = [
  {
    id: "a1",
    slug: "can-ai-replace-web-designers",
    title: "Can AI Replace Web Designers?",
    excerpt:
      "The role of AI in web design and whether it can truly replace human creativity and expertise.",
    body: [
      "AI can assist with generation, pattern recognition, and production speed, but it still lacks product judgment and the ability to understand cultural nuance at a deep level.",
      "In practice, the strongest design teams use AI to accelerate iteration while keeping human direction responsible for hierarchy, tone, trust, and the final experience.",
      "That means AI changes the workflow of designers more than it replaces the profession outright."
    ],
    category: "Technology",
    publishedAt: "2026-05-12T08:00:00.000Z",
    authorId: "alex"
  },
  {
    id: "a2",
    slug: "vision-2025-tech-designs-for-2026",
    title: "Vision 2025 Tech Designs for 2026",
    excerpt:
      "Trends in technology design that are expected to shape interfaces, products, and digital behavior next year.",
    body: [
      "The strongest visual trend is simplification without flattening identity. Products are getting cleaner, but not more anonymous.",
      "Spacing systems are tighter, cards are more readable, and accent color is used with more discipline to highlight what matters.",
      "Editorial products in particular are moving toward calmer, more trustworthy layouts."
    ],
    category: "Technology",
    publishedAt: "2026-05-10T08:00:00.000Z",
    authorId: "alex"
  },
  {
    id: "a3",
    slug: "building-better-ux-with-modern-tools",
    title: "Building Better UX with Modern Tools",
    excerpt:
      "How design systems, feedback loops, and the right tools improve product quality and team velocity.",
    body: [
      "Modern product teams benefit most when their tooling improves consistency without removing space for good decisions.",
      "The best systems reduce repetitive effort, clarify structure, and allow quality to scale."
    ],
    category: "UX",
    publishedAt: "2026-05-08T08:00:00.000Z",
    authorId: "julia"
  },
  {
    id: "a4",
    slug: "the-future-of-interactive-content",
    title: "The Future of Interactive Content",
    excerpt:
      "Exploring how immersive interactions and audience participation are changing publishing products.",
    body: [
      "Interactive content works when it increases clarity or engagement without becoming distracting.",
      "The closer a product gets to editorial simplicity, the more carefully it has to choose where interaction belongs."
    ],
    category: "Media",
    publishedAt: "2026-05-06T08:00:00.000Z",
    authorId: "alex"
  },
  {
    id: "a5",
    slug: "top-5-ai-advances-in-finance",
    title: "Top 5 AI Advances in Finance",
    excerpt:
      "How machine learning is reshaping forecasting, fraud detection, and analysis in financial systems.",
    body: [
      "The most practical financial AI systems are narrow, explainable, and designed to fit inside existing review processes.",
      "Accuracy and accountability matter more here than product novelty."
    ],
    category: "Finance",
    publishedAt: "2026-05-04T08:00:00.000Z",
    authorId: "julia"
  },
  {
    id: "a6",
    slug: "types-of-advanced-fitness-formats",
    title: "Types of Advanced Fitness Formats",
    excerpt:
      "A look at emerging classes, training structures, and audience segments inside modern fitness content.",
    body: [
      "Specialized content wins when it is structured simply and written for a defined audience.",
      "Clear segmentation helps people find the format that actually matches their goals."
    ],
    category: "Health",
    publishedAt: "2026-05-02T08:00:00.000Z",
    authorId: "alex"
  }
];

export const comments: Comment[] = [
  {
    id: "c1",
    articleId: "a1",
    authorId: "julia",
    body: "Interesting perspective on whether AI is replacing design work or just compressing the workflow.",
    time: "Yesterday"
  },
  {
    id: "c2",
    articleId: "a1",
    authorId: "alex",
    body: "I think the most important part is still curation and judgment, not raw generation.",
    time: "Today"
  }
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Julia left a comment on:",
    body: "Field research on the American Pika",
    time: "Yesterday"
  },
  {
    id: "n2",
    title: "Submitted a sample for:",
    body: "Bacterial Water Quality Monitoring",
    time: "Aug 10, 2026"
  },
  {
    id: "n3",
    title: "Published a newsletter on:",
    body: "Climate Change and Marine Ecosystems",
    time: "Aug 1, 2026"
  }
];
