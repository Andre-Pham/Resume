import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./hooks";
import { HomePage } from "./pages";

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
);
