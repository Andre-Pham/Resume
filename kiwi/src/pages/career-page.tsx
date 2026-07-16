import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge, BadgeGroup } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { EmploymentHistory } from "@/content/career/employment-history"
import { cn } from "@/lib/utils"

export function CareerPage() {
  return (
    <div className="w-full max-w-xl">
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Career
        </Text>
      </div>

      {EmploymentHistory.map((employment, index) => (
        <div className={cn("w-full max-w-xl", index === 0 ? "mt-16" : "mt-6")}>
          <Text variant="h3">{employment.title}</Text>

          <Text variant="sub1" className="mt-2">
            {employment.company}
            {", "}
            {employment.duration}
          </Text>

          <Text variant="mono" className="text-muted-foreground mt-2.5">
            {employment.description.split("\n").map((paragraph, index) => (
              <>
                {index > 0 ? <div className="mt-2.5" /> : null}
                {paragraph}
              </>
            ))}
          </Text>

          {employment.projects.map((project) => (
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="content">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src={`/assets/${project.image}`}
                      alt={project.image}
                      className="bg-muted size-9 rounded-sm border-2 object-cover"
                    />
                    <Text variant="inherit">{project.title}</Text>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Text variant="inherit">{project.description}</Text>
                  {project.links.map((link) => (
                    <Text variant="inherit" className="mt-2.5">
                      {link.label}:{" "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Text variant="inherit" underline inline>
                          {link.shownUrl}
                        </Text>
                      </a>
                    </Text>
                  ))}
                  {project.tags.length > 0 ? (
                    <BadgeGroup className="mt-4">
                      {project.tags.map((tag) => (
                        <Badge>{tag}</Badge>
                      ))}
                    </BadgeGroup>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

          <Separator className="mt-7" />
        </div>
      ))}

      <div className="mt-16 w-full max-w-xl">
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Contour, Aug 2025 – Present
        </Text>

        <Text variant="mono" className="text-muted-foreground mt-2.5">
          TODO: Description
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                <Text variant="inherit">Project</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">TODO: Description</Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
            </AccordionContent>
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
                <Text variant="inherit">ZeroDual</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">
                A platform that enables law firms to identify and resolve dual
                representation issues in mass tort and multidistrict litigation
                (MDL) cases.
              </Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                <Text variant="inherit">Access</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">
                A platform used by affiliates to manage and process
                advertiser-provided suppression lists, comply with opt-out
                requirements, and access analytics for their email campaigns.
              </Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>

      <div className="mt-6 w-full max-w-xl">
        <Text variant="h3">Fullstack Developer</Text>

        <Text variant="sub1" className="mt-2">
          Optizmo Technologies, Jun 2024 – Aug 2025
        </Text>

        <Text variant="mono" className="text-muted-foreground mt-2.5">
          TODO: Description
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                <Text variant="inherit">Project</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">TODO: Description</Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
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

        <Text variant="mono" className="text-muted-foreground mt-2.5">
          TODO: Description
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                <Text variant="inherit">Project</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">TODO: Description</Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
            </AccordionContent>
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
          TODO: Description
        </Text>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="content">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="size-9 rounded-sm border-2 bg-white" />
                <Text variant="inherit">Project</Text>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Text variant="inherit">TODO: Description</Text>
              <BadgeGroup className="mt-4">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
              </BadgeGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="mt-7" />
      </div>
    </div>
  )
}
