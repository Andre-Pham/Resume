import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { Clipboard, Linking, ViewStyle } from 'react-native';
import ResTypography from '../styling/ResTypography';
import VStack from '../containers/VStack';
import ResFlexImage from '../base/ResFlexImage/ResFlexImage';
import ResChip from '../base/ResChip/ResChip';
import ResColors from '../styling/ResColors';
import ResIconButtonLabelled from '../base/ResIconButtonLabelled/ResIconButtonLabelled';
import ResImage from '../base/ResImage/ResImage';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    style?: ViewStyle;
}

const SplashIntro: React.FC<Props> = ({ 
    style
}) => {
    return (
        <VStack spacing={16} style={style}>
            <ResText 
                typography={ResTypography.splash}
                style={{
                    maxWidth: 550,
                }}
            >
                I'm a mobile developer that specialises in native iOS development and React Native. My passions are code, art and design.
            </ResText>

            <ResText 
                typography={ResTypography.standoutBody}
                style={{
                    maxWidth: 550,
                }}
            >
                {/* No orphans! (Hence the "\n") */}
                {"Find my social links below, or explore my\nqualifications and experience."}
            </ResText>

            <HStack spacing={ResDimensions.iconButtonSpacing} style={{ paddingTop: 8 }}>
                <ResIconButtonLabelled
                    icon="github"
                    color={ResColors.gitHub}
                    label="GitHub"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        Linking.openURL("https://github.com/Andre-Pham");
                    }}
                />

                <ResIconButtonLabelled
                    fileName={'behance_white.png'}
                    color={ResColors.behance}
                    label="Behance"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        Linking.openURL("https://behance.net/andrepham");
                    }}
                />

                <ResIconButtonLabelled
                    icon="linkedin"
                    color={ResColors.linkedIn}
                    label="LinkedIn"
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {
                        Linking.openURL("https://www.linkedin.com/in/andrekypham");
                    }}
                />
            </HStack>
        </VStack>
    );
}

export default SplashIntro;