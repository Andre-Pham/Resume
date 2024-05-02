import "./fonts.css";
import VStack from "./components/containers/Stacks/VStack";
import Education from "./components/custom/Education";
import ResDimensions from "./components/styling/ResDimensions";
import Header from "./components/custom/Header";
import Splash from "./components/custom/Splash";
import { ActiveSection } from "./state/publishers/types/ActiveSection";
import { UnreachableCaseError } from "./language/errors/UnreachableCaseError";
import { useEffect, useState } from "react";
import StateManager from "./state/publishers/StateManager";
import Skills from "./components/custom/Skills";

function App() {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

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
                return <></>;
            case ActiveSection.skills:
                return <Skills />;
            case ActiveSection.education:
                return <Education style={{ paddingBottom: 450 }} />;
            default:
                throw new UnreachableCaseError(activeSection);
        }
    };

    return (
        <div style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={ResDimensions.mainScreenSpacing} style={{ alignContent: "center" }}>
                <Header />

                <Splash />
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
