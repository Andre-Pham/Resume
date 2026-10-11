import { Text } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import type { ComponentProps } from "react"

function Link({
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      className={cn("flex items-center gap-1", className)}
      target={target}
      rel={rel}
      {...props}
    >
      <Text variant="mono1" underline>
        {children}
      </Text>

      <ArrowUpRight className="size-4" />
    </a>
  )
}

export { Link }
