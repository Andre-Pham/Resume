import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";
import SkillsContent from "../custom/SkillsContent";

function SkillsScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            navigate("/", { replace: true });
        }
    });

    return (
        <ContentScreenWrapper title="Skills">
            <SkillsContent />
        </ContentScreenWrapper>
    );
}

export default SkillsScreen;
