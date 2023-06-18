import { Dimensions, ScrollView, View } from 'react-native';
import VStack from "./containers/VStack";
import { ExperiencePeriods } from '../data/experience/ExperiencePeriods';
import ExperienceSection from './custom/ExperienceSection';
import ResDimensions from './styling/ResDimensions';
import { useEffect, useRef, useState } from 'react';
import { ActiveSection } from '../state/publishers/types/ActiveSection';
import StateManager from '../state/publishers/StateManager';
import { UnreachableCaseError } from '../language/errors/UnreachableCaseError';
import Header from './custom/Header';
import Splash from './custom/Splash';
import Education from './custom/Education';
import Skills from './custom/Skills';
import { NavProp } from './navigation/NavProp';
import Experience from './custom/Experience';
import Environment from '../state/environment/Environment';

interface Props {
    navigation?: NavProp;
}

const MainScreen: React.FC<Props> = ({ navigation }) => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            if (Environment.instance.screenIsPortrait()) {
                navigateToSection();
            }
        });
    }, []);

    useEffect(() => {
        // useEffect here ensures this is only triggered once for this component
        // Otherwise, this component subscribes with every refresh / interaction
        StateManager.activeSection.subscribe(() => {
            setActiveSection(StateManager.activeSection.read());
            if (Environment.instance.screenIsPortrait()) {
                navigateToSection();
            }
        });
    }, []);

    const navigateToSection = () => {
        let activeSection = StateManager.activeSection.read()
        switch (activeSection) {
            case ActiveSection.none:
                break;
            case ActiveSection.education:
                navigation.navigate("Andre Pham | Education");
                break;
            case ActiveSection.experience:
                navigation.navigate("Andre Pham | Experience");
                break;
            case ActiveSection.skills:
                navigation.navigate("Andre Pham | Skills");
                break;
            default:
                throw new UnreachableCaseError(activeSection);
        }
    }

    useEffect(() => {
        scrollIntoContent();
    }, [activeSection]);

    // Disable automatic scrolling on page refresh
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);    

    const renderPageContent = () => {
        switch (activeSection) {
            case ActiveSection.none:
                return <></>
            case ActiveSection.experience:
                return <Experience />
            case ActiveSection.skills:
                return <Skills />
            case ActiveSection.education:
                return <Education style={{ paddingBottom: 450 }} />
            default:
                throw new UnreachableCaseError(activeSection);
        }
    };

    const scrollRef = useRef(null);
    const scrollIntoContent = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <View style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={ResDimensions.mainScreenSpacing} style={{ alignContent: 'center' }}>
                <Header />

                <Splash />
            </VStack>

            {/* We don't want to see the edge of the view above, so position this a little lower */}
            <View ref={scrollRef} style={{ marginTop: 24, marginBottom: -24 }} />

            <VStack 
                spacing={ResDimensions.pageContentSpacing} 
                style={{ 
                    alignContent: 'center', 
                    paddingTop: activeSection == ActiveSection.none ? 0 : ResDimensions.mainScreenSpacing,
                }}
            >
                {renderPageContent()}
            </VStack>
        </View>
    );
}

export default MainScreen;