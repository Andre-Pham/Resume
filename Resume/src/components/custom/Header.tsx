import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { Linking } from 'react-native';
import ResTypography from '../styling/ResTypography';
import VStack from '../containers/VStack';
import ResChip from '../base/ResChip/ResChip';
import ResColors from '../styling/ResColors';
import ResIconButtonLabelled from '../base/ResIconButtonLabelled/ResIconButtonLabelled';
import ResImage from '../base/ResImage/ResImage';

interface Props {
    // None
}

const Header: React.FC<Props> = ({ 
    // None
}) => {
    return (
        <HStack spacing={16}>
            <ResImage 
                height={64} 
                width={64} 
                fileName="profile_picture.png" 
                style={{ borderRadius: 50, alignSelf: 'center' }} 
            />

            <VStack spacing={4} style={{ alignSelf: 'center' }}>
                <ResText 
                    typography={ResTypography.pageTitle}
                    verticalWrap={true}
                >
                    Andre Pham
                </ResText>

                <ResText 
                    typography={ResTypography.subscript}
                    verticalWrap={true}
                >
                    andrekypham@gmail.com
                </ResText>
            </VStack>
        </HStack>
    );
}

export default Header;