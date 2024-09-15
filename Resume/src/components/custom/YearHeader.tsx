import React from "react";
import { HStack } from "../containers/Stacks/HStack";
import { ResText } from "../base/ResText";
import { ResTypography } from "../styling/ResTypography";

interface Props {
    children: React.ReactNode;
}

export const YearHeader: React.FC<Props> = ({ children }) => {
    const typography = ResTypography.sectionTitle;
    return (
        <HStack spacing={16} style={{ alignItems: "baseline" }}>
            <ResText typography={typography} wide={false}>
                {children}
            </ResText>

            <div
                style={{
                    flex: 1,
                    flexGrow: 1,
                    height: 2,
                    backgroundColor: typography.color,
                }}
            />
        </HStack>
    );
};
