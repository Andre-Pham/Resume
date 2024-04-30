import React from "react";
import ResTypographyConfig from "../../styling/typography/ResTypographyConfig";
import { ResFontWeight } from "../../styling/typography/ResFontWeight";
import { ResFontFamily } from "../../styling/typography/ResFontFamily";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // The URL to open
    url: string;
    // Typography applied
    typography: ResTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: React.CSSProperties;
}

const ResHyperlink: React.FC<Props> = ({ children, url, typography, verticalWrap = false, wide = true, style }) => {
    let linkTypography = typography.withWeight(ResFontWeight.bold).withUnderline(true);
    // For some reason the poppins font is slightly offset
    // This is a workaround
    let lineHeightMultiplier = linkTypography.fontFamily == ResFontFamily.poppins ? 1.15 : 1.0;
    return (
        <a
            href={url}
            style={{
                width: wide ? "100%" : undefined,
                alignSelf: wide == undefined ? undefined : "center",
                lineHeight: verticalWrap ? `${linkTypography.size * lineHeightMultiplier}em` : undefined,
                ...linkTypography.getStylesheet(),
                ...style,
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default ResHyperlink;
