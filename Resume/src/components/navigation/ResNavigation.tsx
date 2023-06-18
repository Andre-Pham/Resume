import MainScreen from "../MainScreen";
import Education from "../custom/Education";
import Experience from "../custom/Experience";
import Skills from "../custom/Skills";
import LeafStack from "./LeafStack";

export const ResNavigation = new LeafStack(
    null, // No tab bar
    null, // No tab bar
    null, // No tab bar
)
.addNewScreen(
    null,
    "Andre Pham",
    MainScreen,
)
.addNewScreen(
    "Education",
    "Andre Pham | Education",
    Education,
)
.addNewScreen(
    "Experience",
    "Andre Pham | Experience",
    Experience,
)
.addNewScreen(
    "Skills",
    "Andre Pham | Skills",
    Skills,
);