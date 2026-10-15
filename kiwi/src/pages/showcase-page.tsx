import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"

export function ShowcasePage() {
  // TODO: projects to show off - everbound, auslanspell, swiftlocal, zilliax, this website
  return (
    <div className="w-full max-w-xl">
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Showcase
        </Text>

        <div className="mt-16 w-full max-w-xl">
          <Text variant="h3">Zilliax UI</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            A set of modern UIKit views and extensions that you can copy and
            paste into your Swift apps.
          </Text>

          <Link className="mt-4" href="https://github.com/Andre-Pham/Zilliax">
            GitHub
          </Link>
        </div>

        <img
          // TODO: Replace with a mosaic of different components
          src="/assets/temp-zilliax-showcase.jpg"
          alt="Zilliax showcase"
          className="bg-muted mt-6 h-48 w-full rounded-xl border-2 object-cover"
        />
      </div>
    </div>
  )
}
