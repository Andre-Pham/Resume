import React, { useState } from "react";
import ResCSS from "../../../styling/ResCSS";

interface Props {
    onPress: () => void;
    disableSelection?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const PressableContainer: React.FC<Props> = ({ onPress, disableSelection = false, children, style }) => {
    const [pressed, setPressed] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        onPress();
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
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

export default PressableContainer;
