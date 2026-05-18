import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#2f2f36]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-5 sm:px-6 sm:pt-6 lg:pb-20">
        {children}
      </main>
    </div>
  );
}
