import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageBlur(callback: () => void): void {
    const location = useLocation();

    useEffect(() => {
        return () => {
            // This function is called when the component is unmounted or when the location changes
            callback();
        };
    }, [location]); // Runs every time the route changes
}
