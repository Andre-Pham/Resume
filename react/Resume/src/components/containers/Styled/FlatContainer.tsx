import React, { useState } from "react";
import ResColor from "../../styling/color/ResColor";
import ResCSS from "../../styling/ResCSS";

interface Props {
    color: ResColor;
    disableSelection?: boolean;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const FlatContainer: React.FC<Props> = ({ color, onPress = undefined, disableSelection = false, children, style }) => {
    const [pressed, setPressed] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        onPress && onPress();
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    return !onPress ? (
        <div
            style={{
                borderRadius: 16,
                padding: 18,
                backgroundColor: color.getColor(),
                ...(disableSelection ? ResCSS.diableSelection : undefined),
                ...style,
            }}
        >
            {children}
        </div>
    ) : (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: 16,
                padding: 18,
                backgroundColor: color.getColor(),
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed ? "scale(0.95)" : "scale(1)",
                ...(disableSelection ? ResCSS.diableSelection : undefined),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default FlatContainer;