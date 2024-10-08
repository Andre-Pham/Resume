import React from "react";
import { ResTypography } from "../styling/typography/ResTypography";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // Typography applied
    typography: ResTypography;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Number of lines (predefined)
    numberOfLines?: number;
    // Custom styling
    style?: React.CSSProperties;
}

export const ResText: React.FC<Props> = ({
    children,
    typography,
    verticalWrap = false,
    wide = true,
    numberOfLines,
    style,
}) => {
    const computedStyle: React.CSSProperties = {
        width: wide ? "100%" : undefined,
        lineHeight: verticalWrap ? 1 : undefined,
        overflowWrap: "break-word",
        ...typography.getStylesheet(),
        ...style,
    };
    // Truncate at number of lines
    if (numberOfLines !== undefined) {
        computedStyle.overflow = "hidden";
        computedStyle.display = "-webkit-box";
        computedStyle.WebkitBoxOrient = "vertical";
        computedStyle.WebkitLineClamp = numberOfLines;
        computedStyle.textOverflow = "ellipsis";
    }
    return <span style={computedStyle}>{children}</span>;
};
