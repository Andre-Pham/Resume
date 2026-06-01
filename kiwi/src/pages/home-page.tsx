import { Separator } from "@/components/ui/separator"

export function HomePage() {
  // const { theme, toggleTheme } = useTheme()
  return (
    <div>
      {/* <h1>Hello World</h1>
      <p>{theme}</p>
      <Button onClick={toggleTheme}>Toggle</Button> */}
      <div className="flex min-h-[80svh] flex-1 flex-col items-center p-6">
        <div className="min-h-0 flex-1" />

        <div>
          <p className="font-plus-jakarta-sans text-[64px] font-black">
            andre<span className="italic">pham</span>.com
          </p>
          <p className="font-cal-sans-text mt-2 max-w-md text-[18px] font-medium">
            I’m a mobile and full stack developer who specialises in native iOS,
            Node.js, and React.
          </p>

          <Separator className="mt-8" />

          <div className="flex items-center gap-4">
            <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Showcase
            </p>
            <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Career
            </p>
            <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Socials
            </p>
            <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Education
            </p>
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
