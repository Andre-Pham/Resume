import { assert } from "../../../language/assertions/Assert";
import { UnreachableCaseError } from "../../../language/errors/UnreachableCaseError";
import { StateManager } from "../../../state/publishers/StateManager";
import { ColorScheme } from "../../../state/publishers/types/ColorScheme";

interface Params {
    /**
     * Hex string color to be used in light mode.
     */
    lightMode: string;

    /**
     * Hex string color to be used in dark mode.
     * If undefined, dark mode uses same color as light mode.
     */
    darkMode?: string;
}

export class ResColor {
    /**
     * White color.
     */
    public static get white(): ResColor {
        return new ResColor({ lightMode: "#ffffff" });
    }

    /**
     * Black color.
     */
    public static get black(): ResColor {
        return new ResColor({ lightMode: "#000000" });
    }

    /**
     * Hex string color to be used in light mode.
     */
    private readonly lightMode: string;

    /**
     * Hex string color to be used in dark mode.
     */
    private readonly darkMode: string;

    constructor({ lightMode, darkMode }: Params) {
        const hexRegex = /^#[0-9a-fA-F]+$/;
        // If no dark mode is provided, dark mode / light mode is equivalent
        const setDarkMode = darkMode ?? lightMode;
        assert(hexRegex.test(lightMode), `Invalid lightMode hex color string provided: '${lightMode}'`);
        assert(hexRegex.test(setDarkMode), `Invalid darkMode hex color string provided: '${setDarkMode}'`);
        this.lightMode = lightMode;
        this.darkMode = setDarkMode;
    }

    /**
     * Gets the color (hex string) based on the user's active color scheme (light mode / dark mode).
     *
     * @returns Hex color string
     */
    public getColor(): string {
        const colorScheme = StateManager.colorScheme.read();
        switch (colorScheme) {
            case ColorScheme.dark:
                return this.darkMode;
            case ColorScheme.light:
                return this.lightMode;
            default:
                throw new UnreachableCaseError(colorScheme);
        }
    }

    /**
     * Gets white/black, whichever is more contrasted against this color.
     *
     * @returns Black or white hex string (whichever is more contrasted)
     */
    public getContrastColor(): string {
        let hex = this.getColor();
        hex = hex.slice(1); // Remove "#"
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        assert(hex.length === 6, "Invalid hex color found");
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
}
