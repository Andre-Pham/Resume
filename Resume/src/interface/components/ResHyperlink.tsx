import React from "react";
import { ResTypography } from "../styling/typography/ResTypography";
import { ResFontWeight } from "../styling/typography/ResFontWeight";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // The URL to open
    url: string;
    // Typography applied
    typography: ResTypography;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: React.CSSProperties;
}

export const ResHyperlink: React.FC<Props> = ({
    children,
    url,
    typography,
    verticalWrap = false,
    wide = true,
    style,
}) => {
    const linkTypography = typography.withWeight(ResFontWeight.bold).withUnderline(true);
    return (
        // Span means the frame doesn't extend past the text (i.e. can be clicked past the text)
        <span style={style}>
            <a
                href={url}
                style={{
                    width: wide ? "100%" : undefined,
                    lineHeight: verticalWrap ? 1 : undefined,
                    overflowWrap: "anywhere", // Overflows to the next line if too long to fit
                    ...linkTypography.getStylesheet(),
                }}
                // Open the link in a new tab or window
                target="_blank"
                // Common practice to ensure that the link is opened securely
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </span>
    );
};
