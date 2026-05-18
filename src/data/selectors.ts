import { articles, authors, comments, notifications } from "@/data/mock";

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
export const getAuthorByUsername = (username: string) =>
  authors.find((author) => author.username === username);
export const getArticlesByAuthor = (authorId: string) =>
  articles.filter((article) => article.authorId === authorId);
export const getCommentsByArticle = (articleId: string) =>
  comments.filter((comment) => comment.articleId === articleId);
export const getExploreArticles = () => articles.slice(0, 4);
export const getTrendingArticles = () => articles.slice(0, 3);

export { articles, authors, notifications };
