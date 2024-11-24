import { Employment } from "../types/Employment";

export const Employments: Employment[] = [
    new Employment({
        title: "Fullstack Developer",
        company: "Optizmo",
        duration: "Jun 2024 - Present",
        description:
            "As a fullstack developer at Optizmo, I've practiced and contributed to all aspects of the ACCESS and ZeroDual platforms, including frontend, backend, security, overall system architecture, database design, AWS infrastructure, and more.\nWhilst following agile methodologies and best development practices, I've also practiced skills outside development having taken on rotating roles such as scrum master and review boss.",
        experienceNames: ["ZeroDual", "ACCESS"],
    }),

    new Employment({
        title: "iOS Developer",
        company: "Monash University, Department of Human Centred Computing",
        duration: "Jan 2024 - Present",
        description:
            "I am the developer for AuslanSpell, having lead and developed all aspects of the app, including the design, features, UI/UX, 3D scene, animation rendering and blending, scene controls, and data persistence.",
        experienceNames: ["AuslanSpell"],
    }),

    new Employment({
        title: "iOS Developer",
        company: "Cerulean Labs",
        duration: "Jul 2021 - Nov 2023",
        description:
            "As an iOS developer at Cerulean Labs, I worked on all areas of the iPad Codesign app including the UI, rendering, core application logic, application architecture, data serialisation, and more. Using a diverse range of disciplines - such as UI/UX, 2D rendering, 3D rendering, thread management, applied mathematics, and more - I developed features including many of the 3D editing tools, 2D vector editing tools, the 2D vector rendering engine, and more.",
        experienceNames: ["Codesign"],
    }),

    new Employment({
        title: "iOS Developer",
        company: "Monash University, Department of Human Centred Computing",
        duration: "Jun 2023 - Nov 2023",
        description:
            'I was the developer for the "Beesly" iOS app, built for a paper investigating education for the visually impaired. Working with the academic team, I lead and was responsible for the development of the entire app and its feature set, including its real-time object detection, hand detection, speech recognition, speech synthesis, audio on-device recording and playback, data persistance, and the data collection and training of the custom machine learning model created for it.',
        experienceNames: ["Beesly"],
    }),
];
