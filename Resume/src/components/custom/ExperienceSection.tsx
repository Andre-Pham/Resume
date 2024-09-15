import React, { useState } from "react";
import { ExperiencePeriod } from "../../model/experience/ExperiencePeriod";
import { ResDimensions } from "../styling/ResDimensions";
import { ExperienceCard } from "./ExperienceCard";
import { GridContainer } from "../containers/GridContainer";
import { VStack } from "../containers/Stacks/VStack";
import { YearHeader } from "./YearHeader";
import { usePortraitRendering } from "../hooks/usePortraitRendering";

interface Props {
    period: ExperiencePeriod;
}

export const ExperienceSection: React.FC<Props> = ({ period }) => {
    const [shouldRenderPortrait, setShouldRenderPortrait] = useState(
        window.innerWidth <= ResDimensions.screenWidthToRenderPortrait,
    );

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        setShouldRenderPortrait(shouldRenderPortrait);
    });

    const renderExperienceCards = (): React.ReactNode => {
        return period.experiences.map((experience) => <ExperienceCard key={experience.name} experience={experience} />);
    };

    const columnCount = shouldRenderPortrait ? 1 : 2;

    return (
        <VStack spacing={ResDimensions.pageContentSpacing}>
            <YearHeader>{period.label}</YearHeader>

            <GridContainer
                columns={columnCount}
                columnSizeRule={"minmax(0, 1fr)"}
                spacing={ResDimensions.cardColumnSpacing}
            >
                {renderExperienceCards()}
            </GridContainer>
        </VStack>
    );
};
