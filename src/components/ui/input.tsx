import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-9 w-full rounded-md border border-[#e7e4f4] px-3 text-sm text-[#33333a] outline-none transition placeholder:text-[#9a98a9] focus:border-[#6c4dff]",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
