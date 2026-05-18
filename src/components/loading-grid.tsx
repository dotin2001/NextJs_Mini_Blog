import { Skeleton } from "@/components/ui/skeleton";

export function LoadingGrid() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-[102px] rounded-none" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3 rounded-[10px] border border-[#eeeaf7] p-4">
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-12 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
