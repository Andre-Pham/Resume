import React from "react";
import { HStack } from "../containers/stacks/HStack";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";

interface Props {
    children: React.ReactNode;
}

export const YearHeader: React.FC<Props> = ({ children }) => {
    const typography = ResTypographyPresets.sectionTitle;
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
