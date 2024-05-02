import "./fonts.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainScreen from "./components/screens/MainScreen.tsx";
import ExperienceScreen from "./components/screens/ExperienceScreen.tsx";

// For more about routing:
// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
        errorElement: <MainScreen />, // lol
    },
    {
        path: "/experience",
        element: <ExperienceScreen />,
    },
    {
        path: "/skills",
    },
    {
        path: "/education",
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
