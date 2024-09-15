import { ColorScheme } from "../state/publishers/types/ColorScheme";

export class LocalStorageService {
    public static readonly inst = new LocalStorageService();

    private static readonly DARKMODE_KEY = "darkmode";

    private constructor() {}

    public writeColorTheme(theme: ColorScheme) {
        localStorage.setItem(LocalStorageService.DARKMODE_KEY, theme == ColorScheme.dark ? "true" : "false");
    }

    public readColorTheme(): ColorScheme {
        const read = localStorage.getItem(LocalStorageService.DARKMODE_KEY);
        if (read === null) {
            // Default to light
            return ColorScheme.light;
        }
        return read === "true" ? ColorScheme.dark : ColorScheme.light;
    }
}
