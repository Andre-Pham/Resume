import { DownloadService } from "../../services/DownloadService";
import { Link } from "../../services/types/Link";
import { Experience } from "../types/Experience";

export const Experiences: Experience[] = [
    new Experience({
        image: "codesign_icon.png",
        name: "Codesign",
        section: 2023,
        projectType: "Paid Position",
        duration: "2021 - 2023",
        description:
            "As an iOS developer at Cerulean Labs, I worked on all areas of the iPad Codesign (formerly Spaces) app including the UI, rendering, feature development, and more. Notable contributions include the cladding tool, multi-face editing, continuous face editing, footprint edge editing, colonnade vector editing, the site boundary editor, dimension editing, bounding box dimension editing, and the 2D vector rendering engine.",
        links: [
            new Link({ label: "Website", shownURL: "GetCodesign.co", url: "https://www.getcodesign.co/" }),
            new Link({
                label: "App Store",
                shownURL: "Apps.Apple.com/app/id1530458770",
                url: "https://apps.apple.com/app/id1530458770",
            }),
        ],
        files: [],
        tags: ["Swift", "SwiftUI", "UIKit", "Core Graphics", "SceneKit", "Realm", "Unit Tests", "Localisation"],
    }),

    new Experience({
        image: "yonder_icon.png",
        name: "Everbound",
        section: "Active",
        projectType: "Personal Project",
        duration: "2021 - Present",
        description:
            "An iOS rougelike RPG. Includes enemies and bosses to fight, NPCs to meet, and loot such as armour, accessories, weapons, items, and potions to collect.",
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
        tags: ["Swift", "SwiftUI", "MVVM", "Combine", "Serialisation", "Localisation", "Unit Tests"],
    }),

    new Experience({
        image: "everbound_website_icon.png",
        name: "Everbound.net",
        section: 2024,
        projectType: "Personal Project",
        duration: "2024",
        description:
            "The official website for my game, Everbound (see above). Uses responsive web design and a completely custom UI built with my own components.",
        links: [
            new Link({ label: "Website", shownURL: "Everbound.net", url: "https://www.everbound.net/" }),
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/Everbound",
                url: "https://github.com/Andre-Pham/Everbound",
            }),
        ],
        files: [],
        tags: ["React", "TypeScript", "HTML", "CSS", "Vite", "Redux", "Styled Components"],
    }),

    new Experience({
        image: "auslanspell_icon.png",
        name: "AuslanSpell",
        section: "Active",
        projectType: "Uni Individual Project, Paid Position",
        duration: "2023 - Present",
        description:
            "An iOS app that converts any text prompt into an animated, interactive 3D model performing the prompt in Auslan fingerspelling. Also includes an experimental recognition feature to recognise when a letter is performed by the user using the device's camera.",
        links: [
            new Link({
                label: "GitHub",
                shownURL: "GitHub.com/Andre-Pham/LimeApp",
                url: "https://github.com/Andre-Pham/LimeApp",
            }),
        ],
        files: [],
        tags: ["Swift", "UIKit", "MVC", "SceneKit", "Vision", "AVFoundation", "Core Graphics"],
    }),

    new Experience({
        image: "beesly_icon.png",
        name: "Beesly",
        section: 2023,
        projectType: "Paid Position",
        duration: "2023",
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
        name: "SwiftSerialization",
        section: 2023,
        projectType: "Personal Project",
        duration: "2023",
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
        tags: ["Swift", "SQLite3", "Unit Tests"],
    }),

    new Experience({
        image: null,
        name: "Teach Me Talkback",
        section: 2022,
        projectType: "Uni Team Project",
        duration: "2022",
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
        section: 2021,
        projectType: "Uni Individual Project",
        duration: "2021",
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
        name: "Intake",
        section: 2023,
        projectType: "Uni Team Project",
        duration: "2023",
        description:
            "A multi-platform mental health triage app. Allows for nurses to triage and manage patients, create and track patient events, and view other triage cases. Allows admins to manage accounts and export patient data, and allows nurse leaders to manage shift turnover and manage patient allocation. Has account login, live data, and supports mobile, tablet, and web.",
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

    new Experience({
        image: null,
        name: "Information Visualiser",
        section: 2021,
        projectType: "Personal Project",
        duration: "2020 - 2021",
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
        section: 2021,
        projectType: "Personal Project",
        duration: "2021",
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
        section: 2023,
        projectType: "Personal Project",
        duration: "2023",
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
        tags: ["React", "TypeScript", "HTML", "CSS", "Vite", "Redux", "Styled Components"],
    }),
];
