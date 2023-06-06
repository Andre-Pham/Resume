import Link from "../Link";
import Experience from "./Experience";

export const Experiences: Experience[] = [
    new Experience(
        "Yonder",
        "Personal Project",
        "2021 - Present",
        "An iOS rouge-like rpg. Includes enemies and bosses to fight, npcs to meet, and loot such as armour, accessories, weapons, and potions to collect.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/Yonder", "https://github.com/Andre-Pham/yonder")
        ],
        [
            "Swift", "SwiftUI", "MVVM", "Combine", "Serialisation", "Localisation", "Unit Tests"
        ]
    ),

    new Experience(
        "SwiftSerialization",
        "Personal Project",
        "2023",
        "A Swift package used for serialising and restoring Swift objects. Supports serialising, persisting, reading and restoring Swift objects. Provides legacy support.",
        [
            new Link("GitHub", "GitHub.com/Andre-Pham/SwiftSerialization", "https://github.com/Andre-Pham/SwiftSerialization")
        ],
        [
            "Swift", "SQLite3", "Unit Tests"
        ]
    )
];