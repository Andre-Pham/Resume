import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"

export function ShowcasePage() {
  // TODO: projects to show off - everbound, auslanspell, swiftlocal, zilliax, this website
  // TODO: Have mobile variants of the images, e.g. the fireplace everbound logo icon or something, or just the phone screen
  // TODO: Consider if I should even include AuslanSpell, given that it's not even released and no source code
  return (
    <div className="w-full max-w-2xl">
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Showcase
        </Text>

        <div className="mt-16 w-full max-w-2xl">
          <Text variant="h3">Everbound</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            An iOS rougelike RPG. Includes enemies and bosses to fight, NPCs to
            meet, and loot such as armour, accessories, weapons, items, and
            potions to collect.
          </Text>

          <Text variant="mono1" className="text-muted-foreground mt-2">
            Everbound has received over 30,000 downloads and a global rating of
            4.6/5 on the App Store.
          </Text>

          <Link className="mt-4" href="https://www.everbound.net/">
            Website
          </Link>

          <Link
            className="mt-2"
            href="https://www.youtube.com/watch?v=Zl3jHVbDxws"
          >
            Trailer
          </Link>

          <Link className="mt-2" href="https://apps.apple.com/app/id6499560058">
            Download
          </Link>

          <img
            // TODO: Replace with jpg
            src="/assets/everbound-showcase-2.png"
            alt="Everbound showcase"
            className="bg-muted mt-6 w-full rounded-xl border-2 object-cover"
          />

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <Text variant="h3">Zilliax UI</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            A set of modern UIKit views and extensions that you can copy and
            paste into your Swift apps.
          </Text>

          <Link className="mt-4" href="https://github.com/Andre-Pham/Zilliax">
            GitHub
          </Link>

          <img
            // TODO: Replace with jpg
            src="/assets/zilliax-showcase-8-alt.png"
            alt="Zilliax showcase"
            className="bg-muted mt-6 w-full rounded-xl border-2 object-cover"
          />

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <Text variant="h3">SwiftLocal</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            A Swift package for locally serialising, persisting, and restoring
            Swift objects. Features lazy migrations, transactions, and thread
            safety.
          </Text>

          <Text variant="mono1" className="text-muted-foreground mt-2">
            SwiftLocal powers many of my apps, including Everbound (see above).
          </Text>

          <Link
            className="mt-4"
            href="https://github.com/Andre-Pham/SwiftLocal"
          >
            GitHub
          </Link>

          <img
            // TODO: Replace with jpg
            src="/assets/swift-local-showcase-3.png"
            alt="Zilliax showcase"
            className="bg-muted mt-6 w-full rounded-xl border-2 object-cover"
          />

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <Text variant="h3">SwiftMath</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            A Swift math package with a focus on 2D geometry and being
            ergonomic.
          </Text>

          <Link className="mt-4" href="https://github.com/Andre-Pham/SwiftMath">
            GitHub
          </Link>

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <Text variant="h3">andrepham.com</Text>

          <Text variant="mono1" className="text-muted-foreground mt-4">
            View this website’s source code using the link below.
          </Text>

          <Link className="mt-4" href="https://github.com/Andre-Pham/Kiwi">
            GitHub
          </Link>

          <Separator className="mt-7" />
        </div>
      </div>
    </div>
  )
}
