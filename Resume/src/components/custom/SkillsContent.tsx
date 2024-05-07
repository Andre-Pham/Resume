import React from "react";
import ResDimensions from "../styling/ResDimensions";
import BasicCard from "./BasicCard";
import ResText from "../base/ResText";
import ResTypography from "../styling/ResTypography";
import VStack from "../containers/Stacks/VStack";

interface Props {
    style?: React.CSSProperties;
}

const SkillsContent: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={ResDimensions.cardColumnSpacing} style={style}>
            <BasicCard title="Being a Developer">
                <ResText typography={ResTypography.body}>
                    {
                        "I know all the basic skills you would expect a developer to have such as git and source control, IDE tools, development practices, etc. I'm experienced in many different areas of development including UI, 3D computer graphics, 2D computer graphics, thread management, interacting with web services, applied mathematics, data persistence, databases, package management, localisation, and more."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="Native iOS">
                <ResText typography={ResTypography.body}>
                    {
                        "My primary area of expertise is native iOS development, having worked on an extensive number of both individual and team-based projects. Using Swift, I've built apps and packages using all kinds of frameworks including SwiftUI, UIKit, Core Graphics, SceneKit, Vision, AVFoundation, Speech, Core Video, Core Data, Combine, and more. I'm well versed in package management using Swift Packages and Cocoa Pods, developing unit tests, localisation, and working with the rest of the iOS ecosystem. I have extensive experience in common app architectures such as MVVM and MVC, as well as design patterns such as the delegate pattern, publisher subscriber pattern, dependency injection, and so on."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="React Native">
                <ResText typography={ResTypography.body}>
                    {
                        "I have experience building React Native apps using expo (including this site!), having worked on both individual and team-based projects. Using TypeScript I've become familiar with the React Native ecosystem, having used redux architecture to develop multi-platform apps. Areas of experience include frontend development, interfacing with databases, localisation, and more."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="Native Android">
                <ResText typography={ResTypography.body}>
                    {
                        "I have experience building native Android apps in Kotlin and Java using XML Layouts. I'm formally educated in Android development and have built two apps in team settings. I'm experienced in basic Android architecture, activity and fragment lifecycles, UI development, persisting data using Shared Preferences and Room, interacting with web services, and interfacing with accessibility services."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="Databases">
                <ResText typography={ResTypography.body}>
                    {
                        "I have a range of experience working with various types of databases, including designing, querying, and integrating them into applications. Databases I have experience with include SQL (including SQLite and PostgreSQL), Firebase's Firestore, MongoDB, Realm, and Neo4j."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="Creative Applications">
                <ResText typography={ResTypography.body}>
                    {
                        "I greatly enjoy the practice of art and design and pursue it in my own time. I have experience in applications such as Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Audacity, Procreate (iPadOS graphics software), Figma, and more. Apart from considering design and usability in my applications, I also have a Behance portfolio linked above."
                    }
                </ResText>
            </BasicCard>

            <BasicCard title="Python">
                <ResText typography={ResTypography.body}>
                    {
                        "Sort of an outlier, but oddly enough I have a lot of experience with Python. I've used it in my own personal projects, in university projects, and for building scripts for processing and manipulating data. I have experience with Pandas, NumPy, OpenCV, PIL, and a bunch more."
                    }
                </ResText>
            </BasicCard>
        </VStack>
    );
};

export default SkillsContent;
