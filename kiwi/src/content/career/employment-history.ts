import type { Employment } from "./employment"

export const EmploymentHistory: Employment[] = [
  {
    title: "Fullstack Developer",
    company: "Contour",
    duration: "Aug 2025 – Present",
    description: "",
    projects: [],
  },
  {
    title: "iOS Developer",
    company: "Monash University",
    department: "Department of Human Centred Computing",
    duration: "Jan 2024 – June 2026",
    description:
      "I am the developer for AuslanSpell, having lead and developed all aspects of the app, including the design, features, UI/UX, 3D scene, animation rendering and blending, and data persistence.",
    projects: [
      {
        image: "auslanspell-icon.png",
        title: "AuslanSpell",
        description:
          "An iOS app that converts any text prompt into an animated, interactive 3D model performing the prompt in Auslan fingerspelling. Includes playback and camera controls, and various quiz modes.",
        links: [
          {
            label: "GitHub",
            shownUrl: "github.com/monash-assistive-tech/auslan-spell-ios",
            url: "https://github.com/monash-assistive-tech/auslan-spell-ios",
          },
        ],
        tags: ["Swift", "UIKit", "SceneKit", "SwiftLocal", "Zilliax", "XCTest"],
        awsServicesCategories: [],
      },
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Optizmo Technologies",
    duration: "Jun 2024 – Aug 2025",
    description:
      "As a fullstack developer at Optizmo, I’ve practiced and contributed to all aspects of the DEPLOYER, ACCESS, and ZeroDual platforms, including frontend, backend, security, overall system architecture, database design, AWS infrastructure, CI/CD, and more.\nFollowing agile methodologies and best development practices, I’ve owned and delivered user stories, performed code reviews, and taken on rotating scrum master and review boss roles.",
    projects: [
      {
        image: "zerodual-icon.png",
        title: "ZeroDual",
        description:
          "A platform that enables law firms to identify and resolve dual representation issues in mass tort and multidistrict litigation (MDL) cases.",
        links: [
          {
            label: "Website",
            shownUrl: "zerodual.com",
            url: "https://www.zerodual.com/",
          },
        ],
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
      },
      {
        image: "access-icon.png",
        title: "Access",
        description:
          "A platform used by affiliates to manage and process advertiser-provided suppression lists, comply with opt-out requirements, and access analytics for their email campaigns.",
        links: [
          {
            label: "Website",
            shownUrl: "app.optizmo.com",
            url: "https://app.optizmo.com/",
          },
        ],
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
      },
    ],
  },
  {
    title: "iOS Developer",
    company: "Cerulean Labs",
    duration: "Jun 2021 – Nov 2023",
    description:
      "As an iOS developer at Cerulean Labs, I worked on all areas of the iPad Codesign app including the UI, rendering, core application logic, application architecture, data serialisation, and more. Using a diverse range of disciplines - such as UI/UX, 2D rendering, 3D rendering, thread management, applied mathematics, and more - I developed features including many of the 3D editing tools, 2D vector editing tools, the 2D vector rendering engine, and more.",
    projects: [
      {
        image: "codesign-icon.png",
        title: "Codesign",
        description:
          "An iPad app for architects that bridges traditional sketching and advanced BIM workflows (i.e. you design buildings in 2D and 3D). Includes 2D sketching, 2D vector editing, 3D modelling and visualisation, building design, space planning, site planning, sun studies, compliance checks, exporting to other platforms, and more.",
        links: [
          {
            label: undefined,
            shownUrl: "Codesign unfortunately closed down in 2024.",
            url: "https://www.linkedin.com/posts/codesign-3d_following-an-extensive-internal-review-including-activity-7213547981864632320-On6R/",
          },
          {
            label: "LinkedIn",
            shownUrl: "linkedin.com/company/codesign-3d/posts/",
            url: "https://www.linkedin.com/company/codesign-3d/posts/",
          },
          {
            label: "App Demo",
            shownUrl: "vimeo.com/743385799",
            url: "https://vimeo.com/743385799",
          },
        ],
        tags: [
          "Swift",
          "SwiftUI",
          "UIKit",
          "Core Graphics",
          "SceneKit",
          "StoreKit",
          "AWS Amplify",
          "Realm",
          "XCTest",
        ],
        awsServicesCategories: [],
      },
    ],
  },
  {
    title: "iOS Developer",
    company: "Monash University",
    department: "Department of Human Centred Computing",
    duration: "Jun 2023 – Nov 2023",
    description:
      "I was the developer for the “Beesly” iOS app, built for a paper investigating education for the visually impaired. Working with the academic team, I lead and was responsible for the development of the entire app and its feature set, including its real-time object detection, hand detection, speech recognition, speech synthesis, audio on-device recording and playback, data persistence, and the data collection and training of the custom machine learning model created for it.",
    projects: [
      {
        image: "beesly-icon.png",
        title: "Beesly",
        description:
          "An iOS application for audibly recognising commands and providing text-to-speech feedback based on object recognition and hand detection using the device’s camera. Interacts with a 3D printed modular insect model, “Beesly”.",
        links: [
          {
            label: "GitHub",
            shownUrl: "github.com/andre-pham/lemonapp",
            url: "https://github.com/andre-pham/lemonapp",
          },
        ],
        tags: [
          "Swift",
          "UIKit",
          "MVC",
          "Create ML",
          "Vision",
          "AVFoundation",
          "Speech",
        ],
        awsServicesCategories: [],
      },
    ],
  },
]
