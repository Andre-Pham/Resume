import { ContentScreenWrapper } from "../custom/ContentScreenWrapper";
import { ExperienceContent } from "../custom/ExperienceContent";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { RouterService } from "../../services/RouterService";

export const ExperienceScreen: React.FC = () => {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterService.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Experience">
            <ExperienceContent />
        </ContentScreenWrapper>
    );
};
