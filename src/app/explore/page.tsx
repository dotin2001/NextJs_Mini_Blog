import { AppShell } from "@/components/app-shell";
import { ArticleCard } from "@/components/article-card";
import { SearchBar } from "@/components/search-bar";
import { getExploreArticles } from "@/data/selectors";

export default function ExplorePage() {
  const articles = getExploreArticles();

  return (
    <AppShell>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h1 className="text-[18px] font-semibold text-[#33333a]">Explore</h1>
        <div className="w-full sm:max-w-[280px]">
          <SearchBar />
        </div>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </AppShell>
  );
}
