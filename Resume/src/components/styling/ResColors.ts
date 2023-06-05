import ResColor from "./color/ResColor";

/**
 * Predefined colors to be used application-wide.
 * Colors are defined with a light-mode and an optional dark-mode variant.
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 */
class ResColors {

    static get textDark(): ResColor {
        // TODO: Update for dark mode
        return new ResColor("#3f4169");
    }

}

export default ResColors;