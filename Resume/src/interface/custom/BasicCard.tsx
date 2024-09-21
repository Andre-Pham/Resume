import React from "react";
import { FlatContainer } from "../containers/styled/FlatContainer";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";

interface Props {
    title: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const BasicCard: React.FC<Props> = ({ title, children, style }) => {
    return (
        <FlatContainer color={ResColorPresets.fillBackgroundLight} style={style}>
            <VStack spacing={ResDimensionPresets.bodyParagraphSpacing}>
                <ResText typography={ResTypographyPresets.header}>{title}</ResText>

                {children}
            </VStack>
        </FlatContainer>
    );
};
