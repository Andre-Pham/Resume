import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"

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

          <Link className="mt-4" href="https://www.linkedin.com/in/andrekypham">
            LinkedIn
          </Link>

          <Link className="mt-2.5" href="https://github.com/andre-pham">
            GitHub
          </Link>

          <Link className="mt-2.5" href="https://behance.net/andrepham">
            Behance
          </Link>
        </div>
      </div>
    </div>
  )
}
