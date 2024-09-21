import React from "react";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { BasicCard } from "./BasicCard";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { Skills } from "../../model/preset-data/Skills";

interface Props {
    style?: React.CSSProperties;
}

export const SkillsContent: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={ResDimensionPresets.cardColumnSpacing} style={{ width: "100%", ...style }}>
            {Skills.map((skill) => (
                <BasicCard title={skill.title}>
                    <ResText typography={ResTypographyPresets.body}>{skill.description}</ResText>
                </BasicCard>
            ))}
        </VStack>
    );
};
