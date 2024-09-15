import { ContentScreenWrapper } from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { EducationContent } from "../custom/EducationContent";
import { RouterService } from "../../services/RouterService";

export const EducationScreen: React.FC = () => {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterService.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Education">
            <EducationContent />
        </ContentScreenWrapper>
    );
};
