import "./fonts.css";
import VStack from "./components/containers/Stacks/VStack";
import EducationContent from "./components/custom/EducationContent";
import ResDimensions from "./components/styling/ResDimensions";
import Header from "./components/custom/Header";
import Splash from "./components/custom/Splash";
import { ActiveSection } from "./state/publishers/types/ActiveSection";
import { UnreachableCaseError } from "./language/errors/UnreachableCaseError";
import { useEffect, useState } from "react";
import StateManager from "./state/publishers/StateManager";
import SkillsContent from "./components/custom/SkillsContent";
import ExperienceContent from "./components/custom/ExperienceContent";
import useResizeObserver from "./components/hooks/useResizeObserver";

function App() {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());
    const [ref, contentSize] = useResizeObserver();

    useEffect(() => {
        const unsubscribe = StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
            navigateToSection();
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const navigateToSection = () => {
        let activeSection = StateManager.activeSection.read();
    };

    const renderPageContent = () => {
        switch (activeSection) {
            case ActiveSection.none:
                return <></>;
            case ActiveSection.experience:
                return <ExperienceContent style={{ maxWidth: contentSize.width, alignSelf: "center" }} />;
            case ActiveSection.skills:
                return <SkillsContent style={{ maxWidth: contentSize.width, alignSelf: "center" }} />;
            case ActiveSection.education:
                return (
                    <EducationContent
                        style={{ maxWidth: contentSize.width, alignSelf: "center", paddingBottom: 450 }}
                    />
                );
            default:
                throw new UnreachableCaseError(activeSection);
        }
    };

    return (
        <div style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={ResDimensions.mainScreenSpacing} style={{ alignContent: "center" }}>
                <Header />

                <div ref={ref}>
                    <Splash />
                </div>
            </VStack>

            <VStack
                spacing={ResDimensions.pageContentSpacing}
                style={{
                    alignContent: "center",
                    paddingTop: activeSection == ActiveSection.none ? 0 : ResDimensions.mainScreenSpacing,
                    paddingBottom: activeSection == ActiveSection.none ? 200 : 0,
                }}
            >
                {renderPageContent()}
            </VStack>
        </div>
    );
}

export default App;
