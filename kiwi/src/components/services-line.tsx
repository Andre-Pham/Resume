import { Text } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import { Server } from "lucide-react"

interface ServicesLineProps extends React.HTMLAttributes<HTMLDivElement> {
  service: string
  services: string[]
}

export function ServicesLine({
  service,
  services,
  className,
  ...props
}: ServicesLineProps) {
  const formatter = new Intl.ListFormat("en-US", {
    style: "long",
    type: "conjunction",
  })

  const named = services.filter((service) => service !== "others")
  if (named.length === 0) {
    return undefined
  }
  const suffix = named.length < services.length ? ", among others." : "."
  const formatted = `${formatter.format(named)}${suffix}`

  return (
    <div className={cn("flex gap-2.5", className)} {...props}>
      <Server className="size-4 shrink-0 translate-y-0.5" />
      <Text variant="mono2">
        {service}
        {" services include "}
        {formatted}
      </Text>
    </div>
  )
}
