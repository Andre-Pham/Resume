import React from "react";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { ExperiencePeriods } from "../../model/experience/ExperiencePeriods";
import { ExperienceSection } from "./ExperienceSection";

interface Props {
    style?: React.CSSProperties;
}

export const ExperienceContent: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={ResDimensionPresets.pageContentSpacing} style={{ width: "100%", ...style }}>
            {ExperiencePeriods().map((period) => (
                <ExperienceSection period={period} key={period.label} />
            ))}
        </VStack>
    );
};
