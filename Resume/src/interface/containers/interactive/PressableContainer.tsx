import React, { useState } from "react";
import { ResCSS } from "../../styling/ResCSS";

interface Props {
    onPress: () => void;
    disableSelection?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const PressableContainer: React.FC<Props> = ({ onPress, disableSelection = false, children, style }) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = (): void => {
        setPressed(true);
    };

    const handleMouseUp = (): void => {
        setPressed(false);
    };

    const handleMouseLeave = (): void => {
        setPressed(false);
    };

    const handleTouched = (): void => {
        setTouched(true);
    };

    const handleTouchEnd = (): void => {
        setTouched(false);
    };

    const handleTouchCancel = (): void => {
        setTouched(false);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouched}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onClick={onPress}
            style={{
                display: "flex",
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...(disableSelection ? ResCSS.disableSelection : undefined),
                ...style,
            }}
        >
            {children}
        </div>
    );
};
