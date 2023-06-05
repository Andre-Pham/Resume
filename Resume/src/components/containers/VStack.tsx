import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const VStack = ({ children, style, spacing }) => {
    return (
        <View style={[styles.container, { columnGap: spacing/2, rowGap: spacing }, style]}>
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
