import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "@/hooks"
import { Ellipsis, Moon, Sun } from "lucide-react"

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <div className="flex min-h-[80svh] flex-1 flex-col items-center p-8">
        <div className="min-h-0 flex-1" />

        <div className="w-fit max-w-full">
          <p className="font-plus-jakarta-sans max-w-full text-[32px] leading-9 font-black min-[500px]:hidden">
            Andre Pham
          </p>
          <p className="font-plus-jakarta-sans hidden max-w-full leading-none font-black whitespace-nowrap min-[500px]:block min-[500px]:text-[48px] md:text-[64px]">
            andre<span className="italic">pham</span>.com
          </p>
          <p className="font-cal-sans-text mt-6 max-w-lg text-[18px] font-medium">
            I’m a mobile and full stack developer who specialises in native iOS,
            Node.js, and React.
          </p>

          <Separator className="mt-8 min-h-0.5" />

          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <Button
              className="font-gitlab-mono font-semibold"
              variant="secondary"
              size="sm"
            >
              Showcase
            </Button>

            <Button
              className="font-gitlab-mono font-semibold"
              variant="secondary"
              size="sm"
            >
              Career
            </Button>

            <Button
              className="font-gitlab-mono font-semibold"
              variant="secondary"
              size="sm"
            >
              Socials
            </Button>

            <Button
              className="font-gitlab-mono font-semibold"
              variant="secondary"
              size="sm"
            >
              Education
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="font-gitlab-mono font-semibold"
                  variant="secondary"
                  size="sm"
                >
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                onCloseAutoFocus={(event) => event.preventDefault()}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={toggleTheme}>
                    {theme === "dark" ? <Moon /> : <Sun />}
                    Toggle Theme
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="h-6" />
        <div className="min-h-0 flex-1" />
      </div>
    </div>
  )
}

// - Showcase (projects to show off - everbound, auslanspell, swiftlocal, zilliax)
// - Career (same content as andrepham.com)
// - Socials (email, linkedin, github, etc.)
// - Education (same content as andrepham.com)
