import Download from "../Download";
import Link from "../Link";
import Experience from "./Experience";

export const Experiences: Experience[] = [
    new Experience(
        "Cerulean Labs",
        "Active",
        "Paid Positon",
        "2021 - Present",
        "As an iOS developer at Cerulean Labs, I've worked on all areas of the iPad Spaces app including the UI, rendering, feature development, and more. My CPD supporting document (linked below) provides are more thorough look at my contributions.",
        [
            new Link("Spaces", "SpacesApp.io", "https://www.spacesapp.io/"),
            new Link("What is CPD?", "(Monash.edu Link)", "https://www.monash.edu/engineering/current-students/professional-development/continuous-professional-development"),
        ],
        [
            new Download("CPD Supporting Document", "cpd_supporting_document_cerulean_labs.pdf"),
        ],
        [
            "Swift", "SwiftUI", "UIKit", "Core Graphics", "SceneKit", "Realm", "Unit Tests", "Localisation"
        ]
    ),

    new Experience(
        "Yonder",
        "Active",
        "Personal Project",
        "2021 - Present",
        "An iOS rouge-like RPG. Includes enemies and bosses to fight, NPCs to meet, and loot such as armour, accessories, weapons, and potions to collect.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Yonder", "https://github.com/Andre-Pham/yonder")
        ],
        [],
        [
            "Swift", "SwiftUI", "MVVM", "Combine", "Serialisation", "Localisation", "Unit Tests"
        ]
    ),

    new Experience(
        "SwiftSerialization",
        2023,
        "Personal Project",
        "2023",
        "A Swift package used for serialising and restoring Swift objects. Supports serialising, persisting, reading and restoring Swift objects. Provides legacy support.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/SwiftSerialization", "https://github.com/Andre-Pham/SwiftSerialization")
        ],
        [],
        [
            "Swift", "SQLite3", "Unit Tests"
        ]
    ),

    new Experience(
        "Fingerspell Auslan",
        "Active",
        "Uni Individual Project",
        "2023 - Present",
        "An iOS app that can convert a text prompt into an animated, interactive 3D model performing the prompt in Auslan fingerspelling, as well as the recognition and translation of fingerspelling performed by the user through their camera back into text.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/SpellApp", "https://github.com/Andre-Pham/SpellApp")
        ],
        [],
        [
            "Swift", "SwiftUI", "UIKit", "MVC", "SceneKit", "Create ML", "Vision", "AVFoundation"
        ]
    ),

    new Experience(
        "Teach Me Talkback",
        2022,
        "Uni Team Project",
        "2022",
        "An Android app with the purpose of teaching visually impaired uses how to use the Google screen reader Talkback. It uses lessons to teach the user gestures and navigation, and incorporates a 'sandbox mode' and 'game mode'.",
        [
            new Link("GitHub", "GitHub.com/TalkbackTutorial/Application", "https://github.com/TalkbackTutorial/Application")
        ],
        [
            new Download("Teach Me Talkback User Guide", "user_guide_teach_me_talkback.pdf")
        ],
        [
            "Kotlin", "XML Layouts", "Room", "Shared Preferences", "TextToSpeech"
        ]
    ),

    new Experience(
        "Portfolio",
        2021,
        "Uni Inidividual Project",
        "2021",
        "An iOS app that tracks an investment portfolio, such as stocks, cryptocurrencies, ETFs, etc. Allows you to see the performance of financial assets, create watchlists, and create a portfolio with insights on performance and return.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Portfolio", "https://github.com/Andre-Pham/Portfolio")
        ],
        [],
        [
            "Swift", "UIKit", "MVC", "Core Data", "UNUserNotificationCenter"
        ]
    ),

    new Experience(
        "Intake",
        "Active",
        "Uni Team Project",
        "2023 - Present",
        "A multi-platform mental heatth triage app. Allows for nurses to triage patients, view and append to patient history, and view other triage cases. Allows admins to manage accounts and export patient data, and allows nurse leaders to manage shift turnover and manage patient allocation. Has account login, live data, and supports mobile, tablet, and web.",
        [
            new Link("GitHub", "[Unavailable until publication made]", "https://github.com/FIT4002-TEAM9/Leaf")
        ],
        [],
        [
            "React Native Expo", "Typescript", "Redux", "MongoDB"
        ]
    ),

    new Experience(
        "Information Visualiser",
        2021,
        "Personal Project",
        "2020 - 2021",
        "A self-made QR code program that can turn text into visual pattern, and back again. Allows the creation and saving of a 'VISREP', as well as the recognition of them via image file or live video steam.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Information-Visualiser", "https://github.com/Andre-Pham/Information-Visualiser")
        ],
        [],
        [
            "Python", "Tkinter", "cv2", "NumPy", "PIL"
        ]
    ),

    new Experience(
        "Dynamic Tic-Tac-Toe",
        2021,
        "Personal Project",
        "2021",
        "A Tic-tac-toe game in which the computer plays the user and either draws or wins. The user decides how many columns, rows, and how many in a row to win, though processing is limited to a board with 20 spaces. Implements lexicographic permutation for computer decisions.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Dynamic-Tic-Tac-Toe", "https://github.com/Andre-Pham/Dynamic-Tic-Tac-Toe")
        ],
        [],
        [
            "Python", "Tkinter"
        ]
    ),

    new Experience(
        "Vision",
        "Active",
        "Paid Positon",
        "2023 - Present",
        "In progress. More to come...",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/LemonApp", "https://github.com/Andre-Pham/LemonApp")
        ],
        [],
        [
            "Swift", "UIKit", "MVC", "Create ML", "Vision", "AVFoundation", "Speech"
        ]
    ),

    new Experience(
        "Resume",
        2023,
        "Personal Project",
        "2023",
        "You're looking at it 😉. I wouldn't typically use (nor recommend) React Native for a website, but I wanted to get more practice using it.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Resume", "https://github.com/Andre-Pham/Resume")
        ],
        [],
        [
            "React Native Expo", "Typescript", "Redux"
        ]
    ),
];