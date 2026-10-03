import { Text } from "@/components/ui/text"
import { type AwsServices } from "@/content/career/aws-services"
import { Server } from "lucide-react"

export function AwsServicesLine({ services }: { services: AwsServices[] }) {
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
    <div className="mt-4 flex gap-2.5">
      <Server className="size-4 shrink-0 translate-y-0.5" />
      <Text variant="mono2">
        {"AWS services include "}
        {formatted}
      </Text>
    </div>
  )
}
