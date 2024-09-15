import { DownloadManager } from "../../services/DownloadManager";
import { Link } from "../../services/Link";
import { Experience } from "../experience/Experience";

export const Experiences: Experience[] = [
    new Experience(
        "codesign_icon.png",
        "Codesign",
        2023,
        "Paid Position",
        "2021 - 2023",
        "As an iOS developer at Cerulean Labs, I worked on all areas of the iPad Codesign (formerly Spaces) app including the UI, rendering, feature development, and more. Notable contributions include the cladding tool, multi-face editing, continuous face editing, footprint edge editing, colonnade vector editing, the site boundary editor, dimension editing, bounding box dimension editing, and the 2D vector rendering engine.",
        [
            new Link("Website", "GetCodesign.co", "https://www.getcodesign.co/"),
            new Link("App Store", "Apps.Apple.com/app/id1530458770", "https://apps.apple.com/app/id1530458770"),
        ],
        [],
        ["Swift", "SwiftUI", "UIKit", "Core Graphics", "SceneKit", "Realm", "Unit Tests", "Localisation"],
    ),

    new Experience(
        "yonder_icon.png",
        "Everbound",
        "Active",
        "Personal Project",
        "2021 - Present",
        "An iOS rougelike RPG. Includes enemies and bosses to fight, NPCs to meet, and loot such as armour, accessories, weapons, items, and potions to collect.",
        [
            new Link("Website", "Everbound.net", "https://www.everbound.net/"),
            new Link("App Store", "Apps.Apple.com/app/id6499560058", "https://apps.apple.com/app/id6499560058"),
            new Link("Trailer", "YouTube.com/watch?v=Zl3jHVbDxws", "https://www.youtube.com/watch?v=Zl3jHVbDxws"),
        ],
        [],
        ["Swift", "SwiftUI", "MVVM", "Combine", "Serialisation", "Localisation", "Unit Tests"],
    ),

    new Experience(
        "everbound_website_icon.png",
        "Everbound.net",
        2024,
        "Personal Project",
        "2024",
        "The official website for my game, Everbound (see above). Uses responsive web design and a completely custom UI built with my own components.",
        [
            new Link("Website", "Everbound.net", "https://www.everbound.net/"),
            new Link("GitHub", "GitHub.com/Andre-Pham/Everbound", "https://github.com/Andre-Pham/Everbound"),
        ],
        [],
        ["React", "TypeScript", "HTML", "CSS", "Vite", "Redux", "Styled Components"],
    ),

    new Experience(
        "auslanspell_icon.png",
        "AuslanSpell",
        "Active",
        "Uni Individual Project, Paid Position",
        "2023 - Present",
        "An iOS app that converts any text prompt into an animated, interactive 3D model performing the prompt in Auslan fingerspelling. Also includes an experimental recognition feature to recognise when a letter is performed by the user using the device's camera.",
        [new Link("GitHub", "GitHub.com/Andre-Pham/LimeApp", "https://github.com/Andre-Pham/LimeApp")],
        [],
        ["Swift", "UIKit", "MVC", "SceneKit", "Vision", "AVFoundation", "Core Graphics"],
    ),

    new Experience(
        "beesly_icon.png",
        "Beesly",
        2023,
        "Paid Position",
        "2023",
        'An iOS application for audibly recognising commands and providing text-to-speech feedback based on object recognition and hand detection using the device\'s camera. Interacts with a 3D printed modular insect model, "Beesly".',
        [new Link("GitHub", "GitHub.com/Andre-Pham/LemonApp", "https://github.com/Andre-Pham/LemonApp")],
        [],
        ["Swift", "UIKit", "MVC", "Create ML", "Vision", "AVFoundation", "Speech"],
    ),

    new Experience(
        null,
        "SwiftSerialization",
        2023,
        "Personal Project",
        "2023",
        "A Swift package used for serialising and restoring Swift objects. Allows for serialising, persisting, reading, and restoring Swift objects. Provides legacy support. Supports transactions (including rollbacks) and actions from multiple concurrent threads. Powers many of my apps, including my game Everbound (see above).",
        [
            new Link(
                "GitHub",
                "GitHub.com/Andre-Pham/SwiftSerialization",
                "https://github.com/Andre-Pham/SwiftSerialization",
            ),
        ],
        [],
        ["Swift", "SQLite3", "Unit Tests"],
    ),

    new Experience(
        null,
        "Teach Me Talkback",
        2022,
        "Uni Team Project",
        "2022",
        "An Android app with the purpose of teaching visually impaired users how to use the Google screen reader Talkback. It uses lessons to teach the user gestures and navigation, and incorporates a 'sandbox mode' and 'game mode'.",
        [
            new Link(
                "GitHub",
                "GitHub.com/TalkbackTutorial/Application",
                "https://github.com/TalkbackTutorial/Application",
            ),
        ],
        [DownloadManager.inst.teachMeTalkbackUserGuide],
        ["Kotlin", "XML Layouts", "Room", "Shared Preferences", "TextToSpeech"],
    ),

    new Experience(
        "portfolio_icon.png",
        "Portfolio",
        2021,
        "Uni Individual Project",
        "2021",
        "An iOS app that tracks an investment portfolio, such as stocks, cryptocurrencies, ETFs, etc. Allows you to see the performance of financial assets, create watchlists, and create a portfolio with insights on performance and return.",
        [new Link("GitHub", "GitHub.com/Andre-Pham/Portfolio", "https://github.com/Andre-Pham/Portfolio")],
        [],
        ["Swift", "UIKit", "MVC", "Core Data", "UNUserNotificationCenter"],
    ),

    new Experience(
        null,
        "Intake",
        2023,
        "Uni Team Project",
        "2023",
        "A multi-platform mental health triage app. Allows for nurses to triage and manage patients, create and track patient events, and view other triage cases. Allows admins to manage accounts and export patient data, and allows nurse leaders to manage shift turnover and manage patient allocation. Has account login, live data, and supports mobile, tablet, and web.",
        [new Link("GitHub", "GitHub.com/FIT4002-TEAM9/Leaf", "https://github.com/FIT4002-TEAM9/Leaf")],
        [],
        ["React Native Expo", "TypeScript", "Redux", "Firestore"],
    ),

    new Experience(
        null,
        "Information Visualiser",
        2021,
        "Personal Project",
        "2020 - 2021",
        "A self-made QR code program that can turn text into a visual pattern, and back again. Allows the creation and saving of a 'VISREP', as well as the recognition of them via image file or live video stream.",
        [
            new Link(
                "GitHub",
                "GitHub.com/Andre-Pham/Information-Visualiser",
                "https://github.com/Andre-Pham/Information-Visualiser",
            ),
        ],
        [],
        ["Python", "Tkinter", "cv2", "NumPy", "PIL"],
    ),

    new Experience(
        null,
        "Dynamic Tic-Tac-Toe",
        2021,
        "Personal Project",
        "2021",
        "A Tic-tac-toe game in which the computer plays the user and either draws or wins. The user decides how many columns, rows, and how many in a row to win, though processing is limited to a board with 20 spaces. Implements lexicographic permutation for computer decisions.",
        [
            new Link(
                "GitHub",
                "GitHub.com/Andre-Pham/Dynamic-Tic-Tac-Toe",
                "https://github.com/Andre-Pham/Dynamic-Tic-Tac-Toe",
            ),
        ],
        [],
        ["Python", "Tkinter"],
    ),

    new Experience(
        null,
        "Resume",
        2023,
        "Personal Project",
        "2023",
        "You're looking at it 😉. Uses responsive web design and a completely custom UI built with my own components - designed by me to provide information, links, and downloads.",
        [new Link("GitHub", "GitHub.com/Andre-Pham/Resume", "https://github.com/Andre-Pham/Resume")],
        [],
        ["React", "TypeScript", "HTML", "CSS", "Vite", "Redux", "Styled Components"],
    ),
];
