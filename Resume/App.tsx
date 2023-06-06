import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { ResFont } from './src/components/styling/typography/ResFont';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './src/components/MainScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        [ResFont.poppinsMedium]: require('./assets/fonts/Poppins-Medium.ttf'),
        [ResFont.poppinsSemiBold]: require('./assets/fonts/Poppins-SemiBold.ttf'),
        [ResFont.poppinsBold]: require('./assets/fonts/Poppins-Bold.ttf'),
        [ResFont.poppinsMediumItalic]: require('./assets/fonts/Poppins-MediumItalic.ttf'),
        [ResFont.poppinsSemiBoldItalic]: require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
        [ResFont.poppinsBoldItalic]: require('./assets/fonts/Poppins-BoldItalic.ttf'),
        [ResFont.circularMedium]: require('./assets/fonts/CircularStd-Medium.otf'),
        [ResFont.circularBold]: require('./assets/fonts/CircularStd-Bold.otf'),
        [ResFont.circularBlack]: require('./assets/fonts/CircularStd-Black.otf'),
        [ResFont.circularMediumItalic]: require('./assets/fonts/CircularStd-MediumItalic.otf'),
        [ResFont.circularBoldItalic]: require('./assets/fonts/CircularStd-BoldItalic.otf'),
        [ResFont.circularBlackItalic]: require('./assets/fonts/CircularStd-BlackItalic.otf'),
        [ResFont.plexMonoMedium]: require('./assets/fonts/IBMPlexMono-Medium.ttf'),
        [ResFont.plexMonoSemiBold]: require('./assets/fonts/IBMPlexMono-SemiBold.ttf'),
        [ResFont.plexMonoBold]: require('./assets/fonts/IBMPlexMono-Bold.ttf'),
        [ResFont.plexMonoMediumItalic]: require('./assets/fonts/IBMPlexMono-MediumItalic.ttf'),
        [ResFont.plexMonoSemiBoldItalic]: require('./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf'),
        [ResFont.plexMonoBoldItalic]: require('./assets/fonts/IBMPlexMono-BoldItalic.ttf'),
        [ResFont.gilroyExtraBold]: require('./assets/fonts/Gilroy-ExtraBold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <PaperProvider theme={theme}>
            <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
                <MainScreen />
            </View>
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
}
