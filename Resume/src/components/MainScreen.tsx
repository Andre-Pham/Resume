import { View } from 'react-native';
import FlatContainer from "./containers/FlatContainer";
import VStack from "./containers/VStack";
import ResText from "./base/ResText/ResText";
import ResTypography from "./styling/ResTypography";
import ResColors from "./styling/ResColors";

const MainScreen: React.FC = () => {
    return (
        <View style={{ padding: 35 }}>
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
                </VStack>
            </FlatContainer>
        </View>
    );
}

export default MainScreen;