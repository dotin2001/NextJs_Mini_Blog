import { Circle } from "lucide-react";
import type { ReactNode } from "react";

import type { Article } from "@/types";
import { Card } from "@/components/ui/card";

export function ArticleCard({ article, action }: { article: Article; action?: ReactNode }) {
  return (
    <Card className="group h-full rounded-[14px] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-24px_rgba(38,20,90,0.35)] sm:p-5">
      <div className="flex h-full flex-col space-y-3">
        <div className="space-y-2">
          <h2 className="text-left text-[15px] font-semibold leading-6 text-[#232329] transition group-hover:text-[#5b46ea] sm:text-[16px]">
            {article.title}
          </h2>
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#b2adc3]">
            {article.publishedAt.slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-medium text-[#796cf7]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f0ff]">
            <Circle className="h-2.5 w-2.5 fill-current stroke-0" />
          </span>
          <span>{article.category}</span>
        </div>
        <div className="mt-auto rounded-[10px] border border-[#f1eef7] bg-[#fcfbff] px-3 py-3 sm:px-4">
          <p className="text-[11px] leading-6 text-[#7c788c] sm:text-[12px]">{article.excerpt}</p>
        </div>
        {action ? <div className="flex justify-start pt-1">{action}</div> : null}
      </div>
    </Card>
  );
}
