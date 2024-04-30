import React from "react";
import ResTypographyConfig from "../styling/typography/ResTypographyConfig";
import ResText from "./ResText";
import ResColor from "../styling/color/ResColor";
import Icon from "@mdi/react";

interface Props {
    label: string;
    typography: ResTypographyConfig;
    color: ResColor;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    disabled?: boolean;
    wide?: boolean;
    style?: React.CSSProperties;
    onPress: () => void;
}

const ResButton: React.FC<Props> = ({
    label,
    typography,
    color,
    iconPath = undefined,
    disabled = false,
    wide = true,
    style,
    onPress,
}) => {
    return (
        <button
            onClick={!disabled ? onPress : undefined}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: "50px",
                backgroundColor: color.getColor(),
                opacity: disabled ? 0.5 : 1,
                width: wide ? "100%" : undefined,
                alignSelf: wide ? undefined : "center",
                border: "none",
                cursor: disabled ? "default" : "pointer",
                ...style,
            }}
            disabled={disabled}
        >
            {iconPath && <Icon path={iconPath} color={typography.color} size={1} style={{ paddingRight: "6px" }} />}

            <ResText typography={typography} wide={false}>
                {label}
            </ResText>
        </button>
    );
};

export default ResButton;
