import { NavigateFunction } from "react-router-dom";

export class RouterService {
    public static readonly inst = new RouterService();

    public static readonly HOME_PATH = "/";
    public static readonly EXPERIENCE_PATH = "/experience";
    public static readonly CAREER_PATH = "/career";
    public static readonly EDUCATION_PATH = "/education";
    public static readonly titles: Record<string, string | undefined> = {
        [RouterService.HOME_PATH]: "Andre Pham",
        [RouterService.EXPERIENCE_PATH]: "Andre Pham | Experience",
        [RouterService.CAREER_PATH]: "Andre Pham | Career",
        [RouterService.EDUCATION_PATH]: "Andre Pham | Education",
    };

    private constructor() {}

    public navigateHome(navigate: NavigateFunction): void {
        navigate(RouterService.HOME_PATH, { replace: true });
    }

    public navigateExperience(navigate: NavigateFunction): void {
        navigate(RouterService.EXPERIENCE_PATH, { replace: true });
    }

    public navigateCareer(navigate: NavigateFunction): void {
        navigate(RouterService.CAREER_PATH, { replace: true });
    }

    public navigateEducation(navigate: NavigateFunction): void {
        navigate(RouterService.EDUCATION_PATH, { replace: true });
    }
}
