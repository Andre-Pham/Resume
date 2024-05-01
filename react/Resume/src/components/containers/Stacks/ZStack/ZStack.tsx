import React, { useEffect, useRef, useState } from "react";
import "./ZStack.css";

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const ZStack: React.FC<Props> = ({ children, style }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [minHeight, setMinHeight] = useState(0);

    const updateDimensions = () => {
        if (containerRef.current) {
            let maxHeight = 0;
            const childNodes = containerRef.current.childNodes;
            childNodes.forEach((node) => {
                if (node instanceof HTMLElement) {
                    maxHeight = Math.max(maxHeight, node.offsetHeight);
                }
            });
            setMinHeight(maxHeight);
        }
    };

    useEffect(() => {
        // When the window is resized, re-update the dimensions
        window.addEventListener("resize", updateDimensions);
        // Initial update on component mount
        updateDimensions();
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, [children]);

    return (
        <div ref={containerRef} className="zstack-container" style={{ ...style, minHeight: `${minHeight}px` }}>
            {children}
        </div>
    );
};

export default ZStack;
