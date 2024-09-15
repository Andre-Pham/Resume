import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterService } from "../../services/RouterService";

interface Props {
    children: React.ReactNode;
}

export const TitleProvider: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        document.title = RouterService.TITLES[location.pathname] || RouterService.TITLES[RouterService.HOME_PATH]!;
    }, [location]);
    return <>{children}</>;
};
