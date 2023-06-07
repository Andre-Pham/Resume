import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResTypographyConfig from '../../styling/typography/ResTypographyConfig';
import ResColor from '../../styling/color/ResColor';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Environment from '../../../state/environment/Environment';
import { OS } from '../../../state/environment/types/OS';
import ResText from '../ResText/ResText';
import ResIcon from '../ResIcon/ResIcon';

interface Props {
    color: ResColor;
    icon: string; // https://pictogrammers.com/library/mdi/
    size: number;
    style?: ViewStyle;
    onPress: () => void;
}

const ResIconButton: React.FC<Props> = ({ 
    color,
    icon, 
    size,
    style,
    onPress,
}) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            disabled={onPress == null} 
            style={{ 
                backgroundColor: color.getColor(),
                borderRadius: 50,
                width: size,
                height: size,
                justifyContent: 'center',
            }}
        >
            <ResIcon 
                icon={icon}
                size={size*2.2/3.0}
                color={new ResColor('white')}
                style={{
                    alignSelf: 'center',
                }}
            />
        </TouchableOpacity>
    );
}

export default ResIconButton;