import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom"
import { ThemeProvider } from "./hooks"
import "./index.css"
import { HomePage } from "./pages"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Invalid paths redirect to root */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
