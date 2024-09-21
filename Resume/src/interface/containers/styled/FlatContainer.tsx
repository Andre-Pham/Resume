import React, { useState } from "react";
import { ResStylePresets } from "../../styling/ResStylePresets";
import { ResColor } from "../../styling/color/ResColor";

interface Props {
    color: ResColor;
    disableSelection?: boolean;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const FlatContainer: React.FC<Props> = ({
    color,
    onPress = undefined,
    disableSelection = false,
    children,
    style,
}) => {
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

    return onPress === undefined ? (
        <div
            style={{
                borderRadius: 16,
                padding: 18,
                backgroundColor: color.getColor(),
                ...(disableSelection ? ResStylePresets.disableSelection : undefined),
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
                ...(disableSelection ? ResStylePresets.disableSelection : undefined),
                ...style,
            }}
        >
            {children}
        </div>
    );
};