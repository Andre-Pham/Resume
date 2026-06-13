import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"

export function CareerPage() {
  return (
    <div>
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Career
        </Text>
      </div>

      <div className="mt-16 w-full max-w-xl">
        <Text variant="h3">Bachelor of Software Engineering (Honours)</Text>

        <Text variant="mono" className="text-muted-foreground mt-2">
          Monash University, Mar 2020 – Nov 2023
        </Text>
        <Separator className="mt-7" />
      </div>
    </div>
  )
}
