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

        <div className="w-fit max-w-full">
          <p className="font-plus-jakarta-sans max-w-full text-[32px] leading-9 font-black min-[460px]:hidden">
            Andre Pham
          </p>
          <p className="font-plus-jakarta-sans hidden max-w-full leading-none font-black whitespace-nowrap min-[460px]:block min-[460px]:text-[48px] sm:text-[64px]">
            andre<span className="italic">pham</span>.com
          </p>
          <p className="font-cal-sans-text mt-6 max-w-lg text-[18px] font-medium">
            I’m a mobile and full stack developer who specialises in native iOS,
            Node.js, and React.
          </p>

          <Separator className="mt-8" />

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <p className="font-gitlab-mono bg-accent w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Showcase
            </p>
            <p className="font-gitlab-mono bg-accent w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Career
            </p>
            <p className="font-gitlab-mono bg-accent w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
              Socials
            </p>
            <p className="font-gitlab-mono bg-accent w-min rounded-lg px-3 py-1 text-[14px] font-semibold">
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
