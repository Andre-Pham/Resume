import { useEffect } from "react";

export function useResetScroll(): void {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}
