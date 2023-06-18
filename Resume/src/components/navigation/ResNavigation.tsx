import MainScreen from "../MainScreen";
import Education from "../custom/Education";
import EducationScreen from "../custom/EducationScreen";
import Experience from "../custom/Experience";
import ExperienceScreen from "../custom/ExperienceScreen";
import Skills from "../custom/Skills";
import SkillsScreen from "../custom/SkillsScreen";
import LeafStack from "./LeafStack";

export const ResNavigation = new LeafStack()
    .addNewScreen(
        null,
        "Andre Pham",
        MainScreen,
    )
    .addNewScreen(
        "Education",
        "Andre Pham | Education",
        EducationScreen,
    )
    .addNewScreen(
        "Experience",
        "Andre Pham | Experience",
        ExperienceScreen,
    )
    .addNewScreen(
        "Skills",
        "Andre Pham | Skills",
        SkillsScreen,
    );