import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";
import EducationContent from "../custom/EducationContent";
import RouterNavigator from "../../services/RotuerNavigator";

function EducationScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            RouterNavigator.inst.navigateHome(navigate);
        }
    });

    return (
        <ContentScreenWrapper title="Education">
            <EducationContent />
        </ContentScreenWrapper>
    );
}

export default EducationScreen;
