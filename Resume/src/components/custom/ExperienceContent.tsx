import React from "react";
import VStack from "../containers/Stacks/VStack";
import ResDimensions from "../styling/ResDimensions";
import { ExperiencePeriods } from "../../model/experience/ExperiencePeriods";
import ExperienceSection from "./ExperienceSection";

interface Props {
    style?: React.CSSProperties;
}

const ExperienceContent: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={ResDimensions.pageContentSpacing} style={{ ...style }}>
            {ExperiencePeriods().map((period) => (
                <ExperienceSection period={period} key={period.label} />
            ))}
        </VStack>
    );
};

export default ExperienceContent;
