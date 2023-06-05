import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const VStack = ({ children, style, spacing }) => {
    // Create an array of children with added styles for spacing
    const childrenWithSpacing = React.Children.map(children, (child, index) => {
        // Don't add top margin to the first child
        if (index === 0) {
            return child;
        }

        return React.cloneElement(child, {
            style: StyleSheet.flatten([
                { marginTop: spacing },
                child.props.style,
            ]),
        });
    });

    return <View style={style}>{childrenWithSpacing}</View>;
};

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
