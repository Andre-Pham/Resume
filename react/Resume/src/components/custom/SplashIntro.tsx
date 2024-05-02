import React from "react";
import VStack from "../containers/Stacks/VStack";
import ResText from "../base/ResText";
import ResTypography from "../styling/ResTypography";
import HStack from "../containers/Stacks/HStack";
import ResDimensions from "../styling/ResDimensions";
import ResIconButtonLabelled from "../base/ResIconButtonLabelled";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import ResColors from "../styling/ResColors";

interface Props {
    style?: React.CSSProperties;
}

const SplashIntro: React.FC<Props> = ({ style }) => {
    return (
        <VStack spacing={16} style={style}>
            <ResText
                typography={ResTypography.splash}
                style={{
                    maxWidth: 550,
                }}
            >
                {
                    "I'm a mobile developer who specialises in native iOS development and React Native. My passions are code, art and design."
                }
            </ResText>

            <ResText
                typography={ResTypography.standoutBody}
                style={{
                    maxWidth: 500,
                }}
            >
                {"Find my social links below, or explore my qualifications and experience."}
            </ResText>

            <HStack spacing={ResDimensions.iconButtonSpacing} style={{ paddingTop: 8 }}>
                <ResIconButtonLabelled
                    iconPath={mdiGithub}
                    color={ResColors.gitHub}
                    label="GitHub"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        // Linking.openURL("https://github.com/Andre-Pham");
                    }}
                />

                <ResIconButtonLabelled
                    fileName={"behance_white.png"}
                    color={ResColors.behance}
                    label="Behance"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        // Linking.openURL("https://behance.net/andrepham");
                    }}
                />

                <ResIconButtonLabelled
                    iconPath={mdiLinkedin}
                    color={ResColors.linkedIn}
                    label="LinkedIn"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        // Linking.openURL("https://www.linkedin.com/in/andrekypham");
                    }}
                />
            </HStack>
        </VStack>
    );
};

export default SplashIntro;
