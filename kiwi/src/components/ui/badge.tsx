import * as React from "react"

import { cn } from "@/lib/utils"

function Badge({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-accent text-muted-foreground font-gitlab-mono px-2 py-1 text-[13px] leading-5.5 font-normal",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function BadgeGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2.5", className)}
      {...props}
    />
  )
}

export { Badge, BadgeGroup }
