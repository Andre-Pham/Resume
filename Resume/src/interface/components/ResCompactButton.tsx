import React, { useState } from "react";
import { ResTypography } from "../styling/typography/ResTypography";
import { ResText } from "./ResText";
import { ResColor } from "../styling/color/ResColor";
import Icon from "@mdi/react";
import { ResStylePresets } from "../styling/ResStylePresets";

interface Props {
    label: string;
    typography: ResTypography;
    color: ResColor;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    disabled?: boolean;
    wide?: boolean;
    style?: React.CSSProperties;
    onPress: () => void;
}

export const ResCompactButton: React.FC<Props> = ({
    label,
    typography,
    color,
    iconPath = undefined,
    disabled = false,
    wide = true,
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
            onClick={!disabled ? onPress : undefined}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: "50px",
                backgroundColor: color.hexString,
                opacity: disabled ? 0.5 : 1,
                width: wide ? "100%" : undefined,
                alignSelf: wide ? undefined : "center",
                border: "none",
                cursor: disabled ? "default" : "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...ResStylePresets.disableSelection,
                ...style,
            }}
            disabled={disabled}
        >
            {iconPath !== undefined && (
                <Icon
                    path={iconPath}
                    color={typography.color}
                    size={0.8}
                    style={{ paddingRight: "6px", marginTop: -2, marginBottom: -2 }}
                />
            )}

            <ResText typography={typography} wide={false}>
                {label}
            </ResText>
        </button>
    );
};
