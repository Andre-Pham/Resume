import React, { useState } from "react";
import { VStack } from "../containers/stacks/VStack";
import { HStack } from "../containers/stacks/HStack";
import { SplashIntro } from "./SplashIntro";
import { SplashButtonMobile } from "./SplashButtonMobile";
import { SplashButton } from "./SplashButton";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { Environment } from "../../state/environment/Environment";

export const Splash: React.FC = () => {
    const [shouldRenderPortrait, setShouldRenderPortrait] = useState(Environment.shouldRenderPortrait);

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        setShouldRenderPortrait(shouldRenderPortrait);
    });

    if (shouldRenderPortrait) {
        return (
            <VStack spacing={94}>
                <SplashIntro style={{ flex: 1 }} />

                <VStack spacing={12}>
                    <SplashButtonMobile label="experience" section={ActiveSection.experience} />

                    <SplashButtonMobile label="career" section={ActiveSection.career} />

                    <SplashButtonMobile label="education" section={ActiveSection.education} />
                </VStack>
            </VStack>
        );
    } else {
        const buttonRadius = 58;
        const verticalButtonSpacing = 32;
        const horizontalButtonSpacing =
            Math.cos(Math.PI / 3 / 2) * (buttonRadius * 2 + verticalButtonSpacing) - buttonRadius * 2;
        return (
            <HStack spacing={80} style={{ alignItems: "flex-start" }}>
                <SplashIntro />

                <HStack spacing={horizontalButtonSpacing} style={{ alignItems: "center" }}>
                    <VStack spacing={verticalButtonSpacing}>
                        <SplashButton label="experience" section={ActiveSection.experience} radius={buttonRadius} />

                        <SplashButton label="career" section={ActiveSection.career} radius={buttonRadius} />
                    </VStack>

                    <SplashButton label="education" section={ActiveSection.education} radius={buttonRadius} />
                </HStack>
            </HStack>
        );
    }
};
