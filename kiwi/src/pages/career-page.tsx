import { ServicesLine } from "@/components/services-line"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge, BadgeGroup } from "@/components/ui/badge"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { EmploymentHistory } from "@/content/career/employment-history"
import { cn } from "@/lib/utils"
import { TextAlignStart } from "lucide-react"

export function CareerPage() {
  return (
    <div className="w-full max-w-xl">
      <div className="mt-12">
        <Text variant="display" className="text-center">
          Career
        </Text>
      </div>

      {EmploymentHistory.map((employment, index) => (
        <div
          key={employment.company + employment.duration}
          className={cn("w-full max-w-xl", index === 0 ? "mt-16" : "mt-6")}
        >
          <Text variant="h3">{employment.title}</Text>

          <Text variant="sub1" className="mt-2">
            {employment.company}
            {", "}
            {employment.duration}
          </Text>

          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="role">
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="bg-muted flex size-8 items-center justify-center rounded-sm border-2">
                    <TextAlignStart aria-hidden="true" className="size-4" />
                  </span>
                  About the Role
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {employment.description.split("\n").map((paragraph, index) => (
                  <Text
                    key={index}
                    variant="inherit"
                    className={index > 0 ? "mt-2.5" : undefined}
                  >
                    {paragraph}
                  </Text>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {employment.projects.map((project) => (
            <Accordion
              key={project.title}
              type="single"
              collapsible
              className="mt-4"
            >
              <AccordionItem value="content">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src={`/assets/${project.image}`}
                      alt={project.image}
                      className="bg-muted size-8 rounded-sm border-2 object-cover"
                    />
                    <Text variant="inherit">{project.title}</Text>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Text variant="inherit">{project.description}</Text>
                  {project.links.map((link) => (
                    <Link key={link.url} className="mt-2.5" href={link.url}>
                      {link.label ?? link.shownUrl}
                    </Link>
                  ))}
                  {project.tags.length > 0 ? (
                    <BadgeGroup className="mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </BadgeGroup>
                  ) : null}
                  <ServicesLine
                    service="AWS"
                    services={project.awsServices}
                    className="mt-4"
                  />
                  <ServicesLine
                    service="GCP"
                    services={project.gcpServices}
                    className="mt-1"
                  />
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
