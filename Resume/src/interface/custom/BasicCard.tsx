import React from "react";
import { FlatContainer } from "../containers/styled/FlatContainer";
import { ResColors } from "../styling/ResColors";
import { ResText } from "../components/ResText";
import { ResTypography } from "../styling/ResTypography";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensions } from "../styling/ResDimensions";

interface Props {
    title: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const BasicCard: React.FC<Props> = ({ title, children, style }) => {
    return (
        <FlatContainer color={ResColors.fillBackgroundLight} style={style}>
            <VStack spacing={ResDimensions.bodyParagraphSpacing}>
                <ResText typography={ResTypography.header}>{title}</ResText>

                {children}
            </VStack>
        </FlatContainer>
    );
};
