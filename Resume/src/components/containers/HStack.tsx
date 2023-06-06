import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import PropTypes from "prop-types";

interface Props {
    children;
    spacing?: number;
    verticalSpacing?: number;
    style?: ViewStyle;
}

const HStack: React.FC<Props> = ({ 
    children, 
    spacing = 0,
    verticalSpacing = null,
    style, 
}) => {
    return (
        <View 
            style={[
                styles.container, 
                { columnGap: spacing, rowGap: verticalSpacing == null ? spacing : verticalSpacing }, 
                style,
            ]}
        >
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
