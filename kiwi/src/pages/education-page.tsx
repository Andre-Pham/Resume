import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Download, SunMedium } from "lucide-react"

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
            <p className="font-plus-jakarta-sans relative z-50 text-[18px] font-semibold">
              Andre Pham
            </p>
            <Separator
              orientation="vertical"
              className="relative z-50 min-h-6"
            />
            <div className="hidden items-center gap-6 sm:flex">
              {NAV_ITEMS.map((item) => (
                <p key={item.href} className="text-[15px]">
                  {item.label}
                </p>
              ))}
              <SunMedium className="size-4" />
            </div>
            <MobileNav items={NAV_ITEMS} className="sm:hidden" />
          </div>
        </div>

        <div className="mt-16">
          <p className="font-cal-sans-text max-w-full text-[48px] leading-none font-bold tracking-tighter whitespace-nowrap sm:text-[64px]">
            Education
          </p>
        </div>

        <div className="mt-16 w-full max-w-xl">
          <p className="font-cal-sans-text text-[26px] font-medium tracking-tight">
            Bachelor of Software Engineering (Honours)
          </p>
          <p className="font-gitlab-mono text-muted-foreground mt-2 text-[15px] font-normal">
            Monash University, Mar 2020 – Nov 2023
          </p>
          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <p className="font-cal-sans-text text-[26px] font-medium tracking-tight">
            First Class Honours
          </p>
          <p className="font-gitlab-mono text-muted-foreground mt-2 text-[15px] font-normal">
            WAM: 88.255
            <br />
            GPA: 3.938
          </p>
          <p className="font-gitlab-mono mt-2 text-[15px] font-normal underline underline-offset-2">
            Reading WAM
          </p>
          <p className="font-gitlab-mono mt-2 text-[15px] font-normal underline underline-offset-2">
            Reading GPA
          </p>
          <Separator className="mt-7" />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <p className="font-cal-sans-text text-[26px] font-medium tracking-tight">
            Achievements
          </p>
          <p className="font-gitlab-mono text-muted-foreground mt-2 text-[15px] font-normal">
            I was the Software Engineering Dux, was included in the Faculty of
            Engineering Dean’s Honour List every year of my degree, and have
            received multiple letters of commendation for my high academic
            performance.
          </p>
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
          <p className="font-cal-sans-text text-[26px] font-medium tracking-tight">
            Academic Transcript
          </p>
          <p className="font-gitlab-mono mt-2 text-[15px] font-normal underline underline-offset-2">
            Online academic transcript
          </p>
          <p className="font-gitlab-mono mt-2 text-[15px] font-normal underline underline-offset-2">
            What’s an academic transcript?
          </p>
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
