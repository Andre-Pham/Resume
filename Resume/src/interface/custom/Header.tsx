import React from "react";
import { HStack } from "../containers/stacks/HStack";
import { ResImage } from "../components/ResImage";
import { VStack } from "../containers/stacks/VStack";
import { ResText } from "../components/ResText";
import { ResTypography } from "../styling/ResTypography";
import { ResIconButton } from "../components/ResIconButton";
import { ResColors } from "../styling/ResColors";
import { ResDimensions } from "../styling/ResDimensions";
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
            <ResImage
                height={64}
                width={64}
                fileName="profile_picture.png"
                style={{ borderRadius: 50, alignSelf: "center" }}
            />

            <VStack spacing={4} style={{ alignSelf: "center" }}>
                <ResText typography={ResTypography.pageTitle} verticalWrap={true}>
                    {"Andre Pham"}
                </ResText>

                <ResText typography={ResTypography.subscript} verticalWrap={true}>
                    {"andrekypham@gmail.com"}
                </ResText>
            </VStack>

            <HStack style={{ flex: 1 }}>
                <Spacer />

                <ResIconButton
                    color={ResColors.background}
                    fileName={StateManager.colorScheme.read() === ColorScheme.dark ? "moon.png" : "sun.png"}
                    size={ResDimensions.iconButtonSize}
                    onPress={inverseColorScheme}
                    onlyIcon={true}
                />
            </HStack>
        </HStack>
    );
};
