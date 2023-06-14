import React, { useEffect, useRef } from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResTypographyConfig from '../../styling/typography/ResTypographyConfig';
import ResColor from '../../styling/color/ResColor';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import Environment from '../../../state/environment/Environment';
import { OS } from '../../../state/environment/types/OS';
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

const ResButton: React.FC<Props> = ({ 
    label, 
    typography,
    color,
    icon = null, 
    disabled = false, 
    wide = true,
    style,
    onPress,
}) => {
    // TODO: Figure out a better way to centre the text
    let labelStyle = {}
    if (Environment.instance.getOS() == OS.ios) {
        labelStyle = { lineHeight: 0 } // Centres the text
    }

    if (disabled) {
        // Override colour when disabled
        typography.resColor = undefined;
    }
    
    return (
        <Button 
            icon={({ size, color }) => (
                <Icon name={icon} size={size + 8} color={color} />
            )}
            mode={'contained'} 
            onPress={onPress}
            disabled={disabled}
            labelStyle={[
                { padding: 2 },
                labelStyle,
            ]}
            style={[
                { borderRadius: 50 },
                wide ? { width: "100%" } : { alignSelf: 'center' },
                style,
            ]}
            buttonColor={color.getColor()}
            rippleColor={color.getRippleColor()}
        >
            <ResText typography={typography}>
                {label}
            </ResText>
        </Button>
    );
}

export default ResButton;