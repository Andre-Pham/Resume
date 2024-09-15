import { NavigateFunction } from "react-router-dom";

export class RouterService {
    public static readonly inst = new RouterService();

    public static readonly HOME_PATH = "/";
    public static readonly EXPERIENCE_PATH = "/experience";
    public static readonly SKILLS_PATH = "/skills";
    public static readonly EDUCATION_PATH = "/education";
    public static readonly TITLES: { [key: string]: string } = {
        [RouterService.HOME_PATH]: "Andre Pham",
        [RouterService.EXPERIENCE_PATH]: "Andre Pham | Experience",
        [RouterService.SKILLS_PATH]: "Andre Pham | Skills",
        [RouterService.EDUCATION_PATH]: "Andre Pham | Education",
    };

    private constructor() {}

    public navigateHome(navigate: NavigateFunction) {
        navigate(RouterService.HOME_PATH, { replace: true });
    }

    public navigateExperience(navigate: NavigateFunction) {
        navigate(RouterService.EXPERIENCE_PATH, { replace: true });
    }

    public navigateSkills(navigate: NavigateFunction) {
        navigate(RouterService.SKILLS_PATH, { replace: true });
    }

    public navigateEducation(navigate: NavigateFunction) {
        navigate(RouterService.EDUCATION_PATH, { replace: true });
    }
}
