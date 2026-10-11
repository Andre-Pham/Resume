import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom"
import { FontsReadyLayout } from "./components/fonts-ready-layout"
import { PageContainer } from "./components/page-container"
import { ThemeProvider } from "./hooks"
import "./index.css"
import {
  CareerPage,
  EducationPage,
  HomePage,
  ShowcasePage,
  SocialsPage,
} from "./pages"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<FontsReadyLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route element={<PageContainer />}>
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/socials" element={<SocialsPage />} />
              <Route path="/education" element={<EducationPage />} />
            </Route>

            {/* Invalid paths redirect to root */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
