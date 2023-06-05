import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import ResDimensions from '../styling/ResDimensions';
import ResColor from '../styling/color/ResColor';

interface Props {
    color: ResColor;
    onPress?: () => void | null;
    children; // No type - can be any component
    style?: ViewStyle;
}

const FlatContainer: React.FC<Props> = ({ 
    color,
    onPress = null,
    children,
    style,
}) => {
    // Touchable opacity stops the highlighting of text - remove it if it's not a button
    return onPress == null ? (
        <View
            style={[
                styles.container,
                { backgroundColor: color.getColor() },
                style,
            ]}
        >
            {children}
        </View>
    ) : (
        <TouchableOpacity onPress={onPress} disabled={onPress == null}>
            <View
                style={[
                    styles.container,
                    { backgroundColor: color.getColor() },
                    style,
                ]}
            >
                {children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: ResDimensions.fillRadius,
        padding: ResDimensions.cardPadding,
    }
});

export default FlatContainer;