import React, { useEffect, useState } from "react";
import ExperiencePeriod from "../../model/experience/ExperiencePeriod";
import ResDimensions from "../styling/ResDimensions";
import ExperienceCard from "./ExperienceCard";
import GridContainer from "../containers/GridContainer";
import VStack from "../containers/Stacks/VStack";
import YearHeader from "./YearHeader";

interface Props {
    period: ExperiencePeriod;
}

const ExperienceSection: React.FC<Props> = ({ period }) => {
    const [shouldRenderPortrait, setShouldRenderPortrait] = useState(
        window.innerWidth <= ResDimensions.screenWidthToRenderPortrait,
    );

    useEffect(() => {
        const handleResize = () => {
            setShouldRenderPortrait(window.innerWidth <= ResDimensions.screenWidthToRenderPortrait);
        };
        // When the window is resized, re-update
        window.addEventListener("resize", handleResize);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderExperienceCards = () => {
        return period.experiences.map((experience) => <ExperienceCard key={experience.name} experience={experience} />);
    };

    let columnCount = shouldRenderPortrait ? 1 : 2;
    let columnSizeRule = `${100 / columnCount}%`;

    return (
        <VStack spacing={ResDimensions.pageContentSpacing}>
            <YearHeader>{period.label}</YearHeader>

            <GridContainer
                columns={columnCount}
                columnSizeRule={columnSizeRule}
                spacing={ResDimensions.cardColumnSpacing}
            >
                {renderExperienceCards()}
            </GridContainer>
        </VStack>
    );
};

export default ExperienceSection;
