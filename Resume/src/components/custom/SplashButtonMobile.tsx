import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import ResButton from '../base/ResButton/ResButton';
import StateManager from '../../state/publishers/StateManager';
import ResColors from '../styling/ResColors';
import { ActiveSection } from '../../state/publishers/types/ActiveSection';
import ResTypography from '../styling/ResTypography';

interface Props {
    label: string;
    section: ActiveSection;
    style?: ViewStyle;
}

const SplashButtonMobile: React.FC<Props> = ({ 
    label,
    section,
    style,
}) => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    StateManager.activeSection.subscribe(() => {
        setActiveSection(StateManager.activeSection.read());
    });

    let buttonSize = 200
    let selectedTypography = ResTypography.button;
    selectedTypography.resColor = ResColors.textLight;
    let unselectedTypography = ResTypography.button;
    unselectedTypography.resColor = ResColors.textDark;

    return (
        <ResButton 
            label={label}
            icon='chevron-right'
            typography={activeSection == section ? selectedTypography : unselectedTypography}
            color={
                activeSection == section ?
                ResColors.behance :
                ResColors.fillBackgroundLight
            }
            onPress={() => {
                let toPublish = (
                    activeSection == section ?
                    ActiveSection.none : 
                    section
                );
                StateManager.activeSection.publish(toPublish);
            }}
            wide={false}
            style={[
                { width: buttonSize, borderRadius: 100, justifyContent: 'flex-start', paddingLeft: 32 },
                activeSection == section ? styles.shadow : { },
                style,
            ]}
        />
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 11,
    }
});

export default SplashButtonMobile;