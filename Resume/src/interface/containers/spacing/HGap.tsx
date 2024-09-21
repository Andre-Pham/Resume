import React from "react";

interface Props {
    size: number;
}

export const HGap: React.FC<Props> = ({ size }) => {
    return <div style={{ width: size }} />;
};
