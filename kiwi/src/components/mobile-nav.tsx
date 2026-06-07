import { Text } from "@/components/ui/text"
import { useTheme } from "@/hooks"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"

export function MobileNav({
  items,
  className,
}: {
  items: { href: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const { toggleTheme } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) {
      return
    }

    const root = globalThis.document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = "hidden"

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    const mediaQuery = globalThis.matchMedia("(min-width: 40rem)")

    function onMediaChange() {
      if (mediaQuery.matches) {
        setOpen(false)
      }
    }

    globalThis.addEventListener("keydown", onKeyDown)
    mediaQuery.addEventListener("change", onMediaChange)

    return () => {
      root.style.overflow = previousOverflow
      globalThis.removeEventListener("keydown", onKeyDown)
      mediaQuery.removeEventListener("change", onMediaChange)
    }
  }, [open])

  return (
    <>
      <Button
        variant="ghost"
        aria-expanded={open}
        aria-label="Toggle Menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "extend-touch-target relative z-50 h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
          className,
        )}
      >
        <div className="relative flex h-8 w-4 items-center justify-center">
          <div className="relative size-4">
            <span
              className={cn(
                "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                open ? "top-[0.4rem] -rotate-45" : "top-1",
              )}
            />
            <span
              className={cn(
                "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                open ? "top-[0.4rem] rotate-45" : "top-2.5",
              )}
            />
          </div>
        </div>

        <Text variant="sub1">Menu</Text>
      </Button>

      {open &&
        createPortal(
          <div className="bg-background fixed inset-0 z-40 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-12 px-8 pt-26 pb-8">
              <div className="flex flex-col gap-4">
                <Text variant="sub3" className="text-muted-foreground">
                  Menu
                </Text>

                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => {
                        if (item.href === pathname) {
                          setOpen(false)
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <Text variant="h3">{item.label}</Text>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Text variant="sub3" className="text-muted-foreground">
                  Actions
                </Text>
                <div className="flex flex-col items-start gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      toggleTheme()
                      setOpen(false)
                    }}
                    className="cursor-pointer text-left"
                  >
                    <Text variant="h3">Toggle Theme</Text>
                  </button>
                </div>
              </div>
            </div>
          </div>,
          globalThis.document.body,
        )}
    </>
  )
}
