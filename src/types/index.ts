export interface Author {
  id: string;
  name: string;
  username: string;
  title: string;
  location: string;
  memberSince: string;
  bio: string;
  avatar: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  publishedAt: string;
  authorId: string;
}

export interface Comment {
  id: string;
  articleId: string;
  authorId: string;
  body: string;
  time: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
}
