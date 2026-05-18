"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-[20px] font-semibold text-[#232329]">Something went wrong</h1>
          <div className="mt-4">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </body>
    </html>
  );
}
