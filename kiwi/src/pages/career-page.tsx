import { AwsServicesLine } from "@/components/aws-services-line"
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

          <Text variant="mono1" className="text-muted-foreground mt-2.5">
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
                      {link.label ? `${link.label}: ` : null}
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
                  <AwsServicesLine services={project.awsServices} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

          <Separator className="mt-7" />
        </div>
      ))}
    </div>
  )
}
