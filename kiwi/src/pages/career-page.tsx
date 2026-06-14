import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { ChevronDown, X } from "lucide-react"

export function CareerPage() {
  return (
    <div>
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

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Monash University, Jan 2024 – June 2026
          <br />
          Department of Human Centred Computing
        </Text>

        {/* <Text variant="mono" className="text-muted-foreground mt-2">
          Description
          <ChevronDown className="ml-0.5 inline size-4.5 mb-px" />
        </Text> */}

        <div className="mt-4 flex flex-col items-start gap-3">
          {/* <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            Description <ChevronDown />
          </Button>
          <Button className="h-7 rounded-lg" variant="secondary" size="sm">
            Technologies <ChevronDown />
          </Button> */}
          <Button
            className="font-gitlab-mono font-semibold"
            variant="secondary"
            size="sm"
          >
            Description
            <X />
          </Button>

          <div className="flex items-center gap-4">
            <Separator
              orientation="vertical"
              className="h-auto self-stretch data-[orientation=vertical]:h-auto"
            />

            <Text variant="mono" className="text-muted-foreground">
              I am the developer for AuslanSpell, having lead and developed all
              aspects of the app, including the design, features, UI/UX, 3D
              scene, animation rendering and blending, scene controls, and data
              persistence.
            </Text>
          </div>

          <Button
            className="font-gitlab-mono font-semibold"
            variant="secondary"
            size="sm"
          >
            Technologies
            <ChevronDown />
          </Button>
        </div>

        {/* <Text variant="mono" className="text-muted-foreground mt-2">
          Description
          <ChevronDown className="mb-px ml-0.5 inline size-4.5" />
        </Text>

        <Text variant="mono" className="text-muted-foreground mt-2">
          Technologies
          <ChevronDown className="mb-px ml-0.5 inline size-4.5" />
        </Text> */}

        {/* <Text variant="mono" className="text-muted-foreground mt-2">
          I am the developer for AuslanSpell, having lead and developed all
          aspects of the app, including the design, features, UI/UX, 3D scene,
          animation rendering and blending, scene controls, and data
          persistence.
        </Text> */}

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Optizmo Technologies, Jun 2024 – Aug 2025
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              I am the developer for AuslanSpell, having lead and developed all
              aspects of the app, including the design, features, UI/UX, 3D
              scene, animation rendering and blending, scene controls, and data
              persistence.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Technologies</AccordionTrigger>
            <AccordionContent>...</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Cerulean Labs, Jun 2021 – Nov 2023
        </Text>

        <div className="mt-4 space-y-2 rounded-xl border p-4">
          <div className="flex items-center gap-1.5">
            <Text variant="mono">Description</Text>
            <ChevronDown className="size-4 -translate-y-px" />
          </div>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border p-4">
          <div className="flex items-center gap-1.5">
            <Text variant="mono">Technologies</Text>
            <ChevronDown className="size-4 -translate-y-px" />
          </div>
        </div>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">iOS Developer</Text>

        <Text variant="sub1" className="mt-2">
          Monash University, Jan 2024 – June 2026
          <br />
          Department of Human Centred Computing
        </Text>

        <Button
          className="font-gitlab-mono mt-4 font-semibold"
          variant="secondary"
          size="sm"
        >
          Description
          <ChevronDown />
        </Button>

        <div className="mt-4 space-y-2 rounded-xl border p-4">
          <Text variant="mono" className="text-muted-foreground">
            I am the developer for AuslanSpell, having lead and developed all
            aspects of the app, including the design, features, UI/UX, 3D scene,
            animation rendering and blending, scene controls, and data
            persistence.
          </Text>
        </div>

        <Button
          className="font-gitlab-mono mt-4 font-semibold"
          variant="secondary"
          size="sm"
        >
          Technologies
          <ChevronDown />
        </Button>

        <Separator className="mt-7" />
      </div>
    </div>
  )
}
