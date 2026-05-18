import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[10px] border border-[#eeeaf7] bg-white shadow-[0_8px_24px_-20px_rgba(38,20,90,0.32)]",
        className
      )}
    >
      {children}
    </div>
  );
}
