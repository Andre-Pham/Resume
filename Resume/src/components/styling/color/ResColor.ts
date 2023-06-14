import { assert } from "../../../language/assertions/Assert";
import { UnreachableCaseError } from "../../../language/errors/UnreachableCaseError";
import Environment from "../../../state/environment/Environment";
import { ColorScheme } from "../../../state/environment/types/ColorScheme";

class ResColor {

    private readonly lightMode: string;
    private readonly darkMode: string;

    constructor(lightMode: string, darkMode?: string) {
        const cssColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgba?\([^\)]+\)$|^hsla?\([^\)]+\)$|^[\w]+$/;
        // If no dark mode is provided, dark mode / light mode is equivalent
        let setDarkMode = darkMode || lightMode;
        assert(cssColorRegex.test(lightMode), `Invalid lightMode color string provided: '${lightMode}'`);
        assert(cssColorRegex.test(setDarkMode), `Invalid darkMode color string provided: '${setDarkMode}'`);
        this.lightMode = lightMode;
        this.darkMode = setDarkMode;
    }

    /**
     * Gets the color based on the user's active color scheme (light mode / dark mode)
     * 
     * @returns Validated color string
     */
    public getColor(): string {
        let colorScheme: ColorScheme = Environment.instance.getColorScheme();
        switch (colorScheme) {
            case ColorScheme.dark:
                return this.darkMode;
            case ColorScheme.light:
                return this.lightMode;
            default:
                throw new UnreachableCaseError(colorScheme);
        }
    }

    public getContrastColor(): string {
        const rgb = this.getColor().match(/\d+/g);
        const [r, g, b] = rgb.map(Number);
        const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const contrastRatioWithWhite = (l + 0.05) / (1 + 0.05);
        const contrastRatioWithBlack = (l + 0.05) / (0 + 0.05);
        if (contrastRatioWithWhite > contrastRatioWithBlack) {
            return "#000000";
        } else {
            return "#ffffff"
        }
    }

    public getRippleColor(): string {
        let hexColor = this.getContrastColor();
        const hexDigits = hexColor.slice(1);
        const rgb = hexDigits.match(/.{1,2}/g).map((hex) => parseInt(hex, 16));
        const [r, g, b] = rgb.map((value) => value / 255);
        const opacity = 0.2; 
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

}

export default ResColor;