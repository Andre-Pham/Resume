import { MobileNav } from "@/components/mobile-nav"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { SunMedium } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

const NAV_ITEMS = [
  { href: "/showcase", label: "Showcase" },
  { href: "/career", label: "Career" },
  { href: "/socials", label: "Socials" },
  { href: "/education", label: "Education" },
]

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <div className="flex flex-col items-center p-8">
        <div className="">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Text variant="h5" className="relative z-50">
                Andre Pham
              </Text>
            </Link>

            <Separator
              orientation="vertical"
              className="relative z-50 min-h-6"
            />

            <div className="hidden items-center gap-6 sm:flex">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} to={item.href}>
                  <Text>{item.label}</Text>
                </Link>
              ))}

              <SunMedium className="size-4" />
            </div>

            <MobileNav items={NAV_ITEMS} className="sm:hidden" />
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
