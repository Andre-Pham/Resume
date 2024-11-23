import { DownloadService } from "../../services/DownloadService";
import { InlineLink } from "../../services/types/InlineLink";
import { Link } from "../../services/types/Link";
import { Experience } from "../types/Experience";

/**
 * ==========================
 * Rules for determining tags
 * ==========================
 * Every tag must be one of the following:
 * - A technology I can link to (e.g. React, Swift, PostgreSQL)
 * - An application's architecture (e.g. MVVM, MVC)
 */

export const Experiences: Experience[] = [
    new Experience({
        image: "zerodual_icon.png",
        name: "ZeroDual",
        projectType: "Paid Position",
        start: 2024,
        end: null,
        description:
            "A platform that enables law firms to identify and resolve dual representation issues in mass tort and multidistrict litigation (MDL) cases.",
        links: [new Link({ label: "Website", shownURL: "ZeroDual.com", url: "https://www.zerodual.com/" })],
        files: [],
        tags: [
            "TypeScript",
            "React",
            "Redux",
            "Material UI",
            "Storybook",
            "Vite",
            "Nx",
            "Node.js",
            "Koa",
            "routing-controllers",
            "Inversify",
            "TypeORM",
            "PostgreSQL",
            "Redis",
            "AWS SDK",
            "Jest",
            "Vitest",
        ],
        // Breakdown of categories of services used found at AWS Cost Explorer
        awsServicesCategories: [
            "Database",
            "Compute",
            "Networking and Content Delivery",
            "Management and Governance",
            "Security, Identity, and Compliance",
            "Front-End Web and Mobile",
            "Application Integration",
            "Containers",
            "Business Applications",
        ],
    }),

    new Experience({
        image: "access_icon.png",
        name: "ACCESS",
        projectType: "Paid Position",
        start: 2024,
        end: null,
        description:
            "A platform used by affiliates to manage and process advertiser-provided suppression lists, comply with opt-out requirements, and access analytics for their email campaigns.",
        links: [new Link({ label: "Website", shownURL: "App.Optizmo.com", url: "https://app.optizmo.com/" })],
        files: [],
        tags: [
            "TypeScript",
            "React",
            "Redux",
            "Material UI",
            "Storybook",
            "Vite",
            "Nx",
            "Node.js",
            "Koa",
            "routing-controllers",
            "Inversify",
            "TypeORM",
            "PostgreSQL",
            "Redis",
            "AWS SDK",
            "Jest",
            "Vitest",
        ],
        // Breakdown of categories of services used found at AWS Cost Explorer
        awsServicesCategories: [
            "Database",
            "Compute",
            "Networking and Content Delivery",
            "Management and Governance",
            "Security, Identity, and Compliance",
            "Front-End Web and Mobile",
            "Application Integration",
            "Containers",
            "Business Applications",
            "Analytics",
        ],
    }),

    new Experience({
        image: "codesign_icon.png",
        name: "Codesign",
        projectType: "Paid Position",
        start: 2021,
        end: 2023,
        description:
            "An iPad app for architects to streamline the conceptual design process by bridging traditional sketching and advanced BIM workflows. Includes 2D sketching, 2D vector editing, 3D modelling and visualisation, building design, space planning, site planning, sun studies, compliance checks, exporting to other platforms, and more.",
        inlineLinks: [
            new InlineLink({
                text: "Codesign unfortunately closed down in 2024.",
                url: "https://www.linkedin.com/posts/codesign-3d_following-an-extensive-internal-review-including-activity-7213547981864632320-On6R/",
            }),
        ],
        links: [
            new Link({
                label: "LinkedIn",
                shownURL: "LinkedIn.com/company/codesign-3d/posts/",
                url: "https://www.linkedin.com/company/codesign-3d/posts/",
            }),
            new Link({
                label: "App Demo",
                shownURL: "Vimeo.com/743385799",
                url: "https://vimeo.com/743385799",
            }),
        ],
        files: [],
        tags: ["Swift", "SwiftUI", "UIKit", "Core Graphics", "SceneKit", "StoreKit", "AWS Amplify", "Realm", "XCTest"],
    }),

    new Experience({
        image: "yonder_icon.png",
        name: "Everbound",
        projectType: "Personal Project",
        start: 2021,
        end: 2024,
        description:
            "An iOS rougelike RPG. Includes enemies and bosses to fight, NPCs to meet, and loot such as armour, accessories, weapons, items, and potions to collect.\nEverbound has received over 20,000 downloads and a global rating of 4.5/5 on the App Store.",
        links: [
            new Link({ label: "Website", shownURL: "Everbound.net", url: "https://www.everbound.net/" }),
            new Link({
                label: "App Store",
                shownURL: "Apps.Apple.com/app/id6499560058",
                url: "https://apps.apple.com/app/id6499560058",
            }),
            new Link({
                label: "Trailer",
                shownURL: "YouTube.com/watch?v=Zl3jHVbDxws",
                url: "https://www.youtube.com/watch?v=Zl3jHVbDxws",
            }),
        ],
        files: [],
        tags: ["Swift", "SwiftUI", "MVVM", "Combine", "SwiftSerialisation", "StoreKit", "XCTest"],
    }),

    new Experience({
        image: "everbound_website_icon.png",
        name: "Everbound.net",
        projectType: "Personal Project",
        start: 2024,
        end: 2024,
        description:
            "The official website for my game, Everbound. Uses responsive web design and a completely custom UI built with my own components.",
        links: [
            new Link({ label: "Website", shownURL: "Everbound.net", url: "https://www.everbound.net/" }),
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Everbound",
                url: "https://github.com/Andre-Pham/Everbound",
            }),
        ],
        files: [],
        tags: ["React", "TypeScript", "Vite", "Redux"],
    }),

    new Experience({
        image: "auslanspell_icon.png",
        name: "AuslanSpell",
        projectType: "Paid Position",
        start: 2023,
        end: null,
        description:
            "An iOS app that converts any text prompt into an animated, interactive 3D model performing the prompt in Auslan fingerspelling. Also includes an experimental recognition feature to recognise when a letter is performed by the user using the device's camera.",
        links: [
            new Link({
                label: "Legacy GitHub",
                shownURL: "GitHub.com/Andre-Pham/LimeApp",
                url: "https://github.com/Andre-Pham/LimeApp",
            }),
        ],
        files: [],
        tags: ["Swift", "UIKit", "MVC", "SceneKit", "Vision", "AVFoundation", "Core Graphics"],
    }),

    new Experience({
        image: null,
        name: "Family Tree",
        projectType: "Personal Project",
        start: 2024,
        end: null,
        description: "TODO",
        links: [],
        files: [],
        tags: ["TODO"],
    }),

    new Experience({
        image: null,
        name: "SwiftMath",
        projectType: "Personal Project",
        start: 2023,
        end: null,
        description: "TODO",
        links: [],
        files: [],
        tags: ["TODO"],
    }),

    new Experience({
        image: null,
        name: "SwiftSerialization",
        projectType: "Personal Project",
        start: 2023,
        end: 2023,
        description:
            "A Swift package used for serialising and restoring Swift objects. Allows for serialising, persisting, reading, and restoring Swift objects. Provides legacy support. Supports transactions (including rollbacks) and actions from multiple concurrent threads. Powers many of my apps, including my game Everbound (see above).",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/SwiftSerialization",
                url: "https://github.com/Andre-Pham/SwiftSerialization",
            }),
        ],
        files: [],
        tags: ["Swift", "SQLite3", "XCTest"],
    }),

    new Experience({
        image: "beesly_icon.png",
        name: "Beesly",
        projectType: "Paid Position",
        start: 2023,
        end: 2023,
        description:
            'An iOS application for audibly recognising commands and providing text-to-speech feedback based on object recognition and hand detection using the device\'s camera. Interacts with a 3D printed modular insect model, "Beesly".',
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/LemonApp",
                url: "https://github.com/Andre-Pham/LemonApp",
            }),
        ],
        files: [],
        tags: ["Swift", "UIKit", "MVC", "Create ML", "Vision", "AVFoundation", "Speech"],
    }),

    new Experience({
        image: null,
        name: "Teach Me Talkback",
        projectType: "Uni Team Project",
        start: 2022,
        end: 2022,
        description:
            "An Android app with the purpose of teaching visually impaired users how to use the Google screen reader Talkback. It uses lessons to teach the user gestures and navigation, and incorporates a 'sandbox mode' and 'game mode'.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/TalkbackTutorial/Application",
                url: "https://github.com/TalkbackTutorial/Application",
            }),
        ],
        files: [DownloadService.inst.teachMeTalkbackUserGuide],
        tags: ["Kotlin", "XML Layouts", "Room", "Shared Preferences", "TextToSpeech"],
    }),

    new Experience({
        image: "portfolio_icon.png",
        name: "Portfolio",
        projectType: "Uni Individual Project",
        start: 2021,
        end: 2021,
        description:
            "An iOS app that tracks an investment portfolio, such as stocks, cryptocurrencies, ETFs, etc. Allows you to see the performance of financial assets, create watchlists, and create a portfolio with insights on performance and return.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Portfolio",
                url: "https://github.com/Andre-Pham/Portfolio",
            }),
        ],
        files: [],
        tags: ["Swift", "UIKit", "MVC", "Core Data", "UNUserNotificationCenter"],
    }),

    new Experience({
        image: null,
        name: "Information Visualiser",
        projectType: "Personal Project",
        start: 2020,
        end: 2021,
        description:
            "A self-made QR code program that can turn text into a visual pattern, and back again. Allows the creation and saving of a 'VISREP', as well as the recognition of them via image file or live video stream.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Information-Visualiser",
                url: "https://github.com/Andre-Pham/Information-Visualiser",
            }),
        ],
        files: [],
        tags: ["Python", "Tkinter", "cv2", "NumPy", "PIL"],
    }),

    new Experience({
        image: null,
        name: "Dynamic Tic-Tac-Toe",
        projectType: "Personal Project",
        start: 2021,
        end: 2021,
        description:
            "A Tic-tac-toe game in which the computer plays the user and either draws or wins. The user decides how many columns, rows, and how many in a row to win, though processing is limited to a board with 20 spaces. Implements lexicographic permutation for computer decisions.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Dynamic-Tic-Tac-Toe",
                url: "https://github.com/Andre-Pham/Dynamic-Tic-Tac-Toe",
            }),
        ],
        files: [],
        tags: ["Python", "Tkinter"],
    }),

    new Experience({
        image: null,
        name: "Resume",
        projectType: "Personal Project",
        start: 2023,
        end: 2023,
        description:
            "You're looking at it 😉. Uses responsive web design and a completely custom UI built with my own components - designed by me to provide information, links, and downloads.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Resume",
                url: "https://github.com/Andre-Pham/Resume",
            }),
        ],
        files: [],
        tags: ["React", "TypeScript", "Vite", "Redux"],
    }),

    new Experience({
        image: null,
        name: "Intake",
        projectType: "Uni Team Project",
        start: 2023,
        end: 2023,
        description:
            "A multi-platform mental health triage app. Allows for nurses to triage and manage patients, create and track patient events, and view other triage cases. Allows admins to manage accounts and export patient data, and allows nurse leaders to manage shift turnover and manage patient allocation.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/FIT4002-TEAM9/Leaf",
                url: "https://github.com/FIT4002-TEAM9/Leaf",
            }),
        ],
        files: [],
        tags: ["React Native Expo", "TypeScript", "Redux", "Firestore"],
    }),
];
