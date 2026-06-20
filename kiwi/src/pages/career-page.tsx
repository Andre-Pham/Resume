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
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Optizmo Technologies, Jun 2024 – Aug 2025
        </Text>

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
            <AccordionContent>TODO:</AccordionContent>
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
