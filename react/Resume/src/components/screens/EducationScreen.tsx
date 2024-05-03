import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import { useNavigate } from "react-router-dom";
import usePortraitRendering from "../hooks/usePortraitRendering";
import EducationContent from "../custom/EducationContent";

function EducationScreen() {
    const navigate = useNavigate();

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        if (!shouldRenderPortrait) {
            navigate("/", { replace: true });
        }
    });

    return (
        <ContentScreenWrapper title="Education">
            <EducationContent />
        </ContentScreenWrapper>
    );
}

export default EducationScreen;
