import React from "react";

interface Props {
    fileName: string;
    flexVertical: boolean;
    style?: React.CSSProperties;
}

const ResFlexImage: React.FC<Props> = ({ fileName, flexVertical, style }) => {
    return (
        <img
            src={`/assets/images/${fileName}`}
            alt={fileName}
            style={{
                height: flexVertical ? "100%" : "auto",
                width: flexVertical ? "auto" : "100%",
                aspectRatio: "1",
                objectFit: "contain",
                ...style,
            }}
        />
    );
};

export default ResFlexImage;

/*
const ResFlexImage: React.FC<Props> = ({ fileName, flexVertical, style }) => {
    return (
        <Image
            source={require("/assets/images/" + fileName)}
            resizeMode="contain"
            style={{
                height: flexVertical ? "100%" : undefined,
                width: flexVertical ? undefined : "100%",
                aspectRatio: 1,
                ...style,
            }}
        />
    );
};

export default ResFlexImage;
*/
