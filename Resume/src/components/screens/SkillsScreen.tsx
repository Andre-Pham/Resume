import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import Environment from "../../state/environment/Environment";
import StateManager from "../../state/publishers/StateManager";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import ContentContainer from "../custom/ContentContainer";
import Skills from "../custom/Skills";
import { NavProp } from "../navigation/NavProp";

interface Props {
    navigation?: NavProp;
}

const SkillsScreen: React.FC<Props> = ({ 
    navigation
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
            if (!Environment.instance.screenIsPortrait()) {
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
            <Skills />
        </ContentContainer>
    );
};

export default SkillsScreen;
