import { useState } from "react";
import { ResColor } from "../styling/color/ResColor";
import { ResStylePresets } from "../styling/ResStylePresets";

interface Props {
    color: ResColor;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const ResChip: React.FC<Props> = ({ color, onPress, children, style }) => {
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

    return onPress !== undefined ? (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouched}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onClick={onPress}
            style={{
                borderRadius: "50px",
                padding: "5.5px 12px",
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: color.hexString,
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...ResStylePresets.disableSelection,
                ...style,
            }}
        >
            {children}
        </div>
    ) : (
        <div
            style={{
                borderRadius: "50px",
                padding: "5.5px 12px",
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: color.hexString,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
