import { ContentScreenWrapper } from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { SkillsContent } from "../custom/SkillsContent";
import { RouterService } from "../../services/RouterService";

export const SkillsScreen: React.FC = () => {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterService.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Skills">
            <SkillsContent />
        </ContentScreenWrapper>
    );
};
