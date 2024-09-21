import React, { useEffect, useState } from "react";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { StateManager } from "../../state/publishers/StateManager";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResButton } from "../components/ResButton";
import { ResStylePresets } from "../styling/ResStylePresets";
import { mdiChevronRight } from "@mdi/js";

interface Props {
    label: string;
    section: ActiveSection;
    style?: React.CSSProperties;
}

export const SplashButtonMobile: React.FC<Props> = ({ label, section, style }) => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    useEffect(() => {
        const unsubscribe = StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const buttonSize = 300;
    const selectedTypography = ResTypographyPresets.button.withColor(ResColorPresets.textLight);
    const unselectedTypography = ResTypographyPresets.button.withColor(ResColorPresets.textDark);

    return (
        <ResButton
            label={label}
            iconPath={mdiChevronRight}
            typography={activeSection === section ? selectedTypography : unselectedTypography}
            color={activeSection === section ? ResColorPresets.accent : ResColorPresets.fillBackgroundLight}
            onPress={() => {
                const toPublish = activeSection === section ? ActiveSection.none : section;
                StateManager.activeSection.publish(toPublish);
            }}
            wide={true}
            style={{
                maxWidth: buttonSize,
                justifyContent: "flex-start",
                paddingLeft: 34,
                alignSelf: "center",
                ...(activeSection === section ? ResStylePresets.shadow : undefined),
                ...style,
            }}
        />
    );
};
