import "./fonts.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { MainScreen } from "./components/screens/MainScreen.tsx";
import { ExperienceScreen } from "./components/screens/ExperienceScreen.tsx";
import { SkillsScreen } from "./components/screens/SkillsScreen.tsx";
import { EducationScreen } from "./components/screens/EducationScreen.tsx";
import { ColorThemeProvider } from "./components/providers/ThemeProvider.tsx";
import { RouterService } from "./services/RouterService.ts";
import { TitleProvider } from "./components/providers/TitleProvider.tsx";

// For more about routing:
// https://reactrouter.com/en/main/start/tutorial

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ColorThemeProvider>
            <Router>
                <TitleProvider>
                    <Routes>
                        <Route path={RouterService.HOME_PATH} element={<MainScreen />} />
                        <Route path={RouterService.EDUCATION_PATH} element={<EducationScreen />} />
                        <Route path={RouterService.EXPERIENCE_PATH} element={<ExperienceScreen />} />
                        <Route path={RouterService.SKILLS_PATH} element={<SkillsScreen />} />
                        {/* Invalid paths redirect to root */}
                        <Route path="*" element={<Navigate to={RouterService.HOME_PATH} />} />
                    </Routes>
                </TitleProvider>
            </Router>
        </ColorThemeProvider>
    </React.StrictMode>,
);
