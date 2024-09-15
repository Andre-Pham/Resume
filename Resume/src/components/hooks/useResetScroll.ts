import { useEffect } from "react";

export function useResetScroll() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}
