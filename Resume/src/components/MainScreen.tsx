import { Dimensions, View } from 'react-native';
import VStack from "./containers/VStack";
import HStack from './containers/HStack';
import { ExperiencePeriods } from '../data/experience/ExperiencePeriods';
import ExperienceSection from './custom/ExperienceSection';
import ResDimensions from './styling/ResDimensions';
import { useEffect, useState } from 'react';
import { ActiveSection } from '../state/publishers/types/ActiveSection';
import StateManager from '../state/publishers/StateManager';
import { UnreachableCaseError } from '../language/errors/UnreachableCaseError';
import Header from './custom/Header';
import Splash from './custom/Splash';
import Environment from '../state/environment/Environment';
import { ResScreenOrientation } from '../state/environment/types/ResScreenOrientation';
import SplashButton from './custom/SplashButton';

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
                            <SplashButton 
                                label="experience"
                                section={ActiveSection.experience}
                            />

                            <SplashButton 
                                label="skills"
                                section={ActiveSection.skills}
                            />

                            <SplashButton 
                                label="education"
                                section={ActiveSection.education}
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
                                <SplashButton 
                                    label="experience"
                                    section={ActiveSection.experience}
                                />

                                <SplashButton 
                                    label="skills"
                                    section={ActiveSection.skills}
                                />
                            </VStack>

                            <SplashButton 
                                label="education"
                                section={ActiveSection.education}
                            />
                        </HStack>   
                    </HStack>

                    {renderPageContent()}
                </VStack>
            </View>
        );
    }
}

export default MainScreen;