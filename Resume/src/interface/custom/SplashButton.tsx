import React, { useEffect, useState } from "react";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { StateManager } from "../../state/publishers/StateManager";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResButton } from "../components/ResButton";
import { ResStylePresets } from "../styling/ResStylePresets";

interface Props {
    label: string;
    section: ActiveSection;
    radius: number;
    style?: React.CSSProperties;
}

export const SplashButton: React.FC<Props> = ({ label, section, radius, style }) => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    useEffect(() => {
        const unsubscribe = StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const selectedTypography = ResTypographyPresets.button.withColor(ResColorPresets.textLightPersistent);
    const unselectedTypography = ResTypographyPresets.button.withColor(ResColorPresets.textDark);

    return (
        <ResButton
            label={label}
            typography={activeSection === section ? selectedTypography : unselectedTypography}
            color={activeSection === section ? ResColorPresets.accent : ResColorPresets.fillBackgroundLight}
            onPress={() => {
                const toPublish = activeSection === section ? ActiveSection.none : section;
                StateManager.activeSection.publish(toPublish);
            }}
            wide={false}
            style={{
                width: radius * 2,
                height: radius * 2,
                borderRadius: 100,
                ...(activeSection === section ? ResStylePresets.shadow : undefined),
                ...style,
            }}
        />
    );
};
