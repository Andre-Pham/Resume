import { Text } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import * as React from "react"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("overflow-hidden", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/trigger focus-visible:border-ring focus-visible:ring-ring/50 flex cursor-pointer items-center gap-1.5 text-left outline-none hover:underline hover:underline-offset-2 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <Text variant="mono">{children}</Text>
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 -translate-y-px group-data-[state=open]/trigger:hidden" />
        <ChevronUpIcon className="pointer-events-none size-4 shrink-0 -translate-y-px group-data-[state=closed]/trigger:hidden" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="mt-2 overflow-hidden border-l-[2px] pl-4"
      {...props}
    >
      <Text variant="mono" className={cn("text-muted-foreground", className)}>
        {children}
      </Text>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
