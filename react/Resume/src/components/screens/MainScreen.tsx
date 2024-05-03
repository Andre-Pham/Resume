import VStack from "../containers/Stacks/VStack";
import EducationContent from "../custom/EducationContent";
import ResDimensions from "../styling/ResDimensions";
import Header from "../custom/Header";
import Splash from "../custom/Splash";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";
import { useEffect, useState } from "react";
import StateManager from "../../state/publishers/StateManager";
import SkillsContent from "../custom/SkillsContent";
import ExperienceContent from "../custom/ExperienceContent";
import useResizeObserver from "../hooks/useResizeObserver";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";

function MainScreen() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());
    const [ref, contentSize] = useResizeObserver();

    useEffect(() => {
        // Listen to active section
        const unsubscribe = StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
            navigateIfNecessary(window.innerWidth <= ResDimensions.screenWidthToRenderPortrait);
        });
        return () => unsubscribe();
    }, []);

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        navigateIfNecessary(shouldRenderPortrait);
    });

    const navigateIfNecessary = (shouldRenderPortrait: boolean) => {
        if (shouldRenderPortrait) {
            navigateToSection();
        }
    };

    const navigateToSection = () => {
        let activeSection = StateManager.activeSection.read();
        switch (activeSection) {
            case ActiveSection.none:
                break;
            case ActiveSection.education:
                navigate("/education", { replace: true });
                break;
            case ActiveSection.experience:
                navigate("/experience", { replace: true });
                break;
            case ActiveSection.skills:
                navigate("/skills", { replace: true });
                break;
            default:
                throw new UnreachableCaseError(activeSection);
        }
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

export default MainScreen;
