import React from "react";
import { VStack } from "../containers/stacks/VStack";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { HStack } from "../containers/stacks/HStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { ResIconButtonLabelled } from "../components/ResIconButtonLabelled";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { ResColorPresets } from "../styling/ResColorPresets";

interface Props {
    style?: React.CSSProperties;
}

export const SplashIntro: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={16} style={style}>
            <ResText
                typography={ResTypographyPresets.splash}
                style={{
                    maxWidth: 550,
                }}
            >
                {
                    "I'm a mobile developer who specialises in native iOS development and React Native. My passions are code, art and design."
                }
            </ResText>

            <ResText
                typography={ResTypographyPresets.standoutBody}
                style={{
                    maxWidth: 500,
                }}
            >
                {"Find my social links below, or explore my qualifications and experience."}
            </ResText>

            <HStack spacing={ResDimensionPresets.iconButtonSpacing} style={{ paddingTop: 8 }}>
                <ResIconButtonLabelled
                    iconPath={mdiGithub}
                    color={ResColorPresets.gitHub}
                    label="GitHub"
                    size={ResDimensionPresets.iconButtonSize}
                    onPress={() => {
                        window.open("https://github.com/Andre-Pham", "_blank");
                    }}
                />

                <ResIconButtonLabelled
                    fileName={"behance_white.png"}
                    color={ResColorPresets.behance}
                    label="Behance"
                    size={ResDimensionPresets.iconButtonSize}
                    onPress={() => {
                        window.open("https://behance.net/andrepham", "_blank");
                    }}
                />

                <ResIconButtonLabelled
                    iconPath={mdiLinkedin}
                    color={ResColorPresets.linkedIn}
                    label="LinkedIn"
                    size={ResDimensionPresets.iconButtonSize}
                    onPress={() => {
                        window.open("https://www.linkedin.com/in/andrekypham", "_blank");
                    }}
                />
            </HStack>
        </VStack>
    );
};
