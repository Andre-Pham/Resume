import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { Clipboard, Linking } from 'react-native';
import ResTypography from '../styling/ResTypography';
import VStack from '../containers/VStack';
import ResFlexImage from '../base/ResFlexImage/ResFlexImage';
import ResChip from '../base/ResChip/ResChip';
import ResColors from '../styling/ResColors';
import ResIconButtonLabelled from '../base/ResIconButtonLabelled/ResIconButtonLabelled';
import ResImage from '../base/ResImage/ResImage';

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
                <ResImage 
                    height={100} 
                    width={100} 
                    fileName="profile_picture.png" 
                    style={{borderRadius: 50}} 
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
                typography={ResTypography.standoutBody}
                style={{
                    maxWidth: 700,
                }}
            >
                I'm a mobile developer that specialises in native iOS development and React Native. My passions are code, art and design.
            </ResText>

            <ResText 
                typography={ResTypography.standoutBody}
                style={{
                    maxWidth: 700,
                }}
            >
                You can find my work using the links below or get in contact with me at andrekypham@gmail.com.
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