import { useFontsReady } from "@/hooks"
import type { ReactNode } from "react"
import { Outlet, useLocation } from "react-router-dom"

export function FontsReadyLayout() {
  const { pathname } = useLocation()

  return (
    <FontsReady key={pathname}>
      <Outlet />
    </FontsReady>
  )
}

function FontsReady({ children }: { children: ReactNode }) {
  const fontsReady = useFontsReady()

  return (
    <div
      style={{ visibility: fontsReady ? "visible" : "hidden" }}
      aria-busy={!fontsReady}
    >
      {children}
    </div>
  )
}
