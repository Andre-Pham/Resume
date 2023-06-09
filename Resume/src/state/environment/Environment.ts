import { Appearance, Dimensions, Platform, PlatformIOSStatic } from "react-native";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";
import { ColorScheme } from "../types/ColorScheme";
import { OS } from "../types/OS";
import { ResScreenOrientation } from "../types/ResScreenOrientation";
import { ScreenType } from "../types/ScreenType";

class Environment {

    public static readonly instance = new Environment()

    private constructor() { }

    public getDeviceColorScheme(): ColorScheme {
        // TODO: I can't get this to change correctly
        const colorScheme = Appearance.getColorScheme();
        switch (colorScheme) {
            case 'dark':
                return ColorScheme.dark;
            case 'light':
                return ColorScheme.light;
            default:
                return ColorScheme.light;
        }
    }

    public getOS(): OS {
        switch (Platform.OS) {
            case 'android':
                return OS.android;
            case 'ios':
                return OS.ios;
            case 'windows':
                return OS.windows;
            case 'macos':
                return OS.macos;
            case 'web':
                return OS.web;
            default:
                return OS.other;
        }
    }

    public getScreenType(): ScreenType {
        const os = this.getOS();
        switch (os) {
            case OS.ios:
                return (Platform as PlatformIOSStatic).isPad ? ScreenType.large : ScreenType.mobile;
            case OS.android:
                // TODO: Figure out how to detect Android tablets
                return ScreenType.mobile;
            case OS.windows:
            case OS.macos:
                return ScreenType.large;
            case OS.web:
            case OS.other:
                const dimensions = this.getScreenDimensions();
                if (dimensions[1] > dimensions[0]) {
                    // Height > width, assume mobile
                    return ScreenType.mobile;
                }
                // Any landscape screen on a web client can be assumed to be on a large screen
                return ScreenType.large;
            default:
                throw new UnreachableCaseError(os);
        }
    }

    public getScreenOrientation(): ResScreenOrientation {
        const dimensions = this.getScreenDimensions();
        if (dimensions[0] > dimensions[1]){
            return ResScreenOrientation.Landscape;
        }
        return ResScreenOrientation.Potrait;
    }

    public getAspectRatio(): number {
        const dimensions = this.getScreenDimensions();
        return dimensions[0]/dimensions[1];
    }

    public screenIsPortrait(): boolean {
        return this.getScreenWidth() <= 950;
    }

    public getScreenWidth(): number {
        return Dimensions.get('window').width;
    }

    public getScreenHeight(): number {
        return Dimensions.get('window').height;
    }

    private getScreenDimensions(): [number, number] {
        return [
            Dimensions.get("window").width,
            Dimensions.get("window").height
        ]
    }

}

export default Environment;