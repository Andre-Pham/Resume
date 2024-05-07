import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import ExperienceContent from "../custom/ExperienceContent";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";
import RouterNavigator from "../../services/RouterNavigator";

function ExperienceScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterNavigator.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Experience">
            <ExperienceContent />
        </ContentScreenWrapper>
    );
}

export default ExperienceScreen;
