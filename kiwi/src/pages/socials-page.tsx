import { Text } from "@/components/ui/text"

export function SocialsPage() {
  return (
    <div>
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Socials
        </Text>
        <div className="mt-16 w-full max-w-xl">
          <Text variant="h3">
            {"Contact me at "}
            <a href="mailto:andrekypham@gmail.com" className="underline">
              andrekypham@gmail.com
            </a>
          </Text>

          <a
            href="https://www.example.com"
            className="mt-4 flex items-center gap-2.5"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#0A66C2]">
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                className="size-5"
              />
            </div>

            <Text variant="mono" underline>
              LinkedIn
            </Text>
          </a>

          <a
            href="https://www.example.com"
            className="mt-2.5 flex items-center gap-2.5"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#181717] dark:bg-white">
              <img
                src="/assets/github-light.svg"
                alt="GitHub"
                className="size-6 dark:hidden"
              />
              <img
                src="/assets/github-dark.svg"
                alt="GitHub"
                className="hidden size-6 dark:block"
              />
            </div>

            <Text variant="mono" underline>
              GitHub
            </Text>
          </a>

          <a
            href="https://www.example.com"
            className="mt-2.5 flex items-center gap-2.5"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#115efa]">
              <img src="/assets/behance.svg" alt="Behance" className="size-6" />
            </div>

            <Text variant="mono" underline>
              Behance
            </Text>
          </a>
        </div>
      </div>
    </div>
  )
}
