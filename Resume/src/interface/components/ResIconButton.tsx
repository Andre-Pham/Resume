import React, { useState } from "react";
import { ResColor } from "../styling/color/ResColor";
import { ResImage } from "./ResImage";
import { ResIcon } from "./ResIcon";
import { ResStylePresets } from "../styling/ResStylePresets";

interface Props {
    color: ResColor;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    iconColor?: ResColor;
    fileName?: string;
    size: number;
    onlyIcon?: boolean;
    style?: React.CSSProperties;
    onPress?: () => void;
}

export const ResIconButton: React.FC<Props> = ({
    color,
    iconPath = undefined,
    iconColor = undefined,
    fileName = undefined,
    size,
    onlyIcon = false,
    style,
    onPress,
}) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = (): void => {
        setPressed(true);
    };

    const handleMouseExit = (): void => {
        setPressed(false);
    };

    const handleTouched = (): void => {
        setTouched(true);
    };

    const handleUntouched = (): void => {
        setTouched(false);
    };

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseExit}
            onMouseLeave={handleMouseExit}
            onTouchStart={handleTouched}
            onTouchEnd={handleUntouched}
            onTouchCancel={handleUntouched}
            onClick={onPress}
            style={{
                padding: 0,
                borderRadius: "50px",
                backgroundColor: color.hexString,
                width: onlyIcon ? 0 : size,
                height: onlyIcon ? 0 : size,
                justifyContent: "center",
                display: "flex",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...ResStylePresets.disableSelection,
                ...style,
            }}
        >
            {fileName !== undefined ? (
                <ResImage
                    fileName={fileName}
                    width={(size * 1.8) / 3.0}
                    height={(size * 1.8) / 3.0}
                    scale="scaleToFit"
                    style={{
                        alignSelf: "center",
                    }}
                />
            ) : undefined}

            {iconPath !== undefined ? (
                <ResIcon
                    iconPath={iconPath}
                    size={(size * 2.2) / 3.0}
                    color={iconColor ?? ResColor.white}
                    style={{
                        alignSelf: "center",
                    }}
                />
            ) : undefined}
        </button>
    );
};
