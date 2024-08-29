import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-gray-200 dark:border-gray-800 dark:bg-zinc-800 hover:border-purple-200 outline-none ring-0 hover:bg-purple-50 bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-purple-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
