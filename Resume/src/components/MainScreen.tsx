import { ScrollView, View } from 'react-native';
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

const MainScreen: React.FC = () => {
    const [activeSection, setActiveSection] = useState(StateManager.activeSection.read());

    StateManager.activeSection.subscribe(() => {
        setActiveSection(StateManager.activeSection.read());
    });

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
                return ExperiencePeriods().map((period) => (
                    <ExperienceSection period={period} key={period.label} />
                ));
            case ActiveSection.skills:
                return <Skills />
            case ActiveSection.education:
                return <Education />
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

            <VStack spacing={ResDimensions.pageContentSpacing} style={{ alignContent: 'center', paddingTop: ResDimensions.mainScreenSpacing }}>
                {renderPageContent()}
            </VStack>
        </View>
    );
}

export default MainScreen;