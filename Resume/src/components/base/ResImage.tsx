import React, { useEffect, useState } from "react";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";

interface Props {
    fileName: string;
    width?: number | string;
    height?: number | string;
    scale?: "none" | "scaleToFit" | "scaleToFill" | "scaleToFillCrop";
    style?: React.CSSProperties;
}

export const ResImage: React.FC<Props> = ({ fileName, width = "auto", height = "auto", scale = "none", style }) => {
    const [size, setSize] = useState<{ width?: number | string; height?: number | string }>({
        width: width,
        height: height,
    });
    const [resizeMode, setResizeMode] = useState<"fill" | "contain" | "cover" | "none" | "scale-down" | undefined>(
        undefined,
    );

    const handleImageLoaded = (event: any) => {
        if (scale == "scaleToFill" && typeof width == "number" && typeof height == "number") {
            if (width > height) {
                setSize({ width: width, height: undefined });
            } else {
                setSize({
                    width: (event.target.naturalWidth * height) / event.target.naturalHeight,
                    height: undefined,
                });
            }
        }
    };

    useEffect(() => {
        switch (scale) {
            case "none":
                setResizeMode("fill");
                break;
            case "scaleToFit":
                setResizeMode("contain");
                break;
            case "scaleToFill":
            case "scaleToFillCrop":
                setResizeMode("cover");
                break;
            default:
                throw new UnreachableCaseError(scale);
        }
    }, []);

    return (
        <img
            src={`${import.meta.env.BASE_URL}images/${fileName}`}
            alt={fileName}
            onLoad={handleImageLoaded}
            style={{
                objectFit: resizeMode,
                width: size.width,
                height: size.height,
                ...style,
            }}
        />
    );
};
