import Download from "../Download";
import Link from "../Link";
import Experience from "./Experience";

export const Experiences: Experience[] = [
    new Experience(
        "Yonder",
        "Active",
        "Personal Project",
        "2021 - Present",
        "An iOS rouge-like rpg. Includes enemies and bosses to fight, npcs to meet, and loot such as armour, accessories, weapons, and potions to collect.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Yonder", "https://github.com/Andre-Pham/yonder")
        ],
        [],
        [
            "Swift", "SwiftUI", "MVVM", "Combine", "Serialisation", "Localisation", "Unit Tests"
        ]
    ),

    new Experience(
        "Cerulean Labs",
        "Active",
        "Part-Time Employment",
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
    )
];