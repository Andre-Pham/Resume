import { ResColor } from "./color/ResColor";

/**
 * Predefined colors to be used application-wide.
 * 
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be 
 * read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 */
export class ResColorPresets {
    static get accent(): ResColor {
        return new ResColor({ lightMode: "#1769ff" });
    }

    static get textLightPersistent(): ResColor {
        return new ResColor({ lightMode: "#f8f9fa" });
    }

    static get background(): ResColor {
        return new ResColor({ lightMode: "#ffffff", darkMode: "#17171c" });
    }

    static get textDark(): ResColor {
        return new ResColor({ lightMode: "#3f4169", darkMode: "#e5e5f3" });
    }

    static get textSemiDark(): ResColor {
        return new ResColor({ lightMode: "#9193b0", darkMode: "#9191a2" });
    }

    static get textLight(): ResColor {
        return new ResColor({ lightMode: "#f8f9fa", darkMode: "#000000" });
    }

    static get fillBackgroundLight(): ResColor {
        return new ResColor({ lightMode: "#f2f3f9", darkMode: "#27272f" });
    }

    static get fillBackgroundDark(): ResColor {
        return new ResColor({ lightMode: "#3f4169", darkMode: "#e0e1e7" });
    }

    static get chipBackground(): ResColor {
        return new ResColor({ lightMode: "#3f4169", darkMode: "#454552" });
    }

    static get behance(): ResColor {
        return new ResColor({ lightMode: "#1769ff" });
    }

    static get gitHub(): ResColor {
        return new ResColor({ lightMode: "#24292f", darkMode: "#3f4169" });
    }

    static get linkedIn(): ResColor {
        return new ResColor({ lightMode: "#2d64bc" });
    }

    static get scrollBar(): ResColor {
        return new ResColor({ lightMode: "#bdc0d3", darkMode: "#616176" });
    }
}
