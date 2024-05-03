import React, { useState } from "react";
import ResCSS from "../../styling/ResCSS";

interface Props {
    onPress: () => void;
    disableSelection?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const PressableContainer: React.FC<Props> = ({ onPress, disableSelection = false, children, style }) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseExit = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        setTouched(true);
    };

    const handleUntouched = () => {
        setTouched(false);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseExit}
            onMouseLeave={handleMouseExit}
            onTouchStart={handleTouched}
            onTouchEnd={handleUntouched}
            onTouchCancel={handleUntouched}
            style={{
                display: "flex",
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

export default PressableContainer;
