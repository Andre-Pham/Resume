import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterService } from "../../services/RouterService";

interface Props {
    children: React.ReactNode;
}

export const TitleProvider: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        // If the path doesn't have a custom title, we just use the home path
        document.title = RouterService.titles[location.pathname] ?? RouterService.titles[RouterService.HOME_PATH]!;
    }, [location]);
    return <>{children}</>;
};
