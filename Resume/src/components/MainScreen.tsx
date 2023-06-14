import { Animated, Dimensions, StyleSheet, View } from 'react-native';
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
import Header from './custom/Header';
import Splash from './custom/Splash';
import Environment from '../state/environment/Environment';
import { ResScreenOrientation } from '../state/environment/types/ResScreenOrientation';

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

    let buttonSize = 116
    let verticalButtonSpacing = 32
    let horizontalButtonSpacing = Math.sqrt(Math.pow(verticalButtonSpacing, 2) - Math.pow(verticalButtonSpacing/2, 2))

    const [screenIsPortrait, setScreenIsPortrait] = useState(Environment.instance.getScreenOrientation() == ResScreenOrientation.Potrait);
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            console.log(Environment.instance.getScreenWidth());
            setScreenIsPortrait(Environment.instance.getScreenWidth() <= 950);
        });
    }, []);

    if (screenIsPortrait) {
        return (
            <View style={{ padding: ResDimensions.screenPadding }}>
                <VStack spacing={80} style={{ alignContent: 'center'}}>
                    <Header />

                    <Splash style={{ flex: 1 }} />

                        <HStack spacing={horizontalButtonSpacing} style={{ alignItems: 'center' }}>
                            <ResButton 
                                label="experience"
                                typography={activeSection == ActiveSection.experience ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.experience ? styles.shadow : {}
                                ]}
                            />

                            <ResButton 
                                label="skills"
                                typography={activeSection == ActiveSection.skills ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.skills ? styles.shadow : {}
                                ]}
                            />

                            <ResButton 
                                    label="education"
                                typography={activeSection == ActiveSection.education ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.education ? styles.shadow : {}
                                ]}
                            />
                        </HStack> 

                    {renderPageContent()}
                </VStack>
            </View>
        );
    } else {
        return (
            <View style={{ padding: ResDimensions.screenPadding }}>
                <VStack spacing={80} style={{ alignContent: 'center'}}>
                    <Header />

                    <HStack spacing={64} style={{ alignItems: 'flex-start' }}>
                        <Splash />

                        <HStack spacing={horizontalButtonSpacing} style={{ alignItems: 'center' }}>
                            <VStack spacing={verticalButtonSpacing}>
                                <ResButton 
                                    label="experience"
                                    typography={activeSection == ActiveSection.experience ? selectedTypography : ResTypography.standoutBody}
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
                                        { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                        activeSection == ActiveSection.experience ? styles.shadow : {}
                                    ]}
                                />

                                <ResButton 
                                    label="skills"
                                    typography={activeSection == ActiveSection.skills ? selectedTypography : ResTypography.standoutBody}
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
                                        { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                        activeSection == ActiveSection.skills ? styles.shadow : {}
                                    ]}
                                />
                            </VStack>

                            <ResButton 
                                    label="education"
                                typography={activeSection == ActiveSection.education ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.education ? styles.shadow : {}
                                ]}
                            />
                        </HStack>   
                    </HStack>

                    {renderPageContent()}
                </VStack>
            </View>
        );
    }

    return (
        <View style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={80}>
                <Header />

                <HStack spacing={64} style={{ alignItems: 'flex-start' }}>
                    {/* <Splash /> */}
                    <VStack>
                    <ResText 
                        typography={ResTypography.splash}
                        style={{
                            maxWidth: 550,
                        }}
                    >
                        I'm a mobile developer that specialises in native iOS development and React Native. My passions are code, art and design.
                    </ResText>
                    </VStack>

                    <HStack spacing={horizontalButtonSpacing} style={{ alignItems: 'center' }}>
                        <VStack spacing={verticalButtonSpacing}>
                            <ResButton 
                                label="experience"
                                typography={activeSection == ActiveSection.experience ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.experience ? styles.shadow : {}
                                ]}
                            />

                            <ResButton 
                                label="skills"
                                typography={activeSection == ActiveSection.skills ? selectedTypography : ResTypography.standoutBody}
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
                                    { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                    activeSection == ActiveSection.skills ? styles.shadow : {}
                                ]}
                            />
                        </VStack>

                        <ResButton 
                                label="education"
                            typography={activeSection == ActiveSection.education ? selectedTypography : ResTypography.standoutBody}
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
                                { width: buttonSize, height: buttonSize, borderRadius: 100 },
                                activeSection == ActiveSection.education ? styles.shadow : {}
                            ]}
                        />
                    </HStack>   
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