import { View } from 'react-native';
import FlatContainer from "./containers/FlatContainer";
import VStack from "./containers/VStack";
import ResText from "./base/ResText/ResText";
import ResTypography from "./styling/ResTypography";
import ResColors from "./styling/ResColors";
import ResHyperlink from './base/ResHyperlink/ResHyperlink';
import HStack from './containers/HStack';
import ResButton from './base/ResButton/ResButton';

const MainScreen: React.FC = () => {
    return (
        <View style={{ padding: 35 }}>
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

            <FlatContainer
                color={ResColors.fillBackgroundLight}
            >
                <VStack>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResText typography={ResTypography.body}>Hello World! My name is Andre.</ResText>
                    <ResHyperlink 
                        url='https://github.com/Andre-Pham/Resume'
                        typography={ResTypography.body}>Hello World! My name is Andre.
                    </ResHyperlink>
                </VStack>
            </FlatContainer>
        </View>
    );
}

export default MainScreen;