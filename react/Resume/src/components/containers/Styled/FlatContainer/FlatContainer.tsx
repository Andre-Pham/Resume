import React, { useState } from "react";
import ResColor from "../../../styling/color/ResColor";
import "./DisableSelection.css";

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
            className={disableSelection ? "disable-selection" : undefined}
            style={{
                borderRadius: 16,
                padding: 18,
                backgroundColor: color.getColor(),
                ...style,
            }}
        >
            {children}
        </div>
    ) : (
        <div
            className={disableSelection ? "disable-selection" : undefined}
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
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default FlatContainer;
