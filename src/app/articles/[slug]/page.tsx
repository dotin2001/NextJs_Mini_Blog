import { notFound } from "next/navigation";

import { AppShell } from "@/components/app-shell";
import { CommentList } from "@/components/comment-list";
import { getArticleBySlug, getCommentsByArticle } from "@/data/selectors";
import { formatDate } from "@/lib/utils";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const comments = getCommentsByArticle(article.id);

  return (
    <AppShell>
      <div className="mx-auto max-w-[720px]">
        <div className="border-b border-[#f1eef7] pb-4">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#6c4dff]">{article.category}</p>
          <h1 className="mt-2 text-[26px] font-semibold leading-8 text-[#232329]">{article.title}</h1>
          <p className="mt-3 text-[11px] leading-5 text-[#8f8c9d]">{article.excerpt}</p>
          <p className="mt-3 text-[10px] text-[#b0abbf]">{formatDate(article.publishedAt)}</p>
        </div>
        <div className="space-y-4 py-6">
          {article.body.map((paragraph, index) => (
            <p key={index} className="text-[12px] leading-6 text-[#5f5c6b]">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="pt-4">
          <h2 className="mb-4 text-[16px] font-medium text-[#33333a]">Comments</h2>
          <CommentList items={comments} />
        </div>
      </div>
    </AppShell>
  );
}
