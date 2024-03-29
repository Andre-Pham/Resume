import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
    children: any;
    spacing?: number;
    verticalSpacing?: number;
    onLayout?: (event: any) => void;
    style?: ViewStyle;
}

const HStack: React.FC<Props> = ({ children, spacing = 0, verticalSpacing = undefined, onLayout, style }) => {
    return (
        <View
            onLayout={onLayout}
            style={[
                styles.container,
                { columnGap: spacing, rowGap: verticalSpacing == undefined ? spacing : verticalSpacing },
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
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
