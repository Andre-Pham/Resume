import { Dimensions, View } from 'react-native';
import ExperiencePeriod from '../../data/experience/ExperiencePeriod';
import YearHeader from './YearHeader';
import HStack from '../containers/HStack';
import ExperienceCard from './ExperienceCard';
import { useEffect, useState } from 'react';
import Environment from '../../state/environment/Environment';
import { ResScreenOrientation } from '../../state/environment/types/ResScreenOrientation';
import ResDimensions from '../styling/ResDimensions';
import StateManager from '../../state/publishers/StateManager';
import VStack from '../containers/VStack';

interface Props {
    period: ExperiencePeriod;
}

const ExperienceSection: React.FC<Props> = ({
    period,
}) => {
    const [screenIsPortrait, setScreenIsPortrait] = useState(Environment.instance.getScreenWidth() <= 950);
    const [componentWidth, setComponentWidth] = useState(StateManager.contentWidth.read());

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setScreenIsPortrait(Environment.instance.getScreenWidth() <= 950);
        });
    }, []);

    StateManager.contentWidth.subscribe(() => {
        setComponentWidth(StateManager.contentWidth.read());
    });

    let columnCount = screenIsPortrait ? 1 : 2;
    let spacing = 20;
    let gap = (columnCount - 1)*spacing;

    const renderExperienceCards = () => {
        return period.experiences.map((experience) => (
            <ExperienceCard 
                key={experience.name} 
                experience={experience} 
                style={{ flex: null, width: (componentWidth - gap) / columnCount }} 
            />
        ));
    };

    return (
        <VStack spacing={24} style={{ width: componentWidth }}>
            <YearHeader>
                {period.label}
            </YearHeader>

            <HStack spacing={spacing}>
                {renderExperienceCards()}
            </HStack>
        </VStack>
    );
}

export default ExperienceSection;