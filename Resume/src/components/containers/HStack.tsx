import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const HStack = ({ children, style, spacing }) => {
    const childrenWithSpacing = React.Children.map(children, (child, index) => {
        if (index === 0) {
            return child;
        }

        return React.cloneElement(child, {
            style: StyleSheet.flatten([
                { marginLeft: spacing },
                child.props.style,
            ]),
        });
    });

    return (
        <View style={[style, { flexDirection: "row" }]}>
            {childrenWithSpacing}
        </View>
    );
};

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
