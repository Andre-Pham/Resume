import { StackNavigationProp } from "@react-navigation/stack";

type PatientsStackParamList = {
    // These show up as the tab label
    "Andre Pham": undefined; 
    "Andre Pham | Education": undefined;
    "Andre Pham | Experience": undefined;
    "Andre Pham | Skills": undefined;
}

export type PatientsNavigationProp = StackNavigationProp<PatientsStackParamList, "Andre Pham">