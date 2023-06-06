import { View } from 'react-native';
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

const MainScreen: React.FC = () => {

    const renderExperienceCards = () => {
        return Experiences.map((experience) => (
            <ExperienceCard experience={experience} />
        ));
    };

    return (
        <View style={{ padding: 35 }}>
            <VStack spacing={20}>
                <HStack spacing={25}>
                    <ResButton 
                        label="about"
                        typography={ResTypography.body}
                        color={ResColors.fillBackgroundLight}
                        onPress={() => {console.log("Hello?")}}
                        wide={false}
                        style={{width: 180}}
                    />

                    <ResButton 
                        label="skills"
                        typography={ResTypography.body}
                        color={ResColors.fillBackgroundLight}
                        onPress={() => {console.log("Hello?")}}
                        wide={false}
                        style={{width: 180}}
                    />

                    <ResButton 
                        label="experience"
                        typography={ResTypography.body}
                        color={ResColors.fillBackgroundLight}
                        onPress={() => {console.log("Hello?")}}
                        wide={false}
                        style={{width: 180}}
                    />
                </HStack>

                <YearHeader>
                    2023
                </YearHeader>

                <HStack spacing={20}>
                    {renderExperienceCards()}
                </HStack>
            </VStack>
        </View>
    );
}

export default MainScreen;