import React from 'react';
import { Text } from 'react-native-paper';
import { TextStyle, Linking } from 'react-native';
import ResTypographyConfig from '../../styling/typography/ResTypographyConfig';
import { ResFontFamily } from '../../styling/typography/ResFontFamily';
import { ResFontWeight } from '../../styling/typography/ResFontWeight';

interface Props {
    // Text or other components to be embedded
    children;
    // The URL to open
    url: string;
    // Typography applied
    typography: ResTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: TextStyle;
}

const ResHyperlink: React.FC<Props> = ({ 
    children, 
    url,
    typography,
    verticalWrap = false,
    wide = true,
    style,
}) => {
    typography.weight = ResFontWeight.bold;
    typography.underlined = true;

    const handlePress = React.useCallback(() => {
        Linking.openURL(url);
    }, [url]);

    // For some reason the poppins font is slightly offset
    // This is a workaround
    let lineHeightMultiplier = typography.fontFamily == ResFontFamily.poppins ? 1.15 : 1.0;
    return (
        <Text
            style={[
                wide ? { width: "100%" } : { alignSelf: 'center' },
                typography.getStylesheet(),
                verticalWrap ? { 
                    lineHeight: typography.size*lineHeightMultiplier 
                } : null,
                style,
            ]}
            onPress={handlePress}
        >
            {children}
        </Text>
    );
}

export default ResHyperlink;