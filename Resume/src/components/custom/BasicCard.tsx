import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { View, ViewStyle } from 'react-native';
import ResTypography from '../styling/ResTypography';
import FlatContainer from '../containers/FlatContainer';
import ResColors from '../styling/ResColors';
import VStack from '../containers/VStack';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    title: string;
    children;
    style?: ViewStyle;
}

const BasicCard: React.FC<Props> = ({ 
    title,
    children,
    style,
}) => {
    return (
        <FlatContainer
            color={ResColors.fillBackgroundLight}
            style={style}
        >
            <VStack spacing={ResDimensions.bodyParagraphSpacing}>
                <ResText typography={ResTypography.header}>
                    {title}
                </ResText>

                {children}
            </VStack>
        </FlatContainer>
    );
}

export default BasicCard;