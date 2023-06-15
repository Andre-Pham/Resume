import { View } from 'react-native';
import VStack from "./containers/VStack";
import { ExperiencePeriods } from '../data/experience/ExperiencePeriods';
import ExperienceSection from './custom/ExperienceSection';
import ResDimensions from './styling/ResDimensions';
import { useState } from 'react';
import { ActiveSection } from '../state/publishers/types/ActiveSection';
import StateManager from '../state/publishers/StateManager';
import { UnreachableCaseError } from '../language/errors/UnreachableCaseError';
import Header from './custom/Header';
import Splash from './custom/Splash';

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

    return (
        <View style={{ padding: ResDimensions.screenPadding }}>
            <VStack spacing={ResDimensions.mainScreenSpacing} style={{ alignContent: 'center' }}>
                <Header />

                <Splash />
            </VStack>

            <VStack spacing={ResDimensions.pageContentSpacing} style={{ alignContent: 'center', paddingTop: ResDimensions.mainScreenSpacing }}>
                {renderPageContent()}
            </VStack>
        </View>
    );
}

export default MainScreen;