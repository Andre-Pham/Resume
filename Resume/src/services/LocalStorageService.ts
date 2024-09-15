import { ColorScheme } from "../state/publishers/types/ColorScheme";

export class LocalStorageService {
    public static readonly inst = new LocalStorageService();

    private static readonly DARK_MODE_KEY = "darkmode";

    private constructor() {}

    public writeColorTheme(theme: ColorScheme): void {
        localStorage.setItem(LocalStorageService.DARK_MODE_KEY, theme === ColorScheme.dark ? "true" : "false");
    }

    public readColorTheme(): ColorScheme {
        const read = localStorage.getItem(LocalStorageService.DARK_MODE_KEY);
        if (read === null) {
            // Default to light
            return ColorScheme.light;
        }
        return read === "true" ? ColorScheme.dark : ColorScheme.light;
    }
}
