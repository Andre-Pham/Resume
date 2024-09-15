import { VStack } from "../containers/Stacks/VStack";
import { EducationContent } from "../custom/EducationContent";
import { ResDimensions } from "../styling/ResDimensions";
import { Header } from "../custom/Header";
import { Splash } from "../custom/Splash";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";
import { useEffect, useRef, useState } from "react";
import { StateManager } from "../../state/publishers/StateManager";
import { SkillsContent } from "../custom/SkillsContent";
import { ExperienceContent } from "../custom/ExperienceContent";
import { useResizeObserver } from "../hooks/useResizeObserver";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { useResetScroll } from "../hooks/useResetScroll";
import { Environment } from "../../state/environment/Environment";
import { RouterNavigator } from "../../services/RouterNavigator";

export function MainScreen() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());
    const [resizeRef, contentSize] = useResizeObserver();
    const scrollRef = useRef<HTMLDivElement>(null);
    const firstScrollRender = useRef(true);

    const [refresh, setRefresh] = useState(false);
    StateManager.colorScheme.subscribe(() => {
        setRefresh(!refresh);
    });

    useResetScroll();

    useEffect(() => {
        // Listen to active section
        const unsubscribe = StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
            navigateIfNecessary();
        });
        return () => unsubscribe();
    }, []);

    usePortraitRendering(() => {
        navigateIfNecessary();
    });

    const navigateIfNecessary = () => {
        if (Environment.shouldRenderPortrait) {
            navigateToSection();
        }
    };

    const navigateToSection = () => {
        let activeSection = StateManager.activeSection.read();
        switch (activeSection) {
            case ActiveSection.none:
                break;
            case ActiveSection.education:
                RouterNavigator.inst.navigateEducation(navigate);
                break;
            case ActiveSection.experience:
                RouterNavigator.inst.navigateExperience(navigate);
                break;
            case ActiveSection.skills:
                RouterNavigator.inst.navigateSkills(navigate);
                break;
            default:
                throw new UnreachableCaseError(activeSection);
        }
    };

    useEffect(() => {
        if (firstScrollRender.current) {
            firstScrollRender.current = false;
            return;
        }
        if (!Environment.shouldRenderPortrait) {
            scrollIntoContent();
        }
    }, [activeSection]);

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

    const scrollIntoContent = () => {
        if (scrollRef.current && activeSection != ActiveSection.none) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div style={{ padding: ResDimensions.screenPadding, minWidth: 300 }}>
            <VStack spacing={ResDimensions.mainScreenSpacing} style={{ alignContent: "center" }}>
                <Header />

                <div ref={resizeRef}>
                    <Splash />
                </div>
            </VStack>

            {/* We don't want to see the edge of the view above, so position this a little lower */}
            <div ref={scrollRef} style={{ marginTop: 24, marginBottom: -24 }} />

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
