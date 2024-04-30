import React from "react";
import ResTypographyConfig from "../styling/typography/ResTypographyConfig";
import { ResFontFamily } from "../styling/typography/ResFontFamily";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // Typography applied
    typography: ResTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Number of lines (predefined)
    numberOfLines?: number;
    // Custom styling
    style?: React.CSSProperties;
}

const ResText: React.FC<Props> = ({
    children,
    typography,
    verticalWrap = false,
    wide = true,
    numberOfLines,
    style,
}) => {
    let lineHeightMultiplier = typography.fontFamily === ResFontFamily.poppins ? 1.15 : 1.0;
    let computedStyle: React.CSSProperties = {
        width: wide ? "100%" : undefined,
        alignSelf: wide == undefined ? undefined : "center",
        lineHeight: verticalWrap ? `${typography.size * lineHeightMultiplier}px` : undefined,
        ...typography.getStylesheet(),
        ...style,
    };
    // Trucate at number of lines
    if (numberOfLines) {
        computedStyle.overflow = "hidden";
        computedStyle.display = "-webkit-box";
        computedStyle.WebkitBoxOrient = "vertical";
        computedStyle.WebkitLineClamp = numberOfLines;
        computedStyle.textOverflow = "ellipsis";
    }
    return <span style={computedStyle}>{children}</span>;
};

export default ResText;