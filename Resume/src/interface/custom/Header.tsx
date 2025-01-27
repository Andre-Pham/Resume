import React from "react";
import { HStack } from "../containers/stacks/HStack";
import { VStack } from "../containers/stacks/VStack";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResIconButton } from "../components/ResIconButton";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { Spacer } from "../containers/spacing/Spacer";
import { StateManager } from "../../state/publishers/StateManager";
import { ColorScheme } from "../../state/publishers/types/ColorScheme";

export const Header: React.FC = () => {
    const inverseColorScheme = (): void => {
        const current = StateManager.colorScheme.read();
        if (current === ColorScheme.light) {
            StateManager.colorScheme.publish(ColorScheme.dark);
        } else {
            StateManager.colorScheme.publish(ColorScheme.light);
        }
    };

    return (
        <HStack spacing={16} style={{ alignItems: "center" }}>
            <VStack spacing={4} style={{ alignSelf: "center" }}>
                <ResText typography={ResTypographyPresets.pageTitle} verticalWrap={true}>
                    {"Andre Pham"}
                </ResText>

                <ResText typography={ResTypographyPresets.subscript} verticalWrap={true}>
                    {"andrekypham@gmail.com"}
                </ResText>
            </VStack>

            <HStack style={{ flex: 1 }}>
                <Spacer />

                <ResIconButton
                    color={ResColorPresets.background}
                    fileName={StateManager.colorScheme.read() === ColorScheme.dark ? "moon.png" : "sun.png"}
                    size={ResDimensionPresets.iconButtonSize}
                    onPress={inverseColorScheme}
                    onlyIcon={true}
                />
            </HStack>
        </HStack>
    );
};
