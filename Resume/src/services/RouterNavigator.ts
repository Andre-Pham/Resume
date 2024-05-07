import { NavigateFunction } from "react-router-dom";

class RouterNavigator {
    public static readonly inst = new RouterNavigator();

    private static readonly HOME_TITLE = "Andre Pham";
    private static readonly EXPERIENCE_TITLE = "Andre Pham | Experience";
    private static readonly SKILLS_TITLE = "Andre Pham | Skills";
    private static readonly EDUCATION_TITLE = "Andre Pham | Education";
    public static readonly HOME_PATH = "/";
    public static readonly EXPERIENCE_PATH = "/experience";
    public static readonly SKILLS_PATH = "/skills";
    public static readonly EDUCATION_PATH = "/education";

    private constructor() {}

    public navigateHome(navigate: NavigateFunction) {
        navigate(RouterNavigator.HOME_PATH, { replace: true });
        document.title = RouterNavigator.HOME_TITLE;
    }

    public navigateExperience(navigate: NavigateFunction) {
        navigate(RouterNavigator.EXPERIENCE_PATH, { replace: true });
        document.title = RouterNavigator.EXPERIENCE_TITLE;
    }

    public navigateSkills(navigate: NavigateFunction) {
        navigate(RouterNavigator.SKILLS_PATH, { replace: true });
        document.title = RouterNavigator.SKILLS_TITLE;
    }

    public navigateEducation(navigate: NavigateFunction) {
        navigate(RouterNavigator.EDUCATION_PATH, { replace: true });
        document.title = RouterNavigator.EDUCATION_TITLE;
    }
}

export default RouterNavigator;
