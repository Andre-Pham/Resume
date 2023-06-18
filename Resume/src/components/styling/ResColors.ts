import ResColor from "./color/ResColor";

/**
 * Predefined colors to be used application-wide.
 * Colors are defined with a light-mode and an optional dark-mode variant.
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 */
class ResColors {

    static get accent(): ResColor {
        return new ResColor("#1769ff");
    }

    static get background(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#ffffff");
    }

    static get textDark(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#3f4169");
    }

    static get textSemiDark(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#a6a8c5");
    }

    static get textLight(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#f8f9fa");
    }

    static get fillBackgroundLight(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#f2f3f9");
    }

    static get behance(): ResColor {
        return new ResColor("#1769ff");
    }

    static get gitHub(): ResColor {
        return new ResColor("#24292f");
    }

    static get linkedIn(): ResColor {
        return new ResColor("#2d64bc");
    }

}

export default ResColors;