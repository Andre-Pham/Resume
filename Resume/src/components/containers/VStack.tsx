import React, { version } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import PropTypes from "prop-types";

interface Props {
    children;
    spacing?: number;
    horizontalSpacing?: number;
    style?: ViewStyle;
}

const VStack: React.FC<Props> = ({ 
    children, 
    spacing = 0,
    horizontalSpacing = null,
    style, 
}) => {
    return (
        <View 
            style={[
                styles.container, 
                { columnGap: horizontalSpacing == null ? spacing : horizontalSpacing, rowGap: spacing }, 
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        flexWrap: 'wrap',
    }
});

VStack.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    spacing: PropTypes.number,
};

VStack.defaultProps = {
    style: {},
    spacing: 0,
};

export default VStack;
