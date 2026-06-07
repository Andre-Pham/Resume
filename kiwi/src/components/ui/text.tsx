import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const typographyStyles = {
  display:
    "font-cal-sans-text tracking-tighter text-[48px] sm:text-[64px] font-bold leading-none",
  h1: "font-inter text-[48px] font-bold leading-13",
  h2: "font-inter text-[36px] font-bold leading-10",
  h3: "font-inter text-[26px] font-semibold leading-8",
  h4: "font-inter text-[22px] font-semibold leading-7",
  h5: "font-inter text-[18px] font-semibold leading-6",
  h6: "font-inter text-[16px] font-semibold leading-5",
  sub1: "font-inter text-[18px] font-medium leading-6",
  sub2: "font-inter text-[16px] font-medium leading-5",
  sub3: "font-inter text-[14px] font-medium leading-4.5",
  lg: "font-cal-sans-text tracking-tight text-[18px] font-medium leading-6",
  md: "font-cal-sans-text tracking-tight text-[16px] font-normal leading-5",
  sm: "font-cal-sans-text text-[14px] font-normal leading-4.5",
  xs: "font-cal-sans-text text-[12px] font-normal leading-4",
  mono: "font-gitlab-mono text-[15px] font-normal",
  inherit: "",
} as const

export const typographyVariants = cva("", {
  variants: {
    variant: typographyStyles,
  },
  defaultVariants: {
    variant: "sm",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  /**
   * When true, renders the text as an inline element.
   */
  inline?: boolean

  /**
   * When true, an underline is rendered.
   */
  underline?: boolean

  /**
   * When true, text colors adapt to a dark background.
   */
  inverse?: boolean
}

const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  ({ className, variant, inline, underline, inverse, ...props }, ref) => {
    const appliedVariant = inline && variant === undefined ? "inherit" : variant

    const Comp: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" = inline
      ? "span"
      : appliedVariant && /^h[1-6]$/.test(appliedVariant)
        ? (appliedVariant as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
        : "p"

    return (
      <Comp
        className={cn(
          typographyVariants({ variant: appliedVariant }),
          inverse ? "text-primary-foreground" : "",
          underline ? "underline underline-offset-2" : "",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = "Text"

export { Text }
