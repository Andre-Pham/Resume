import React from "react";

interface Props {
    style?: React.CSSProperties;
}

export const Spacer: React.FC<Props> = ({ style }) => {
    return <div style={{ flex: 1, ...style }} />;
};
