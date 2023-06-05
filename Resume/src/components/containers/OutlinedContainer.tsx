import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import ResColor from '../styling/color/ResColor';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    color: ResColor;
    children; // No type - can be any component
    style?: ViewStyle;
}

const OutlinedContainer: React.FC<Props> = ({ 
    color,
    children,
    style,
}) => {
    return (
        <View 
            style={[
                styles.container,
                { borderColor: color.getColor() },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: ResDimensions.fillRadius,
        padding: ResDimensions.cardPadding,
        borderWidth: 4,
    }
});

export default OutlinedContainer;