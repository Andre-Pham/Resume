import React from "react";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { BasicCard } from "./BasicCard";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { Employments } from "../../model/preset-data/Employments";
import { CareerProject } from "./CareerProject";

interface Props {
    style?: React.CSSProperties;
}

export const CareerContent: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={ResDimensionPresets.cardColumnSpacing} style={{ width: "100%", ...style }}>
            {Employments.map((employment, index) => (
                <BasicCard key={index} title={employment.title}>
                    <ResText typography={ResTypographyPresets.subscript}>{employment.subscriptText}</ResText>

                    {employment.description.split("\n").map((paragraph, index) => (
                        <ResText key={index} typography={ResTypographyPresets.body}>
                            {paragraph}
                        </ResText>
                    ))}

                    <ResText typography={ResTypographyPresets.subscript}>{"Projects"}</ResText>

                    <VStack spacing={12}>
                        {employment.experiences.map((experience) => (
                            <CareerProject key={experience.name} experience={experience} />
                        ))}
                    </VStack>
                </BasicCard>
            ))}
        </VStack>
    );
};
