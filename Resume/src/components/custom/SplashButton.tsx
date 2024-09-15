import React, { useEffect, useState } from "react";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { StateManager } from "../../state/publishers/StateManager";
import { ResTypography } from "../styling/ResTypography";
import { ResColors } from "../styling/ResColors";
import { ResButton } from "../base/ResButton";
import { ResCSS } from "../styling/ResCSS";

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

    const selectedTypography = ResTypography.button.withColor(ResColors.textLightPersistent);
    const unselectedTypography = ResTypography.button.withColor(ResColors.textDark);

    return (
        <ResButton
            label={label}
            typography={activeSection === section ? selectedTypography : unselectedTypography}
            color={activeSection === section ? ResColors.accent : ResColors.fillBackgroundLight}
            onPress={() => {
                const toPublish = activeSection === section ? ActiveSection.none : section;
                StateManager.activeSection.publish(toPublish);
            }}
            wide={false}
            style={{
                width: radius * 2,
                height: radius * 2,
                borderRadius: 100,
                ...(activeSection === section ? ResCSS.shadow : undefined),
                ...style,
            }}
        />
    );
};
