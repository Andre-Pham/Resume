/**
 * Predefined CSS to be used application-wide.
 */
class ResCSS {
    static get diableSelection(): React.CSSProperties {
        return {
            // Non-prefixed version, currently supported by Chrome, Opera and Edge
            userSelect: "none",
            // Safari
            WebkitUserSelect: "none",
            // Firefox
            MozUserSelect: "none",
            // Internet Explorer/Edge
            msUserSelect: "none",
        };
    }
}

export default ResCSS;