import { NavigateFunction } from "react-router-dom";

class RouterNavigator {
    public static readonly inst = new RouterNavigator();

    public static readonly HOME_PATH = "/";
    public static readonly EXPERIENCE_PATH = "/experience";
    public static readonly SKILLS_PATH = "/skills";
    public static readonly EDUCATION_PATH = "/education";
    public static readonly TITLES: { [key: string]: string } = {
        [RouterNavigator.HOME_PATH]: "Andre Pham",
        [RouterNavigator.EXPERIENCE_PATH]: "Andre Pham | Experience",
        [RouterNavigator.SKILLS_PATH]: "Andre Pham | Skills",
        [RouterNavigator.EDUCATION_PATH]: "Andre Pham | Education",
    };

    private constructor() {}

    public navigateHome(navigate: NavigateFunction) {
        navigate(RouterNavigator.HOME_PATH, { replace: true });
    }

    public navigateExperience(navigate: NavigateFunction) {
        navigate(RouterNavigator.EXPERIENCE_PATH, { replace: true });
    }

    public navigateSkills(navigate: NavigateFunction) {
        navigate(RouterNavigator.SKILLS_PATH, { replace: true });
    }

    public navigateEducation(navigate: NavigateFunction) {
        navigate(RouterNavigator.EDUCATION_PATH, { replace: true });
    }
}

export default RouterNavigator;
