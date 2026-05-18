import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[96px] w-full rounded-md border border-[#e7e4f4] px-3 py-2 text-sm text-[#33333a] outline-none transition placeholder:text-[#9a98a9] focus:border-[#6c4dff]",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
