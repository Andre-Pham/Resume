import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { Linking } from 'react-native';
import ResTypography from '../styling/ResTypography';
import VStack from '../containers/VStack';
import ResFlexImage from '../base/ResFlexImage/ResFlexImage';
import ResChip from '../base/ResChip/ResChip';
import ResColors from '../styling/ResColors';
import ResIconButtonLabelled from '../base/ResIconButtonLabelled/ResIconButtonLabelled';

interface Props {
    // None
}

const AboutHeader: React.FC<Props> = ({ 
    // None
}) => {
    const iconButtonSize = 40;

    return (
        <VStack spacing={15}>
            <HStack spacing={20}>
                <ResFlexImage 
                    fileName='profile_picture.png'
                    flexVertical={true}
                    style={{
                        height: "95%",
                        borderRadius: 50,
                    }}
                />

                <VStack>
                    <ResText 
                        typography={ResTypography.displayIntro}
                        verticalWrap={true}
                    >
                        Hello, I'm
                    </ResText>

                    <ResText 
                        typography={ResTypography.display}
                        verticalWrap={true}
                    >
                        Andre Pham
                    </ResText>
                </VStack>
            </HStack>

            <ResText 
                typography={ResTypography.body}
                style={{
                    maxWidth: 700,
                }}
            >
                I'm a mobile developer that specialises in native iOS development and React Native. I enjoy code, art and design.
            </ResText>

            <HStack spacing={16}>
                <ResIconButtonLabelled
                    icon="github"
                    color={ResColors.gitHub}
                    label="GitHub"
                    size={iconButtonSize}
                    onPress={() => {
                        Linking.openURL("https://github.com/Andre-Pham");
                    }}
                />

                <ResIconButtonLabelled
                    fileName={'behance_white.png'}
                    color={ResColors.behance}
                    label="Behance"
                    size={iconButtonSize}
                    onPress={() => {
                        Linking.openURL("https://behance.net/andrepham");
                    }}
                />
            </HStack>

            <HStack spacing={16}>
                <ResChip
                    color={ResColors.textDark}
                >
                    <ResText typography={ResTypography.chip}>
                        andrekypham@gmail.com
                    </ResText>
                </ResChip>

                <ResChip
                    color={ResColors.textDark}
                >
                    <ResText typography={ResTypography.chip}>
                        0435-625-730
                    </ResText>
                </ResChip>
            </HStack>
        </VStack>
    );
}

export default AboutHeader;