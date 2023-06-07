import React from 'react';
import ResColor from '../../styling/color/ResColor';
import { ViewStyle } from 'react-native';
import ResText from '../ResText/ResText';
import ResIcon from '../ResIcon/ResIcon';
import VStack from '../../containers/VStack';
import ResTypography from '../../styling/ResTypography';
import ResIconButton from '../ResIconButton/ResIconButton';

interface Props {
    color: ResColor;
    icon?: string; // https://pictogrammers.com/library/mdi/
    fileName?: string;
    label: string;
    size: number;
    style?: ViewStyle;
    onPress: () => void;
}

const ResIconButtonLabelled: React.FC<Props> = ({ 
    color,
    icon = null, 
    fileName = null,
    label,
    size,
    style,
    onPress,
}) => {
    return (
        <VStack spacing={5} style={{ alignItems: 'center', alignSelf: 'flex-start', ...style }}>
            <ResIconButton 
                icon={icon}
                fileName={fileName}
                color={color}
                size={size}
                onPress={onPress}
            />

            <ResText 
                typography={ResTypography.subscriptLabel}
                style={{alignSelf: 'center', textAlign: 'center'}}
            >
                {label}
            </ResText>
        </VStack>
    );
}

export default ResIconButtonLabelled;