import { Animated, StyleSheet, View } from 'react-native';
import FlatContainer from "./containers/FlatContainer";
import VStack from "./containers/VStack";
import ResText from "./base/ResText/ResText";
import ResTypography from "./styling/ResTypography";
import ResColors from "./styling/ResColors";
import ResHyperlink from './base/ResHyperlink/ResHyperlink';
import HStack from './containers/HStack';
import ResButton from './base/ResButton/ResButton';
import YearHeader from './custom/YearHeader';
import ExperienceCard from './custom/ExperienceCard';
import { Experiences } from '../data/experience/Experiences';
import { ExperiencePeriods } from '../data/experience/ExperiencePeriods';
import ExperienceSection from './custom/ExperienceSection';
import ResDimensions from './styling/ResDimensions';
import ResImage from './base/ResImage/ResImage';
import { ResImageScale } from './base/ResImage/ResImageScale';
import AboutHeader from './custom/AboutHeader';
import { useEffect, useRef, useState } from 'react';
import { ActiveSection } from '../state/publishers/types/ActiveSection';
import StateManager from '../state/publishers/StateManager';
import { UnreachableCaseError } from '../language/errors/UnreachableCaseError';

const MainScreen: React.FC = () => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    StateManager.activeSection.subscribe(() => {
        setActiveSection(StateManager.activeSection.read());
    });

    const renderPageContent = () => {
        switch (activeSection) {
            case ActiveSection.none:
                return <></>
            case ActiveSection.experience:
                return ExperiencePeriods().map((period) => (
                    <ExperienceSection period={period} key={period.label} />
                ));
            case ActiveSection.skills:
                return <></>
            case ActiveSection.education:
                return <></>
            default:
                throw new UnreachableCaseError(activeSection);
        }
    };

    let selectedTypography = ResTypography.standoutBody;
    selectedTypography.resColor = ResColors.textLight;

    return (
        <View style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={20}>
                <AboutHeader />

                <HStack spacing={25}>
                    <ResButton 
                        label="experience"
                        typography={activeSection == ActiveSection.experience ? selectedTypography : ResTypography.body}
                        color={
                            activeSection == ActiveSection.experience ?
                            ResColors.behance :
                            ResColors.fillBackgroundLight
                        }
                        onPress={() => {
                            let toPublish = (
                                activeSection == ActiveSection.experience ?
                                ActiveSection.none : 
                                ActiveSection.experience
                            );
                            StateManager.activeSection.publish(toPublish);
                        }}
                        wide={false}
                        style={[
                            { width: 180 },
                            activeSection == ActiveSection.experience ? styles.shadow : {}
                        ]}
                    />

                    <ResButton 
                        label="skills"
                        typography={activeSection == ActiveSection.skills ? selectedTypography : ResTypography.body}
                        color={
                            activeSection == ActiveSection.skills ?
                            ResColors.behance :
                            ResColors.fillBackgroundLight
                        }
                        onPress={() => {
                            let toPublish = (
                                activeSection == ActiveSection.skills ?
                                ActiveSection.none : 
                                ActiveSection.skills
                            );
                            StateManager.activeSection.publish(toPublish);
                        }}
                        wide={false}
                        style={[
                            { width: 180 },
                            activeSection == ActiveSection.skills ? styles.shadow : {}
                        ]}
                    />

                    <ResButton 
                        label="education"
                        typography={activeSection == ActiveSection.education ? selectedTypography : ResTypography.body}
                        color={
                            activeSection == ActiveSection.education ?
                            ResColors.behance :
                            ResColors.fillBackgroundLight
                        }
                        onPress={() => {
                            let toPublish = (
                                activeSection == ActiveSection.education ?
                                ActiveSection.none : 
                                ActiveSection.education
                            );
                            StateManager.activeSection.publish(toPublish);
                        }}
                        wide={false}
                        style={[
                            { width: 180 },
                            activeSection == ActiveSection.education ? styles.shadow : {}
                        ]}
                    />
                </HStack>

                {renderPageContent()}
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        // Shadows appear sligntly differnt on web
        shadowOpacity: 0.4,
        shadowRadius: 11,
    }
});

export default MainScreen;