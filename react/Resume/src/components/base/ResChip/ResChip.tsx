import { useState } from "react";
import ResColor from "../../styling/color/ResColor";

interface Props {
    color: ResColor;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const ResChip: React.FC<Props> = ({ color, onPress, children, style }) => {
    const [pressed, setPressed] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    return onPress ? (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClick={onPress}
            style={{
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed ? "scale(0.95)" : "scale(1)",
                ...style,
            }}
        >
            <div
                style={{
                    border: "1.5px solid transparent",
                    borderRadius: "50px",
                    padding: "6px 12px",
                    alignSelf: "flex-start",
                    backgroundColor: color.getColor(),
                    ...style,
                }}
            >
                {children}
            </div>
        </button>
    ) : (
        <div
            style={{
                borderRadius: "50px",
                padding: "6px 12px",
                alignSelf: "flex-start",
                backgroundColor: color.getColor(),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default ResChip;
