import React, { useEffect } from "react";
import ContentContainer from "./ContentContainer";
import Education from "./Education";
import { PatientsNavigationProp } from "../navigation/ResNavigationProps";
import StateManager from "../../state/publishers/StateManager";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { Dimensions } from "react-native";
import Environment from "../../state/environment/Environment";

interface Props {
    navigation?: PatientsNavigationProp;
}

const EducationScreen: React.FC<Props> = ({ 
    navigation,
}) => {
    let forceExit = false;

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            // When the screen is about to lose focus
            navigation = null;
            if (!forceExit) {
                StateManager.activeSection.publish(ActiveSection.none);
            }
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        const onResize = (newDimensions) => {
            if (Environment.instance.getScreenWidth() > 950) {
                forceExit = true;
                navigation?.goBack();
                navigation = null;
            }
        }

        const subscription = Dimensions.addEventListener('change', onResize);

        // When this component is hidden, don't listen for resizes anymore
        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <ContentContainer>
            <Education />
        </ContentContainer>
    );
};

export default EducationScreen;
