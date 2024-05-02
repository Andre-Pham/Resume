import React, { useEffect, useState } from "react";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import StateManager from "../../state/publishers/StateManager";
import ResTypography from "../styling/ResTypography";
import ResColors from "../styling/ResColors";
import ResButton from "../base/ResButton";
import ResCSS from "../styling/ResCSS";
import { mdiChevronRight } from "@mdi/js";

interface Props {
    label: string;
    section: ActiveSection;
    style?: React.CSSProperties;
}

const SplashButtonMobile: React.FC<Props> = ({ label, section, style }) => {
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
    const selectedTypography = ResTypography.button.withColor(ResColors.textLight);
    const unselectedTypography = ResTypography.button.withColor(ResColors.textDark);

    return (
        <ResButton
            label={label}
            iconPath={mdiChevronRight}
            typography={activeSection == section ? selectedTypography : unselectedTypography}
            color={activeSection == section ? ResColors.accent : ResColors.fillBackgroundLight}
            onPress={() => {
                let toPublish = activeSection == section ? ActiveSection.none : section;
                StateManager.activeSection.publish(toPublish);
            }}
            wide={true}
            style={{
                maxWidth: buttonSize,
                justifyContent: "flex-start",
                paddingLeft: 32,
                alignSelf: "center",
                ...(activeSection == section ? ResCSS.shadow : undefined),
                ...style,
            }}
        />
    );
};

export default SplashButtonMobile;
