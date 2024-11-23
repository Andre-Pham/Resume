import { ContentScreenWrapper } from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { CareerContent } from "../custom/CareerContent";
import { RouterService } from "../../services/RouterService";

export const CareerScreen: React.FC = () => {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterService.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Career">
            <CareerContent />
        </ContentScreenWrapper>
    );
};
