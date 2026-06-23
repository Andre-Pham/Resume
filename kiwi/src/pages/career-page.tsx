import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"

export function CareerPage() {
  return (
    <div className="w-full max-w-xl">
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Career
        </Text>
      </div>

      <div className="mt-16 w-full max-w-xl">
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Contour, Aug 2025 – Present
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-3">
          <AccordionItem value="content">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Monash University, Jan 2024 – June 2026
          <br />
          Department of Human Centred Computing
        </Text>

        <Text variant="mono" className="text-muted-foreground mt-2.5">
          I am the developer for AuslanSpell, having lead and developed all
          aspects of the app, including the design, features, UI/UX, 3D scene,
          animation rendering and blending, scene controls, and data
          persistence.
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                ZeroDual
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="mono" className="text-muted-foreground">
                A platform that enables law firms to identify and resolve dual
                representation issues in mass tort and multidistrict litigation
                (MDL) cases.
              </Text>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <div className="bg-accent px-2 py-1">
                  <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                    TypeScript
                  </Text>
                </div>
                <div className="bg-accent px-2 py-1">
                  <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                    React
                  </Text>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                Access
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="mono" className="text-muted-foreground">
                A platform used by affiliates to manage and process
                advertiser-provided suppression lists, comply with opt-out
                requirements, and access analytics for their email campaigns.
              </Text>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <div className="bg-accent px-2 py-1">
                  <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                    TypeScript
                  </Text>
                </div>
                <div className="bg-accent px-2 py-1">
                  <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                    React
                  </Text>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-4 border-l-2 pl-4">
          <Text variant="mono" className="text-muted-foreground">
            A platform that enables law firms to identify and resolve dual
            representation issues in mass tort and multidistrict litigation
            (MDL) cases.
          </Text>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <div className="bg-accent px-2 py-1">
              <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                TypeScript
              </Text>
            </div>
            <div className="bg-accent px-2 py-1">
              <Text className="text-muted-foreground font-gitlab-mono text-[13px] font-normal">
                React
              </Text>
            </div>
          </div>
        </div>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Optizmo Technologies, Jun 2024 – Aug 2025
        </Text>

        {/* <Text variant="mono" className="text-muted-foreground mt-2.5">I am the developer for AuslanSpell, having lead and developed all
              aspects of the app, including the design, features, UI/UX, 3D
              scene, animation rendering and blending, scene controls, and data
              persistence.</Text> */}

        {/* <Text variant="md" className="mt-2.5 text-muted-foreground">
          I am the developer for AuslanSpell, having lead and developed all
          aspects of the app, including the design, features, UI/UX, 3D scene,
          animation rendering and blending, scene controls, and data
          persistence.
        </Text>

        <Text variant="md" className="mt-2.5">
          Projects
        </Text> */}

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              I am the developer for AuslanSpell, having lead and developed all
              aspects of the app, including the design, features, UI/UX, 3D
              scene, animation rendering and blending, scene controls, and data
              persistence.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-3">
          <AccordionItem value="content">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-3">
                <div className="size-7 rounded-sm bg-red-500" /> ZeroDual
              </div>
              <div className="mt-2">
                A platform that enables law firms to identify and resolve dual
                representation issues in mass tort and multidistrict litigation
                (MDL) cases.
              </div>
              <div className="mt-2">
                TypeScript / React / Redux / Material UI / Storybook
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="size-7 rounded-sm bg-red-500" /> Access
              </div>
              <div className="mt-2">
                A platform used by affiliates to manage and process
                advertiser-provided suppression lists, comply with opt-out
                requirements, and access analytics for their email campaigns.
              </div>
              <div className="mt-2">
                TypeScript / React / Redux / Material UI / Storybook
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Cerulean Labs, Jun 2021 – Nov 2023
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-3">
          <AccordionItem value="content">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Monash University, Jan 2024 – June 2026
          <br />
          Department of Human Centred Computing
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-3">
          <AccordionItem value="content">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>TODO:</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>
    </div>
  )
}
