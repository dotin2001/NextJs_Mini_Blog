import { AppShell } from "@/components/app-shell";
import { ArticlePreviewModal } from "@/components/article-preview-modal";
import { HeroBanner } from "@/components/hero-banner";
import { articles } from "@/data/selectors";

export default function HomePage() {
  return (
    <AppShell>
      <HeroBanner
        title="Blog Dashboard"
        subtitle="Explore insightful articles on technology, design, and more. Discover new perspectives and stay updated with the latest trends."
      />
      <div className="mt-6 grid gap-4 sm:mt-7 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticlePreviewModal key={article.id} article={article} />
        ))}
      </div>
    </AppShell>
  );
}
