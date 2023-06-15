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

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setScreenIsPortrait(Environment.instance.getScreenWidth() <= 950);
        });
    }, []);

    const [dimensions, setDimensions] = useState({ 
        width: StateManager.contentWidth.read(), 
        height: 0
    });
    let columnCount = screenIsPortrait ? 1 : 2;
    let spacing = 20;
    let gap = (columnCount - 1)*spacing;

    // For some reason onLayout doesn't work at smaller dimensions
    // Ideally we'd read the container component's dimensions, not the screen
    // This is a workaround
    // useEffect(() => {
    //     Dimensions.addEventListener('change', (newDimensions) => {
    //         setDimensions({
    //             width: 0, 
    //             height: 50,
    //         });
    //     });
    // }, []);

    StateManager.contentWidth.subscribe(() => {
        console.log("RECEIVED: " + StateManager.contentWidth.read());
        setDimensions({
            width: StateManager.contentWidth.read(), 
            height: 50,
        });
    });

    // const [width, setWidth] = useState(StateManager.contentWidth.read());

    const renderExperienceCards = () => {
        return period.experiences.map((experience) => (
            <ExperienceCard 
                key={experience.name} 
                experience={experience} 
                style={{ flex: null, width: (dimensions.width - gap) / columnCount }} 
            />
        ));
    };

    return (
        <VStack spacing={24} style={{ width: dimensions.width }}>
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