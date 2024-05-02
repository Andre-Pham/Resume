import { useEffect } from "react";
import ContentScreenWrapper from "../custom/ContentScreenWrapper";
import ExperienceContent from "../custom/ExperienceContent";
import ResDimensions from "../styling/ResDimensions";
import { useNavigate } from "react-router-dom";

function ExperienceScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const shouldRenderPortrait = window.innerWidth <= ResDimensions.screenWidthToRenderPortrait;
            if (!shouldRenderPortrait) {
                navigate("/");
            }
        };
        // When the window is resized, re-update
        window.addEventListener("resize", handleResize);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ContentScreenWrapper title="Experience">
            <ExperienceContent />
        </ContentScreenWrapper>
    );
}

export default ExperienceScreen;
