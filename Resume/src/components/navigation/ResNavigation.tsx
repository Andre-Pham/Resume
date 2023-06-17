import MainScreen from "../MainScreen";
import Education from "../custom/Education";
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
);