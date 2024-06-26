import React, { useState } from "react";
import ResCSS from "../../styling/ResCSS";
import ResColor from "../../styling/color/ResColor";

interface Props {
    color: ResColor;
    disableSelection?: boolean;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const FlatContainer: React.FC<Props> = ({ color, onPress = undefined, disableSelection = false, children, style }) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        setTouched(true);
    };

    const handleTouchEnd = () => {
        setTouched(false);
    };

    const handleTouchCancel = () => {
        setTouched(false);
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
            onTouchStart={handleTouched}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onClick={onPress}
            style={{
                borderRadius: 16,
                padding: 18,
                backgroundColor: color.getColor(),
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...(disableSelection ? ResCSS.diableSelection : undefined),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default FlatContainer;
