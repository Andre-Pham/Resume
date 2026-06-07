import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { Download, SunMedium } from "lucide-react"
import { Link } from "react-router-dom"

const NAV_ITEMS = [
  { href: "/showcase", label: "Showcase" },
  { href: "/career", label: "Career" },
  { href: "/socials", label: "Socials" },
  { href: "/education", label: "Education" },
]

export function EducationPage() {
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

        <div className="mt-16">
          <Text variant="display">Education</Text>
        </div>

        <div className="mt-16 w-full max-w-xl">
          <Text variant="h3">Bachelor of Software Engineering (Honours)</Text>
          <p className="font-gitlab-mono text-muted-foreground mt-2 text-[15px] font-normal">
            Monash University, Mar 2020 – Nov 2023
          </p>
          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <Text variant="h3">First Class Honours</Text>

          <Text variant="mono" className="text-muted-foreground mt-2">
            WAM: 88.255
            <br />
            GPA: 3.938
          </Text>

          <Text variant="mono" className="mt-2" underline>
            Reading WAM
          </Text>

          <Text variant="mono" className="mt-2" underline>
            Reading GPA
          </Text>

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <Text variant="h3">Achievements</Text>

          <Text variant="mono" className="text-muted-foreground mt-2">
            I was the Software Engineering Dux, was included in the Faculty of
            Engineering Dean’s Honour List every year of my degree, and have
            received multiple letters of commendation for my high academic
            performance.
          </Text>

          <div className="mt-4 flex flex-col items-start gap-3">
            <Button className="h-7 rounded-lg" variant="secondary" size="sm">
              <Download /> Dux Award
            </Button>

            <Button className="h-7 rounded-lg" variant="secondary" size="sm">
              <Download /> Honour List Inclusions
            </Button>

            <Button className="h-7 rounded-lg" variant="secondary" size="sm">
              <Download /> Letters of Commendation
            </Button>
          </div>

          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <Text variant="h3">Academic Transcript</Text>

          <Text variant="mono" className="mt-2" underline>
            Online academic transcript
          </Text>

          <Text variant="mono" className="mt-2" underline>
            What’s an academic transcript?
          </Text>

          <div className="mt-4 flex flex-col items-start gap-3">
            <Button className="h-7 rounded-lg" variant="secondary" size="sm">
              <Download /> Transcript
            </Button>
          </div>
          <Separator className="mt-7" />
        </div>
      </div>
    </div>
  )
}
