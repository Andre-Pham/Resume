import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const HStack = ({ children, style, spacing }) => {
    return (
        <View style={[styles.container, { columnGap: spacing, rowGap: spacing/2 }, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
    }
});

HStack.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    spacing: PropTypes.number,
};

HStack.defaultProps = {
    style: {},
    spacing: 0,
};

export default HStack;
