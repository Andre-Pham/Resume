import * as React from "react"

import { typographyStyles } from "@/components/ui/text"
import { cn } from "@/lib/utils"

function Badge({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        typographyStyles.mono2,
        "bg-accent text-muted-foreground px-2 py-1",
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
