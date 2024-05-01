import React, { useState } from "react";
import "./DisableSelection.css";

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
            className={disableSelection ? "disable-selection" : undefined}
            style={{
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

export default PressableContainer;
