import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import ExperienceContent from "../custom/ExperienceContent";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";

function ExperienceScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            navigate("/", { replace: true });
        }
    });

    return (
        <ContentScreenWrapper title="Experience">
            <ExperienceContent />
        </ContentScreenWrapper>
    );
}

export default ExperienceScreen;