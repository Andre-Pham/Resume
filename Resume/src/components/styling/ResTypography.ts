import ResColors from "./ResColors";
import { ResFontFamily } from "./typography/ResFontFamily";
import { ResFontWeight } from "./typography/ResFontWeight";
import ResTypographyConfig from "./typography/ResTypographyConfig";

class ResTypography {

    static get body(): ResTypographyConfig {
        return new ResTypographyConfig(
            15,
            ResFontFamily.plexMono,
            ResColors.textDark,
        );
    }

    static get subscript(): ResTypographyConfig {
        return new ResTypographyConfig(
            13,
            ResFontFamily.plexMono,
            ResColors.textSemiDark,
        );
    }

    static get chip(): ResTypographyConfig {
        return new ResTypographyConfig(
            12,
            ResFontFamily.plexMono,
            ResColors.textLight,
        );
    }

    static get title(): ResTypographyConfig {
        return new ResTypographyConfig(
            45,
            ResFontFamily.gilroy,
            ResColors.textDark,
            ResFontWeight.black,
        );
    }

    static get header(): ResTypographyConfig {
        return new ResTypographyConfig(
            30,
            ResFontFamily.circular,
            ResColors.textDark,
            ResFontWeight.black,
            false,
            false,
            false,
            -0.5,
        );
    }

}

export default ResTypography;