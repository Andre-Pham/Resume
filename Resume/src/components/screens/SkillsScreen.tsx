import { ContentScreenWrapper } from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import { usePortraitRendering } from "../hooks/usePortraitRendering";
import { SkillsContent } from "../custom/SkillsContent";
import { RouterNavigator } from "../../services/RouterNavigator";

export function SkillsScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterNavigator.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Skills">
            <SkillsContent />
        </ContentScreenWrapper>
    );
}
