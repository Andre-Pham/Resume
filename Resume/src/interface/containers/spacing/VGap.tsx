import React from "react";

interface Props {
    size: number;
}

export const VGap: React.FC<Props> = ({ size }) => {
    return <div style={{ height: size }} />;
};
