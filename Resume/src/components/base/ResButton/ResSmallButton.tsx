import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResTypographyConfig from '../../styling/typography/ResTypographyConfig';
import ResColor from '../../styling/color/ResColor';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import ResText from '../ResText/ResText';

interface Props {
    label: string;
    typography: ResTypographyConfig;
    color: ResColor;
    icon?: string; // https://pictogrammers.com/library/mdi/
    disabled?: boolean;
    wide?: boolean;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
}

const ResSmallButton: React.FC<Props> = ({ 
    label, 
    typography, 
    color, 
    icon = null,
    disabled = false, 
    wide = true,
    style, 
    onPress,
}) => {
    return (
        <TouchableOpacity 
            onPress={disabled ? undefined : onPress} 
            style={[
                { 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    paddingVertical: 6, 
                    paddingHorizontal: 14, 
                    borderRadius: 50, 
                    backgroundColor: color.getColor(), 
                    opacity: disabled ? 0.5 : 1,
                }, 
                wide ? { width: "100%" } : { alignSelf: 'center' },
                style,
            ]}
            disabled={disabled}
        >
            {icon && <Icon name={icon} size={16} color={color} />}

            <ResText typography={typography} wide={false}>
                {label}
            </ResText>
        </TouchableOpacity>
    );
}

export default ResSmallButton;