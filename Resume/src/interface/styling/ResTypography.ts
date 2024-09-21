import { ResColors } from "./ResColors";
import { ResFontFamily } from "./typography/ResFontFamily";
import { ResFontWeight } from "./typography/ResFontWeight";
import { ResTypographyConfig } from "./typography/ResTypographyConfig";

/**
 * Predefined typography to be used application-wide.
 */
export class ResTypography {
    static get pageTitle(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 32,
            fontFamily: ResFontFamily.gilroy,
            color: ResColors.textDark,
            weight: ResFontWeight.black,
            kerning: 0.2,
        });
    }

    static get splash(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 34,
            fontFamily: ResFontFamily.circular,
            color: ResColors.textDark,
            weight: ResFontWeight.bold,
        });
    }

    static get standoutBody(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 16,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textDark,
        });
    }

    static get body(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textDark,
        });
    }

    static get subscript(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textSemiDark,
            weight: ResFontWeight.regular,
        });
    }

    static get subscriptLabel(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 11.5,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textSemiDark,
            weight: ResFontWeight.regular,
        });
    }

    static get chip(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 11.5,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textLightPersistent,
            weight: ResFontWeight.regular,
        });
    }

    static get button(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 15,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textLight,
        });
    }

    static get buttonCompact(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColors.textLight,
            weight: ResFontWeight.regular,
        });
    }

    static get sectionTitle(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 26,
            fontFamily: ResFontFamily.gilroy,
            color: ResColors.textDark,
            weight: ResFontWeight.black,
            kerning: 1.0,
        });
    }

    static get header(): ResTypographyConfig {
        return new ResTypographyConfig({
            size: 31,
            fontFamily: ResFontFamily.circular,
            color: ResColors.textDark,
            weight: ResFontWeight.bold,
        });
    }
}
