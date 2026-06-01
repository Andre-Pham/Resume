import { Separator } from "@/components/ui/separator"

export function HomePage() {
  // const { theme, toggleTheme } = useTheme()
  return (
    <div>
      {/* <h1>Hello World</h1>
      <p>{theme}</p>
      <Button onClick={toggleTheme}>Toggle</Button> */}
      <div className="mx-auto mt-24 max-w-4xl">
        <p className="font-plus-jakarta-sans text-[64px] font-black">
          andre<span className="italic">pham</span>.com
        </p>
        {/* <p className="font-gentium-plus max-w-sm text-[22px] font-bold">
          I’m a mobile and full stack developer who specialises in native iOS,
          Node.js, and React.
        </p> */}
        <p className="font-cal-sans-text mt-2 max-w-md text-[18px] font-medium">
          I’m a mobile and full stack developer who specialises in native iOS,
          Node.js, and React.
        </p>

        <Separator className="mt-8" />

        <div className="flex items-center gap-4">
          <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[16px]">
            Showcase
          </p>
          <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[16px]">
            Career
          </p>
          <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[16px]">
            Socials
          </p>
          <p className="font-gitlab-mono bg-accent mt-8 w-min rounded-lg px-3 py-1 text-[16px]">
            Education
          </p>
        </div>

        {/* <p className="font-gitlab-mono mt-8 text-[16px]">Showcase</p>

        <p className="font-gitlab-mono mt-2 text-[16px]">Career</p>

        <p className="font-gitlab-mono mt-2 text-[16px]">Socials</p>

        <p className="font-gitlab-mono mt-2 text-[16px]">Education</p> */}

        {/* <p className="font-cal-sans-text mx-auto mt-8 max-w-sm text-[15px] leading-5 font-normal">
          I’m a mobile and full stack developer who specialises in native iOS,
          Node.js, and React.
        </p> */}
      </div>
    </div>
  )
}

// - Showcase (projects to show off - everbound, auslanspell, swiftlocal, zilliax)
// - Career (same content as andrepham.com)
// - Socials (email, linkedin, github, etc.)
// - Education (same content as andrepham.com)
