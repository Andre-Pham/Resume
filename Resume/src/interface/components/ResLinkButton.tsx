import React, { useState } from "react";
import { ResTypography } from "../styling/typography/ResTypography";
import { ResText } from "./ResText";
import { ResColor } from "../styling/color/ResColor";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResColorPresets } from "../styling/ResColorPresets";

interface Props {
    label: string;
    typography?: ResTypography;
    hoverColor?: ResColor;
    disabled?: boolean;
    style?: React.CSSProperties;
    onPress: () => void;
}

export const ResLinkButton: React.FC<Props> = ({
    label,
    typography = ResTypographyPresets.subscript,
    hoverColor = ResColorPresets.textDark,
    disabled = false,
    style,
    onPress,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const textColor = isHovered ? hoverColor : typography.colorObject;
    const linkButtonTypography = typography.withUnderline(true).withColor(textColor);
    return (
        <button
            onClick={!disabled ? onPress : undefined}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            style={{
                all: "unset",
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? "default" : "pointer",
                maxWidth: "fit-content",
                ...style,
            }}
            disabled={disabled}
        >
            <ResText typography={linkButtonTypography} wide={false}>
                {label}
            </ResText>
        </button>
    );
};
