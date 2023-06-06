import { Dimensions, View } from 'react-native';
import ExperiencePeriod from '../../data/experience/ExperiencePeriod';
import YearHeader from './YearHeader';
import HStack from '../containers/HStack';
import ExperienceCard from './ExperienceCard';
import { useEffect, useState } from 'react';
import Environment from '../../state/environment/Environment';
import { ResScreenOrientation } from '../../state/environment/types/ResScreenOrientation';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    period: ExperiencePeriod;
}

const ExperienceSection: React.FC<Props> = ({
    period,
}) => {
    const [dimensions, setDimensions] = useState({ 
        width: Environment.instance.getScreenWidth(), 
        height: Environment.instance.getScreenHeight()
    });
    let columnCount = Environment.instance.getScreenOrientation() == ResScreenOrientation.Landscape ? 2 : 1;
    let spacing = 20;
    let gap = (columnCount - 1)*spacing;

    // For some reason onLayout doesn't work at smaller dimensions
    // Ideally we'd read the container component's dimensions, not the screen
    // This is a workaround
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setDimensions({
                width: newDimensions.window.width - ResDimensions.screenPadding*2, 
                height: newDimensions.window.height - ResDimensions.screenPadding*2
            });
        });
    }, []);

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
        <>
            <YearHeader>
                {period.label}
            </YearHeader>

            <HStack spacing={spacing}>
                {renderExperienceCards()}
            </HStack>
        </>
    );
}

export default ExperienceSection;