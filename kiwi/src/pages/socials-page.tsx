import { Text } from "@/components/ui/text"
import { ArrowUpRight } from "lucide-react"

export function SocialsPage() {
  return (
    <div>
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Socials
        </Text>
        <div className="mt-16 w-full max-w-xl">
          <img
            src="/assets/andre-pham.jpeg"
            alt="Portrait photo"
            className="bg-muted h-64 w-full max-w-full rounded-xl object-cover"
          />

          <Text variant="h3" className="mt-4 wrap-anywhere">
            {"Contact me at "}
            <a href="mailto:andrekypham@gmail.com" className="underline">
              andrekypham@gmail.com
            </a>
          </Text>

          <a
            href="https://www.linkedin.com/in/andrekypham"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-1"
          >
            <Text variant="mono1" underline>
              LinkedIn
            </Text>

            <ArrowUpRight className="size-4" />
          </a>

          <a
            href="https://github.com/andre-pham"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-1"
          >
            <Text variant="mono1" underline>
              GitHub
            </Text>

            <ArrowUpRight className="size-4" />
          </a>

          <a
            href="https://behance.net/andrepham"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-1"
          >
            <Text variant="mono1" underline>
              Behance
            </Text>

            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
